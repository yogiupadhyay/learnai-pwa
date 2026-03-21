const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "LearnAI";
pres.title = "LearnAI — Product Overview";

// ── Color Palette ──
const P = {
  navy: "1E2761",
  deepBlue: "2563EB",
  purple: "7C3AED",
  teal: "0D9488",
  dark: "0F172A",
  text: "1E293B",
  muted: "64748B",
  light: "F8FAFC",
  white: "FFFFFF",
  ice: "EFF6FF",
  lavender: "F3E8FF",
  mint: "D1FAE5",
  amber: "FEF3C7",
  success: "10B981",
  warn: "F59E0B",
  error: "EF4444",
  accent: "7C3AED",
  gradStart: "2563EB",
  gradEnd: "7C3AED",
};

const makeShadow = () => ({ type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.10 });

// ── SLIDE 1: Title ──
{
  const s = pres.addSlide();
  s.background = { color: P.navy };

  // Decorative shapes
  s.addShape(pres.shapes.OVAL, { x: -1.5, y: -1.5, w: 4, h: 4, fill: { color: P.deepBlue, transparency: 85 } });
  s.addShape(pres.shapes.OVAL, { x: 7.5, y: 3, w: 5, h: 5, fill: { color: P.purple, transparency: 85 } });

  s.addText("LearnAI", {
    x: 0.8, y: 1.2, w: 8.5, h: 1.2,
    fontSize: 52, fontFace: "Georgia", bold: true, color: P.white, margin: 0,
  });

  s.addText("AI-Powered Adaptive Learning Platform", {
    x: 0.8, y: 2.4, w: 8, h: 0.6,
    fontSize: 22, fontFace: "Calibri", color: "CADCFC", margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 3.2, w: 1.5, h: 0.06, fill: { color: P.deepBlue } });

  s.addText([
    { text: "4 Apps  •  47+ Screens  •  PWA Ready  •  B2B White-Label", options: {} }
  ], {
    x: 0.8, y: 3.6, w: 8, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: "8899BB", margin: 0,
  });

  s.addText("Management Presentation — March 2026", {
    x: 0.8, y: 4.8, w: 5, h: 0.4,
    fontSize: 12, fontFace: "Calibri", color: "667799", margin: 0,
  });
}

// ── SLIDE 2: Platform Overview ──
{
  const s = pres.addSlide();
  s.background = { color: P.white };

  s.addText("Platform at a Glance", {
    x: 0.6, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Georgia", bold: true, color: P.dark, margin: 0,
  });

  s.addText("One platform, four purpose-built apps — each designed for a specific stakeholder in the learning ecosystem.", {
    x: 0.6, y: 1.0, w: 8.5, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: P.muted, margin: 0,
  });

  const apps = [
    { name: "Student App", desc: "AI-powered personalized learning with adaptive tutoring, gamified progress, and multi-style explanations", color: P.deepBlue, stats: "20+ screens" },
    { name: "Tutor App", desc: "Smart classroom management with AI lesson plans, misconception radar, real-time analytics and push assignments", color: P.purple, stats: "15+ screens" },
    { name: "Parent App", desc: "Real-time child monitoring with exam predictions, smart screen time tracking, and teacher communication", color: P.teal, stats: "7+ screens" },
    { name: "Admin / Org App", desc: "Institution dashboard with teacher management, class analytics, curriculum control, and billing", color: "1E40AF", stats: "8+ screens" },
  ];

  apps.forEach((app, i) => {
    const y = 1.8 + i * 0.9;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y, w: 8.8, h: 0.78, fill: { color: P.light }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y, w: 0.08, h: 0.78, fill: { color: app.color } });
    s.addText(app.name, { x: 0.9, y: y + 0.08, w: 2.2, h: 0.32, fontSize: 15, fontFace: "Calibri", bold: true, color: app.color, margin: 0 });
    s.addText(app.desc, { x: 0.9, y: y + 0.38, w: 6.5, h: 0.32, fontSize: 11, fontFace: "Calibri", color: P.muted, margin: 0 });
    s.addText(app.stats, { x: 8.2, y: y + 0.15, w: 1.2, h: 0.45, fontSize: 12, fontFace: "Calibri", bold: true, color: app.color, align: "right", margin: 0 });
  });
}

