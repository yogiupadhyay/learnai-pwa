// @ts-nocheck
"use client";
import { useRouter } from "next/navigation";

const roles = [
  { id: "student", label: "Student", desc: "Learn, practice, grow with AI", icon: "📚", color: "#2563EB", bg: "#EFF6FF", path: "/student" },
  { id: "tutor", label: "Tutor", desc: "Teach smarter, save time", icon: "🎓", color: "#7C3AED", bg: "#F3E8FF", path: "/tutor" },
  { id: "parent", label: "Parent", desc: "See your child's progress", icon: "👨‍👩‍👧", color: "#0D9488", bg: "#F0FDFA", path: "/parent" },
  { id: "admin", label: "Admin", desc: "Manage your institution", icon: "🏫", color: "#1E40AF", bg: "#EFF6FF", path: "/admin" },
];

export default function LandingPage() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F3E8FF 100%)" }}>
      <div style={{ textAlign: "center", marginBottom: 48, maxWidth: 480 }}>
        <div style={{ width: 72, height: 72, borderRadius: 20, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: "0 8px 32px rgba(37,99,235,0.25)" }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a5 5 0 0 0-4.8 3.6A4 4 0 0 0 4 9.5a4 4 0 0 0 .5 6A4.5 4.5 0 0 0 8 20h1" />
            <path d="M12 2a5 5 0 0 1 4.8 3.6A4 4 0 0 1 20 9.5a4 4 0 0 1-.5 6A4.5 4.5 0 0 1 16 20h-1" />
            <path d="M12 2v20" />
          </svg>
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: "#0F172A", margin: "0 0 8px", letterSpacing: -0.5 }}>LearnAI</h1>
        <p style={{ fontSize: 16, color: "#64748B", margin: 0, lineHeight: 1.6 }}>AI-powered learning platform for schools</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, width: "100%", maxWidth: 640 }}>
        {roles.map(role => (
          <button
            key={role.id}
            onClick={() => router.push(role.path)}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              padding: "28px 20px", borderRadius: 20,
              border: `2px solid ${role.color}20`, background: role.bg,
              cursor: "pointer", fontFamily: "inherit",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${role.color}20`; e.currentTarget.style.borderColor = role.color; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor = `${role.color}20`; }}
          >
            <span style={{ fontSize: 36 }}>{role.icon}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: role.color }}>{role.label}</span>
            <span style={{ fontSize: 13, color: "#64748B", lineHeight: 1.4 }}>{role.desc}</span>
          </button>
        ))}
      </div>

      <p style={{ marginTop: 40, fontSize: 13, color: "#94A3B8" }}>Prototype — all 4 apps, responsive, PWA-ready</p>
    </div>
  );
}
