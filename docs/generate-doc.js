const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat,
  HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageNumber, PageBreak, TabStopType, TabStopPosition
} = require("docx");

// Colors
const BLUE = "1E40AF";
const PURPLE = "7C3AED";
const TEAL = "0D9488";
const GREEN = "10B981";
const ORANGE = "F59E0B";
const RED = "EF4444";
const GRAY = "64748B";
const LIGHT_BG = "F1F5F9";
const WHITE = "FFFFFF";

// Helpers
const border = { style: BorderStyle.SINGLE, size: 1, color: "D1D5DB" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorders = { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } };

const heading = (text, level = HeadingLevel.HEADING_1) =>
  new Paragraph({ heading: level, spacing: { before: level === HeadingLevel.HEADING_1 ? 360 : 240, after: 120 }, children: [new TextRun({ text, bold: true })] });

const para = (text, opts = {}) =>
  new Paragraph({ spacing: { after: 120 }, ...opts, children: [new TextRun({ text, size: 22, ...opts.run })] });

const bold = (text, opts = {}) =>
  new Paragraph({ spacing: { after: 80 }, ...opts, children: [new TextRun({ text, size: 22, bold: true, ...opts.run })] });

const bullet = (text, ref = "bullets", level = 0) =>
  new Paragraph({ numbering: { reference: ref, level }, spacing: { after: 60 }, children: [new TextRun({ text, size: 22 })] });

const numberedItem = (text, ref = "numbers", level = 0) =>
  new Paragraph({ numbering: { reference: ref, level }, spacing: { after: 60 }, children: [new TextRun({ text, size: 22 })] });

const spacer = () => new Paragraph({ spacing: { after: 80 }, children: [] });

const tableCell = (text, opts = {}) =>
  new TableCell({
    borders,
    width: opts.width ? { size: opts.width, type: WidthType.DXA } : undefined,
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    verticalAlign: "center",
    children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text, size: 20, bold: !!opts.bold, color: opts.color || "0F172A", font: "Arial" })] })]
  });

const tableHeaderCell = (text, width) =>
  tableCell(text, { width, shading: BLUE, bold: true, color: WHITE });

// Full-width table helper (9360 DXA = US Letter with 1" margins)
const TABLE_WIDTH = 9360;

const makeTable = (headers, rows, colWidths) => {
  const headerRow = new TableRow({
    children: headers.map((h, i) => tableHeaderCell(h, colWidths[i]))
  });
  const dataRows = rows.map(row =>
    new TableRow({
      children: row.map((cell, i) => tableCell(cell, { width: colWidths[i] }))
    })
  );
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [headerRow, ...dataRows]
  });
};