// ── SLIDE 3: Student App ──
{
  const s = pres.addSlide();
  s.background = { color: P.white };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: P.deepBlue } });
  s.addText("Student App", {
    x: 0.6, y: 0.1, w: 5, h: 0.7,
    fontSize: 28, fontFace: "Georgia", bold: true, color: P.white, margin: 0,
  });
  s.addText("Learn • Teach • Practice", {
    x: 5, y: 0.2, w: 4.5, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: "CADCFC", align: "right", margin: 0,
  });

  const features = [
    { title: "AI Tutor (6 Personas)", desc: "Textbook, Cricket, Story, Game, Cooking, 'Like I'm 5' — students choose how they learn", col: 0 },
    { title: "3-Step Learning Journey", desc: "Learn → Teach-back → Practice for every topic with smart nudges and progress tracking", col: 0 },
    { title: "Voice Input & Search", desc: "Ask questions by voice — animated mic with real-time wave visualizer", col: 0 },
    { title: "Photo Homework Help", desc: "Snap a photo of any math/science problem, get AI-powered step-by-step solutions", col: 0 },
    { title: "Visual Explainers", desc: "Interactive animated diagrams — fraction bars, convection beakers with real-time simulations", col: 0 },
    { title: "Study Buddy (Spark)", desc: "AI companion that proactively nudges students to practice weak topics at the right time", col: 1 },
    { title: "Gamified XP & Streaks", desc: "Earn XP for every action, maintain daily streaks, level up with confetti celebrations", col: 1 },
    { title: "Class Stories Feed", desc: "Social feed — see classmates' streaks, mastery milestones, quiz completions", col: 1 },
    { title: "Adaptive Quizzes", desc: "MCQ, True/False, drag-to-order formats with empathetic wrong-streak feedback", col: 1 },
    { title: "Real-World Connect", desc: "Every topic links to real-world scenarios — 'Why does a fan make you feel cool?'", col: 1 },
  ];

  features.forEach((f, i) => {
    const col = f.col;
    const row = col === 0 ? i : i - 5;
    const x = col === 0 ? 0.6 : 5.2;
    const y = 1.15 + row * 0.85;

    s.addShape(pres.shapes.OVAL, { x: x, y: y + 0.05, w: 0.22, h: 0.22, fill: { color: P.deepBlue } });
    s.addText(f.title, { x: x + 0.35, y: y, w: 4, h: 0.3, fontSize: 13, fontFace: "Calibri", bold: true, color: P.dark, margin: 0 });
    s.addText(f.desc, { x: x + 0.35, y: y + 0.32, w: 4.1, h: 0.4, fontSize: 10, fontFace: "Calibri", color: P.muted, margin: 0 });
  });
}

// ── SLIDE 4: Tutor App ──
{
  const s = pres.addSlide();
  s.background = { color: P.white };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: P.purple } });
  s.addText("Tutor / Teacher App", {
    x: 0.6, y: 0.1, w: 5, h: 0.7,
    fontSize: 28, fontFace: "Georgia", bold: true, color: P.white, margin: 0,
  });
  s.addText("Teach Smarter with AI", {
    x: 5, y: 0.2, w: 4.5, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: "D8C4FF", align: "right", margin: 0,
  });

  const left = [
    { title: "Context-Aware Dashboard", desc: "Morning: prep tomorrow's class. Afternoon: check live stats. Evening: review & push homework." },
    { title: "AI Lesson Plan Generator", desc: "One-click lesson plans with warm-up, main activity, visual demo, guided practice, and exit ticket." },
    { title: "Misconception Radar", desc: "Auto-detects common student misconceptions (e.g., 'fractions = divide top by bottom') across the class." },
    { title: "Student Deep Profiles", desc: "Per-student skill map with signal levels (critical / developing / strong), private teacher notes, and timeline." },
  ];

  const right = [
    { title: "Push Assignments & Nudges", desc: "Send targeted practice to specific students or groups. 'Push Fractions quiz to 8 Foundation students.'" },
    { title: "Live Polls", desc: "Quick in-class understanding checks — create poll, project results, see real-time response distribution." },
    { title: "SA1 Exam Prediction", desc: "Class-level prediction with at-risk student flags. '5 students below 50% predicted.'" },
    { title: "Analytics & Enrollment", desc: "Topic-level heat maps, student groups (advanced/average/foundation), and enrollment tracking." },
  ];

  left.forEach((f, i) => {
    const y = 1.15 + i * 1.05;
    s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.05, w: 0.22, h: 0.22, fill: { color: P.purple } });
    s.addText(f.title, { x: 1.05, y, w: 3.8, h: 0.3, fontSize: 13, fontFace: "Calibri", bold: true, color: P.dark, margin: 0 });
    s.addText(f.desc, { x: 1.05, y: y + 0.32, w: 3.8, h: 0.55, fontSize: 10, fontFace: "Calibri", color: P.muted, margin: 0 });
  });

  right.forEach((f, i) => {
    const y = 1.15 + i * 1.05;
    s.addShape(pres.shapes.OVAL, { x: 5.2, y: y + 0.05, w: 0.22, h: 0.22, fill: { color: P.purple } });
    s.addText(f.title, { x: 5.55, y, w: 3.8, h: 0.3, fontSize: 13, fontFace: "Calibri", bold: true, color: P.dark, margin: 0 });
    s.addText(f.desc, { x: 5.55, y: y + 0.32, w: 4.0, h: 0.55, fontSize: 10, fontFace: "Calibri", color: P.muted, margin: 0 });
  });
}

