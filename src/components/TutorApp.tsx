// @ts-nocheck
"use client";
import { useState, useRef, useEffect } from "react";

const C={bg:"#F8FAFC",card:"#FFFFFF",text:"#0F172A",textMuted:"#64748B",textFaint:"#94A3B8",primary:"#7C3AED",primarySoft:"#F3E8FF",primaryDark:"#5B21B6",blue:"#2563EB",blueSoft:"#EFF6FF",success:"#10B981",successSoft:"#D1FAE5",successDark:"#065F46",warn:"#F59E0B",warnSoft:"#FEF3C7",warnDark:"#78350F",error:"#EF4444",errorSoft:"#FEE2E2",errorDark:"#7F1D1D",border:"#E2E8F0",borderSoft:"#F1F5F9"};

/* ============ ICONS ============ */
const I=({n,s=24,c="currentColor",w=1.8})=>{const st={width:s,height:s,display:"block"},p={fill:"none",stroke:c,strokeWidth:w,strokeLinecap:"round",strokeLinejoin:"round"};const icons={
home: <svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="3" width="7" height="7" rx="1.5"/><rect {...p} x="14" y="3" width="7" height="7" rx="1.5"/><rect {...p} x="3" y="14" width="7" height="7" rx="1.5"/><rect {...p} x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
students: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle {...p} cx="9" cy="7" r="4"/><path {...p} d="M23 21v-2a4 4 0 0 0-3-3.87"/><path {...p} d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
quiz: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path {...p} d="M14 2v6h6"/><path {...p} d="M9 15l2 2 4-4"/></svg>,
chart: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M18 20V10"/><path {...p} d="M12 20V4"/><path {...p} d="M6 20v-6"/></svg>,
content: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path {...p} d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
alert: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path {...p} d="M12 9v4M12 17h.01"/></svg>,
check: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M20 6L9 17l-5-5"/></svg>,
clock: <svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><path {...p} d="M12 6v6l4 2"/></svg>,
arrowR: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M5 12h14M12 5l7 7-7 7"/></svg>,
arrowL: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M19 12H5M12 5l-7 7 7 7"/></svg>,
chevD: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M6 9l6 6 6-6"/></svg>,
trendUp: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M23 6l-9.5 9.5-5-5L1 18"/><path {...p} d="M17 6h6v6"/></svg>,
brain: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2a5 5 0 0 0-4.8 3.6A4 4 0 0 0 4 9.5a4 4 0 0 0 .5 6A4.5 4.5 0 0 0 8 20h1"/><path {...p} d="M12 2a5 5 0 0 1 4.8 3.6A4 4 0 0 1 20 9.5a4 4 0 0 1-.5 6A4.5 4.5 0 0 1 16 20h-1"/><path {...p} d="M12 2v20"/></svg>,
zap: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
send: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>,
plus: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 5v14M5 12h14"/></svg>,
bell: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path {...p} d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
upload: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path {...p} d="M17 8l-5-5-5 5M12 3v12"/></svg>,
radio: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M16.24 7.76a6 6 0 0 1 0 8.49M19.07 4.93a10 10 0 0 1 0 14.14"/><circle {...p} cx="12" cy="12" r="2" fill={c}/></svg>,
download: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path {...p} d="M7 10l5 5 5-5M12 15V3"/></svg>,
star: <svg style={st} viewBox="0 0 24 24"><path {...p} fill={c} opacity="0.2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path {...p} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
shield: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
msg: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
file: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path {...p} d="M14 2v6h6"/></svg>,
play: <svg style={st} viewBox="0 0 24 24"><polygon {...p} points="5 3 19 12 5 21" fill={c} opacity="0.3"/><polygon {...p} points="5 3 19 12 5 21"/></svg>,
target: <svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><circle {...p} cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill={c} stroke="none"/></svg>,
calendar: <svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="4" width="18" height="17" rx="2"/><path {...p} d="M3 10h18M8 2v4M16 2v4"/></svg>,
link: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path {...p} d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
userPlus: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle {...p} cx="8.5" cy="7" r="4"/><path {...p} d="M20 8v6M23 11h-6"/></svg>,
bookmark: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
edit: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path {...p} d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
eye: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle {...p} cx="12" cy="12" r="3"/></svg>,
activity: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
filter: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>,
user: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle {...p} cx="12" cy="7" r="4"/></svg>,
settings: <svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="3"/><path {...p} d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
logout: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path {...p} d="M16 17l5-5-5-5M21 12H9"/></svg>,
mail: <svg style={st} viewBox="0 0 24 24"><rect {...p} x="2" y="4" width="20" height="16" rx="2"/><path {...p} d="M22 7l-10 7L2 7"/></svg>,
phone: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
help: <svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><path {...p} d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path {...p} d="M12 17h.01"/></svg>,
info: <svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><path {...p} d="M12 16v-4M12 8h.01"/></svg>,
sparkle: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/><path {...p} d="M5 3l1 3.5L2 8l3.5 1L5 12.5 6 9l3.5-1L6 6.5 5 3z" opacity="0.5"/></svg>,
whatsapp: <svg style={st} viewBox="0 0 24 24"><path {...p} d="M17.47 14.38c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.18.28-.72.9-.88 1.08-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.24-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.47-.62-.48h-.53c-.19 0-.49.07-.74.35-.25.28-.97.95-.97 2.31s.99 2.68 1.13 2.87c.14.19 1.95 2.98 4.73 4.18.66.28 1.18.46 1.58.59.66.21 1.27.18 1.74.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/><path {...p} d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2z"/></svg>,
};return icons[n]||null;};

