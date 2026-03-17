// @ts-nocheck
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Icon = ({ type, size = 28, color = "#fff" }) => {
  const s = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    student: <svg {...s}><circle cx="12" cy="8" r="4"/><path d="M5 20a7 7 0 0 1 14 0"/><path d="M15 4l2-2m0 0l2 2m-2-2v4" stroke={color} strokeWidth="2"/></svg>,
    tutor: <svg {...s}><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 9h2m2 0h2m2 0h2" strokeWidth="2" strokeDasharray="0"/><circle cx="12" cy="10" r="0" fill={color}><animate attributeName="r" values="0;2;0" dur="2s" repeatCount="indefinite"/></circle></svg>,
    parent: <svg {...s}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    admin: <svg {...s}><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  };
  return icons[type] || null;
};

const roles = [
  { id: "student", label: "Student", desc: "Learn, practice & grow with your personal AI tutor", icon: "student", color: "#2563EB", gradient: "linear-gradient(135deg, #3B82F6, #2563EB)", path: "/student", features: ["AI Tutor", "Practice", "Challenges"] },
  { id: "tutor", label: "Tutor", desc: "Teach smarter with AI lesson plans & real-time insights", icon: "tutor", color: "#7C3AED", gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)", path: "/tutor", features: ["Lesson Plans", "Analytics", "Reports"] },
  { id: "parent", label: "Parent", desc: "Track your child's learning journey in real-time", icon: "parent", color: "#0D9488", gradient: "linear-gradient(135deg, #14B8A6, #0D9488)", path: "/parent", features: ["Progress", "Screen Time", "Predictions"] },
  { id: "admin", label: "Admin", desc: "Manage your institution with powerful analytics", icon: "admin", color: "#1E40AF", gradient: "linear-gradient(135deg, #3B82F6, #1E40AF)", path: "/admin", features: ["Dashboard", "Teachers", "Billing"] },
];

export default function LandingPage() {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", background: "#FAFBFF", fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', position: "relative", overflow: "hidden" }}>
      {/* Background decoration */}
      <div style={{ position: "absolute", top: -200, right: -200, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -150, left: -150, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
        @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 0.5 } 50% { transform: scale(1.05); opacity: 0.2 } 100% { transform: scale(0.9); opacity: 0.5 } }
      `}</style>

      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: 52, maxWidth: 520, position: "relative", animation: "fadeUp 0.6s ease" }}>
        {/* Logo */}
        <div style={{ position: "relative", display: "inline-block", marginBottom: 24 }}>
          <div style={{ position: "absolute", inset: -8, borderRadius: 28, background: "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.15))", animation: "pulse-ring 3s ease-in-out infinite" }} />
          <div style={{ position: "relative", width: 80, height: 80, borderRadius: 22, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 40px rgba(37,99,235,0.3)", animation: "float 4s ease-in-out infinite" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.5 2 6 5 6 8.5c0 2.5 1.5 4.5 3 6l.5 1h5l.5-1c1.5-1.5 3-3.5 3-6C18 5 15.5 2 12 2z" fill="rgba(255,255,255,0.12)"/>
              <circle cx="12" cy="7.5" r="1.2" fill="#fff" stroke="none"/>
              <circle cx="9" cy="10.5" r="0.9" fill="#fff" stroke="none"/>
              <circle cx="15" cy="10.5" r="0.9" fill="#fff" stroke="none"/>
              <line x1="12" y1="7.5" x2="9" y2="10.5" strokeWidth="0.8" opacity="0.6"/>
              <line x1="12" y1="7.5" x2="15" y2="10.5" strokeWidth="0.8" opacity="0.6"/>
              <line x1="9" y1="10.5" x2="15" y2="10.5" strokeWidth="0.6" opacity="0.3"/>
              <line x1="8.5" y1="17" x2="15.5" y2="17" strokeWidth="2"/>
              <line x1="9.5" y1="19" x2="14.5" y2="19" strokeWidth="1.5"/>
              <line x1="12" y1="0.5" x2="12" y2="-0.5" strokeWidth="1.5" opacity="0.5"/>
              <line x1="6.5" y1="3" x2="5.5" y2="2" strokeWidth="1.2" opacity="0.4"/>
              <line x1="17.5" y1="3" x2="18.5" y2="2" strokeWidth="1.2" opacity="0.4"/>
            </svg>
          </div>
        </div>

        <h1 style={{ fontSize: 42, fontWeight: 800, color: "#0F172A", margin: "0 0 10px", letterSpacing: -1, lineHeight: 1.1 }}>
          Learn<span style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI</span>
        </h1>
        <p style={{ fontSize: 17, color: "#64748B", margin: 0, lineHeight: 1.6, fontWeight: 400 }}>
          AI-powered adaptive learning platform
        </p>
      </div>

      {/* Role cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, width: "100%", maxWidth: 880, animation: "fadeUp 0.6s ease 0.15s both" }}>
        {roles.map((role, i) => {
          const isHovered = hoveredId === role.id;
          return (
            <button
              key={role.id}
              onClick={() => router.push(role.path)}
              onMouseEnter={() => setHoveredId(role.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0,
                padding: 0, borderRadius: 20, border: "none",
                background: "#fff", cursor: "pointer", fontFamily: "inherit",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                boxShadow: isHovered ? `0 20px 40px ${role.color}20, 0 0 0 2px ${role.color}` : "0 2px 12px rgba(0,0,0,0.06)",
                transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                overflow: "hidden", textAlign: "left",
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {/* Icon header */}
              <div style={{
                width: "100%", padding: "28px 24px 20px", display: "flex", alignItems: "center", gap: 14,
                background: isHovered ? role.gradient : "transparent",
                transition: "all 0.3s ease",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  background: isHovered ? "rgba(255,255,255,0.2)" : `${role.color}10`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s ease",
                }}>
                  <Icon type={role.icon} size={26} color={isHovered ? "#fff" : role.color} />
                </div>
                <div>
                  <span style={{ fontSize: 19, fontWeight: 700, color: isHovered ? "#fff" : "#0F172A", transition: "color 0.3s", display: "block" }}>
                    {role.label}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "4px 24px 20px" }}>
                <p style={{ fontSize: 13.5, color: "#64748B", lineHeight: 1.55, margin: "0 0 14px" }}>{role.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {role.features.map(f => (
                    <span key={f} style={{
                      fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 8,
                      background: `${role.color}08`, color: role.color, letterSpacing: 0.2,
                    }}>{f}</span>
                  ))}
                </div>
              </div>

              {/* Bottom accent bar */}
              <div style={{
                width: "100%", height: 3,
                background: isHovered ? role.gradient : `${role.color}15`,
                transition: "all 0.3s ease",
              }} />
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ marginTop: 48, textAlign: "center", animation: "fadeUp 0.6s ease 0.3s both" }}>
        <p style={{ fontSize: 12, color: "#CBD5E1", margin: 0, letterSpacing: 0.5, textTransform: "uppercase", fontWeight: 500 }}>
          Prototype &middot; 4 Apps &middot; 47 Screens &middot; PWA Ready
        </p>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
            max-width: 400px !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr !important;
            max-width: 340px !important;
          }
        }
      `}</style>
    </div>
  );
}