// ── SLIDE 5: Parent App ──
{
  const s = pres.addSlide();
  s.background = { color: P.white };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: P.teal } });
  s.addText("Parent App", {
    x: 0.6, y: 0.1, w: 5, h: 0.7,
    fontSize: 28, fontFace: "Georgia", bold: true, color: P.white, margin: 0,
  });
  s.addText("Stay Informed, Stay Connected", {
    x: 4.5, y: 0.2, w: 5, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: "B2DFDB", align: "right", margin: 0,
  });

  const features = [
    { title: "Multi-Child Dashboard", desc: "Switch between children with one tap. See mastery %, growth, XP, level, quiz count, and streak per child.", y: 1.2 },
    { title: "Subject Performance Drill-Down", desc: "Per-subject and per-topic mastery with trend indicators (up/flat) and color-coded performance bars.", y: 2.1 },
    { title: "Smart Screen Time Tracking", desc: "Classifies time into Active Learning, Passive Learning, and Idle. Weekly bar chart with breakdown per day.", y: 3.0 },
    { title: "SA1 Exam Predictor with What-If", desc: "Shows predicted exam range. Slider: 'What if Aarav does 2 more practice days/week?' — instant score boost projection.", y: 3.9 },
  ];

  features.forEach((f) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: f.y, w: 8.8, h: 0.78, fill: { color: P.light }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: f.y, w: 0.08, h: 0.78, fill: { color: P.teal } });
    s.addText(f.title, { x: 0.9, y: f.y + 0.08, w: 8, h: 0.3, fontSize: 14, fontFace: "Calibri", bold: true, color: P.dark, margin: 0 });
    s.addText(f.desc, { x: 0.9, y: f.y + 0.4, w: 8, h: 0.3, fontSize: 11, fontFace: "Calibri", color: P.muted, margin: 0 });
  });

  // Additional features row
  const extras = [
    { title: "Weekly Digest", desc: "Highlights, concerns, teacher notes" },
    { title: "Teacher Messaging", desc: "In-app chat with child's teacher" },
    { title: "Activity Timeline", desc: "Daily log of all learning activities" },
    { title: "Milestones & Badges", desc: "Track achievements and streaks" },
  ];

  extras.forEach((f, i) => {
    const x = 0.6 + i * 2.3;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 4.85, w: 2.05, h: 0.65, fill: { color: P.ice }, shadow: makeShadow() });
    s.addText(f.title, { x: x + 0.1, y: 4.88, w: 1.85, h: 0.28, fontSize: 11, fontFace: "Calibri", bold: true, color: P.teal, margin: 0 });
    s.addText(f.desc, { x: x + 0.1, y: 5.15, w: 1.85, h: 0.3, fontSize: 9.5, fontFace: "Calibri", color: P.muted, margin: 0 });
  });
}

// ── SLIDE 6: Admin / Org App ──
{
  const s = pres.addSlide();
  s.background = { color: P.white };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: "1E40AF" } });
  s.addText("Admin / Org App", {
    x: 0.6, y: 0.1, w: 5, h: 0.7,
    fontSize: 28, fontFace: "Georgia", bold: true, color: P.white, margin: 0,
  });
  s.addText("Institutional Command Center", {
    x: 4.5, y: 0.2, w: 5, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: "93C5FD", align: "right", margin: 0,
  });

  const features = [
    { title: "Organization Dashboard", desc: "Bird's eye view — total students, teachers, classes, active rate. Quick-action tiles for common tasks." },
    { title: "Teacher Management", desc: "Add/view teachers with subject assignments, class allocations, effectiveness scores, and class averages." },
    { title: "Class Performance Matrix", desc: "All classes with mastery %, active student counts, and drill-down to individual class details." },
    { title: "Teacher Detail Profiles", desc: "Per-teacher view: assigned classes, top/weak topics, student count, and effectiveness metrics." },
    { title: "Class Detail View", desc: "Mastery breakdown, student list with performance, topic-level analytics per class." },
    { title: "Curriculum & Content", desc: "Upload NCERT textbooks, manage content library. AI indexes books for tutor reference." },
    { title: "Branding & White-Label", desc: "School logo, color customization. Each institution gets their own branded experience." },
    { title: "Billing & Calendar", desc: "Subscription management, payment tracking, academic calendar integration." },
  ];

  features.forEach((f, i) => {
    const col = i < 4 ? 0 : 1;
    const row = col === 0 ? i : i - 4;
    const x = col === 0 ? 0.6 : 5.2;
    const y = 1.15 + row * 1.05;

    s.addShape(pres.shapes.OVAL, { x, y: y + 0.05, w: 0.22, h: 0.22, fill: { color: "1E40AF" } });
    s.addText(f.title, { x: x + 0.35, y, w: 4, h: 0.3, fontSize: 13, fontFace: "Calibri", bold: true, color: P.dark, margin: 0 });
    s.addText(f.desc, { x: x + 0.35, y: y + 0.32, w: 4.1, h: 0.55, fontSize: 10, fontFace: "Calibri", color: P.muted, margin: 0 });
  });
}