/* ============ PRIMITIVES ============ */
const Card = ({children, style, onClick}) => <div onClick={onClick} style={{background:C.card,borderRadius:16,padding:20,border:`1px solid ${C.border}`,...(onClick?{cursor:"pointer"}:{}),...style}}>{children}</div>;
const Pill = ({text, color=C.primary, bg, icon}) => <span style={{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 12px",borderRadius:999,fontSize:12,fontWeight:600,background:bg||`${color}15`,color}}>{icon&&<I n={icon} s={13} c={color} w={2}/>}{text}</span>;
const Btn = ({children, variant="primary", style, onClick, full, icon}) => {
  const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,height:44,padding:"0 20px",borderRadius:12,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit",border:"none",transition:"all 0.12s",...(full?{width:"100%"}:{})};
  const v={primary:{background:C.primary,color:"#fff"},blue:{background:C.blue,color:"#fff"},soft:{background:C.primarySoft,color:C.primary},ghost:{background:"transparent",color:C.primary,border:`1.5px solid ${C.border}`},success:{background:C.success,color:"#fff"},warn:{background:C.warnSoft,color:C.warnDark},danger:{background:C.errorSoft,color:C.errorDark},small:{height:34,padding:"0 12px",fontSize:12,borderRadius:8,background:C.primarySoft,color:C.primary}};
  return <button onClick={onClick} style={{...base,...v[variant],...style}}>{icon&&<I n={icon} s={16} c={v[variant]?.color||"#fff"} w={2}/>}{children}</button>;
};
const Bar = ({value, max=100, color=C.primary, h=6}) => <div style={{width:"100%",height:h,background:`${color}20`,borderRadius:h,overflow:"hidden"}}><div style={{width:`${Math.min((value/max)*100,100)}%`,height:"100%",background:color,borderRadius:h,transition:"width 0.5s"}}/></div>;
const Avatar = ({name, size=36, color=C.primary}) => <div style={{width:size,height:size,borderRadius:"50%",background:`${color}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:size*0.38,fontWeight:700,color,flexShrink:0}}>{name[0].toUpperCase()}</div>;
const Stat = ({label, value, icon, color=C.primary, sub}) => <Card style={{padding:16,flex:1}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}><I n={icon} s={20} c={color}/>{sub&&<span style={{fontSize:11,color:sub.includes("+")?C.success:sub.includes("-")?C.error:C.textMuted,fontWeight:600}}>{sub}</span>}</div><p style={{fontSize:22,fontWeight:800,color:C.text,margin:"0 0 2px"}}>{value}</p><p style={{fontSize:11,color:C.textMuted,margin:0}}>{label}</p></Card>;
const Back = ({onClick}) => <button onClick={onClick} style={{background:"transparent",border:"none",cursor:"pointer",padding:4,display:"flex",color:C.textMuted}}><I n="arrowL" s={22} c={C.textMuted}/></button>;

/* ============ DATA ============ */
// MOCK DATA — In production, fetched from API. Students reference classes via classId (foreign key to allClasses[].id).
// allClasses represents the logged-in teacher's (Ms. Sharma) assigned classes.
const allClasses=[{id:"6b",name:"Class 6-B",students:28,subject:"Science + Math"},{id:"6a",name:"Class 6-A",students:32,subject:"Science"},{id:"7a",name:"Class 7-A",students:30,subject:"Math"}];

const students=[
  {name:"Riya Sharma",classId:"6b",mastery:88,streak:12,xp:520,weak:[],flag:null,lastActive:"2h ago",grade:"A+",color:C.success,group:"toppers",enrolled:true,quizzes:34,avgTime:"1.8min",hintRate:"5%",insight:"Consistently strong. Ready for Olympiad challenges.",
   skills:[{topic:"Temperature",score:95,signal:"strong",detail:"Fast + accurate. Rarely uses hints."},{topic:"Conduction",score:88,signal:"strong",detail:"Solid understanding, explains concepts well in teach-back."},{topic:"Convection",score:82,signal:"solid",detail:"Minor confusion on real-world examples."},{topic:"Fractions",score:92,signal:"strong",detail:"Masters all operations including mixed numbers."}],
   timeline:[{time:"8:15 AM",action:"Completed daily mission",detail:"8/8 correct, avg 1.2 min/Q",color:C.success},{time:"8:30 AM",action:"Challenge: Weekly 5 hard Qs",detail:"4/5 correct, +50 XP",color:C.primary},{time:"4:00 PM",action:"Tutor: Refraction",detail:"Explored beyond-syllabus Snell's law",color:C.blue}],
   notes:""},
  {name:"Aarav Patel",classId:"6b",mastery:62,streak:3,xp:240,weak:["Convection","Fractions"],flag:null,lastActive:"4h ago",grade:"B",color:C.blue,group:"average",enrolled:true,quizzes:18,avgTime:"2.5min",hintRate:"22%",insight:"Improving. Struggles with word problems. Responds to visual explanations.",
   skills:[{topic:"Temperature",score:78,signal:"solid",detail:"Good but slow response time (2.8min avg)."},{topic:"Conduction",score:65,signal:"developing",detail:"Understands concept but mixes terms."},{topic:"Convection",score:42,signal:"weak",detail:"Confuses with conduction. 3/4 hints used last session."},{topic:"Fractions",score:45,signal:"weak",detail:"Word problems are the gap, not computation. Fast+wrong pattern."}],
   timeline:[{time:"5:30 PM",action:"Daily mission",detail:"5/8 correct",color:C.warn},{time:"5:45 PM",action:"Ask bar: 'what is convection'",detail:"Tutor session, 8 min",color:C.blue},{time:"6:10 PM",action:"Photo homework: Fractions",detail:"Needed 3/4 hints",color:C.warn}],
   notes:""},
  {name:"Arjun Kumar",classId:"6b",mastery:45,streak:0,xp:120,weak:["Heat Transfer","Decimals","Ratios"],flag:"declining",lastActive:"2 days",grade:"C",color:C.warn,group:"average",enrolled:true,quizzes:8,avgTime:"3.1min",hintRate:"45%",insight:"Engagement dropping. Lost streak 2 days ago. Social features may help.",
   skills:[{topic:"Temperature",score:60,signal:"developing",detail:"Knows basics but can't apply."},{topic:"Heat Transfer",score:30,signal:"critical",detail:"Confuses all three methods. Avoids topic."},{topic:"Decimals",score:35,signal:"critical",detail:"Place value errors. Foundation gap from Class 5."},{topic:"Ratios",score:28,signal:"critical",detail:"Cannot set up ratios from word problems."}],
   timeline:[{time:"2 days ago",action:"Daily mission (last activity)",detail:"3/8 correct, abandoned at Q6",color:C.error},{time:"2 days ago",action:"Opened app, browsed, left",detail:"No practice done. Session: 2 min",color:C.textFaint}],
   notes:"Sits next to Vikram — they distract each other. Consider moving seats."},
  {name:"Priya Gupta",classId:"6a",mastery:28,streak:0,xp:60,weak:["Fractions","Convection","Refraction"],flag:"struggling",lastActive:"5 days",grade:"D",color:C.error,group:"foundation",enrolled:true,quizzes:4,avgTime:"4.2min",hintRate:"72%",insight:"Severely behind — Class 5 gaps. High hint usage = anxiety, not laziness.",
   skills:[{topic:"Temperature",score:50,signal:"developing",detail:"Understands hot/cold but not measurement."},{topic:"Fractions",score:18,signal:"critical",detail:"Class 5 gap. Thinks fractions = 'divide top by bottom'. 4/4 hints every session."},{topic:"Convection",score:15,signal:"critical",detail:"Confuses with conduction. Avoids heat transfer topics entirely."},{topic:"Refraction",score:10,signal:"critical",detail:"Only attempted once, gave up after Q2."}],
   timeline:[{time:"5 days ago",action:"Daily mission (last activity)",detail:"2/8 correct",color:C.error},{time:"5 days ago",action:"Foundation plan: Basic fractions",detail:"Completed 3/10 steps, then stopped",color:C.warn}],
   notes:"Parents recently separated. She seems distracted and withdrawn in class. Handle gently."},
  {name:"Neha Reddy",classId:"6a",mastery:71,streak:7,xp:380,weak:["Refraction"],flag:null,lastActive:"1h ago",grade:"B+",color:C.success,group:"toppers",enrolled:true,quizzes:26,avgTime:"2.1min",hintRate:"15%",insight:"Strong and consistent. One weak area: Refraction. Focused push would close it.",
   skills:[{topic:"Temperature",score:85,signal:"strong",detail:"Quick and accurate."},{topic:"Conduction",score:78,signal:"solid",detail:"Good teach-back quality."},{topic:"Fractions",score:80,signal:"solid",detail:"Handles all types including mixed."},{topic:"Refraction",score:32,signal:"weak",detail:"Struggles with Snell's law application. 2/4 hints used."}],
   timeline:[{time:"10:00 AM",action:"Daily mission",detail:"7/8 correct",color:C.success},{time:"3:00 PM",action:"Teacher assignment: Light quiz",detail:"8/10 correct, Refraction Qs wrong",color:C.warn},{time:"3:30 PM",action:"Tutor: Refraction",detail:"12 min session, teach-back score 3/5",color:C.blue}],
   notes:""},
  {name:"Vikram Singh",classId:"6a",mastery:52,streak:1,xp:170,weak:["Mixed Numbers","Convection"],flag:null,lastActive:"6h ago",grade:"C+",color:C.warn,group:"foundation",enrolled:true,quizzes:12,avgTime:"2.8min",hintRate:"35%",insight:"Improving after foundation repair. Math booster showing results.",
   skills:[{topic:"Temperature",score:65,signal:"developing",detail:"Improving steadily, +20% this month."},{topic:"Convection",score:38,signal:"weak",detail:"Same confusion pattern as Aarav."},{topic:"Fractions",score:55,signal:"developing",detail:"Like fractions OK, unlike fractions still shaky."},{topic:"Mixed Numbers",score:30,signal:"critical",detail:"Cannot convert between mixed and improper."}],
   timeline:[{time:"6:00 PM",action:"Foundation plan: Unlike fractions",detail:"Step 5/8 completed",color:C.blue},{time:"6:20 PM",action:"Daily mission",detail:"4/8 correct",color:C.warn}],
   notes:""},
  {name:"Ankit Mehta",classId:"7a",mastery:66,streak:4,xp:280,weak:["Geometry"],flag:null,lastActive:"3h ago",grade:"B",color:C.blue,group:"average",enrolled:true,quizzes:20,avgTime:"2.3min",hintRate:"18%",insight:"Steady performer. Geometry is the only gap.",
   skills:[{topic:"Algebra",score:78,signal:"solid",detail:"Handles linear equations well."},{topic:"Geometry",score:42,signal:"weak",detail:"Struggles with angle theorems."},{topic:"Ratios",score:70,signal:"solid",detail:"Good with simple ratios."}],
   timeline:[{time:"3:00 PM",action:"Daily mission",detail:"6/8 correct",color:C.success}],
   notes:""},
  {name:"Deepa Iyer",classId:"7a",mastery:74,streak:9,xp:410,weak:[],flag:null,lastActive:"1h ago",grade:"A-",color:C.success,group:"toppers",enrolled:true,quizzes:28,avgTime:"1.9min",hintRate:"8%",insight:"Strong and consistent. Math Olympiad candidate.",
   skills:[{topic:"Algebra",score:85,signal:"strong",detail:"Quick and accurate."},{topic:"Geometry",score:68,signal:"developing",detail:"Improving steadily."},{topic:"Ratios",score:82,signal:"strong",detail:"Excellent with word problems."}],
   timeline:[{time:"2:00 PM",action:"Daily mission",detail:"8/8 correct",color:C.success},{time:"2:30 PM",action:"Challenge: Weekly contest",detail:"5/5 correct, +60 XP",color:C.primary}],
   notes:""},
  {name:"Rohan Jha",classId:"7a",mastery:38,streak:0,xp:90,weak:["Algebra","Geometry"],flag:"struggling",lastActive:"3 days",grade:"D+",color:C.error,group:"foundation",enrolled:true,quizzes:6,avgTime:"3.8min",hintRate:"55%",insight:"Foundation gaps from Class 6. Needs algebra basics reteach.",
   skills:[{topic:"Algebra",score:32,signal:"critical",detail:"Cannot solve basic equations."},{topic:"Geometry",score:25,signal:"critical",detail:"Confused by basic angle concepts."},{topic:"Ratios",score:48,signal:"developing",detail:"Can do simple ratios but struggles with proportions."}],
   timeline:[{time:"3 days ago",action:"Daily mission (last)",detail:"2/8 correct, abandoned",color:C.error}],
   notes:"Frequently absent. May have attendance issues at home."},
];

const notEnrolled=[
  {name:"Rahul Verma",reason:"Parent didn't install",classId:"6b"},
  {name:"Ananya Das",reason:"No smartphone",classId:"6b"},
  {name:"Karan Joshi",reason:"Lost password",classId:"6a"},
  {name:"Meera Nair",reason:"Never signed up",classId:"7a"}
];

const syllabus=[{chapter:"Heat",topics:4,status:"taught",mastery:58},{chapter:"Light",topics:3,status:"taught",mastery:42},{chapter:"Electricity",topics:4,status:"in-progress",mastery:15},{chapter:"Magnets",topics:3,status:"pending",mastery:0},{chapter:"Water",topics:2,status:"pending",mastery:0},{chapter:"Air",topics:2,status:"pending",mastery:0}];

/* ============ CLASS SWITCHER ============ */
const ClassSwitcher=({current,onSwitch,classes})=>{const[open,setOpen]=useState(false);return <div style={{position:"relative"}}>
  <button onClick={()=>setOpen(!open)} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.card,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:C.text}}>{current.name}<I n="chevD" s={14} c={C.textMuted}/></button>
  {open&&<div style={{position:"absolute",top:"100%",left:0,marginTop:4,background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:4,boxShadow:"0 8px 24px rgba(0,0,0,0.1)",zIndex:100,width:200}}>
    {classes.map(cl=><button key={cl.id} onClick={()=>{onSwitch(cl);setOpen(false);}} style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"10px 12px",borderRadius:8,border:"none",background:cl.id===current.id?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit"}}><span style={{fontSize:13,fontWeight:cl.id===current.id?600:400,color:cl.id===current.id?C.primary:C.text}}>{cl.name}</span><span style={{fontSize:11,color:C.textMuted}}>{cl.students}</span></button>)}
  </div>}
</div>;};

/* ============ SETUP WIZARD ============ */
const SetupWizard=({onComplete})=>{const[step,setStep]=useState(0);const[classes,setClasses]=useState([]);const[chapters,setChapters]=useState(["Heat","Light"]);const[importType,setImportType]=useState(null);
if(step===0) return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"80vh",gap:24,padding:20,textAlign:"center"}}><div style={{width:80,height:80,borderRadius:22,background:"linear-gradient(135deg, #2563EB, #7C3AED)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 40px rgba(37,99,235,0.3)"}}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9 2 7 4.5 7 7.5c0 2 1.2 3.8 2.5 5l.5.8h4l.5-.8C15.8 11.3 17 9.5 17 7.5 17 4.5 15 2 12 2z" fill="rgba(255,255,255,0.12)"/><circle cx="12" cy="6.5" r="1" fill="#fff" stroke="none"/><circle cx="9.8" cy="9" r=".7" fill="#fff" stroke="none"/><circle cx="14.2" cy="9" r=".7" fill="#fff" stroke="none"/><line x1="12" y1="6.5" x2="9.8" y2="9" strokeWidth=".7" opacity=".5"/><line x1="12" y1="6.5" x2="14.2" y2="9" strokeWidth=".7" opacity=".5"/><line x1="9" y1="16" x2="15" y2="16"/><line x1="10" y1="18" x2="14" y2="18"/></svg></div><h1 style={{fontSize:28,fontWeight:800,color:C.text,margin:0}}>Welcome, Ms. Sharma</h1><p style={{fontSize:15,color:C.textMuted,margin:0,lineHeight:1.6,maxWidth:300}}>Let's set up your dashboard in 2 minutes.</p><Btn full onClick={()=>setStep(1)}>Let's go</Btn></div>;
if(step===1) return <div style={{display:"flex",flexDirection:"column",gap:20,padding:20}}><div><p style={{fontSize:13,color:C.textMuted,margin:"0 0 4px"}}>Step 1 of 3</p><h2 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Which classes do you teach?</h2></div><div style={{display:"flex",flexDirection:"column",gap:10}}>{allClasses.map(cl=>{const sel=classes.includes(cl.id);return <button key={cl.id} onClick={()=>setClasses(sel?classes.filter(c=>c!==cl.id):[...classes,cl.id])} style={{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",borderRadius:14,border:`2px solid ${sel?C.primary:C.border}`,background:sel?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",textAlign:"left"}}>{sel&&<I n="check" s={18} c={C.primary} w={2.5}/>}<div style={{flex:1}}><p style={{fontSize:15,fontWeight:600,color:sel?C.primary:C.text,margin:0}}>{cl.name}</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{cl.students} students • {cl.subject}</p></div></button>;})}</div><Btn full onClick={()=>setStep(2)} variant={classes.length?"primary":"ghost"}>Continue</Btn></div>;
if(step===2) return <div style={{display:"flex",flexDirection:"column",gap:20,padding:20}}><div><p style={{fontSize:13,color:C.textMuted,margin:"0 0 4px"}}>Step 2 of 3</p><h2 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>What have you taught?</h2></div><div style={{display:"flex",flexDirection:"column",gap:8}}>{syllabus.map(ch=>{const sel=chapters.includes(ch.chapter);return <button key={ch.chapter} onClick={()=>setChapters(sel?chapters.filter(c=>c!==ch.chapter):[...chapters,ch.chapter])} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",borderRadius:12,border:`2px solid ${sel?C.success:C.border}`,background:sel?C.successSoft:"transparent",cursor:"pointer",fontFamily:"inherit"}}><div style={{width:24,height:24,borderRadius:6,border:`2px solid ${sel?C.success:C.border}`,display:"flex",alignItems:"center",justifyContent:"center",background:sel?C.success:"transparent"}}>{sel&&<I n="check" s={14} c="#fff" w={2.5}/>}</div><span style={{fontSize:14,fontWeight:500,color:sel?C.successDark:C.text,flex:1}}>{ch.chapter}</span><span style={{fontSize:12,color:C.textMuted}}>{ch.topics} topics</span></button>;})}</div><Btn full onClick={()=>setStep(3)}>Continue</Btn></div>;
return <div style={{display:"flex",flexDirection:"column",gap:20,padding:20}}><div><p style={{fontSize:13,color:C.textMuted,margin:"0 0 4px"}}>Step 3 of 3 (optional)</p><h2 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Import existing marks?</h2></div><div style={{display:"flex",gap:10}}>{["Upload CSV","Type manually","Skip"].map(t=><button key={t} onClick={()=>setImportType(t)} style={{flex:1,height:56,borderRadius:14,border:`2px solid ${importType===t?C.primary:C.border}`,background:importType===t?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:importType===t?C.primary:C.textMuted,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4}}><I n={t==="Upload CSV"?"upload":t==="Type manually"?"quiz":"arrowR"} s={18} c={importType===t?C.primary:C.textMuted}/>{t}</button>)}</div><Btn full onClick={()=>onComplete(classes)} variant="primary" icon="check" style={{height:52,fontSize:16,marginTop:8}}>Finish setup</Btn><Card style={{background:C.blueSoft,border:`1px solid ${C.blue}30`,padding:14}}><p style={{fontSize:12,color:C.blue,margin:0,lineHeight:1.5}}>The AI starts learning from day 1. After students complete a few quizzes, your dashboard fills with insights.</p></Card></div>;
};

/* ============ DASHBOARD (FIX #3: Context-aware actions) ============ */
const DashboardScreen=({navigate,currentClass})=>{
  const classStudents=students.filter(s=>s.classId===currentClass.id);
  const classNotEnrolled=notEnrolled.filter(s=>s.classId===currentClass.id);
  const flagged=classStudents.filter(s=>s.flag);
  const taughtCount=syllabus.filter(s=>s.status==="taught").length;
  const pendingCount=syllabus.filter(s=>s.status==="pending").length;
  const hour=new Date().getHours();
  const timeContext=hour<12?"morning":hour<16?"afternoon":"evening";
  const[expandedMisc,setExpandedMisc]=useState(null);
  const misconceptions=[
    {text:"Fractions = divide numerator by denominator",students:classStudents.filter(s=>s.mastery<60).map(s=>s.name.split(" ")[0]),topic:"Fractions",severity:43},
    {text:"Confuses conduction with convection",students:classStudents.filter(s=>s.weak.some(w=>w.includes("Convection")||w.includes("Heat"))).map(s=>s.name.split(" ")[0]),topic:"Heat",severity:29},
    {text:"Thinks multiplication makes numbers bigger",students:classStudents.filter(s=>s.group==="foundation").map(s=>s.name.split(" ")[0]),topic:"Multiplication",severity:18},
  ];

  const contextActions={
    morning:[
      {label:"Today: teach Electricity Ch.3",desc:"You're on track — 38 days to SA1",icon:"calendar",color:C.blue},
      {label:"Prep: 6 students missed yesterday's HW",desc:"Send a quick reminder before class",icon:"bell",color:C.warn},
      {label:"Push warm-up quiz on yesterday's topic",desc:"Quick 5-question recap to start class",icon:"send",color:C.primary},
    ],
    afternoon:[
      {label:"Push practice on what you just taught",desc:"AI generates quiz on Electricity basics",icon:"send",color:C.primary},
      {label:"Reteach Convection — class avg 38%",desc:"Lowest impact topic, visual demo recommended",icon:"brain",color:C.warn},
      {label:"Start live poll to check understanding",desc:"Quick class pulse before end of period",icon:"radio",color:C.blue},
    ],
    evening:[
      {label:"3 students haven't done today's HW",desc:"Arjun, Priya, Karan — send nudge",icon:"bell",color:C.warn},
      {label:"Weekly summary: class improved 4%",desc:"Strong week — Temperature mastery up 12%",icon:"trendUp",color:C.success},
      {label:"Push Fractions quiz to Foundation group",desc:"8 students below 50% need practice",icon:"send",color:C.primary},
    ],
  };
  const actions=contextActions[timeContext];

  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:"0 0 4px"}}>Good {timeContext}, Ms. Sharma</h1><p style={{fontSize:13,color:C.textMuted,margin:0}}>{currentClass.students} students • {currentClass.subject}</p></div>

    {/* Syllabus pacing */}
    <Card style={{background:"linear-gradient(135deg, #5B21B6, #7C3AED)",border:"none",padding:18,color:"#fff"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
        <div><Pill text="SA1 in 38 days" bg="rgba(255,255,255,0.2)" color="#fff" icon="calendar"/><p style={{fontSize:15,fontWeight:700,margin:"8px 0 2px"}}>{pendingCount} chapters pending</p><p style={{fontSize:12,opacity:0.7,margin:0}}>Pace: 1.3 chapters/week</p></div>
        <div style={{textAlign:"center"}}><p style={{fontSize:28,fontWeight:800,margin:0}}>{taughtCount}/{syllabus.length}</p><p style={{fontSize:11,opacity:0.7,margin:"2px 0 0"}}>Taught</p></div>
      </div>
      <Bar value={taughtCount} max={syllabus.length} color="rgba(255,255,255,0.5)" h={4}/>
    </Card>

    {/* Prep tomorrow's class */}
    <Card onClick={()=>navigate("lessonPlan")} style={{cursor:"pointer",background:`linear-gradient(135deg, ${C.primarySoft}, ${C.blueSoft})`,border:`1px solid ${C.primary}25`,padding:18}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:44,height:44,borderRadius:14,background:`${C.primary}18`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="sparkle" s={24} c={C.primary}/></div>
        <div style={{flex:1}}>
          <p style={{fontSize:15,fontWeight:700,color:C.text,margin:"0 0 3px"}}>Prep tomorrow's class</p>
          <p style={{fontSize:12,color:C.textMuted,margin:0}}>Next: Convection — Chapter 4</p>
        </div>
        <I n="arrowR" s={16} c={C.primary}/>
      </div>
      <Btn variant="primary" full icon="sparkle" style={{marginTop:12,height:48,fontSize:15}} onClick={(e)=>{e.stopPropagation();navigate("lessonPlan");}}>Generate lesson plan</Btn>
    </Card>

    <div style={{display:"flex",gap:10}}>
      <Stat label="Class mastery" value={`${Math.round(classStudents.reduce((a,s)=>a+s.mastery,0)/classStudents.length)}%`} icon="brain" color={C.primary} sub="+3%"/>
      <Stat label="Active today" value={`${classStudents.filter(s=>!s.lastActive.includes("day")).length}/${currentClass.students}`} icon="students" color={C.blue} sub="+4"/>
      <Stat label="Pending" value="3" icon="send" color={C.warn}/>
    </div>

    {/* SA1 Prediction */}
    <Card style={{padding:14,display:"flex",alignItems:"center",gap:14}}>
      <div style={{width:40,height:40,borderRadius:12,background:`${C.blue}12`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="target" s={20} c={C.blue}/></div>
      <div style={{flex:1}}>
        <p style={{fontSize:13,fontWeight:600,color:C.text,margin:"0 0 4px"}}>Class SA1 prediction: <span style={{fontWeight:800,color:C.blue}}>64%</span></p>
        <Bar value={64} color={C.blue} h={5}/>
        <p style={{fontSize:11,color:C.error,margin:"4px 0 0",fontWeight:600}}>At-risk students: 5 <span style={{fontWeight:400,color:C.textMuted}}>(below 50% predicted)</span></p>
      </div>
    </Card>

    {/* Enrollment tracker */}
    <Card style={{background:C.warnSoft,border:`1px solid ${C.warn}30`,padding:14}} onClick={()=>navigate("enrollment")}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}><I n="userPlus" s={20} c={C.warnDark}/><div><p style={{fontSize:13,fontWeight:600,color:C.warnDark,margin:0}}>{classNotEnrolled.length} students haven't joined</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{classStudents.filter(s=>s.enrolled).length}/{currentClass.students} on LearnAI</p></div></div>
        <I n="arrowR" s={16} c={C.warnDark}/>
      </div>
    </Card>

    {/* Teaching effectiveness */}
    <Card style={{background:C.primarySoft,border:`1px solid ${C.primary}30`,padding:16}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><I n="trendUp" s={18} c={C.primary}/><p style={{fontSize:13,fontWeight:700,color:C.primary,margin:0}}>Your teaching impact</p></div>
      <div style={{display:"flex",gap:12}}>{[{t:"Temperature",b:40,a:78,c:C.success},{t:"Conduction",b:30,a:62,c:C.success},{t:"Convection",b:25,a:38,c:C.warn}].map(t=><div key={t.t} style={{flex:1,textAlign:"center"}}><p style={{fontSize:11,color:C.textMuted,margin:"0 0 4px"}}>{t.t}</p><p style={{fontSize:15,fontWeight:800,color:t.c,margin:0}}>{t.b}%→{t.a}%</p></div>)}</div>
    </Card>

    {/* Misconception Radar */}
    <Card style={{padding:18,border:`1px solid ${C.error}25`}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}><div style={{width:32,height:32,borderRadius:10,background:C.errorSoft,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="alert" s={18} c={C.error}/></div><p style={{fontSize:14,fontWeight:700,color:C.error,margin:0}}>Misconception radar</p></div>
      {misconceptions.map((m,i)=><div key={i} style={{marginBottom:i<misconceptions.length-1?8:0}}>
        <div style={{display:"flex",alignItems:"center",gap:8,padding:"10px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:C.error,flexShrink:0}}/>
          <span style={{fontSize:12,color:C.text,flex:1,lineHeight:1.4}}>{m.text}</span>
          <Pill text={`${m.students.length}`} color={C.error}/>
          <div style={{width:48}}><Bar value={m.severity} max={50} color={C.error} h={4}/></div>
          <button onClick={()=>setExpandedMisc(expandedMisc===i?null:i)} style={{padding:"4px 10px",borderRadius:8,border:`1.5px solid ${expandedMisc===i?C.error:C.border}`,background:expandedMisc===i?C.errorSoft:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:600,color:expandedMisc===i?C.error:C.textMuted}}>{expandedMisc===i?"Close":"Fix it"}</button>
        </div>
        {expandedMisc===i&&<div style={{padding:"10px 0 6px 16px",display:"flex",flexDirection:"column",gap:10}}>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{m.students.map((name,j)=><div key={j} style={{display:"inline-flex",alignItems:"center",gap:4,padding:"3px 8px",borderRadius:999,background:`${C.error}10`,fontSize:11,color:C.error,fontWeight:500}}><Avatar name={name} size={18} color={C.error}/>{name}</div>)}</div>
          <div style={{display:"flex",gap:8}}>
            <Btn variant="small" icon="play" style={{background:`${C.primary}12`,color:C.primary}}>Push visual explainer</Btn>
            <Btn variant="small" icon="send" style={{background:`${C.blue}12`,color:C.blue}}>Push practice quiz</Btn>
          </div>
        </div>}
      </div>)}
    </Card>

    {/* Flagged students */}
    {flagged.length>0&&<div><p style={{fontSize:13,fontWeight:700,color:C.error,margin:"0 0 8px",display:"flex",alignItems:"center",gap:6}}><I n="alert" s={15} c={C.error}/> Needs attention</p>
      {flagged.map((s,i)=><Card key={i} onClick={()=>navigate("student",s)} style={{marginBottom:8,padding:14,borderLeft:`4px solid ${s.flag==="struggling"?C.error:C.warn}`,borderRadius:"4px 16px 16px 4px",display:"flex",alignItems:"center",gap:12,cursor:"pointer"}}><Avatar name={s.name} size={36} color={s.color}/><div style={{flex:1}}><div style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:13,fontWeight:600,color:C.text}}>{s.name}</span><Pill text={s.flag==="struggling"?"Help":"Declining"} color={s.flag==="struggling"?C.error:C.warn}/></div><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{s.insight.substring(0,60)}...</p></div><I n="arrowR" s={16} c={C.textFaint}/></Card>)}
    </div>}

    {/* CONTEXT-AWARE AI ACTIONS (FIX #3) */}
    <div><p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 8px",display:"flex",alignItems:"center",gap:6}}><I n="zap" s={15} c={C.primary}/> {timeContext==="morning"?"Before class":timeContext==="afternoon"?"After teaching":"End of day"}</p>
      {actions.map((a,i)=><Card key={i} style={{marginBottom:8,padding:14,display:"flex",alignItems:"center",gap:12}}>
        <div style={{width:36,height:36,borderRadius:10,background:`${a.color}12`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n={a.icon} s={18} c={a.color}/></div>
        <div style={{flex:1}}><p style={{fontSize:13,fontWeight:500,color:C.text,margin:0}}>{a.label}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{a.desc}</p></div>
        <Btn variant="small" icon="check">Do it</Btn>
      </Card>)}
    </div>

    {/* Live poll */}
    <Card onClick={()=>navigate("poll")} style={{cursor:"pointer",background:`${C.blue}08`,border:`1px solid ${C.blue}25`,padding:14,display:"flex",alignItems:"center",gap:12}}>
      <div style={{width:40,height:40,borderRadius:12,background:`${C.blue}15`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="radio" s={22} c={C.blue}/></div>
      <div style={{flex:1}}><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>Start live poll</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>Quick class check during lesson</p></div>
      <I n="arrowR" s={16} c={C.textFaint}/>
    </Card>
  </div>;
};

/* ============ STUDENT PROFILE (FIXES #1, #2, #4) ============ */
const StudentProfile=({navigate,student:s})=>{
  const[tab,setTab]=useState("skills");
  const[showReport,setShowReport]=useState(false);
  const[noteText,setNoteText]=useState(s.notes||"");
  const[editingNote,setEditingNote]=useState(false);
  const signalColors={strong:C.success,solid:C.blue,developing:C.warn,weak:C.error,critical:C.error};

  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("students")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>{s.name}</h1></div>

    <Card style={{display:"flex",alignItems:"center",gap:16,padding:16}}>
      <Avatar name={s.name} size={52} color={s.color}/>
      <div style={{flex:1}}>
        <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}><Pill text={`Grade ${s.grade}`} color={s.color}/><Pill text={`${s.streak}d streak`} icon="clock" color={s.streak>0?C.success:C.error}/><Pill text={s.group} color={C.textMuted} bg={C.borderSoft}/></div>
        <Bar value={s.mastery} color={s.color} h={6}/><p style={{fontSize:11,color:C.textMuted,margin:"4px 0 0"}}>{s.mastery}% mastery • Last active {s.lastActive}</p>
      </div>
    </Card>

    {/* AI Insight */}
    <Card style={{background:C.primarySoft,border:`1px solid ${C.primary}30`,padding:16}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><I n="brain" s={18} c={C.primary}/><p style={{fontSize:13,fontWeight:700,color:C.primary,margin:0}}>AI Insight</p></div>
      <p style={{fontSize:13,color:C.text,margin:0,lineHeight:1.6}}>{s.insight}</p>
    </Card>

    {/* Tab switcher: Skills / Timeline / Notes */}
    <div style={{display:"flex",background:C.borderSoft,borderRadius:10,padding:3}}>
      {[{id:"skills",label:"Skill graph"},{id:"timeline",label:"Activity"},{id:"notes",label:"Notes"}].map(t=>
        <button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,height:34,borderRadius:8,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,background:tab===t.id?C.card:"transparent",color:tab===t.id?C.primary:C.textMuted,boxShadow:tab===t.id?"0 1px 3px rgba(0,0,0,0.08)":"none"}}>{t.label}</button>
      )}
    </div>

    {/* FIX #1: SKILL GRAPH with 8-signal diagnostic data */}
    {tab==="skills"&&<div style={{display:"flex",flexDirection:"column",gap:8}}>
      {s.skills.map((sk,i)=><Card key={i} style={{padding:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
          <span style={{fontSize:13,fontWeight:600,color:C.text}}>{sk.topic}</span>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <Pill text={sk.signal} color={signalColors[sk.signal]}/>
            <span style={{fontSize:14,fontWeight:800,color:signalColors[sk.signal]}}>{sk.score}%</span>
          </div>
        </div>
        <Bar value={sk.score} color={signalColors[sk.signal]} h={5}/>
        <p style={{fontSize:11,color:C.textMuted,margin:"6px 0 0",lineHeight:1.5}}>{sk.detail}</p>
        {sk.score<50&&<Btn variant="small" icon="send" style={{marginTop:6}} onClick={()=>navigate("push",{student:s,topic:sk.topic})}>Push practice</Btn>}
      </Card>)}
      <div style={{display:"flex",gap:10}}>
        <Card style={{flex:1,padding:12,textAlign:"center"}}><p style={{fontSize:16,fontWeight:800,color:C.text,margin:0}}>{s.quizzes}</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Quizzes</p></Card>
        <Card style={{flex:1,padding:12,textAlign:"center"}}><p style={{fontSize:16,fontWeight:800,color:C.text,margin:0}}>{s.avgTime}</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Avg time</p></Card>
        <Card style={{flex:1,padding:12,textAlign:"center"}}><p style={{fontSize:16,fontWeight:800,color:C.text,margin:0}}>{s.hintRate}</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Hints</p></Card>
      </div>
    </div>}

    {/* FIX #2: ACTIVITY TIMELINE */}
    {tab==="timeline"&&<div style={{display:"flex",flexDirection:"column",gap:0}}>
      {s.timeline.length===0?<Card style={{textAlign:"center",padding:24}}><I n="activity" s={28} c={C.textFaint}/><p style={{fontSize:13,color:C.textMuted,margin:"8px 0 0"}}>No recent activity</p></Card>:
      s.timeline.map((t,i)=><div key={i} style={{display:"flex",gap:12,padding:"12px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:50,flexShrink:0}}>
          <span style={{fontSize:11,fontWeight:600,color:C.textMuted}}>{t.time}</span>
          {i<s.timeline.length-1&&<div style={{width:2,flex:1,background:C.borderSoft,marginTop:4}}/>}
        </div>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:t.color}}/>
            <p style={{fontSize:13,fontWeight:500,color:C.text,margin:0}}>{t.action}</p>
          </div>
          <p style={{fontSize:12,color:C.textMuted,margin:0,paddingLeft:14}}>{t.detail}</p>
        </div>
      </div>)}
    </div>}

    {/* FIX #4: PRIVATE TEACHER NOTES */}
    {tab==="notes"&&<div>
      <Card style={{padding:16}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
          <p style={{fontSize:13,fontWeight:700,color:C.text,margin:0,display:"flex",alignItems:"center",gap:6}}><I n="edit" s={14} c={C.primary}/> Private notes</p>
          <Pill text="Only you see this" color={C.textMuted} bg={C.borderSoft}/>
        </div>
        {editingNote?<div>
          <textarea value={noteText} onChange={e=>setNoteText(e.target.value)} placeholder="Add a note about this student... (personal observations, context, reminders)" style={{width:"100%",minHeight:80,padding:"10px 14px",borderRadius:12,border:`1.5px solid ${C.primary}`,fontFamily:"inherit",fontSize:13,resize:"vertical",boxSizing:"border-box",outline:"none",lineHeight:1.6}}/>
          <div style={{display:"flex",gap:8,marginTop:8}}><Btn variant="primary" onClick={()=>setEditingNote(false)} icon="check">Save</Btn><Btn variant="ghost" onClick={()=>{setNoteText(s.notes);setEditingNote(false);}}>Cancel</Btn></div>
        </div>:
        noteText?<div>
          <p style={{fontSize:13,color:C.text,margin:"0 0 8px",lineHeight:1.6,padding:"10px 14px",background:C.borderSoft,borderRadius:10}}>{noteText}</p>
          <Btn variant="small" icon="edit" onClick={()=>setEditingNote(true)}>Edit note</Btn>
        </div>:
        <button onClick={()=>setEditingNote(true)} style={{width:"100%",padding:16,borderRadius:12,border:`2px dashed ${C.border}`,background:C.borderSoft,cursor:"pointer",fontFamily:"inherit",textAlign:"center"}}>
          <I n="plus" s={20} c={C.textMuted}/>
          <p style={{fontSize:13,color:C.textMuted,margin:"4px 0 0"}}>Add a private note about {s.name.split(" ")[0]}</p>
        </button>}
      </Card>
    </div>}

    {/* Actions */}
    <div style={{display:"flex",gap:8}}><Btn variant="primary" style={{flex:1}} icon="send" onClick={()=>navigate("push",{student:s})}>Push assignment</Btn><Btn variant="ghost" style={{flex:1}} icon="msg">Message</Btn></div>

    {/* Parent report */}
    <Btn variant="soft" full icon="download" onClick={()=>setShowReport(!showReport)}>{showReport?"Hide preview":"Generate parent report"}</Btn>
    {showReport&&<Card style={{border:`2px solid ${C.primary}`,padding:20}}>
      <p style={{fontSize:16,fontWeight:800,color:C.text,margin:"0 0 4px"}}>Progress Report</p>
      <p style={{fontSize:12,color:C.textMuted,margin:"0 0 16px"}}>{s.name} • March 2026</p>
      <div style={{display:"flex",gap:10,marginBottom:12}}>
        <div style={{flex:1,padding:10,borderRadius:8,background:C.borderSoft,textAlign:"center"}}><p style={{fontSize:18,fontWeight:800,color:s.color,margin:0}}>{s.mastery}%</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Mastery</p></div>
        <div style={{flex:1,padding:10,borderRadius:8,background:C.borderSoft,textAlign:"center"}}><p style={{fontSize:18,fontWeight:800,color:C.success,margin:0}}>+{Math.max(s.mastery-15,8)}%</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Growth</p></div>
        <div style={{flex:1,padding:10,borderRadius:8,background:C.borderSoft,textAlign:"center"}}><p style={{fontSize:18,fontWeight:800,color:C.text,margin:0}}>{s.quizzes}</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Quizzes</p></div>
      </div>
      <div style={{display:"flex",gap:8}}><Btn variant="primary" full icon="download">Download PDF</Btn><Btn variant="ghost" full icon="send">Share</Btn></div>
    </Card>}

    {/* Full Report Card */}
    <Card style={{padding:20,border:`1.5px solid ${C.border}`}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16,paddingBottom:14,borderBottom:`1px solid ${C.borderSoft}`}}>
        <Avatar name={s.name} size={44} color={s.color}/>
        <div><p style={{fontSize:16,fontWeight:800,color:C.text,margin:0}}>{s.name}</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>Class 6-B • Science + Math • March 2026</p></div>
      </div>

      {/* Mastery ring + subject bars */}
      <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:16}}>
        <div style={{position:"relative",width:72,height:72,flexShrink:0}}>
          <svg width="72" height="72" viewBox="0 0 72 72"><circle cx="36" cy="36" r="30" fill="none" stroke={`${s.color}20`} strokeWidth="8"/><circle cx="36" cy="36" r="30" fill="none" stroke={s.color} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${s.mastery*1.88} 188.5`} transform="rotate(-90 36 36)"/></svg>
          <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><span style={{fontSize:18,fontWeight:800,color:s.color}}>{s.mastery}%</span></div>
        </div>
        <div style={{flex:1,display:"flex",flexDirection:"column",gap:6}}>
          {s.skills.map((sk,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{fontSize:11,color:C.textMuted,width:64,flexShrink:0}}>{sk.topic}</span>
            <div style={{flex:1}}><Bar value={sk.score} color={signalColors[sk.signal]} h={5}/></div>
            <span style={{fontSize:11,fontWeight:700,color:signalColors[sk.signal],width:28,textAlign:"right"}}>{sk.score}%</span>
          </div>)}
        </div>
      </div>

      {/* Strengths */}
      <div style={{marginBottom:14}}>
        <p style={{fontSize:13,fontWeight:700,color:C.success,margin:"0 0 8px",display:"flex",alignItems:"center",gap:6}}><I n="trendUp" s={14} c={C.success}/> Strengths</p>
        {(s.skills.filter(sk=>sk.score>=60).slice(0,3).length?s.skills.filter(sk=>sk.score>=60).slice(0,3):[{topic:"Consistency",score:50},{topic:"Effort",score:45},{topic:"Participation",score:40}]).map((sk,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:C.success}}/>
          <span style={{fontSize:12,color:C.text,flex:1}}>{sk.topic||"General"}</span>
          <div style={{width:60}}><Bar value={sk.score||50} color={C.success} h={4}/></div>
        </div>)}
      </div>

      {/* Areas of concern */}
      <div style={{marginBottom:14}}>
        <p style={{fontSize:13,fontWeight:700,color:C.error,margin:"0 0 8px",display:"flex",alignItems:"center",gap:6}}><I n="alert" s={14} c={C.error}/> Areas of concern</p>
        {(s.skills.filter(sk=>sk.score<50).slice(0,2).length?s.skills.filter(sk=>sk.score<50).slice(0,2):[{topic:"Needs more practice",score:35}]).map((sk,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:C.error}}/>
          <span style={{fontSize:12,color:C.text,flex:1}}>{sk.topic}</span>
          <div style={{width:60}}><Bar value={sk.score} color={C.error} h={4}/></div>
        </div>)}
      </div>

      {/* Recommended home practice */}
      <div style={{marginBottom:14,padding:12,borderRadius:10,background:C.blueSoft}}>
        <p style={{fontSize:13,fontWeight:700,color:C.blue,margin:"0 0 6px",display:"flex",alignItems:"center",gap:6}}><I n="content" s={14} c={C.blue}/> Recommended home practice</p>
        <ul style={{margin:0,paddingLeft:18,fontSize:12,color:C.text,lineHeight:1.8}}>
          {s.weak.length>0?s.weak.map((w,i)=><li key={i}>Practice {w} — 15 min daily with visual aids</li>):<li>Continue current pace with challenging problems</li>}
          <li>Review class notes before each session</li>
        </ul>
      </div>

      {/* Teacher's note */}
      <div style={{marginBottom:14}}>
        <p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 8px",display:"flex",alignItems:"center",gap:6}}><I n="edit" s={14} c={C.primary}/> Teacher's note</p>
        <textarea value={noteText} onChange={e=>setNoteText(e.target.value)} placeholder="Add a personal note for the parent report..." style={{width:"100%",minHeight:60,padding:"10px 14px",borderRadius:12,border:`1.5px solid ${C.border}`,fontFamily:"inherit",fontSize:13,resize:"vertical",boxSizing:"border-box",outline:"none",lineHeight:1.6}}/>
      </div>

      {/* AI-generated opening */}
      <div style={{padding:12,borderRadius:10,background:C.primarySoft,marginBottom:4}}>
        <p style={{fontSize:11,fontWeight:600,color:C.primary,margin:"0 0 4px"}}>AI-generated opening line</p>
        <p style={{fontSize:13,color:C.text,margin:0,lineHeight:1.5,fontStyle:"italic"}}>{s.mastery>=70?`${s.name.split(" ")[0]} is doing excellent work and shows strong commitment to learning. Keep encouraging this momentum at home!`:s.mastery>=50?`${s.name.split(" ")[0]} is making steady progress and showing improvement. With consistent practice at home, they can reach the next level.`:`${s.name.split(" ")[0]} has potential and is working through some foundational challenges. Your support at home will make a big difference in building confidence.`}</p>
      </div>
    </Card>
  </div>;
};

