// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const SidebarIcon = ({ name, size = 20, color = "currentColor" }) => {
  const p = { fill: "none", stroke: color, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const st = { width: size, height: size, display: "block" };
  const icons = {
    home: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M9 21V13.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6V21"/><path {...p} d="M2 10.5L10.586 2.914a2 2 0 0 1 2.828 0L22 10.5"/><path {...p} d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/></svg>,
    grid: <svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="3" width="7" height="7" rx="1.5"/><rect {...p} x="14" y="3" width="7" height="7" rx="1.5"/><rect {...p} x="3" y="14" width="7" height="7" rx="1.5"/><rect {...p} x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
    users: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle {...p} cx="9" cy="7" r="4"/><path {...p} d="M23 21v-2a4 4 0 0 0-3-3.87"/><path {...p} d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    quiz: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path {...p} d="M14 2v6h6"/><path {...p} d="M9 15l2 2 4-4"/></svg>,
    book: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path {...p} d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    chart: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M18 20V10"/><path {...p} d="M12 20V4"/><path {...p} d="M6 20v-6"/></svg>,
    brain: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2a5 5 0 0 0-4.8 3.6A4 4 0 0 0 4 9.5a4 4 0 0 0 .5 6A4.5 4.5 0 0 0 8 20h1"/><path {...p} d="M12 2a5 5 0 0 1 4.8 3.6A4 4 0 0 1 20 9.5a4 4 0 0 1-.5 6A4.5 4.5 0 0 1 16 20h-1"/><path {...p} d="M12 2v20"/></svg>,
    shield: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    calendar: <svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="4" width="18" height="17" rx="2"/><path {...p} d="M3 10h18M8 2v4M16 2v4"/></svg>,
    trophy: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2"/><path {...p} d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"/><path {...p} d="M6 3h12v6a6 6 0 0 1-12 0V3z"/><path {...p} d="M9 21h6M12 15v6"/></svg>,
    user: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle {...p} cx="12" cy="7" r="4"/></svg>,
    settings: <svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="3"/><path {...p} d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
    back: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M19 12H5M12 5l-7 7 7 7"/></svg>,
    send: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>,
  };
  return icons[name] || null;
};

const appConfigs = {
  student: {
    label: "Student", color: "#2563EB",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    nav: [
      { id: "home", label: "Home", icon: "home" },
      { id: "journey", label: "Journey", icon: "chart" },
      { id: "exam", label: "Exams", icon: "quiz" },
      { id: "revision", label: "Revision", icon: "calendar" },
      { id: "challenge", label: "Challenge", icon: "trophy" },
      { id: "profile", label: "Profile", icon: "user" },
    ],
  },
  tutor: {
    label: "Tutor", color: "#7C3AED",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-4.8 3.6A4 4 0 0 0 4 9.5a4 4 0 0 0 .5 6A4.5 4.5 0 0 0 8 20h1"/><path d="M12 2a5 5 0 0 1 4.8 3.6A4 4 0 0 1 20 9.5a4 4 0 0 1-.5 6A4.5 4.5 0 0 1 16 20h-1"/><path d="M12 2v20"/></svg>,
    nav: [
      { id: "dashboard", label: "Dashboard", icon: "grid" },
      { id: "students", label: "Students", icon: "users" },
      { id: "quizzes", label: "Quizzes", icon: "quiz" },
      { id: "content", label: "Content", icon: "book" },
      { id: "analytics", label: "Analytics", icon: "chart" },
    ],
  },
  parent: {
    label: "Parent", color: "#0D9488",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    nav: [
      { id: "home", label: "Home", icon: "home" },
      { id: "digest", label: "Digest", icon: "calendar" },
      { id: "activity", label: "Activity", icon: "chart" },
      { id: "milestones", label: "Badges", icon: "trophy" },
      { id: "settings", label: "Settings", icon: "user" },
    ],
  },
  admin: {
    label: "Admin", color: "#1E40AF",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    nav: [
      { id: "dashboard", label: "Dashboard", icon: "grid" },
      { id: "teachers", label: "Teachers", icon: "users" },
      { id: "curriculum", label: "Curriculum", icon: "book" },
      { id: "analytics", label: "Analytics", icon: "chart" },
      { id: "settings", label: "Settings", icon: "settings" },
    ],
  },
};

export default function ResponsiveWrapper({ app, children }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const config = appConfigs[app];

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isDesktop) {
    return (
      <div style={{ minHeight: "100vh", background: "#F8FAFC" }}>
        {children}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFC" }}>
      {/* Desktop sidebar */}
      <aside style={{
        width: 240, background: "#FFFFFF", borderRight: "1px solid #E2E8F0",
        position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 40,
        display: "flex", flexDirection: "column",
      }}>
        {/* Logo */}
        <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #E2E8F0" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${config.color}, ${config.color}CC)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {config.icon}
            </div>
            <div>
              <span style={{ fontSize: 15, fontWeight: 800, color: "#0F172A" }}>LearnAI</span>
              <span style={{ fontSize: 11, color: config.color, fontWeight: 600, marginLeft: 6 }}>{config.label}</span>
            </div>
          </Link>
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 2 }}>
          {config.nav.map(item => (
            <button
              key={item.id}
              onClick={() => window.dispatchEvent(new CustomEvent('sidebar-nav', { detail: item.id }))}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 14px", borderRadius: 12,
                color: "#64748B", fontSize: 14, fontWeight: 400,
                cursor: "pointer", border: "none", background: "transparent",
                fontFamily: "inherit", width: "100%", textAlign: "left",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#F1F5F9"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            >
              <SidebarIcon name={item.icon} size={20} color="#64748B" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Switch role */}
        <div style={{ padding: "16px 20px", borderTop: "1px solid #E2E8F0" }}>
          <Link href="/" style={{ fontSize: 13, color: "#64748B", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <SidebarIcon name="back" size={16} color="#64748B" />
            Switch role
          </Link>
        </div>
      </aside>

      {/* Main content — offset by sidebar width */}
      <main className="desktop-hide-bottom-nav" style={{ marginLeft: 240, flex: 1, minWidth: 0 }}>
        {children}
      </main>
    </div>
  );
}