// ── SLIDE 7: AI & Technology ──
{
  const s = pres.addSlide();
  s.background = { color: P.light };

  s.addText("AI & Technology Stack", {
    x: 0.6, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Georgia", bold: true, color: P.dark, margin: 0,
  });

  s.addText("Built for scale, privacy, and intelligence", {
    x: 0.6, y: 0.95, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: P.muted, margin: 0,
  });

  // AI features grid
  const aiFeatures = [
    { title: "Adaptive Tutoring", desc: "6 persona-based explanations that adapt to student comprehension level", color: P.deepBlue },
    { title: "Misconception Detection", desc: "Pattern analysis across student responses to surface class-wide misunderstandings", color: P.error },
    { title: "Exam Prediction", desc: "ML-based SA1 score prediction with what-if analysis for intervention planning", color: P.success },
    { title: "Smart Nudges", desc: "Context-aware notifications — right topic, right time, right difficulty level", color: P.warn },
    { title: "Content Indexing", desc: "AI processes uploaded textbooks to generate topic-aligned tutoring content", color: P.purple },
    { title: "Visual Generation", desc: "Interactive animated explainers auto-generated for complex science/math concepts", color: P.teal },
  ];

  aiFeatures.forEach((f, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.6 + col * 3.1;
    const y = 1.65 + row * 1.6;

    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.85, h: 1.35, fill: { color: P.white }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.85, h: 0.06, fill: { color: f.color } });
    s.addText(f.title, { x: x + 0.15, y: y + 0.2, w: 2.55, h: 0.3, fontSize: 13, fontFace: "Calibri", bold: true, color: f.color, margin: 0 });
    s.addText(f.desc, { x: x + 0.15, y: y + 0.55, w: 2.55, h: 0.65, fontSize: 10, fontFace: "Calibri", color: P.muted, margin: 0 });
  });

  // Tech stack bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.95, w: 8.8, h: 0.55, fill: { color: P.navy } });
  s.addText("Next.js 15  •  React 19  •  TypeScript  •  PWA  •  GCP (Cloud Run)  •  PostgreSQL + RLS  •  Vertex AI / Gemini", {
    x: 0.8, y: 4.97, w: 8.4, h: 0.5,
    fontSize: 11, fontFace: "Calibri", bold: true, color: "CADCFC", align: "center", margin: 0,
  });
}

// ── SLIDE 8: Business Model ──
{
  const s = pres.addSlide();
  s.background = { color: P.white };

  s.addText("B2B White-Label Model", {
    x: 0.6, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Georgia", bold: true, color: P.dark, margin: 0,
  });

  s.addText("Multi-tenant architecture designed for schools, coaching centers, and universities", {
    x: 0.6, y: 0.95, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: P.muted, margin: 0,
  });

  // Key points
  const points = [
    { title: "Grade 1 to PhD", desc: "Curriculum-agnostic platform supporting CBSE, ICSE, State Boards, and university programs.", icon: "📚" },
    { title: "White-Label Branding", desc: "Each institution gets their own logo, colors, and domain. Students see their school brand.", icon: "🎨" },
    { title: "Multi-Tenant Architecture", desc: "Shared infrastructure with PostgreSQL Row-Level Security. Data isolation per tenant guaranteed.", icon: "🔒" },
    { title: "Shared Content Platform", desc: "Common quizzes, AI-generated videos, textbooks shared across tenants. Reduce duplication.", icon: "📦" },
    { title: "Data Privacy First", desc: "COPPA compliant. Student data never shared with third parties. Per-tenant data controls.", icon: "🛡️" },
    { title: "Phased Rollout", desc: "5 phases over 24 weeks. Phase 1 infrastructure cost: $136-227/month on GCP.", icon: "🚀" },
  ];

  points.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = col === 0 ? 0.6 : 5.2;
    const y = 1.6 + row * 1.2;

    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.3, h: 1.0, fill: { color: P.light }, shadow: makeShadow() });
    s.addText(p.title, { x: x + 0.2, y: y + 0.08, w: 3.9, h: 0.3, fontSize: 14, fontFace: "Calibri", bold: true, color: P.dark, margin: 0 });
    s.addText(p.desc, { x: x + 0.2, y: y + 0.42, w: 3.9, h: 0.5, fontSize: 10.5, fontFace: "Calibri", color: P.muted, margin: 0 });
  });
}