/* ============ PUSH ASSIGNMENT (FIX #5: Preview + Schedule) ============ */
const PushScreen=({navigate,context})=>{
  const[target,setTarget]=useState(context?.student?"individual":context?.group?"group":"class");
  const[selectedGroup,setSelectedGroup]=useState(context?.group||"");
  const[selected,setSelected]=useState(context?.student?[context.student.name]:[]);
  const[deadline,setDeadline]=useState("tonight");
  const[difficulty,setDifficulty]=useState("auto");
  const[schedule,setSchedule]=useState("now");
  const[showPreview,setShowPreview]=useState(false);
  const[pushed,setPushed]=useState(false);
  const groups=[{name:"Toppers",count:2,color:C.success},{name:"Average",count:2,color:C.blue},{name:"Foundation",count:2,color:C.error}];

  if(pushed) return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",gap:20,textAlign:"center",padding:20}}>
    <div style={{width:64,height:64,borderRadius:"50%",background:C.successSoft,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="check" s={32} c={C.success} w={2.5}/></div>
    <h2 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Assignment {schedule==="now"?"pushed":"scheduled"}!</h2>
    <p style={{fontSize:14,color:C.textMuted,margin:0}}>{target==="class"?"Sent to entire class":target==="group"?`Sent to ${selectedGroup} group`:`Sent to ${selected.length} student${selected.length>1?"s":""}`}</p>
    <p style={{fontSize:13,color:C.textMuted}}>Difficulty: {difficulty==="auto"?"AI-adapted per student":difficulty} • Due: {deadline}{schedule!=="now"?` • Sends at ${schedule}`:""}</p>
    <div style={{display:"flex",gap:10}}><Btn variant="ghost" onClick={()=>navigate("dashboard")}>Dashboard</Btn><Btn variant="primary" onClick={()=>setPushed(false)}>Push another</Btn></div>
  </div>;

  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("quizzes")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Push Assignment</h1></div>

    {(context?.quiz||context?.topic)&&<Card style={{background:C.primarySoft,border:`1px solid ${C.primary}30`,padding:14}}><p style={{fontSize:13,fontWeight:600,color:C.primary,margin:0}}>{context.quiz?context.quiz.name:`Topic: ${context.topic}`}</p></Card>}

    {/* Target */}
    <div><p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 8px"}}>Send to</p>
      <div style={{display:"flex",gap:8}}>{[{id:"class",label:"Entire class"},{id:"group",label:"Group"},{id:"individual",label:"Individual"}].map(t=><button key={t.id} onClick={()=>setTarget(t.id)} style={{flex:1,padding:"10px 8px",borderRadius:12,border:`2px solid ${target===t.id?C.primary:C.border}`,background:target===t.id?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,color:target===t.id?C.primary:C.textMuted,textAlign:"center"}}>{t.label}</button>)}</div>
      {target==="group"&&<div style={{display:"flex",gap:8,marginTop:10}}>{groups.map(g=><button key={g.name} onClick={()=>setSelectedGroup(g.name)} style={{flex:1,height:40,borderRadius:10,border:`2px solid ${selectedGroup===g.name?g.color:C.border}`,background:selectedGroup===g.name?`${g.color}12`:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,color:selectedGroup===g.name?g.color:C.textMuted}}>{g.name} ({g.count})</button>)}</div>}
      {target==="individual"&&<div style={{marginTop:10,display:"flex",gap:6,flexWrap:"wrap"}}>{students.map(s=><button key={s.name} onClick={()=>setSelected(selected.includes(s.name)?selected.filter(n=>n!==s.name):[...selected,s.name])} style={{padding:"6px 12px",borderRadius:999,border:`1.5px solid ${selected.includes(s.name)?C.primary:C.border}`,background:selected.includes(s.name)?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:12,color:selected.includes(s.name)?C.primary:C.textMuted}}>{s.name.split(" ")[0]}</button>)}</div>}
    </div>

    {/* Difficulty */}
    <div><p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 8px"}}>Difficulty</p>
      <div style={{display:"flex",gap:8}}>{[{id:"auto",label:"AI adapts"},{id:"easy",label:"Easy"},{id:"medium",label:"Medium"},{id:"hard",label:"Hard"}].map(d=><button key={d.id} onClick={()=>setDifficulty(d.id)} style={{flex:d.id==="auto"?1.5:1,height:40,borderRadius:10,border:`2px solid ${difficulty===d.id?C.primary:C.border}`,background:difficulty===d.id?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,color:difficulty===d.id?C.primary:C.textMuted}}>{d.label}</button>)}</div>
      {difficulty==="auto"&&<p style={{fontSize:11,color:C.success,margin:"6px 0 0"}}>Riya gets hard, Arjun gets medium, Priya gets easy — same topic</p>}
    </div>

    {/* Deadline */}
    <div><p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 8px"}}>Deadline</p>
      <div style={{display:"flex",gap:8}}>{["tonight","tomorrow","weekend"].map(d=><button key={d} onClick={()=>setDeadline(d)} style={{flex:1,height:40,borderRadius:10,border:`2px solid ${deadline===d?C.primary:C.border}`,background:deadline===d?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:deadline===d?C.primary:C.textMuted,textTransform:"capitalize"}}>{d}</button>)}</div>
    </div>

    {/* FIX #5: Schedule for later */}
    <div><p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 8px"}}>When to send</p>
      <div style={{display:"flex",gap:8}}>{[{id:"now",label:"Right now"},{id:"4pm",label:"4:00 PM"},{id:"6pm",label:"6:00 PM"},{id:"8am",label:"Tomorrow 8 AM"}].map(s=><button key={s.id} onClick={()=>setSchedule(s.id)} style={{flex:s.id==="8am"?1.5:1,height:40,borderRadius:10,border:`2px solid ${schedule===s.id?C.primary:C.border}`,background:schedule===s.id?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:600,color:schedule===s.id?C.primary:C.textMuted}}>{s.label}</button>)}</div>
    </div>

    {/* FIX #5: Push PREVIEW */}
    <Btn variant="ghost" full icon="eye" onClick={()=>setShowPreview(!showPreview)}>{showPreview?"Hide preview":"Preview what student sees"}</Btn>
    {showPreview&&<Card style={{background:C.borderSoft,border:`2px dashed ${C.primary}`,padding:16}}>
      <p style={{fontSize:11,color:C.primary,margin:"0 0 10px",fontWeight:600}}>STUDENT APP PREVIEW</p>
      <div style={{background:C.card,borderRadius:14,padding:14,borderLeft:`4px solid ${C.primary}`,borderTopLeftRadius:4,borderBottomLeftRadius:4}}>
        <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}>
          <Pill text="Assigned by Ms. Sharma" color={C.primary} bg={C.primarySoft}/>
          <Pill text={`Due ${deadline}`} icon="clock" color={C.warn} bg={C.warnSoft}/>
        </div>
        <p style={{fontSize:14,fontWeight:600,color:C.text,margin:"0 0 4px"}}>{context?.topic||context?.quiz?.name||"Fractions — Practice"}</p>
        <p style={{fontSize:12,color:C.textMuted,margin:"0 0 10px"}}>10 questions • {difficulty==="auto"?"Adapted to your level":difficulty} • ~8 min</p>
        <div style={{height:40,borderRadius:12,background:C.primary,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,fontWeight:700}}>Start Assignment</div>
      </div>
    </Card>}

    <Btn full variant="primary" icon={schedule==="now"?"send":"calendar"} onClick={()=>setPushed(true)} style={{height:52,fontSize:16}}>
      {schedule==="now"?"Push now":`Schedule for ${schedule}`}
    </Btn>
  </div>;
};

/* ============ STUDENTS ============ */
const StudentsScreen=({navigate,currentClass})=>{
  const classStudents=students.filter(s=>s.classId===currentClass.id);
  const classNotEnrolled=notEnrolled.filter(s=>s.classId===currentClass.id);
  const[view,setView]=useState("list");const[filter,setFilter]=useState("all");
  const[ptmMode,setPtmMode]=useState(false);const[ptmSelected,setPtmSelected]=useState([]);const[ptmDone,setPtmDone]=useState(false);const[ptmGenerating,setPtmGenerating]=useState(false);
  const filtered=filter==="all"?classStudents:classStudents.filter(s=>s.group===filter);
  const groups=[{name:"Toppers",count:classStudents.filter(s=>s.group==="toppers").length,color:C.success},{name:"Average",count:classStudents.filter(s=>s.group==="average").length,color:C.blue},{name:"Foundation",count:classStudents.filter(s=>s.group==="foundation").length,color:C.error}];
  const handlePtmGenerate=()=>{setPtmGenerating(true);setTimeout(()=>{setPtmGenerating(false);setPtmDone(true);},2000);};
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Students</h1><Btn variant={ptmMode?"ghost":"soft"} icon={ptmMode?"arrowL":"file"} onClick={()=>{setPtmMode(!ptmMode);setPtmDone(false);setPtmSelected([]);setPtmGenerating(false);}}>{ptmMode?"Cancel":"Generate PTM reports"}</Btn></div>
    {ptmMode&&<Card style={{padding:16,border:`2px solid ${C.primary}`,background:C.primarySoft}}>
      <p style={{fontSize:14,fontWeight:700,color:C.primary,margin:"0 0 10px"}}>Select students for PTM reports</p>
      <div style={{display:"flex",gap:6,marginBottom:10}}><button onClick={()=>setPtmSelected(ptmSelected.length===classStudents.length?[]:classStudents.map(s=>s.name))} style={{padding:"4px 12px",borderRadius:999,border:`1.5px solid ${C.primary}`,background:ptmSelected.length===classStudents.length?C.primary:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:600,color:ptmSelected.length===classStudents.length?"#fff":C.primary}}>{ptmSelected.length===classStudents.length?"Deselect all":"Select all"}</button></div>
      <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:12}}>
        {classStudents.map((s,i)=><button key={i} onClick={()=>setPtmSelected(ptmSelected.includes(s.name)?ptmSelected.filter(n=>n!==s.name):[...ptmSelected,s.name])} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",borderRadius:10,border:`1.5px solid ${ptmSelected.includes(s.name)?C.primary:C.border}`,background:ptmSelected.includes(s.name)?`${C.primary}08`:"transparent",cursor:"pointer",fontFamily:"inherit"}}>
          <div style={{width:20,height:20,borderRadius:6,border:`2px solid ${ptmSelected.includes(s.name)?C.primary:C.border}`,display:"flex",alignItems:"center",justifyContent:"center",background:ptmSelected.includes(s.name)?C.primary:"transparent"}}>{ptmSelected.includes(s.name)&&<I n="check" s={12} c="#fff" w={2.5}/>}</div>
          <Avatar name={s.name} size={28} color={s.color}/><span style={{fontSize:13,fontWeight:500,color:C.text}}>{s.name}</span><span style={{fontSize:11,color:C.textMuted,marginLeft:"auto"}}>{s.mastery}%</span>
        </button>)}
      </div>
      {ptmGenerating&&<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:16}}>
        <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
        <div style={{width:20,height:20,border:`3px solid ${C.border}`,borderTopColor:C.primary,borderRadius:"50%",animation:"spin 0.8s linear infinite"}}/>
        <span style={{fontSize:13,color:C.primary,fontWeight:600}}>Generating reports...</span>
      </div>}
      {ptmDone?<div style={{display:"flex",flexDirection:"column",gap:10}}>
        <div style={{display:"flex",alignItems:"center",gap:8,padding:12,borderRadius:10,background:C.successSoft}}><I n="check" s={18} c={C.success}/><span style={{fontSize:13,fontWeight:600,color:C.successDark}}>Reports ready for {ptmSelected.length} students</span></div>
        <div style={{display:"flex",gap:8}}><Btn variant="primary" style={{flex:1}} icon="download">Download all</Btn><Btn variant="success" style={{flex:1}} icon="whatsapp">Share via WhatsApp</Btn></div>
      </div>:!ptmGenerating&&<Btn variant="primary" full icon="sparkle" onClick={handlePtmGenerate} style={{opacity:ptmSelected.length?1:0.5}}>Generate reports for {ptmSelected.length} student{ptmSelected.length!==1?"s":""}</Btn>}
    </Card>}
    <Card style={{background:C.warnSoft,border:`1px solid ${C.warn}30`,padding:12,display:"flex",alignItems:"center",justifyContent:"space-between"}} onClick={()=>navigate("enrollment")}><div style={{display:"flex",alignItems:"center",gap:8}}><I n="userPlus" s={16} c={C.warnDark}/><span style={{fontSize:12,fontWeight:600,color:C.warnDark}}>{classNotEnrolled.length} haven't joined</span></div><Btn variant="small" icon="send" style={{height:28,fontSize:11}}>Invite</Btn></Card>
    <div style={{display:"flex",background:C.borderSoft,borderRadius:10,padding:3}}>{["list","groups"].map(v=><button key={v} onClick={()=>setView(v)} style={{flex:1,height:34,borderRadius:8,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,background:view===v?C.card:"transparent",color:view===v?C.primary:C.textMuted,textTransform:"capitalize",boxShadow:view===v?"0 1px 3px rgba(0,0,0,0.08)":"none"}}>{v}</button>)}</div>
    {view==="groups"&&groups.map((g,i)=><Card key={i} style={{padding:16}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:10,height:10,borderRadius:"50%",background:g.color}}/><span style={{fontSize:14,fontWeight:700,color:C.text}}>{g.name}</span><Pill text={`${g.count}`} color={g.color}/></div><Btn variant="small" icon="send">Push</Btn></div><div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{classStudents.filter(s=>s.group===g.name.toLowerCase()).map(s=><button key={s.name} onClick={()=>navigate("student",s)} style={{padding:"4px 10px",borderRadius:999,border:`1px solid ${C.border}`,background:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:11,color:C.text}}>{s.name.split(" ")[0]}</button>)}</div></Card>)}
    {view==="list"&&<><div style={{display:"flex",gap:6}}>{["all","toppers","average","foundation"].map(f=><button key={f} onClick={()=>setFilter(f)} style={{padding:"5px 12px",borderRadius:999,border:`1.5px solid ${filter===f?C.primary:C.border}`,background:filter===f?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:600,color:filter===f?C.primary:C.textMuted,textTransform:"capitalize"}}>{f}</button>)}</div>
    {filtered.map((s,i)=><Card key={i} onClick={()=>navigate("student",s)} style={{cursor:"pointer",padding:14,display:"flex",alignItems:"center",gap:12}}><Avatar name={s.name} size={40} color={s.color}/><div style={{flex:1}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}><span style={{fontSize:13,fontWeight:600,color:C.text}}>{s.name}</span><Pill text={s.grade} color={s.color}/>{s.flag&&<Pill text={s.flag==="struggling"?"Help":"↓"} color={s.flag==="struggling"?C.error:C.warn}/>}</div><div style={{display:"flex",gap:10,alignItems:"center"}}><Bar value={s.mastery} color={s.color} h={4}/><span style={{fontSize:11,fontWeight:700,color:s.color}}>{s.mastery}%</span></div></div><I n="arrowR" s={16} c={C.textFaint}/></Card>)}</>}
  </div>;
};