// ============================================================
// BUILD THE DOCUMENT
// ============================================================

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22, color: "0F172A" } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: BLUE },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: PURPLE },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "334155" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [
        { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        { level: 1, format: LevelFormat.BULLET, text: "\u25E6", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
      ]},
      { reference: "numbers", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        { level: 1, format: LevelFormat.DECIMAL, text: "%2.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
      ]},
      { reference: "numbers2", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
      ]},
      { reference: "numbers3", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
      ]},
      { reference: "numbers4", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
      ]},
      { reference: "numbers5", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
      ]},
    ]
  },
  sections: [
    // ========== COVER PAGE ==========
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      children: [
        spacer(), spacer(), spacer(), spacer(), spacer(), spacer(),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [
          new TextRun({ text: "LearnAI", size: 72, bold: true, color: BLUE, font: "Arial" })
        ]}),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
          new TextRun({ text: "Product & Technical Requirements Document", size: 32, color: GRAY, font: "Arial" })
        ]}),
        spacer(),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [
          new TextRun({ text: "AI-Powered Adaptive Learning Platform", size: 26, color: PURPLE, font: "Arial" })
        ]}),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [
          new TextRun({ text: "Grade 1 to PhD | B2B Multi-Tenant | White-Label Ready", size: 22, color: GRAY, font: "Arial" })
        ]}),
        spacer(), spacer(), spacer(), spacer(), spacer(), spacer(), spacer(), spacer(),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [
          new TextRun({ text: "Version 1.0 | March 2026", size: 22, color: GRAY })
        ]}),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [
          new TextRun({ text: "CONFIDENTIAL", size: 20, bold: true, color: RED })
        ]}),
      ]
    },

    // ========== TABLE OF CONTENTS ==========
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      headers: {
        default: new Header({ children: [new Paragraph({ children: [
          new TextRun({ text: "LearnAI \u2014 Product & Technical Requirements", size: 18, color: GRAY, font: "Arial" })
        ], tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }] })] })
      },
      footers: {
        default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
          new TextRun({ text: "Page ", size: 18, color: GRAY }),
          new TextRun({ children: [PageNumber.CURRENT], size: 18, color: GRAY })
        ] })] })
      },
      children: [
        heading("Table of Contents"),
        spacer(),
        para("1. Executive Summary"),
        para("2. Product Vision & Target Market"),
        para("3. Application Overview (4 Apps)"),
        para("4. Feature Catalog \u2014 Student App (47 screens)"),
        para("5. Feature Catalog \u2014 Tutor App"),
        para("6. Feature Catalog \u2014 Parent App"),
        para("7. Feature Catalog \u2014 Organization Admin App"),
        para("8. AI & ML Requirements"),
        para("9. Backend Architecture (GCP)"),
        para("10. Database Design & Multi-Tenancy"),
        para("11. Data Privacy & Compliance"),
        para("12. Shared Content Platform"),
        para("13. API Design"),
        para("14. Infrastructure & DevOps"),
        para("15. Phase-wise Rollout Plan"),
        para("16. Appendix: Data Models"),
      ]
    },

    // ========== MAIN CONTENT ==========
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      headers: {
        default: new Header({ children: [new Paragraph({ children: [
          new TextRun({ text: "LearnAI \u2014 Product & Technical Requirements", size: 18, color: GRAY, font: "Arial" })
        ] })] })
      },
      footers: {
        default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
          new TextRun({ text: "Page ", size: 18, color: GRAY }),
          new TextRun({ children: [PageNumber.CURRENT], size: 18, color: GRAY })
        ] })] })
      },
      children: [
        // ==========================================
        // 1. EXECUTIVE SUMMARY
        // ==========================================
        heading("1. Executive Summary"),
        para("LearnAI is an AI-powered adaptive learning platform designed as a Progressive Web App (PWA) serving four distinct user roles: Students, Tutors/Teachers, Parents, and Organization Administrators. The platform delivers personalized learning experiences from Grade 1 through PhD level, with white-label capabilities for schools, universities, coaching institutes, and educational organizations of all sizes."),
        spacer(),
        para("The frontend prototype (Next.js 15 + React 19 + TypeScript) is complete with 47 screens across 4 applications. This document outlines the product features, technical architecture, and backend requirements needed to bring LearnAI to production."),
        spacer(),
        bold("Key Differentiators:"),
        bullet("Socratic AI Tutor with 6 explanation personas (cricket, story, cooking, game, ELI5, textbook)"),
        bullet("3-step learning path: Learn \u2192 Teach-back \u2192 Practice with smart nudges"),
        bullet("Real-time misconception radar for teachers with auto-remediation"),
        bullet("AI-generated lesson plans and auto-differentiated homework"),
        bullet("Multi-tenant B2B architecture with white-label branding"),
        bullet("Exam predictor with what-if analysis for parents"),
        bullet("COPPA/GDPR compliant with tenant-level data isolation"),

        // ==========================================
        // 2. PRODUCT VISION & TARGET MARKET
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("2. Product Vision & Target Market"),

        heading("2.1 Vision", HeadingLevel.HEADING_2),
        para("To democratize quality education by providing every student an AI-powered personal tutor, every teacher a data-driven teaching assistant, every parent real-time visibility into their child\u2019s learning, and every institution the tools to scale personalized education."),

        heading("2.2 Target Segments", HeadingLevel.HEADING_2),
        makeTable(
          ["Segment", "Size", "Examples", "Key Need"],
          [
            ["K-12 Schools", "Small to large", "DPS, KV, DAV, ICSE schools", "Curriculum alignment, parent comms, teacher tools"],
            ["Coaching Institutes", "10-5000 students", "Allen, FIITJEE, local tutors", "Test prep, analytics, batch management"],
            ["Universities", "1000-50000 students", "IITs, State universities", "Course management, research, assessments"],
            ["Micro-tutors", "1-50 students", "Individual tutors, tuition teachers", "Student tracking, parent reports, scheduling"],
            ["Government Schools", "Varies", "State board, Kendriya Vidyalaya", "Affordable, multilingual, offline-capable"],
          ],
          [2000, 1500, 2860, 3000]
        ),

        heading("2.3 Grade Levels & Adaptations", HeadingLevel.HEADING_2),
        makeTable(
          ["Level", "Grades", "Adaptations"],
          [
            ["Primary", "1-5", "Visual-heavy, gamified, voice input, simple language, parent-guided"],
            ["Middle", "6-8", "Socratic tutor, teach-back, challenge mode, study buddy"],
            ["Secondary", "9-10", "Exam prep focus, board-specific content (CBSE/ICSE/State)"],
            ["Senior Secondary", "11-12", "JEE/NEET/CUET prep, advanced analytics, peer comparison"],
            ["Undergraduate", "Year 1-4", "Course-based, professor dashboard, research tools"],
            ["Postgraduate/PhD", "Masters+", "Research assistance, thesis tracking, publication prep"],
          ],
          [2000, 1500, 5860]
        ),

        // ==========================================
        // 3. APPLICATION OVERVIEW
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("3. Application Overview"),
        para("LearnAI consists of 4 role-based applications sharing a common design system, authentication layer, and real-time data pipeline. All apps run as a single PWA with role-based routing."),
        spacer(),

        makeTable(
          ["App", "Role", "Screens", "Primary Color", "Key Purpose"],
          [
            ["Student App", "Learner", "15", "#2563EB (Blue)", "Learn, practice, get AI tutoring"],
            ["Tutor App", "Teacher", "13", "#7C3AED (Purple)", "Teach, monitor, remediate"],
            ["Parent App", "Guardian", "7", "#0D9488 (Teal)", "Monitor, communicate, support"],
            ["Org Admin App", "Admin", "12", "#1E40AF (Blue)", "Manage, analyze, configure"],
          ],
          [1800, 1200, 1200, 2160, 3000]
        ),
        spacer(),
        para("Total screens across all apps: 47. Each app uses a consistent design system with shared primitives (Card, Pill, Button, ProgressBar, Ring, Avatar, Icon set with 50+ custom SVGs)."),

        // ==========================================
        // 4. STUDENT APP FEATURES
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("4. Feature Catalog \u2014 Student App"),
        para("The Student App is the core learning interface. It provides AI-powered tutoring, adaptive quizzes, gamification, and social learning features."),
        spacer(),

        heading("4.1 Screens Inventory", HeadingLevel.HEADING_2),
        makeTable(
          ["Screen", "Type", "Description"],
          [
            ["Home", "Dashboard", "Daily missions, subject cards, streaks, XP, ask bar, assignment cards, class mini-feed"],
            ["Journey", "Learning Path", "3-step learning path (Learn \u2192 Teach \u2192 Practice) per topic with progress tracking"],
            ["Tutor", "AI Learn", "Socratic tutor with 6 personas, visual explainers, real-world connections, audio narration"],
            ["Practice", "Quiz", "5-question per-topic practice with scoring and path suggestions"],
            ["Teach-Back", "Assessment", "Student explains topic to AI, gets green/orange/red feedback + XP"],
            ["Quiz", "Assessment", "Assignment quizzes with MCQ, T/F, drag-order, image questions"],
            ["Exam Prep", "Test Prep", "SA1/SA2 predictor, board exam preparation"],
            ["Feed (Stories)", "Social", "Class achievement feed \u2014 streaks, mastery, milestones, teacher announcements"],
            ["Photo Q", "Camera AI", "Take photo of homework question, OCR extraction, tutor solves it"],
            ["Booster", "Mini-lesson", "3-minute focused micro-lessons with learn-practice-quiz stages"],
            ["Revision", "Review", "Calendar view of overdue/due tasks"],
            ["Mistakes", "Review", "Previous wrong answers with explanations"],
            ["Challenge", "Gamification", "Weekly/class challenges, leaderboards, XP competitions"],
            ["Profile", "User Info", "XP, streak, badges, personal moments, stats"],
            ["Notifications", "Alerts", "Streak warnings, new assignments, badge unlocks"],
          ],
          [1800, 1500, 6060]
        ),

        heading("4.2 AI Persona Switcher (\u201CExplain it like...\u201D)", HeadingLevel.HEADING_2),
        para("Students can choose how the AI explains concepts. Six personas adapt the same content to different contexts:"),
        makeTable(
          ["Persona", "Style", "Example (Fractions)"],
          [
            ["Textbook", "Academic, standard", "To add 3/4 + 1/2, find the LCD which is 4..."],
            ["Like cricket", "Sports analogies", "You scored 3 runs in 4 balls. That\u2019s 3/4. Your friend scored 1 in 2..."],
            ["Like a story", "Narrative", "Once upon a time, a pizza was cut into 4 slices..."],
            ["Like a game", "Gaming context", "You completed 3 out of 4 levels \u2014 that\u2019s 3/4..."],
            ["Like cooking", "Kitchen context", "A recipe needs 3/4 cup flour and 1/2 cup sugar..."],
            ["Like I\u2019m 5", "Simple language", "You have 4 candies and ate 3. That\u2019s 3/4..."],
          ],
          [1800, 2500, 5060]
        ),
        spacer(),
        bold("Backend Requirements:"),
        bullet("AI content generation API that takes (topic, concept, persona) and returns explanation"),
        bullet("Content caching per (topic, persona) combination to reduce API costs"),
        bullet("Persona preference stored per student for personalization"),
        bullet("Analytics: track which personas lead to better learning outcomes"),

        heading("4.3 3-Step Learning Path", HeadingLevel.HEADING_2),
        para("Each topic on the Journey screen follows a structured path:"),
        spacer(),
        numberedItem("Learn \u2014 Socratic tutor session with step-by-step cards, visual explainers, and audio narration", "numbers"),
        numberedItem("Teach it back \u2014 Student writes explanation, AI evaluates for understanding, gaps, or misconceptions", "numbers"),
        numberedItem("Practice \u2014 5-question quiz with scoring, mastery update, and path suggestions", "numbers"),
        spacer(),
        bold("Smart Nudges (no hard locks):"),
        bullet("Teach before Learn: \u201CWant to learn this first?\u201D with \u201CSkip, I know this\u201D option"),
        bullet("Low practice score: \u201CTry the Learn path \u2014 it might help\u201D"),
        bullet("Full path completion: +50 bonus XP reward"),
        spacer(),
        bold("Backend Requirements:"),
        bullet("Topic progress state machine per student: {learn: not-started|in-progress|done, teach: ..., practice: count/10}"),
        bullet("Teach-back evaluation API using LLM (Gemini) for free-text assessment"),
        bullet("Practice question bank per topic with difficulty levels"),
        bullet("Mastery calculation: Learn (30%) + Teach (20%) + Practice (50%) weighted"),

        heading("4.4 Visual Explainers", HeadingLevel.HEADING_2),
        para("Interactive animated components embedded in tutor step cards:"),
        bullet("Fraction Bar \u2014 Animated common denominator conversion (3/4 + 1/2)"),
        bullet("Beaker/Convection \u2014 Colored particles rising/sinking with toggleable heat source"),
        bullet("Play/pause controls, audio narration (Web Speech API), interactive sliders"),
        spacer(),
        bold("Backend Requirements:"),
        bullet("Visual explainer metadata API (which topics have visuals, component types, props)"),
        bullet("Future: AI-generated visual explainers from topic descriptions"),
        bullet("CDN hosting for pre-rendered video versions of explainers"),

        heading("4.5 Study Buddy (Spark)", HeadingLevel.HEADING_2),
        para("Persistent AI companion that provides contextual encouragement and navigation:"),
        bullet("Floating button (bottom-right) with notification dot"),
        bullet("Slide-up panel with character avatar and contextual chat bubbles"),
        bullet("Messages adapt to student state: streak, weak topics, inactivity, general facts"),
        bullet("Quick-action buttons navigate to relevant screens"),
        spacer(),
        bold("Backend Requirements:"),
        bullet("Buddy message generation API based on student state snapshot"),
        bullet("Message priority ranking: urgent (streak breaking) > actionable > encouraging"),
        bullet("A/B testing framework for buddy message effectiveness"),

        heading("4.6 Class Stories (Social Feed)", HeadingLevel.HEADING_2),
        para("Social learning feed showing only positive moments \u2014 no grades, scores, or failures."),
        spacer(),
        bold("Feed Card Types:"),
        bullet("Achievement: \u201CPriya just mastered Convection!\u201D"),
        bullet("Streak: \u201CKaran is on a 7-day streak!\u201D"),
        bullet("Class milestone: \u201CClass 6-B average crossed 60%!\u201D"),
        bullet("Teacher announcement: messages from teachers"),
        bullet("Challenge result: weekly leaderboard (top 3 only)"),
        bullet("Helpful moment: \u201CAnswered 5 ask-bar questions today\u201D"),
        spacer(),
        bold("Backend Requirements:"),
        bullet("Event-driven feed generation from student activity events"),
        bullet("Feed filtering: class-level, school-level, with privacy controls"),
        bullet("Reaction system (simple \u201CNice!\u201D count, no comments)"),
        bullet("Content moderation for teacher announcements"),
        bullet("CRITICAL: Never expose individual scores, failures, or negative comparisons"),

        heading("4.7 Additional Student Features", HeadingLevel.HEADING_2),
        bold("Voice Input (Ask Bar):"),
        bullet("Microphone button with recording animation (pulse + waveform)"),
        bullet("Speech-to-text transcription \u2192 fills ask bar \u2192 triggers tutor"),
        bullet("Backend: Google Cloud Speech-to-Text API or browser Web Speech API"),
        spacer(),
        bold("Real World Connect:"),
        bullet("Collapsible \u201CWhy does this matter?\u201D card below each tutor step"),
        bullet("Topic-specific real-world examples and \u201CDid you know?\u201D facts"),
        bullet("Backend: Content API serving real-world connections per topic"),
        spacer(),
        bold("Contextual Celebrations:"),
        bullet("Personal achievement cards: \u201CYou solved a problem 80% of Class 7 gets wrong\u201D"),
        bullet("Backend: Analytics engine identifying noteworthy student moments"),
        spacer(),
        bold("Photo Homework (OCR):"),
        bullet("Camera capture \u2192 text extraction \u2192 AI tutoring"),
        bullet("Backend: Google Cloud Vision API for OCR, Gemini for problem solving"),

        // ==========================================
        // 5. TUTOR APP FEATURES
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("5. Feature Catalog \u2014 Tutor App"),
        para("The Tutor App empowers teachers with AI-assisted class management, real-time insights, and automated workflows."),
        spacer(),

        heading("5.1 AI Lesson Plan Generator", HeadingLevel.HEADING_2),
        para("One-tap class preparation with 5 AI-generated sections:"),
        spacer(),
        makeTable(
          ["Section", "Content", "Action"],
          [
            ["Warm-up Quiz", "3 quick questions to surface prior knowledge", "Push to class"],
            ["Watch Out For", "Common misconceptions from diagnostic data", "Review"],
            ["Visual Explainer", "Animated explainer preview for projection", "Open full screen / Share to students"],
            ["Mid-lesson Check", "Live poll question with 4 options", "Start poll now"],
            ["Homework", "Auto-differentiated by student level (Strong/Average/Foundation)", "Push homework"],
          ],
          [2000, 4360, 3000]
        ),
        spacer(),
        bold("Backend Requirements:"),
        bullet("Lesson plan generation API using Gemini: input(topic, class_data, diagnostic_results) \u2192 output(5 sections)"),
        bullet("Misconception aggregation from student diagnostic data"),
        bullet("Auto-differentiation engine: classify students into Strong/Average/Foundation, assign appropriate questions"),
        bullet("Lesson plan storage, versioning, and sharing between colleagues"),

        heading("5.2 Misconception Radar", HeadingLevel.HEADING_2),
        para("Dashboard card showing class-wide misconceptions with severity and remediation:"),
        bullet("Top 3 active misconceptions with student counts and severity bars"),
        bullet("Expandable rows showing affected student names"),
        bullet("\u201CFix it\u201D actions: push visual explainer or practice quiz to affected students"),
        spacer(),
        bold("Backend Requirements:"),
        bullet("Misconception detection engine: analyze wrong answers for patterns (not just \u201Cwrong\u201D but \u201Cwhy wrong\u201D)"),
        bullet("NLP classification of free-text answers for misconception categories"),
        bullet("Real-time aggregation pipeline: student responses \u2192 misconception counts \u2192 severity scoring"),
        bullet("Remediation action API: auto-generate targeted content for specific misconceptions"),

        heading("5.3 PTM Report Generator", HeadingLevel.HEADING_2),
        para("Batch and individual parent-teacher meeting report generation:"),
        bullet("Batch mode: select students \u2192 generate all reports \u2192 download PDF / share WhatsApp"),
        bullet("Individual report: mastery ring, strengths, concerns, recommendations, teacher notes, AI opening line"),
        spacer(),
        bold("Backend Requirements:"),
        bullet("Report generation API: input(student_id, teacher_notes) \u2192 output(PDF)"),
        bullet("AI narrative generation for positive opening lines using student data trends"),
        bullet("PDF generation service (e.g., Puppeteer on Cloud Run or a PDF library)"),
        bullet("WhatsApp Business API integration for parent communication"),
        bullet("Report versioning and audit trail"),

        heading("5.4 Additional Tutor Features", HeadingLevel.HEADING_2),
        bold("Class SA1 Prediction:"),
        bullet("Aggregate class prediction based on individual student models"),
        bullet("At-risk student identification (predicted < 50%)"),
        spacer(),
        bold("Push Assignments:"),
        bullet("Target: entire class, group, or individual"),
        bullet("Difficulty: AI-adaptive, or manual (easy/medium/hard)"),
        bullet("Scheduling with notifications"),
        spacer(),
        bold("Live Polling:"),
        bullet("Real-time classroom polling with instant result visualization"),
        bullet("Backend: WebSocket/SSE for real-time response aggregation"),
        spacer(),
        bold("Content/Syllabus Management:"),
        bullet("Board-aligned curriculum tracking (CBSE/ICSE/State)"),
        bullet("Topic status: Taught / In Progress / Pending"),

        // ==========================================
        // 6. PARENT APP FEATURES
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("6. Feature Catalog \u2014 Parent App"),
        para("The Parent App provides visibility into learning progress with actionable insights and teacher communication."),
        spacer(),

        heading("6.1 Smart Screen Time", HeadingLevel.HEADING_2),
        para("Qualitative screen time breakdown \u2014 not just duration, but learning quality:"),
        makeTable(
          ["Category", "Color", "Examples", "Typical %"],
          [
            ["Active Learning", "Green", "Quizzes, tutor sessions, teach-back, practice", "60-70%"],
            ["Passive Learning", "Blue", "Reading explanations, watching visuals", "20-25%"],
            ["Idle", "Gray", "App open, no interaction", "5-15%"],
          ],
          [2000, 1200, 3660, 2500]
        ),
        spacer(),
        bullet("Today\u2019s breakdown: stacked horizontal bar + legend + total time"),
        bullet("Weekly view: 7-day stacked column chart on Activity screen"),
        bullet("Weekly comparison: \u201C\u2191 12% more active learning than last week\u201D"),
        spacer(),
        bold("Backend Requirements:"),
        bullet("Activity classification engine: categorize each app event into active/passive/idle"),
        bullet("Session tracking with heartbeat (detect idle vs closed app)"),
        bullet("Daily/weekly aggregation pipeline"),
        bullet("Per-child data isolation (parent sees only their children)"),

        heading("6.2 Exam Predictor with What-If Slider", HeadingLevel.HEADING_2),
        para("Predicted exam score range based on current practice pace, with interactive what-if analysis:"),
        bullet("Base prediction: e.g., \u201C72\u201378%\u201D based on mastery trajectory"),
        bullet("Per-subject breakdown: Science 68-74%, Math 76-82%"),
        bullet("What-if slider: 0-4 extra practice days/week \u2192 score boost (+3% per day)"),
        bullet("Encouraging text: \u201CJust 2 more practice days could boost the score by 6%!\u201D"),
        spacer(),
        bold("Backend Requirements:"),
        bullet("Predictive model: input(mastery_history, practice_frequency, topic_scores) \u2192 output(predicted_range)"),
        bullet("Historical validation: compare past predictions with actual results"),
        bullet("What-if simulation engine: adjust variables and recalculate"),
        bullet("Per-child model (Parent App) + per-class aggregate model (Tutor App)"),

        heading("6.3 Additional Parent Features", HeadingLevel.HEADING_2),
        bold("Multi-Child Switcher:"),
        bullet("Parents with multiple children switch between profiles seamlessly"),
        bullet("All data (mastery, screen time, predictions) updates per child"),
        spacer(),
        bold("Teacher Messaging:"),
        bullet("In-app chat with teacher (not email/WhatsApp)"),
        bullet("Backend: Real-time messaging with read receipts"),
        spacer(),
        bold("Weekly Digest:"),
        bullet("Auto-generated weekly summary: highlights, concerns, teacher notes"),
        bullet("Backend: Scheduled digest generation every Sunday"),

        // ==========================================
        // 7. ORG ADMIN APP FEATURES
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("7. Feature Catalog \u2014 Organization Admin App"),
        para("The Org Admin App provides institution-level management, analytics, and configuration."),
        spacer(),

        heading("7.1 Screens & Capabilities", HeadingLevel.HEADING_2),
        makeTable(
          ["Screen", "Capabilities"],
          [
            ["Dashboard", "KPIs (students, active users, engagement), class performance heatmap, recent activity"],
            ["Teachers", "Teacher directory, performance metrics, class assignments, engagement tracking"],
            ["Teacher Detail", "Individual teacher profile, classes, student roster, performance trends"],
            ["Curriculum", "Board-standard mapping (CBSE/ICSE/IB), chapter-topic matrix, coverage tracking"],
            ["Analytics", "Org-wide metrics: retention, growth, topic mastery distribution, class comparisons"],
            ["Branding", "White-label: school name, logo, colors, theme customization"],
            ["Calendar", "School calendar, exam dates, holidays, event management"],
            ["Billing", "Subscription tier, usage tracking, invoices, payment methods"],
            ["Users", "Member management, role assignment (admin/teacher/parent), permissions"],
            ["Settings", "General config, data export, backups, integrations, API keys"],
          ],
          [2000, 7360]
        ),
        spacer(),
        bold("Backend Requirements:"),
        bullet("Role-based access control (RBAC): org-admin, school-admin, teacher, parent, student"),
        bullet("White-label theming API: store and serve custom branding per tenant"),
        bullet("Billing integration: Razorpay/Stripe with subscription management"),
        bullet("Organization hierarchy: org \u2192 school \u2192 class \u2192 section"),
        bullet("Data export API: CSV/Excel/PDF for compliance and reporting"),

        // ==========================================
        // 8. AI & ML REQUIREMENTS
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("8. AI & ML Requirements"),
        para("LearnAI\u2019s intelligence layer powers 12 distinct AI features across all apps. The architecture uses Google Gemini as the primary LLM with specialized ML models for prediction."),
        spacer(),

        heading("8.1 AI Feature Matrix", HeadingLevel.HEADING_2),
        makeTable(
          ["Feature", "Input", "Output", "Model", "Latency"],
          [
            ["Persona Explainer", "Topic + concept + persona", "Adapted explanation", "Gemini Pro", "< 3s"],
            ["Teach-back Eval", "Student free-text + topic", "Green/orange/red + feedback", "Gemini Pro", "< 2s"],
            ["Study Buddy", "Student state snapshot", "3-4 contextual messages", "Gemini Flash", "< 1s"],
            ["Misconception Detect", "Wrong answers + patterns", "Misconception category", "Custom classifier", "< 500ms"],
            ["Lesson Plan Gen", "Topic + class data", "5-section lesson plan", "Gemini Pro", "< 5s"],
            ["Report Narrative", "Student data trends", "Positive opening line", "Gemini Flash", "< 1s"],
            ["Exam Predictor", "Mastery history + frequency", "Score range prediction", "Custom ML (XGBoost)", "< 200ms"],
            ["OCR + Solve", "Photo of question", "Extracted text + solution", "Cloud Vision + Gemini", "< 4s"],
            ["Question Gen", "Topic + difficulty", "MCQ with distractors", "Gemini Pro", "< 3s"],
            ["Feed Curation", "Class activity events", "Ranked positive moments", "Rule engine + ML", "< 500ms"],
            ["Auto-Differentiate", "Student level + topic", "Adapted question set", "Rule engine", "< 200ms"],
            ["Speech-to-Text", "Audio input", "Transcribed text", "Cloud Speech API", "< 2s"],
          ],
          [2200, 2200, 2000, 1800, 1160]
        ),

        heading("8.2 AI Cost Optimization", HeadingLevel.HEADING_2),
        bullet("Cache persona explanations: same (topic, persona) combo serves all students"),
        bullet("Use Gemini Flash for low-latency, low-cost tasks (buddy, narratives)"),
        bullet("Use Gemini Pro for complex tasks (lesson plans, teach-back evaluation)"),
        bullet("Batch misconception analysis (not per-answer, but per-quiz-session)"),
        bullet("Pre-generate common content during off-peak hours"),
        bullet("Progressive complexity: start with rule-based, upgrade to ML as data grows"),

        // ==========================================
        // 9. BACKEND ARCHITECTURE
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("9. Backend Architecture (GCP)"),
        para("The architecture follows a sustainable, less-complex approach: start with a shared instance, evolve to tenant-isolated infrastructure as the client base grows."),
        spacer(),

        heading("9.1 Architecture Principles", HeadingLevel.HEADING_2),
        numberedItem("Start simple, scale intentionally \u2014 avoid premature optimization", "numbers2"),
        numberedItem("Shared infrastructure with logical tenant isolation (Phase 1)", "numbers2"),
        numberedItem("Physical tenant isolation available for enterprise clients (Phase 2+)", "numbers2"),
        numberedItem("Serverless-first to minimize ops overhead", "numbers2"),
        numberedItem("Event-driven for analytics and real-time features", "numbers2"),
        numberedItem("AI as a service layer, not embedded in business logic", "numbers2"),

        heading("9.2 GCP Service Stack", HeadingLevel.HEADING_2),
        makeTable(
          ["Layer", "Service", "Purpose"],
          [
            ["Compute", "Cloud Run", "API services, serverless containers, auto-scaling"],
            ["API Gateway", "Cloud Endpoints / API Gateway", "Rate limiting, auth, routing"],
            ["Database", "Cloud SQL (PostgreSQL)", "Primary relational data store with row-level security"],
            ["Cache", "Memorystore (Redis)", "Session cache, hot data, rate limiting"],
            ["Object Storage", "Cloud Storage", "Media files, PDFs, exports, visual assets"],
            ["CDN", "Cloud CDN", "Static assets, shared content delivery"],
            ["AI/ML", "Vertex AI + Gemini API", "LLM inference, custom model hosting"],
            ["Search", "Cloud SQL full-text / Elasticsearch (later)", "Content search, question bank search"],
            ["Messaging", "Pub/Sub", "Event bus for async processing"],
            ["Real-time", "Firebase Realtime DB or Cloud Run SSE", "Live polls, notifications, chat"],
            ["Auth", "Firebase Auth / Cloud Identity", "Multi-tenant authentication, SSO"],
            ["Monitoring", "Cloud Monitoring + Logging", "Observability, alerting, error tracking"],
            ["CI/CD", "Cloud Build + Artifact Registry", "Automated build, test, deploy pipeline"],
            ["Secrets", "Secret Manager", "API keys, credentials, tenant configs"],
          ],
          [2000, 3500, 3860]
        ),

        heading("9.3 API Service Architecture", HeadingLevel.HEADING_2),
        para("Monolith-first with clear module boundaries (can split into microservices later):"),
        spacer(),
        makeTable(
          ["Module", "Endpoints", "Responsibilities"],
          [
            ["Auth", "/auth/*", "Login, signup, token refresh, role management, tenant resolution"],
            ["Student", "/api/students/*", "Profile, progress, mastery, activity, teach-back submissions"],
            ["Tutor", "/api/tutors/*", "Dashboard data, assignments, polls, lesson plans, reports"],
            ["Parent", "/api/parents/*", "Child data, screen time, predictions, messages, digests"],
            ["Admin", "/api/admin/*", "Org management, users, billing, branding, analytics"],
            ["AI", "/api/ai/*", "Persona content, teach-back eval, question gen, OCR, predictions"],
            ["Content", "/api/content/*", "Shared question bank, curricula, visual explainers, books"],
            ["Real-time", "/ws/*", "WebSocket: polls, notifications, chat, live updates"],
          ],
          [1500, 2500, 5360]
        ),

        heading("9.4 Technology Stack", HeadingLevel.HEADING_2),
        makeTable(
          ["Component", "Technology", "Rationale"],
          [
            ["Runtime", "Node.js 22 (or Go for performance-critical services)", "TypeScript full-stack, team familiarity, fast iteration"],
            ["Framework", "Hono or Fastify", "Lightweight, fast, middleware-friendly, Cloud Run optimized"],
            ["ORM", "Drizzle ORM", "Type-safe, PostgreSQL native, migration support"],
            ["Validation", "Zod", "Runtime validation, TypeScript inference, shared with frontend"],
            ["Auth", "Firebase Auth + custom JWT", "Social login, phone auth, multi-tenant claims"],
            ["AI SDK", "Google AI SDK (@google/generative-ai)", "Direct Gemini API access, streaming support"],
            ["PDF", "Puppeteer on Cloud Run", "HTML-to-PDF for reports, invoices"],
            ["Testing", "Vitest + Supertest", "Fast unit + integration testing"],
          ],
          [2000, 3500, 3860]
        ),

        // ==========================================
        // 10. DATABASE DESIGN & MULTI-TENANCY
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("10. Database Design & Multi-Tenancy"),

        heading("10.1 Why PostgreSQL", HeadingLevel.HEADING_2),
        bullet("Row-Level Security (RLS) for tenant isolation without separate databases"),
        bullet("JSONB columns for flexible schema (AI responses, visual explainer configs)"),
        bullet("Full-text search built-in (question bank, curriculum search)"),
        bullet("Proven at scale (Supabase, Instagram, Discord all use PostgreSQL)"),
        bullet("Cloud SQL managed service reduces ops burden"),
        bullet("PostGIS extension if location-based features needed later"),

        heading("10.2 Multi-Tenancy Strategy", HeadingLevel.HEADING_2),
        para("Phase 1 (Launch): Shared database with Row-Level Security"),
        para("Phase 2 (Growth): Shared database with schema-per-tenant for large clients"),
        para("Phase 3 (Enterprise): Dedicated database instances for premium clients"),
        spacer(),

        makeTable(
          ["Phase", "Approach", "Isolation", "Cost", "Complexity"],
          [
            ["Phase 1", "Shared DB + RLS", "Row-level (tenant_id column)", "Low", "Low"],
            ["Phase 2", "Schema-per-tenant", "Schema-level", "Medium", "Medium"],
            ["Phase 3", "DB-per-tenant", "Full database", "High", "High"],
          ],
          [1200, 2200, 2500, 1200, 2260]
        ),
        spacer(),
        bold("Row-Level Security Implementation:"),
        bullet("Every table has a tenant_id column (NOT NULL, indexed)"),
        bullet("PostgreSQL RLS policy: CREATE POLICY tenant_isolation ON [table] USING (tenant_id = current_setting(\u2019app.tenant_id\u2019))"),
        bullet("Tenant ID set at connection level from JWT claims"),
        bullet("Application code NEVER filters by tenant_id directly \u2014 RLS handles it"),

        heading("10.3 Core Data Models", HeadingLevel.HEADING_2),
        bold("Tenant & Auth:"),
        bullet("tenants: id, name, slug, domain, branding_config (JSONB), board, plan, created_at"),
        bullet("users: id, tenant_id, email, phone, role (student|teacher|parent|admin), firebase_uid"),
        bullet("user_profiles: id, user_id, name, avatar_url, grade, section, preferences (JSONB)"),
        spacer(),
        bold("Academic Structure:"),
        bullet("classes: id, tenant_id, name, grade, section, academic_year"),
        bullet("class_members: class_id, user_id, role (student|teacher)"),
        bullet("subjects: id, tenant_id, name, board, grade_level"),
        bullet("topics: id, subject_id, chapter, name, sequence, board_standard_code"),
        spacer(),
        bold("Learning & Progress:"),
        bullet("topic_progress: id, user_id, topic_id, learn_status, teach_status, practice_score, mastery_pct"),
        bullet("quiz_attempts: id, user_id, quiz_id, answers (JSONB), score, duration, created_at"),
        bullet("teach_back_submissions: id, user_id, topic_id, text, ai_evaluation (JSONB), score"),
        bullet("tutor_sessions: id, user_id, topic_id, persona, steps_completed, duration"),
        spacer(),
        bold("AI & Content:"),
        bullet("ai_content_cache: id, topic_id, persona, content_type, content (JSONB), created_at"),
        bullet("misconceptions: id, tenant_id, topic_id, class_id, text, student_ids[], severity, detected_at"),
        bullet("lesson_plans: id, teacher_id, topic_id, sections (JSONB), created_at"),
        spacer(),
        bold("Communication:"),
        bullet("messages: id, tenant_id, sender_id, receiver_id, thread_id, body, read_at, created_at"),
        bullet("notifications: id, user_id, type, title, body, action_url, read_at"),
        bullet("feed_events: id, tenant_id, class_id, type, data (JSONB), created_at"),
        spacer(),
        bold("Billing (Org Level):"),
        bullet("subscriptions: id, tenant_id, plan, status, student_limit, expires_at"),
        bullet("invoices: id, tenant_id, amount, currency, status, razorpay_id, created_at"),

        heading("10.4 Shared Content (Cross-Tenant)", HeadingLevel.HEADING_2),
        para("Some content is shared across all tenants to avoid duplication:"),
        spacer(),
        makeTable(
          ["Content Type", "Storage", "Sharing Model"],
          [
            ["Question Bank (curated)", "Separate shared schema", "Read-only for all tenants, curated by LearnAI team"],
            ["Curriculum/Standards", "Separate shared schema", "CBSE/ICSE/IB board standards, read-only"],
            ["Visual Explainers", "Cloud Storage + CDN", "Shared assets, versioned"],
            ["AI-Generated Videos", "Cloud Storage + CDN", "Generated once, cached, served globally"],
            ["Common Books/Materials", "Cloud Storage", "Publisher partnerships, access controlled"],
            ["Custom Questions", "Tenant database", "Created by teachers, private to tenant"],
            ["Custom Content", "Tenant database", "Tenant-specific curricula, branding, materials"],
          ],
          [2500, 2800, 4060]
        ),

        // ==========================================
        // 11. DATA PRIVACY & COMPLIANCE
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("11. Data Privacy & Compliance"),
        para("Education data involves minors and requires strict privacy controls. LearnAI must comply with multiple regulations depending on the deployment region."),
        spacer(),

        heading("11.1 Compliance Requirements", HeadingLevel.HEADING_2),
        makeTable(
          ["Regulation", "Region", "Key Requirements"],
          [
            ["COPPA", "US (under 13)", "Parental consent, data minimization, no behavioral advertising"],
            ["FERPA", "US (schools)", "School controls student records, parent access rights"],
            ["GDPR", "EU", "Consent, data portability, right to deletion, DPO appointment"],
            ["DPDP Act 2023", "India", "Consent, data localization (India), parental consent for minors"],
            ["NEP 2020", "India", "Data standards for EdTech, interoperability requirements"],
          ],
          [2000, 2500, 4860]
        ),

        heading("11.2 Privacy Architecture", HeadingLevel.HEADING_2),
        numberedItem("Tenant Data Isolation: Row-Level Security ensures no cross-tenant data leaks", "numbers3"),
        numberedItem("Data Residency: Cloud SQL regional deployments (asia-south1 for India, europe-west1 for EU)", "numbers3"),
        numberedItem("Encryption: AES-256 at rest (Cloud SQL default), TLS 1.3 in transit", "numbers3"),
        numberedItem("PII Handling: Student names, photos, and contact info encrypted at application level", "numbers3"),
        numberedItem("AI Data Policy: Student data sent to Gemini API is NOT used for model training (Google\u2019s API TOS)", "numbers3"),
        numberedItem("Audit Logging: All data access logged with user, action, timestamp, tenant", "numbers3"),
        numberedItem("Data Retention: Configurable per tenant (default: 3 years, then anonymize)", "numbers3"),
        numberedItem("Right to Delete: API endpoint to purge all user data across all tables", "numbers3"),
        numberedItem("Parental Consent: Required for students under 13, stored with timestamp and method", "numbers3"),
        numberedItem("No Advertising: Platform NEVER uses student data for advertising purposes", "numbers3"),

        heading("11.3 Data Access Matrix", HeadingLevel.HEADING_2),
        makeTable(
          ["Data", "Student", "Teacher", "Parent", "Org Admin"],
          [
            ["Own progress/mastery", "Full", "Full (their class)", "Own child only", "Aggregate only"],
            ["Other student\u2019s data", "Never", "Their class only", "Never", "Aggregate only"],
            ["Quiz answers", "Own only", "Their class", "Never", "Never"],
            ["AI chat/teach-back", "Own only", "Their class (summary)", "Never", "Never"],
            ["Class feed", "Positive only", "Full", "Never", "Never"],
            ["Teacher notes", "Never", "Own notes", "Shared notes only", "All notes"],
            ["Billing/subscription", "Never", "Never", "Never", "Full"],
            ["Branding/config", "Never", "Never", "Never", "Full"],
          ],
          [2500, 1400, 1700, 1760, 2000]
        ),

        // ==========================================
        // 12. SHARED CONTENT PLATFORM
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("12. Shared Content Platform"),
        para("A central content platform serves shared resources across all tenants while allowing tenant-specific customization."),
        spacer(),

        heading("12.1 Content Types", HeadingLevel.HEADING_2),
        makeTable(
          ["Type", "Source", "Format", "Sharing"],
          [
            ["Question Bank", "LearnAI team + AI generated", "JSON (question, options, answer, explanation, difficulty, tags)", "Global read, tenant can fork & edit"],
            ["Curriculum Maps", "Board standards (NCERT, CBSE, ICSE)", "Structured JSON (subject \u2192 chapter \u2192 topic \u2192 learning objectives)", "Global read"],
            ["Visual Explainers", "Built by dev team", "React components + metadata JSON", "Global, versioned"],
            ["AI Videos", "Generated via AI (future)", "MP4 on Cloud Storage", "Global, CDN-cached"],
            ["Books/Materials", "Publisher partnerships", "PDF on Cloud Storage", "Access-controlled per tenant"],
            ["Tutor Content", "AI-generated per persona", "JSON (topic + persona \u2192 step cards)", "Cached globally, personalized per student"],
          ],
          [2000, 2500, 2360, 2500]
        ),

        heading("12.2 Content Pipeline", HeadingLevel.HEADING_2),
        numberedItem("Content Creation: LearnAI team creates/curates base content", "numbers4"),
        numberedItem("AI Augmentation: Gemini generates persona variations, practice questions, real-world connections", "numbers4"),
        numberedItem("Quality Review: Human review of AI-generated content before global publish", "numbers4"),
        numberedItem("CDN Distribution: Approved content pushed to Cloud CDN for fast delivery", "numbers4"),
        numberedItem("Tenant Customization: Tenants can fork shared content, add their own, or disable items", "numbers4"),
        numberedItem("Analytics Feedback: Usage data feeds back to improve content ranking and recommendations", "numbers4"),

        // ==========================================
        // 13. API DESIGN
        // ==========================================
        heading("13. API Design"),
        para("RESTful API with consistent patterns, tenant-aware middleware, and real-time capabilities."),
        spacer(),

        heading("13.1 API Conventions", HeadingLevel.HEADING_2),
        bullet("Base URL: https://api.learnai.app/v1/{tenant-slug}/"),
        bullet("Auth: Bearer token (Firebase JWT with custom claims: tenant_id, role, user_id)"),
        bullet("Response format: { data: T, meta: { page, total }, errors: [] }"),
        bullet("Pagination: cursor-based (?cursor=xxx&limit=20)"),
        bullet("Versioning: URL prefix (/v1/, /v2/)"),
        bullet("Rate limiting: 100 req/min per user, 1000 req/min per tenant"),

        heading("13.2 Key API Endpoints", HeadingLevel.HEADING_2),
        makeTable(
          ["Method", "Endpoint", "Description"],
          [
            ["POST", "/auth/login", "Authenticate, returns JWT with tenant + role claims"],
            ["GET", "/students/me/dashboard", "Student home screen data (missions, streaks, XP, assignments)"],
            ["GET", "/students/me/journey", "Topic list with 3-step progress per topic"],
            ["POST", "/students/me/tutor/start", "Start tutor session: { topic, persona } \u2192 step cards"],
            ["POST", "/students/me/teach-back", "Submit teach-back: { topic, text } \u2192 AI evaluation"],
            ["POST", "/students/me/quiz/submit", "Submit quiz answers \u2192 score + feedback"],
            ["GET", "/students/me/feed", "Class stories feed (positive moments only)"],
            ["GET", "/tutors/me/dashboard", "Teacher dashboard: stats, misconceptions, flagged students"],
            ["POST", "/tutors/me/lesson-plan", "Generate AI lesson plan: { topic } \u2192 5 sections"],
            ["POST", "/tutors/me/assignments/push", "Push assignment to class/group/individual"],
            ["GET", "/tutors/me/students/{id}/report", "Generate student report for PTM"],
            ["GET", "/parents/me/children", "List children with summary data"],
            ["GET", "/parents/me/children/{id}/screen-time", "Screen time breakdown (today + week)"],
            ["GET", "/parents/me/children/{id}/prediction", "Exam prediction with what-if params"],
            ["GET", "/admin/dashboard", "Org KPIs, heatmap, engagement metrics"],
            ["PUT", "/admin/branding", "Update white-label config: { name, logo, colors }"],
            ["GET", "/admin/billing", "Subscription status, invoices, usage"],
          ],
          [900, 3800, 4660]
        ),

        // ==========================================
        // 14. INFRASTRUCTURE & DEVOPS
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("14. Infrastructure & DevOps"),

        heading("14.1 Environments", HeadingLevel.HEADING_2),
        makeTable(
          ["Environment", "Purpose", "GCP Project", "Database"],
          [
            ["Development", "Feature development, local testing", "learnai-dev", "Local PostgreSQL / Cloud SQL (micro)"],
            ["Staging", "Pre-production testing, QA", "learnai-staging", "Cloud SQL (small)"],
            ["Production", "Live traffic", "learnai-prod", "Cloud SQL (HA, regional)"],
          ],
          [1800, 2800, 2200, 2560]
        ),

        heading("14.2 CI/CD Pipeline", HeadingLevel.HEADING_2),
        numberedItem("Push to GitHub \u2192 Cloud Build triggers", "numbers5"),
        numberedItem("Run tests (Vitest) + lint (ESLint) + type check (tsc)", "numbers5"),
        numberedItem("Build Docker image \u2192 push to Artifact Registry", "numbers5"),
        numberedItem("Deploy to Cloud Run (staging on PR merge, prod on release tag)", "numbers5"),
        numberedItem("Run database migrations (Drizzle migrate)", "numbers5"),
        numberedItem("Smoke tests against deployed environment", "numbers5"),
        numberedItem("Notify team (Slack/Discord webhook)", "numbers5"),

        heading("14.3 Monitoring & Observability", HeadingLevel.HEADING_2),
        bullet("Cloud Monitoring dashboards: API latency, error rates, Cloud Run metrics"),
        bullet("Cloud Logging: structured JSON logs with tenant_id, user_id, request_id"),
        bullet("Cloud Trace: distributed tracing for AI call latency"),
        bullet("Alerting: PagerDuty/Slack for error rate spikes, latency p99 > threshold"),
        bullet("Uptime checks: synthetic monitoring for critical user flows"),
        bullet("Cost monitoring: budget alerts per GCP project, Gemini API cost tracking"),

        // ==========================================
        // 15. PHASE-WISE ROLLOUT
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("15. Phase-wise Rollout Plan"),
        spacer(),

        heading("Phase 1: Foundation (Weeks 1\u20136)", HeadingLevel.HEADING_2),
        bold("Goal: Core backend with auth, data models, and basic API"),
        bullet("GCP project setup (Cloud Run, Cloud SQL, Cloud Storage)"),
        bullet("PostgreSQL schema with RLS, migrations (Drizzle)"),
        bullet("Firebase Auth integration with multi-tenant JWT"),
        bullet("Core APIs: auth, student dashboard, journey/progress, quiz submission"),
        bullet("Connect PWA frontend to live backend (replace hardcoded data)"),
        bullet("CI/CD pipeline (Cloud Build \u2192 Cloud Run)"),
        spacer(),

        heading("Phase 2: AI Integration (Weeks 7\u201310)", HeadingLevel.HEADING_2),
        bold("Goal: AI-powered features live"),
        bullet("Gemini API integration: persona explainer, teach-back evaluation"),
        bullet("AI content caching layer (Redis + PostgreSQL)"),
        bullet("Misconception detection pipeline"),
        bullet("Lesson plan generation"),
        bullet("OCR + solve (Cloud Vision + Gemini)"),
        bullet("Question generation for practice quizzes"),
        spacer(),

        heading("Phase 3: Real-time & Communication (Weeks 11\u201314)", HeadingLevel.HEADING_2),
        bold("Goal: Live features and parent/teacher communication"),
        bullet("Real-time notifications (Firebase Cloud Messaging)"),
        bullet("Live polling (WebSocket/SSE on Cloud Run)"),
        bullet("In-app messaging (teacher \u2194 parent)"),
        bullet("Class stories feed (event-driven generation)"),
        bullet("Push assignment workflow with scheduling"),
        bullet("Weekly digest generation (Cloud Scheduler)"),
        spacer(),

        heading("Phase 4: Analytics & Predictions (Weeks 15\u201318)", HeadingLevel.HEADING_2),
        bold("Goal: Data-driven insights for all roles"),
        bullet("Screen time classification and aggregation"),
        bullet("Exam prediction model (XGBoost on Vertex AI)"),
        bullet("Teacher analytics dashboard (impact scores, trends)"),
        bullet("Org-level analytics (retention, engagement, class comparisons)"),
        bullet("PTM report generation (PDF via Puppeteer)"),
        bullet("Study buddy context engine"),
        spacer(),

        heading("Phase 5: Multi-Tenant & Scale (Weeks 19\u201324)", HeadingLevel.HEADING_2),
        bold("Goal: B2B ready with white-label and billing"),
        bullet("White-label branding API (custom themes, logos, domains)"),
        bullet("Tenant onboarding flow (self-service signup)"),
        bullet("Billing integration (Razorpay/Stripe subscriptions)"),
        bullet("Schema-per-tenant for large clients (optional)"),
        bullet("Custom domain mapping (Cloud Run domain mapping)"),
        bullet("Content marketplace: tenants can share custom question banks"),
        bullet("Performance optimization: caching, CDN, query tuning"),
        bullet("Load testing: simulate 10K concurrent users"),

        // ==========================================
        // 16. APPENDIX
        // ==========================================
        new Paragraph({ children: [new PageBreak()] }),
        heading("16. Appendix"),

        heading("16.1 Glossary", HeadingLevel.HEADING_2),
        makeTable(
          ["Term", "Definition"],
          [
            ["Tenant", "An organization (school, coaching center, university) with its own branding and data"],
            ["Mastery", "Percentage measure of topic understanding (0-100%), weighted from learn/teach/practice"],
            ["Persona", "AI explanation style (textbook, cricket, story, cooking, game, ELI5)"],
            ["Teach-back", "Student explains a concept back to the AI for evaluation"],
            ["Misconception", "Systematic misunderstanding detected from wrong answer patterns"],
            ["PTM", "Parent-Teacher Meeting \u2014 periodic report and discussion about student progress"],
            ["RLS", "Row-Level Security \u2014 PostgreSQL feature for tenant data isolation"],
            ["Diagnostic", "Initial assessment quiz to determine student\u2019s current knowledge level"],
            ["XP", "Experience Points \u2014 gamification currency earned through learning activities"],
            ["Spark", "AI study buddy character that provides encouragement and navigation"],
          ],
          [2500, 6860]
        ),

        heading("16.2 Screen Count Summary", HeadingLevel.HEADING_2),
        makeTable(
          ["App", "Visible Nav Screens", "Hidden Screens", "Total"],
          [
            ["Student", "4 (Home, Journey, Exams, Feed)", "11 (Tutor, Practice, Teach-back, Quiz, Photo, Booster, Revision, Mistakes, Challenge, Profile, Notifs)", "15"],
            ["Tutor", "6 (Dashboard, Students, Quizzes, Content, Analytics, Profile)", "7 (Student, Push, Poll, Enrollment, Notifs, Assignments, Lesson Plan)", "13"],
            ["Parent", "5 (Home, Digest, Activity, Badges, Settings)", "2 (Subject Detail, Message)", "7"],
            ["Org Admin", "5 (Dashboard, Teachers, Curriculum, Analytics, Settings)", "7 (Teacher Detail, Student Detail, Branding, Calendar, Billing, Users, Class Detail)", "12"],
            ["TOTAL", "20", "27", "47"],
          ],
          [1500, 2800, 3560, 1500]
        ),

        heading("16.3 Estimated GCP Monthly Costs (Phase 1)", HeadingLevel.HEADING_2),
        makeTable(
          ["Service", "Spec", "Est. Monthly Cost"],
          [
            ["Cloud Run (API)", "2 instances, 1 vCPU, 512MB", "$30-50"],
            ["Cloud SQL (PostgreSQL)", "db-f1-micro, 10GB SSD, no HA", "$15-25"],
            ["Memorystore (Redis)", "M1, 1GB", "$30"],
            ["Cloud Storage", "10GB standard", "$1-2"],
            ["Gemini API", "~50K requests/month (Flash + Pro mix)", "$50-100"],
            ["Cloud Vision (OCR)", "~5K requests/month", "$5-10"],
            ["Firebase Auth", "Free tier (50K MAU)", "$0"],
            ["Cloud Build", "Free tier (120 min/day)", "$0"],
            ["Networking/CDN", "Minimal traffic", "$5-10"],
            ["TOTAL (estimated)", "", "$136-227/month"],
          ],
          [3000, 3500, 2860]
        ),
        spacer(),
        para("Costs scale with usage. At 10K students, expect $500-1000/month. At 100K students, $3000-5000/month. Gemini API is the largest variable cost \u2014 caching is critical.", { run: { italics: true, color: GRAY } }),
      ]
    }
  ]
});

// Generate
Packer.toBuffer(doc).then(buffer => {
  const outPath = "/Users/yogi/personal/learnai-pwa/docs/LearnAI-Product-Technical-Requirements.docx";
  fs.writeFileSync(outPath, buffer);
  console.log("Document generated: " + outPath);
  console.log("Size: " + (buffer.length / 1024).toFixed(1) + " KB");
});