// ── SLIDE 9: Key Differentiators ──
{
  const s = pres.addSlide();
  s.background = { color: P.navy };

  s.addShape(pres.shapes.OVAL, { x: 7, y: -1, w: 5, h: 5, fill: { color: P.deepBlue, transparency: 85 } });
  s.addShape(pres.shapes.OVAL, { x: -2, y: 3, w: 4, h: 4, fill: { color: P.purple, transparency: 85 } });

  s.addText("Why LearnAI?", {
    x: 0.6, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Georgia", bold: true, color: P.white, margin: 0,
  });

  const diffs = [
    { stat: "6", label: "Persona-based explanations", sub: "No other edtech offers 6 learning styles per topic" },
    { stat: "3-Step", label: "Learn → Teach → Practice", sub: "Pedagogy-backed learning path with teach-back" },
    { stat: "4 Apps", label: "Complete ecosystem", sub: "Student + Tutor + Parent + Admin in one platform" },
    { stat: "AI", label: "Proactive, not reactive", sub: "Spark study buddy nudges before students fall behind" },
    { stat: "B2B", label: "White-label ready", sub: "Any school can launch with their own branding" },
    { stat: "$136", label: "Phase 1 monthly cost", sub: "Lean GCP architecture that scales with demand" },
  ];

  diffs.forEach((d, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.6 + col * 3.1;
    const y = 1.3 + row * 2.0;

    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.85, h: 1.7, fill: { color: P.white, transparency: 92 } });
    s.addText(d.stat, { x, y: y + 0.15, w: 2.85, h: 0.55, fontSize: 32, fontFace: "Georgia", bold: true, color: P.deepBlue, align: "center", margin: 0 });
    s.addText(d.label, { x: x + 0.15, y: y + 0.75, w: 2.55, h: 0.3, fontSize: 12, fontFace: "Calibri", bold: true, color: P.white, align: "center", margin: 0 });
    s.addText(d.sub, { x: x + 0.15, y: y + 1.1, w: 2.55, h: 0.45, fontSize: 9.5, fontFace: "Calibri", color: "8899BB", align: "center", margin: 0 });
  });
}

// ── SLIDE 10: Closing ──
{
  const s = pres.addSlide();
  s.background = { color: P.navy };

  s.addShape(pres.shapes.OVAL, { x: -1, y: -1, w: 4, h: 4, fill: { color: P.deepBlue, transparency: 85 } });
  s.addShape(pres.shapes.OVAL, { x: 7, y: 3.5, w: 4, h: 4, fill: { color: P.purple, transparency: 85 } });

  s.addText("LearnAI", {
    x: 0.6, y: 1.5, w: 8.8, h: 1.0,
    fontSize: 48, fontFace: "Georgia", bold: true, color: P.white, align: "center", margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 4.2, y: 2.6, w: 1.6, h: 0.05, fill: { color: P.deepBlue } });

  s.addText("AI-Powered Adaptive Learning for Every Student", {
    x: 1.5, y: 2.9, w: 7, h: 0.5,
    fontSize: 18, fontFace: "Calibri", color: "CADCFC", align: "center", margin: 0,
  });

  s.addText([
    { text: "Ready for demo walkthrough", options: { breakLine: true, fontSize: 14, color: "8899BB" } },
    { text: "Live prototype: learnai-pwa.vercel.app", options: { fontSize: 13, color: "6677AA" } },
  ], {
    x: 2, y: 3.8, w: 6, h: 0.8,
    fontFace: "Calibri", align: "center", margin: 0,
  });
}

// Write file
const outPath = "/Users/yogi/personal/learnai-pwa/docs/LearnAI-Product-Overview.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("Presentation created: " + outPath);
}).catch(err => {
  console.error("Error:", err);
});