/* ============ QUIZ LIBRARY ============ */
const QuizLibraryScreen=({navigate})=>{const[tab,setTab]=useState("library");
const library=[{name:"Heat — Quick Check",subject:"Science",qs:10,diff:"Mixed",used:3,source:"ready"},{name:"Fractions Fundamentals",subject:"Math",qs:15,diff:"Easy",used:5,source:"ready"},{name:"My Fraction Word Problems",subject:"Math",qs:6,diff:"Medium",used:2,source:"custom"},{name:"AI: Heat Misconceptions",subject:"Science",qs:10,diff:"Mixed",used:1,source:"ai-saved"}];
return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Quizzes</h1><Btn variant="primary" icon="zap">AI Generate</Btn></div>
  <div style={{display:"flex",gap:8}}><Pill text="4 ready-made" color={C.primary} bg={C.primarySoft}/><Pill text="1 AI-saved" color={C.success} bg={C.successSoft} icon="bookmark"/><Pill text="1 custom" color={C.blue} bg={C.blueSoft}/></div>
  <div style={{display:"flex",background:C.borderSoft,borderRadius:10,padding:3}}>{[{id:"library",label:"All"},{id:"create",label:"Create"},{id:"popular",label:"Popular"}].map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,height:34,borderRadius:8,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,background:tab===t.id?C.card:"transparent",color:tab===t.id?C.primary:C.textMuted,boxShadow:tab===t.id?"0 1px 3px rgba(0,0,0,0.08)":"none"}}>{t.label}</button>)}</div>
  {tab==="library"&&library.map((q,i)=><Card key={i} style={{padding:14,display:"flex",alignItems:"center",gap:12}}><div style={{width:40,height:40,borderRadius:12,background:q.source==="custom"?`${C.blue}12`:q.source==="ai-saved"?`${C.success}12`:`${C.primary}12`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n={q.source==="custom"?"quiz":q.source==="ai-saved"?"bookmark":"quiz"} s={20} c={q.source==="custom"?C.blue:q.source==="ai-saved"?C.success:C.primary}/></div><div style={{flex:1}}><p style={{fontSize:13,fontWeight:600,color:C.text,margin:0}}>{q.name}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{q.qs} Qs • {q.diff} • Used {q.used}x</p></div><Btn variant="small" icon="send" onClick={()=>navigate("push",{quiz:q})}>Push</Btn></Card>)}
  {tab==="create"&&<><Card style={{border:`2px dashed ${C.primary}`,background:C.primarySoft,padding:20,textAlign:"center",cursor:"pointer"}}><I n="plus" s={24} c={C.primary}/><p style={{fontSize:13,fontWeight:600,color:C.primary,margin:"8px 0 4px"}}>Create custom question</p></Card><Card style={{border:`2px dashed ${C.border}`,padding:20,textAlign:"center",cursor:"pointer"}}><I n="upload" s={24} c={C.textMuted}/><p style={{fontSize:13,fontWeight:600,color:C.text,margin:"8px 0 4px"}}>Import from Excel / PDF</p></Card></>}
  {tab==="popular"&&[{name:"NCERT Exemplar — Heat",teacher:"Mr. Patel (6-A)",qs:15},{name:"Mental Math Speed Drill",teacher:"Mrs. Singh (7-B)",qs:20}].map((q,i)=><Card key={i} style={{padding:14,display:"flex",alignItems:"center",gap:12}}><div style={{width:40,height:40,borderRadius:12,background:`${C.warn}12`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="star" s={20} c={C.warn}/></div><div style={{flex:1}}><p style={{fontSize:13,fontWeight:600,color:C.text,margin:0}}>{q.name}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>By {q.teacher} • {q.qs} Qs</p></div><Btn variant="small" icon="plus">Use</Btn></Card>)}
</div>;};

/* ============ CONTENT ============ */
const ContentScreen=({navigate})=>{const[tab,setTab]=useState("syllabus");const sc={taught:C.success,"in-progress":C.blue,pending:C.textFaint};const sl={taught:"Taught","in-progress":"In progress",pending:"Pending"};
return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Content</h1><Btn variant="primary" icon="upload">Upload</Btn></div>
  <div style={{display:"flex",background:C.borderSoft,borderRadius:10,padding:3}}>{[{id:"syllabus",label:"Syllabus"},{id:"books",label:"Books"},{id:"resources",label:"Resources"}].map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,height:34,borderRadius:8,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,background:tab===t.id?C.card:"transparent",color:tab===t.id?C.primary:C.textMuted,boxShadow:tab===t.id?"0 1px 3px rgba(0,0,0,0.08)":"none"}}>{t.label}</button>)}</div>
  {tab==="syllabus"&&<>{syllabus.map((ch,i)=><Card key={i} style={{padding:14,display:"flex",alignItems:"center",gap:12}}><div style={{width:36,height:36,borderRadius:10,background:`${sc[ch.status]}15`,display:"flex",alignItems:"center",justifyContent:"center"}}>{ch.status==="taught"?<I n="check" s={18} c={C.success} w={2.5}/>:ch.status==="in-progress"?<I n="clock" s={18} c={C.blue}/>:<I n="calendar" s={18} c={C.textFaint}/>}</div><div style={{flex:1}}><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{ch.chapter}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{ch.topics} topics{ch.mastery>0?` • ${ch.mastery}% avg`:""}</p></div><Pill text={sl[ch.status]} color={sc[ch.status]}/></Card>)}</>}
  {tab==="books"&&<>{["NCERT Science — Class 6","NCERT Math — Class 6"].map(b=><Card key={b} style={{padding:14,display:"flex",alignItems:"center",gap:12}}><div style={{width:40,height:40,borderRadius:10,background:`${C.blue}12`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="content" s={20} c={C.blue}/></div><div style={{flex:1}}><p style={{fontSize:13,fontWeight:600,color:C.text,margin:0}}>{b}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Official • Indexed</p></div><Pill text="Indexed" color={C.success} icon="check"/></Card>)}<Card style={{border:`2px dashed ${C.primary}`,background:C.primarySoft,padding:20,textAlign:"center",cursor:"pointer"}}><I n="upload" s={24} c={C.primary}/><p style={{fontSize:13,fontWeight:600,color:C.primary,margin:"8px 0 0"}}>Upload supplementary material</p></Card></>}
  {/* Teacher uploads — feeds into RAG alongside admin-uploaded textbooks */}
  <Card style={{padding:16,marginTop:12}}>
    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><I n="upload" s={18} c={C.primary}/><p style={{fontSize:14,fontWeight:700,color:C.text,margin:0}}>Your materials</p></div>
    <p style={{fontSize:12,color:C.textMuted,margin:"0 0 12px",lineHeight:1.5}}>Upload worksheets, notes, or question banks. They'll be indexed for AI tutoring alongside school textbooks.</p>
    <div style={{display:"flex",flexDirection:"column",gap:6}}>
      {[{name:"Fractions Worksheet — Class 6",status:"indexed",type:"Worksheet"},{name:"Heat Transfer Notes",status:"processing",type:"Notes"}].map((m,i)=>
        <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:10,background:C.borderSoft}}>
          <I n="book" s={16} c={m.status==="indexed"?C.success:C.warn}/>
          <div style={{flex:1}}><p style={{fontSize:12,fontWeight:500,color:C.text,margin:0}}>{m.name}</p><p style={{fontSize:10,color:C.textMuted,margin:"1px 0 0"}}>{m.type}</p></div>
          <Pill text={m.status==="indexed"?"Indexed":"Processing"} color={m.status==="indexed"?C.success:C.warn} bg={m.status==="indexed"?C.successSoft:C.warnSoft}/>
        </div>
      )}
    </div>
    <Btn variant="soft" full icon="upload" style={{marginTop:10,height:40,fontSize:13}}>Upload material</Btn>
  </Card>
  {tab==="resources"&&<><Btn variant="soft" full icon="plus">Add video or link</Btn>{[{name:"Convection animation",type:"Video",topic:"Heat"},{name:"Fraction visual guide",type:"Video",topic:"Fractions"}].map((r,i)=><Card key={i} style={{padding:14,display:"flex",alignItems:"center",gap:12}}><div style={{width:40,height:40,borderRadius:10,background:`${C.error}12`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="play" s={20} c={C.error}/></div><div style={{flex:1}}><p style={{fontSize:13,fontWeight:600,color:C.text,margin:0}}>{r.name}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{r.topic}</p></div><Pill text={r.type} color={C.textMuted} bg={C.borderSoft}/></Card>)}</>}
</div>;};

/* ============ ANALYTICS ============ */
const AnalyticsScreen=({navigate})=>{const topics=[{name:"Refraction",avg:30,impact:20,color:C.error},{name:"Convection",avg:38,impact:13,color:C.error},{name:"Unlike Frac.",avg:48,impact:26,color:C.warn},{name:"Conduction",avg:62,impact:32,color:C.success},{name:"Like Frac.",avg:72,impact:22,color:C.success},{name:"Temperature",avg:78,impact:38,color:C.success}];
return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Analytics</h1>
  <div style={{display:"flex",gap:10}}><Stat label="Class average" value="58%" icon="chart" color={C.primary} sub="+3%"/><Stat label="SA1 readiness" value="64%" icon="target" color={C.blue}/></div>
  <Card>{topics.map((t,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}><span style={{fontSize:11,color:C.text,width:80,flexShrink:0}}>{t.name}</span><div style={{flex:1}}><Bar value={t.avg} color={t.color} h={6}/></div><span style={{fontSize:11,fontWeight:700,color:C.success,width:32}}>+{t.impact}%</span><span style={{fontSize:11,color:t.color,width:32,textAlign:"right"}}>{t.avg}%</span>{t.avg<50&&<Btn variant="small" icon="send" style={{marginLeft:2}} onClick={()=>navigate("push",{topic:t.name})}>Push</Btn>}</div>)}</Card>
  <Card style={{background:C.warnSoft,border:`1px solid ${C.warn}30`,padding:16}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><I n="brain" s={18} c={C.warnDark}/><p style={{fontSize:13,fontWeight:700,color:C.warnDark,margin:0}}>Reteach suggestion</p></div><p style={{fontSize:13,color:C.text,margin:"0 0 10px",lineHeight:1.6}}>Convection (+13%) had lowest impact. Try visual demo.</p><Btn variant="warn" icon="check">Mark reteach</Btn></Card>
</div>;};

/* ============ ENROLLMENT ============ */
const EnrollmentScreen=({navigate,currentClass})=>{const classStudents=students.filter(s=>s.classId===currentClass.id);const classNotEnrolled=notEnrolled.filter(s=>s.classId===currentClass.id);return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("dashboard")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Enrollment</h1></div>
  <div style={{display:"flex",gap:10}}><Card style={{flex:1,padding:14,textAlign:"center"}}><p style={{fontSize:22,fontWeight:800,color:C.success,margin:0}}>{classStudents.length}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Active</p></Card><Card style={{flex:1,padding:14,textAlign:"center"}}><p style={{fontSize:22,fontWeight:800,color:C.error,margin:0}}>{classNotEnrolled.length}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Not joined</p></Card></div>
  <div><p style={{fontSize:13,fontWeight:700,color:C.error,margin:"0 0 8px"}}>Haven't joined ({classNotEnrolled.length})</p>{classNotEnrolled.map((s,i)=><Card key={i} style={{marginBottom:8,padding:14,display:"flex",alignItems:"center",gap:12}}><Avatar name={s.name} size={36} color={C.error}/><div style={{flex:1}}><p style={{fontSize:13,fontWeight:600,color:C.text,margin:0}}>{s.name}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{s.reason}</p></div><Btn variant="small" icon="send">Invite</Btn></Card>)}<Btn full variant="primary" icon="send">Send invite to all</Btn></div>
</div>;};

/* ============ LIVE POLL ============ */
const PollScreen=({navigate})=>{const[stage,setStage]=useState("create");const[q,setQ]=useState("Does convection happen in solids?");
if(stage==="live") return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>setStage("create")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Live Poll</h1><div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:6}}><style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style><div style={{width:8,height:8,borderRadius:"50%",background:C.error,animation:"pulse 1.5s infinite"}}/><span style={{fontSize:12,fontWeight:700,color:C.error}}>LIVE</span></div></div>
  <Card style={{padding:20,textAlign:"center"}}><p style={{fontSize:17,fontWeight:700,color:C.text,margin:"0 0 20px"}}>{q}</p><div style={{display:"flex",gap:12}}>{[{l:"Yes",v:24,c:C.error},{l:"No",v:76,c:C.success}].map(o=><div key={o.l} style={{flex:1}}><div style={{height:90,borderRadius:12,background:`${o.c}08`,display:"flex",alignItems:"flex-end",justifyContent:"center",padding:12,position:"relative",marginBottom:8}}><div style={{position:"absolute",bottom:0,left:0,right:0,height:`${o.v}%`,background:`${o.c}20`,borderRadius:12}}/><span style={{fontSize:24,fontWeight:800,color:o.c,position:"relative"}}>{o.v}%</span></div><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{o.l}</p></div>)}</div><p style={{fontSize:12,color:C.textMuted,margin:"16px 0 0"}}>25/28 responded</p></Card>
  <Card style={{background:C.primarySoft,border:`1px solid ${C.primary}30`,padding:14}}><p style={{fontSize:12,color:C.primary,margin:0}}><strong>Teachable moment:</strong> 24% said Yes — convection needs fluid movement.</p></Card>
  <div style={{display:"flex",gap:8}}><Btn variant="ghost" full onClick={()=>navigate("dashboard")}>End</Btn><Btn variant="blue" full onClick={()=>setStage("create")}>New question</Btn></div></div>;
return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("dashboard")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Create Poll</h1></div>
  <Card style={{padding:20}}><p style={{fontSize:13,fontWeight:600,color:C.text,margin:"0 0 8px"}}>Question</p><textarea value={q} onChange={e=>setQ(e.target.value)} style={{width:"100%",minHeight:56,padding:"10px 14px",borderRadius:12,border:`1.5px solid ${C.border}`,fontFamily:"inherit",fontSize:14,resize:"vertical",boxSizing:"border-box",outline:"none"}}/><p style={{fontSize:13,fontWeight:600,color:C.text,margin:"12px 0 6px"}}>Type</p><div style={{display:"flex",gap:8}}>{["Yes/No","MCQ","Scale","Open"].map(t=><button key={t} style={{flex:1,height:36,borderRadius:8,border:`1.5px solid ${t==="Yes/No"?C.primary:C.border}`,background:t==="Yes/No"?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,color:t==="Yes/No"?C.primary:C.textMuted}}>{t}</button>)}</div></Card>
  <Btn full variant="blue" icon="radio" onClick={()=>setStage("live")} style={{height:52,fontSize:16}}>Broadcast to class</Btn></div>;
};

/* ============ PROFILE ============ */
const ProfileScreen=({navigate})=>{
  const[notifPrefs,setNotifPrefs]=useState({studentAlerts:true,assignmentReminders:true,weeklyDigest:false,systemUpdates:false});
  const toggle=(key)=>setNotifPrefs(p=>({...p,[key]:!p[key]}));
  const Toggle=({on,onToggle})=><div onClick={onToggle} style={{width:44,height:24,borderRadius:12,background:on?C.primary:C.border,cursor:"pointer",position:"relative",transition:"background 0.2s"}}><div style={{width:20,height:20,borderRadius:10,background:"#fff",position:"absolute",top:2,left:on?22:2,transition:"left 0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"}}/></div>;
  const Field=({label,value,icon})=><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0",borderBottom:`1px solid ${C.borderSoft}`}}><div><p style={{fontSize:11,color:C.textMuted,margin:"0 0 2px"}}>{label}</p><p style={{fontSize:14,color:C.text,margin:0,fontWeight:500}}>{value}</p></div><I n={icon||"edit"} s={16} c={C.textFaint}/></div>;
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Profile</h1>
    <Card style={{display:"flex",alignItems:"center",gap:14,padding:18}}>
      <Avatar name="Sharma" size={56} color={C.primary}/>
      <div style={{flex:1}}>
        <p style={{fontSize:17,fontWeight:700,color:C.text,margin:"0 0 2px"}}>Ms. Sharma</p>
        <p style={{fontSize:13,color:C.textMuted,margin:"0 0 4px"}}>Science + Math</p>
        <div style={{display:"flex",gap:6}}>{["6-A","6-B","7-A"].map(c=><Pill key={c} text={c} color={C.primary}/>)}</div>
      </div>
    </Card>
    <div style={{display:"flex",gap:10}}>
      <Stat label="Total students" value="90" icon="students" color={C.blue}/>
      <Stat label="Avg effectiveness" value="72%" icon="trendUp" color={C.success}/>
      <Stat label="Quizzes created" value="24" icon="quiz" color={C.primary}/>
    </div>
    <Card>
      <p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 12px",display:"flex",alignItems:"center",gap:8}}><I n="bell" s={16} c={C.primary}/>Notifications</p>
      {[{key:"studentAlerts",label:"Student alerts"},{key:"assignmentReminders",label:"Assignment reminders"},{key:"weeklyDigest",label:"Weekly digest"},{key:"systemUpdates",label:"System updates"}].map(item=><div key={item.key} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0",borderBottom:`1px solid ${C.borderSoft}`}}><span style={{fontSize:13,color:C.text}}>{item.label}</span><Toggle on={notifPrefs[item.key]} onToggle={()=>toggle(item.key)}/></div>)}
    </Card>
    <Card>
      <p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 8px",display:"flex",alignItems:"center",gap:8}}><I n="user" s={16} c={C.primary}/>Account</p>
      <Field label="Name" value="Ms. Sharma"/>
      <Field label="Email" value="sharma@school.edu.in" icon="mail"/>
      <Field label="Phone" value="+91 98765 43210" icon="phone"/>
      <Field label="School" value="Delhi Public School, Sector 12"/>
    </Card>
    <Card>
      <p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 8px",display:"flex",alignItems:"center",gap:8}}><I n="settings" s={16} c={C.primary}/>App Preferences</p>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0",borderBottom:`1px solid ${C.borderSoft}`}}><div><p style={{fontSize:13,color:C.text,margin:0}}>Default class on login</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Class 6-B</p></div><I n="chevD" s={16} c={C.textFaint}/></div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0"}}><span style={{fontSize:13,color:C.text}}>Auto-schedule assignments</span><Toggle on={false} onToggle={()=>{}}/></div>
    </Card>
    <div style={{display:"flex",flexDirection:"column",gap:2}}>
      {[{label:"About LearnAI",icon:"info"},{label:"Help & Support",icon:"help"},{label:"Log out",icon:"logout",color:C.error}].map(item=><button key={item.label} style={{display:"flex",alignItems:"center",gap:10,padding:"14px 4px",background:"transparent",border:"none",cursor:"pointer",fontFamily:"inherit",borderBottom:`1px solid ${C.borderSoft}`}}><I n={item.icon} s={18} c={item.color||C.textMuted}/><span style={{fontSize:14,color:item.color||C.text,fontWeight:500}}>{item.label}</span></button>)}
    </div>
  </div>;
};

/* ============ NOTIFICATIONS ============ */
const NotifsScreen=({navigate})=>{
  const groups=[
    {label:"Today",items:[
      {title:"Arjun Kumar hasn't practiced in 3 days",desc:"Last active 2 days ago — streak lost",time:"2h ago",color:C.warn,icon:"alert",unread:true},
      {title:"Fractions quiz: 18/28 completed",desc:"Class 6-B — 10 students pending",time:"3h ago",color:C.blue,icon:"quiz",unread:true},
      {title:"Class 6-B mastery crossed 60%",desc:"Up from 57% last week — steady progress",time:"5h ago",color:C.success,icon:"trendUp",unread:true},
    ]},
    {label:"Yesterday",items:[
      {title:"Priya Gupta scored below 30%",desc:"Fractions quiz — may need foundation repair",time:"1d ago",color:C.warn,icon:"alert",unread:false},
      {title:"Due tonight: 6 students pending",desc:"Fractions — Unlike Denominators assignment",time:"1d ago",color:C.blue,icon:"clock",unread:false},
      {title:"New NCERT chapter indexed",desc:"Electricity — 4 topics ready for quizzes",time:"1d ago",color:C.textMuted,icon:"content",unread:false},
    ]},
    {label:"This Week",items:[
      {title:"Weekly report ready",desc:"Class 6-B performance summary for this week",time:"3d ago",color:C.textMuted,icon:"chart",unread:false},
      {title:"5 students completed Foundation module",desc:"Fractions basics — avg score 68%",time:"4d ago",color:C.success,icon:"check",unread:false},
    ]},
  ];
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}>
      <Back onClick={()=>navigate("dashboard")}/>
      <h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0,flex:1}}>Notifications</h1>
      <button style={{background:"transparent",border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,color:C.primary}}>Mark all read</button>
    </div>
    {groups.map((g,gi)=><div key={gi}>
      <p style={{fontSize:12,fontWeight:700,color:C.textMuted,margin:"0 0 8px",textTransform:"uppercase",letterSpacing:0.5}}>{g.label}</p>
      {g.items.map((n,ni)=><Card key={ni} style={{marginBottom:8,padding:14,display:"flex",alignItems:"flex-start",gap:12}}>
        <div style={{width:36,height:36,borderRadius:10,background:`${n.color}15`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n={n.icon} s={18} c={n.color}/></div>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:6}}><p style={{fontSize:13,fontWeight:600,color:C.text,margin:0,flex:1}}>{n.title}</p>{n.unread&&<div style={{width:8,height:8,borderRadius:"50%",background:C.primary,flexShrink:0}}/>}</div>
          <p style={{fontSize:12,color:C.textMuted,margin:"3px 0 0"}}>{n.desc}</p>
          <p style={{fontSize:11,color:C.textFaint,margin:"4px 0 0"}}>{n.time}</p>
        </div>
      </Card>)}
    </div>)}
  </div>;
};

