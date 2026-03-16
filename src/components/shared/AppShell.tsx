// @ts-nocheck
"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export function AppShell({ children, navItems, activeNav, onNav, appName, appLabel, appColor, appIcon, topBarRight }) {
  const scrollRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [activeNav]);

  return (
    <div className="app-shell">
      {/* SIDEBAR — desktop only */}
      <aside className="sidebar" style={{ padding: "0" }}>
        <div style={{ padding: "20px 20px 16px", borderBottom: `1px solid var(--border)` }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${appColor}, ${appColor}CC)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {appIcon}
            </div>
            <div>
              <span style={{ fontSize: 15, fontWeight: 800, color: "var(--text)" }}>LearnAI</span>
              <span style={{ fontSize: 11, color: appColor, fontWeight: 600, marginLeft: 6 }}>{appLabel}</span>
            </div>
          </Link>
        </div>

        <nav style={{ flex: 1, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 2 }}>
          {navItems.map(item => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNav(item.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 14px", borderRadius: 12,
                  border: "none", cursor: "pointer", fontFamily: "inherit",
                  background: isActive ? `${appColor}10` : "transparent",
                  color: isActive ? appColor : "var(--text-muted)",
                  fontSize: 14, fontWeight: isActive ? 600 : 400,
                  transition: "all 0.15s",
                  width: "100%", textAlign: "left",
                }}
              >
                {item.iconEl}
                <span>{item.label}</span>
                {isActive && <div style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: appColor }} />}
              </button>
            );
          })}
        </nav>

        <div style={{ padding: "16px 20px", borderTop: `1px solid var(--border)` }}>
          <Link href="/" style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            Switch role
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* TOP BAR — mobile/tablet only */}
        <div className="top-bar-mobile" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 8px", background: "var(--card)", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 30 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg, ${appColor}, ${appColor}CC)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {appIcon}
            </div>
            <div>
              <span style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>LearnAI</span>
              <span style={{ fontSize: 10, color: appColor, fontWeight: 600, marginLeft: 4 }}>{appLabel}</span>
            </div>
          </Link>
          {topBarRight}
        </div>

        {/* SCROLLABLE CONTENT */}
        <div ref={scrollRef} className="content-scroll" style={{ flex: 1, overflowY: "auto" }}>
          <div className="content-area">
            {children}
          </div>
        </div>
      </main>

      {/* BOTTOM NAV — mobile/tablet only */}
      <div className="bottom-nav" style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderTop: "1px solid var(--border)", justifyContent: "space-around", padding: "6px 0 12px", zIndex: 30 }}>
        {navItems.map(item => {
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
                padding: "4px 12px", background: "transparent", border: "none",
                cursor: "pointer", fontFamily: "inherit",
                color: isActive ? appColor : "var(--text-faint)",
                fontSize: 10, fontWeight: isActive ? 700 : 500,
              }}
            >
              <div style={{ width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", transform: isActive ? "scale(1.15)" : "scale(1)", transition: "transform 0.2s" }}>
                {item.iconEl}
              </div>
              <span>{item.label}</span>
              {isActive && <div style={{ width: 4, height: 4, borderRadius: "50%", background: appColor }} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
