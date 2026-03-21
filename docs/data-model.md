# LearnAI — Data Model Reference

This document defines the canonical entity schemas used across all 4 apps. When building the backend, these become database tables / API response shapes.

## Entity Relationship

```
Organization (Org)
 ├── Teachers[]        (1 org has many teachers)
 ├── Classes[]         (1 org has many classes)
 │    ├── Teachers[]   (many-to-many: 1 class can have multiple teachers)
 │    └── Students[]   (1 class has many students)
 └── Curriculum[]      (1 org has many uploaded books — feeds RAG)
```

## Entities

### Organization
| Field | Type | Description |
|-------|------|-------------|
| id | string | Primary key (tenant ID for multi-tenancy) |
| name | string | e.g., "Delhi Public School" |
| board | string | e.g., "CBSE", "ICSE", "State Board" |
| logo | string | URL to school logo |
| color | string | Brand color hex |
| students | number | Total student count |
| teachers | number | Total teacher count |
| classes | number | Total class count |
| activeRate | number | % of students active this week |

### Teacher
| Field | Type | Description |
|-------|------|-------------|
| id | string | Primary key (e.g., "t1") |
| name | string | Full name |
| subject | string | Subject(s) taught |
| classes | string[] | Array of class names assigned (FK → Class.name) |
| students | number | Total students across assigned classes |
| classAvg | number | Average mastery % across classes |
| topTopic | string | Best-performing topic |
| weakTopic | string | Weakest topic |
| effectiveness | number | Teaching effectiveness score (%) |
| active | boolean | Whether teacher is currently active |

### Class
| Field | Type | Description |
|-------|------|-------------|
| id | string | Primary key (e.g., "6a", "ug1") |
| name | string | Display name (e.g., "Class 6-A", "UG Year 1") |
| grade | number | Numeric grade level (6-12 for school, 13-16 for UG, 17-18 for PG) |
| tier | string | UI tier — determines tone, gamification, and features (see Tier System below) |
| parentAppEnabled | boolean | Whether parent app is available for this class. Default: true for tiers 1-3, false for tier 4 |
| teachers | string[] | Array of teacher names assigned (many-to-many) |
| students | number | Total student count |
| mastery | number | Class-wide mastery % |
| active | number | Students active this week |

## Tier System (Age-Appropriate UI)

Classes are grouped into tiers. The tier drives UI tone, gamification level, persona options, and feature visibility. Same codebase, different experience — configuration-driven, not separate UIs.

| Tier | Grades | Label | Description |
|------|--------|-------|-------------|
| `tier1` | 1-5 | Primary | Full gamification, simple language, heavy visual explainers, parent app always on |
| `tier2` | 6-8 | Middle School | Gamified (XP, streaks, Spark buddy, class stories), Socratic + teach-back, parent app on |
| `tier3` | 9-12 | High School | Lighter gamification, exam-oriented (mock tests, past papers), parent app configurable |
| `tier4` | UG/PG | Higher Ed | Minimal gamification, self-directed, research/project-based, parent app off by default |

### What changes per tier

| Feature | Tier 1 (Primary) | Tier 2 (Middle) | Tier 3 (High School) | Tier 4 (Higher Ed) |
|---------|-------------------|------------------|----------------------|---------------------|
| **Tone** | Playful, encouraging | Gamified, social | Focused, exam-prep | Professional, self-directed |
| **Gamification** | Full (XP, streaks, confetti, badges) | Full (XP, streaks, Spark buddy, stories) | Light (progress bars, milestones) | Minimal or opt-in |
| **AI Personas** | "Like a cartoon", "Like I'm 5" | "Like cricket", "Like a story", "Like a game" | "Exam-focused", "Concept map", "Quick revision" | "Research-style", "Case study", "First principles" |
| **Parent App** | Always on | On by default | Configurable (toggle) | Off by default |
| **Journey** | Guided (Learn → Teach → Practice) | Guided with nudges | Self-directed with exam prep track | Fully self-paced, project milestones |
| **Content** | Short lessons, heavy visuals | Bite-sized + visual explainers | Longer content, past papers, mock tests | Lectures, papers, assignments |
| **Teacher Role** | Full monitoring, guided teaching | Push assignments, misconception radar | Exam prep guidance, doubt clearing | Professor mode — minimal hand-holding |

### Implementation approach
- `tier` is derived from `grade` on the backend: grades 1-5 → tier1, 6-8 → tier2, 9-12 → tier3, 13+ → tier4
- Frontend reads `class.tier` and adjusts: component visibility, text copy, gamification toggles, persona list
- `parentAppEnabled` is an admin toggle per class in OrgApp Assignments screen
- Tier 2 (current UI) is the baseline. Other tiers adapt from it — no separate codebases

### Student
| Field | Type | Description |
|-------|------|-------------|
| id | string | Primary key (to be added in backend) |
| name | string | Full name |
| classId | string | FK → Class.id |
| mastery | number | Overall mastery % |
| streak | number | Consecutive practice days |
| xp | number | Experience points earned |
| weak | string[] | Weak topic names |
| flag | string\|null | "declining", "struggling", or null |
| lastActive | string | Relative time since last activity |
| grade | string | Letter grade (A+, B, C, D, etc.) |
| group | string | "toppers", "average", or "foundation" |
| enrolled | boolean | Whether student has joined the platform |
| quizzes | number | Total quizzes completed |
| avgTime | string | Average time per question |
| hintRate | string | % of hints used |
| insight | string | AI-generated insight about the student |
| skills | Skill[] | Per-topic skill breakdown |
| timeline | Activity[] | Recent activity log |
| notes | string | Private teacher notes |

### Skill (nested in Student)
| Field | Type | Description |
|-------|------|-------------|
| topic | string | Topic name |
| score | number | Mastery score for this topic (0-100) |
| signal | string | "critical", "developing", "solid", "strong" |
| detail | string | AI-generated detail about performance |

### Curriculum (RAG Source)
| Field | Type | Description |
|-------|------|-------------|
| id | string | Primary key (to be added in backend) |
| name | string | Book/material name |
| type | string | "Textbook", "Reference", "Worksheet", "Notes" |
| status | string | "pending", "processing", "indexed", "failed" |
| pages | number | Page count |
| uploadedBy | string | "Admin" or teacher name |
| grade | number | Target grade level (to be added) |
| subject | string | Target subject (to be added) |

## Cross-App Data Flow

| Source App | Data | Consumed By |
|-----------|------|-------------|
| OrgApp | Teacher-class assignments | TutorApp (which classes teacher sees) |
| OrgApp | Curriculum uploads | StudentApp (RAG-powered AI responses) |
| TutorApp | Student progress, flags, skills | ParentApp (child monitoring) |
| TutorApp | Push assignments, quiz results | StudentApp (practice content) |
| StudentApp | Quiz scores, teach-back results | TutorApp (student analytics) |
| StudentApp | Activity log, streaks, XP | ParentApp (activity timeline) |

## Multi-Tenancy Model

- PostgreSQL with Row-Level Security (RLS)
- Every table has `org_id` column
- RLS policies ensure tenant data isolation
- Shared content (NCERT books, common quizzes) stored in a `shared` schema accessible by all tenants

## RAG Architecture

- Curriculum uploads (PDF, DOCX, EPUB) are processed and indexed
- AI Tutor responses are grounded in org's uploaded curriculum only
- Source attribution: responses include `source` field referencing specific book/chapter
- Teachers can upload supplementary materials that also feed into RAG
- Processing pipeline: Upload → Extract text → Chunk → Embed → Index (5-10 min)