/* ============ ASSIGNMENTS ============ */
const AssignmentsScreen=({navigate})=>{
  const[tab,setTab]=useState("active");
  const active=[
    {title:"Fractions — Unlike Denominators",cls:"Class 6-B",due:"Mar 18",done:18,total:28,color:C.blue},
    {title:"Heat Transfer Quiz",cls:"Class 7-A",due:"Mar 19",done:22,total:30,color:C.primary},
    {title:"Decimals Practice",cls:"Class 6-A",due:"Mar 20",done:15,total:32,color:C.blue},
  ];
  const overdue=[
    {title:"Convection Review",cls:"Class 6-B",due:"Mar 14",done:12,total:28,color:C.error},
    {title:"Ratios Word Problems",cls:"Class 7-A",due:"Mar 12",done:8,total:30,color:C.error},
  ];
  const completed=[
    {title:"Temperature Basics",cls:"Class 6-B",avg:"74%",rate:"96%"},
    {title:"Like Fractions Drill",cls:"Class 6-A",avg:"68%",rate:"88%"},
    {title:"Conduction Quiz",cls:"Class 7-A",avg:"71%",rate:"93%"},
    {title:"Number Line Placement",cls:"Class 6-B",avg:"82%",rate:"100%"},
  ];
  const tabs=[{id:"active",label:"Active",count:3},{id:"overdue",label:"Overdue",count:2},{id:"completed",label:"Completed",count:8}];
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Assignments</h1><Btn variant="primary" icon="send" onClick={()=>navigate("push")}>Push new</Btn></div>
    <div style={{display:"flex",gap:8}}>{tabs.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,height:38,borderRadius:10,border:`1.5px solid ${tab===t.id?C.primary:C.border}`,background:tab===t.id?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,color:tab===t.id?C.primary:C.textMuted}}>{t.label} ({t.count})</button>)}</div>
    {tab==="active"&&active.map((a,i)=><Card key={i} style={{padding:14}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
        <div><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{a.title}</p><p style={{fontSize:12,color:C.textMuted,margin:"3px 0 0"}}>{a.cls} • Due {a.due}</p></div>
        <Pill text={`${a.done}/${a.total}`} color={a.color}/>
      </div>
      <Bar value={a.done} max={a.total} color={a.color} h={6}/>
    </Card>)}
    {tab==="overdue"&&overdue.map((a,i)=><Card key={i} style={{padding:14,background:C.errorSoft,border:`1px solid ${C.error}20`}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
        <div><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{a.title}</p><p style={{fontSize:12,color:C.error,margin:"3px 0 0"}}>{a.cls} • Was due {a.due}</p></div>
        <Pill text={`${a.done}/${a.total}`} color={C.error}/>
      </div>
      <Bar value={a.done} max={a.total} color={C.error} h={6}/>
      <div style={{marginTop:10}}><Btn variant="warn" icon="bell">Remind students</Btn></div>
    </Card>)}
    {tab==="completed"&&completed.map((a,i)=><Card key={i} style={{padding:14,display:"flex",alignItems:"center",gap:12}}>
      <div style={{width:36,height:36,borderRadius:10,background:C.successSoft,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="check" s={18} c={C.success} w={2.5}/></div>
      <div style={{flex:1}}><p style={{fontSize:13,fontWeight:600,color:C.text,margin:0}}>{a.title}</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{a.cls}</p></div>
      <div style={{textAlign:"right"}}><p style={{fontSize:13,fontWeight:700,color:C.success,margin:0}}>{a.avg}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{a.rate} done</p></div>
    </Card>)}
  </div>;
};

/* ============ LESSON PLAN ============ */
const LessonPlanScreen=({navigate})=>{
  const warmupQs=[
    {q:"What happens when you heat water in a pot?",a:"Warm water rises, cool water sinks — convection current"},
    {q:"Is convection possible in solids?",a:"No — convection requires fluid (liquid or gas)"},
    {q:"Name one real-life example of convection.",a:"Sea breeze, boiling water, room heater"},
  ];
  const misconceptions=[
    {text:"Confuses conduction with convection",count:8},
    {text:"Thinks convection happens in solids",count:5},
    {text:"Believes hot air sinks",count:3},
  ];
  const pollOptions=["Hot air rises because it's lighter","Hot air rises because it expands","Hot air rises because of gravity","Hot air rises because of pressure"];
  const hwLevels=[
    {level:"Strong",color:C.success,desc:"5 application problems + 1 beyond-syllabus challenge"},
    {level:"Average",color:C.blue,desc:"5 conceptual questions + 2 visual-based problems"},
    {level:"Foundation",color:C.warn,desc:"3 basic recall + 2 guided practice with hints enabled"},
  ];

  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("dashboard")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Lesson plan: Convection</h1></div>

    {/* 1. Warm-up quiz */}
    <Card style={{background:C.blueSoft,border:`1px solid ${C.blue}30`,padding:18}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}><I n="zap" s={18} c={C.blue}/><p style={{fontSize:14,fontWeight:700,color:C.blue,margin:0}}>Warm-up quiz</p><Pill text="5-min opener" color={C.blue}/></div>
      {warmupQs.map((wq,i)=><div key={i} style={{padding:"10px 0",borderTop:i?`1px solid ${C.blue}20`:"none"}}>
        <p style={{fontSize:13,fontWeight:600,color:C.text,margin:"0 0 4px"}}>{i+1}. {wq.q}</p>
        <p style={{fontSize:12,color:C.textMuted,margin:0}}>{wq.a}</p>
      </div>)}
      <Btn variant="blue" full icon="send" style={{marginTop:8}}>Push to class</Btn>
    </Card>

    {/* 2. Watch out for */}
    <Card style={{background:C.warnSoft,border:`1px solid ${C.warn}30`,padding:18}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}><I n="alert" s={18} c={C.warnDark}/><p style={{fontSize:14,fontWeight:700,color:C.warnDark,margin:0}}>Watch out for</p><Pill text="Common misconceptions" color={C.warn}/></div>
      {misconceptions.map((m,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderTop:i?`1px solid ${C.warn}25`:"none"}}>
        <div style={{width:8,height:8,borderRadius:"50%",background:C.warn,flexShrink:0}}/>
        <span style={{fontSize:13,color:C.text,flex:1}}>{m.text}</span>
        <Pill text={`${m.count} students`} color={C.warnDark}/>
      </div>)}
    </Card>

    {/* 3. Visual explainer */}
    <Card style={{background:`${C.primary}08`,border:`1px solid ${C.primary}25`,padding:18}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}><I n="play" s={18} c={C.primary}/><p style={{fontSize:14,fontWeight:700,color:C.primary,margin:0}}>Visual explainer</p><Pill text="Project this during class" color={C.primary}/></div>
      <div style={{width:"100%",height:120,borderRadius:12,background:`linear-gradient(135deg, ${C.primarySoft}, ${C.blueSoft})`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12}}>
        <div style={{width:48,height:48,borderRadius:"50%",background:`${C.primary}20`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="play" s={24} c={C.primary}/></div>
      </div>
      <div style={{display:"flex",gap:8}}>
        <Btn variant="primary" style={{flex:1}} icon="eye">Open full screen</Btn>
        <Btn variant="soft" style={{flex:1}} icon="send">Share to students</Btn>
      </div>
    </Card>

    {/* 4. Mid-lesson check */}
    <Card style={{background:`${C.success}06`,border:`1px solid ${C.success}25`,padding:18}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}><I n="radio" s={18} c="#0D9488"/><p style={{fontSize:14,fontWeight:700,color:"#0D9488",margin:0}}>Mid-lesson check</p><Pill text="Live poll" color="#0D9488"/></div>
      <p style={{fontSize:14,fontWeight:600,color:C.text,margin:"0 0 12px"}}>Why does hot air rise?</p>
      {pollOptions.map((opt,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",borderRadius:10,border:`1px solid ${C.border}`,marginBottom:6,background:i===1?`${"#0D9488"}12`:"transparent"}}>
        <span style={{fontSize:13,fontWeight:600,color:i===1?"#0D9488":C.textMuted,width:20}}>{String.fromCharCode(65+i)}.</span>
        <span style={{fontSize:13,color:i===1?"#0D9488":C.text}}>{opt}</span>
        {i===1&&<I n="check" s={14} c="#0D9488" w={2.5}/>}
      </div>)}
      <Btn variant="success" full icon="radio" onClick={()=>navigate("poll")} style={{marginTop:8}}>Start poll now</Btn>
    </Card>

    {/* 5. Homework */}
    <Card style={{background:C.successSoft,border:`1px solid ${C.success}30`,padding:18}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}><I n="send" s={18} c={C.successDark}/><p style={{fontSize:14,fontWeight:700,color:C.successDark,margin:0}}>Homework</p><Pill text="Auto-differentiated" color={C.success}/></div>
      {hwLevels.map((hw,i)=><div key={i} style={{padding:"10px 0",borderTop:i?`1px solid ${C.success}25`:"none"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
          <div style={{width:10,height:10,borderRadius:"50%",background:hw.color}}/>
          <span style={{fontSize:13,fontWeight:700,color:hw.color}}>{hw.level}</span>
        </div>
        <p style={{fontSize:12,color:C.textMuted,margin:0,paddingLeft:18}}>{hw.desc}</p>
      </div>)}
      <Btn variant="success" full icon="send" onClick={()=>navigate("push")} style={{marginTop:8}}>Push homework</Btn>
    </Card>

    {/* Bottom actions */}
    <div style={{display:"flex",gap:10}}>
      <Btn variant="primary" style={{flex:1}} icon="bookmark">Save lesson plan</Btn>
      <Btn variant="ghost" style={{flex:1}} icon="send">Share with colleague</Btn>
    </div>
  </div>;
};

/* ============ APP SHELL ============ */
export default function TutorApp(){
  const[setupDone,setSetupDone]=useState(false);
  const[screen,setScreen]=useState("dashboard");
  const[context,setContext]=useState(null);
  const[teacherClasses,setTeacherClasses]=useState(allClasses);
  const[currentClass,setCurrentClass]=useState(allClasses[0]);
  const scrollRef=useRef(null);
  const navigateRef=useRef(null);
  const navigate=(s,ctx)=>{setSetupDone(true);setScreen(s);if(ctx!==undefined)setContext(ctx);scrollRef.current?.scrollTo(0,0);};
  navigateRef.current=navigate;
  useEffect(()=>{const h=(e)=>navigateRef.current?.(e.detail);window.addEventListener('sidebar-nav',h);return()=>window.removeEventListener('sidebar-nav',h);},[]);

  if(!setupDone) return <div style={{fontFamily:'"Inter",-apple-system,sans-serif',maxWidth:"100%",margin:"0 auto",background:C.bg,minHeight:"100vh",borderRadius:0,overflow:"hidden",boxShadow:"none",position:"relative"}}><SetupWizard onComplete={(ids)=>{const tc=ids&&ids.length?allClasses.filter(c=>ids.includes(c.id)):allClasses;setTeacherClasses(tc);setCurrentClass(tc[0]);setSetupDone(true);}}/></div>;

  const navItems=[{id:"dashboard",icon:"home",label:"Home"},{id:"students",icon:"students",label:"Students"},{id:"quizzes",icon:"quiz",label:"Quizzes"},{id:"content",icon:"content",label:"Content"},{id:"analytics",icon:"chart",label:"Analytics"},{id:"profile",icon:"user",label:"Profile"}];
  const screens={dashboard:<DashboardScreen navigate={navigate} currentClass={currentClass}/>,students:<StudentsScreen navigate={navigate} currentClass={currentClass}/>,student:<StudentProfile navigate={navigate} student={context||students[0]}/>,quizzes:<QuizLibraryScreen navigate={navigate}/>,push:<PushScreen navigate={navigate} context={context}/>,analytics:<AnalyticsScreen navigate={navigate}/>,content:<ContentScreen navigate={navigate}/>,poll:<PollScreen navigate={navigate}/>,enrollment:<EnrollmentScreen navigate={navigate} currentClass={currentClass}/>,profile:<ProfileScreen navigate={navigate}/>,notifs:<NotifsScreen navigate={navigate}/>,assignments:<AssignmentsScreen navigate={navigate}/>,lessonPlan:<LessonPlanScreen navigate={navigate}/>};
  const activeNav=["student","push","poll","enrollment","notifs","assignments","lessonPlan"].includes(screen)?(screen==="poll"||screen==="enrollment"||screen==="notifs"||screen==="assignments"||screen==="lessonPlan"?"dashboard":"students"):screen;

  return <div style={{fontFamily:'"Inter",-apple-system,sans-serif',maxWidth:"100%",margin:"0 auto",background:C.bg,minHeight:"100vh",display:"flex",flexDirection:"column",borderRadius:0,overflow:"hidden",boxShadow:"none",position:"relative"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px 10px",background:C.card,borderBottom:`1px solid ${C.border}`}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:34,height:34,borderRadius:10,background:"linear-gradient(135deg, #2563EB, #7C3AED)",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9 2 7 4.5 7 7.5c0 2 1.2 3.8 2.5 5l.5.8h4l.5-.8C15.8 11.3 17 9.5 17 7.5 17 4.5 15 2 12 2z" fill="rgba(255,255,255,0.12)"/><circle cx="12" cy="6.5" r="1" fill="#fff" stroke="none"/><circle cx="9.8" cy="9" r=".7" fill="#fff" stroke="none"/><circle cx="14.2" cy="9" r=".7" fill="#fff" stroke="none"/><line x1="12" y1="6.5" x2="9.8" y2="9" strokeWidth=".7" opacity=".5"/><line x1="12" y1="6.5" x2="14.2" y2="9" strokeWidth=".7" opacity=".5"/><line x1="9" y1="16" x2="15" y2="16"/><line x1="10" y1="18" x2="14" y2="18"/></svg></div><ClassSwitcher current={currentClass} onSwitch={setCurrentClass} classes={teacherClasses}/></div>
      <div style={{display:"flex",gap:6,alignItems:"center"}}><button onClick={()=>navigate("notifs")} style={{background:"transparent",border:"none",cursor:"pointer",padding:4,position:"relative",display:"flex"}}><I n="bell" s={20} c={C.textMuted}/><div style={{position:"absolute",top:2,right:2,width:7,height:7,borderRadius:"50%",background:C.error,border:"2px solid #fff"}}/></button><Avatar name="Sharma" size={32} color={C.primary}/></div>
    </div>
    <div ref={scrollRef} style={{flex:1,overflowY:"auto",padding:"14px 18px 100px"}}>{screens[screen]||screens.dashboard}</div>
    <div style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(255,255,255,0.97)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-around",padding:"6px 0 18px"}}>
      {navItems.map(item=>{const isActive=activeNav===item.id;return <button key={item.id} onClick={()=>{navigate(item.id);setContext(null);}} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,padding:"4px 10px",background:"transparent",border:"none",cursor:"pointer",fontFamily:"inherit",color:isActive?C.primary:C.textFaint,fontSize:10,fontWeight:isActive?700:500}}><div style={{width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",transform:isActive?"scale(1.15)":"scale(1)",transition:"transform 0.2s"}}><I n={item.icon} s={20} c={isActive?C.primary:C.textFaint} w={isActive?2.2:1.6}/></div><span>{item.label}</span>{isActive&&<div style={{width:4,height:4,borderRadius:"50%",background:C.primary}}/>}</button>;})}
    </div>
  </div>;
}
