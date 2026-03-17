// @ts-nocheck
"use client";
import { useState, useRef, useEffect } from "react";

const C={bg:"#F8FAFC",card:"#FFFFFF",text:"#0F172A",textMuted:"#64748B",textFaint:"#94A3B8",primary:"#0D9488",primarySoft:"#F0FDFA",primaryDark:"#115E59",blue:"#2563EB",blueSoft:"#EFF6FF",success:"#10B981",successSoft:"#D1FAE5",successDark:"#065F46",warn:"#F59E0B",warnSoft:"#FEF3C7",warnDark:"#78350F",error:"#EF4444",errorSoft:"#FEE2E2",errorDark:"#7F1D1D",border:"#E2E8F0",borderSoft:"#F1F5F9",accent:"#7C3AED",accentSoft:"#F3E8FF"};

const I=({n,s=24,c="currentColor",w=1.8})=>{const st={width:s,height:s,display:"block"},p={fill:"none",stroke:c,strokeWidth:w,strokeLinecap:"round",strokeLinejoin:"round"};const icons={
home:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M9 21V13.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6V21"/><path {...p} d="M2 10.5L10.586 2.914a2 2 0 0 1 2.828 0L22 10.5"/><path {...p} d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/></svg>,
chart:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M18 20V10"/><path {...p} d="M12 20V4"/><path {...p} d="M6 20v-6"/></svg>,
bell:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path {...p} d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
msg:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
check:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M20 6L9 17l-5-5"/></svg>,
clock:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><path {...p} d="M12 6v6l4 2"/></svg>,
arrowR:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M5 12h14M12 5l7 7-7 7"/></svg>,
arrowL:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M19 12H5M12 5l-7 7 7 7"/></svg>,
trendUp:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M23 6l-9.5 9.5-5-5L1 18"/><path {...p} d="M17 6h6v6"/></svg>,
brain:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2a5 5 0 0 0-4.8 3.6A4 4 0 0 0 4 9.5a4 4 0 0 0 .5 6A4.5 4.5 0 0 0 8 20h1"/><path {...p} d="M12 2a5 5 0 0 1 4.8 3.6A4 4 0 0 1 20 9.5a4 4 0 0 1-.5 6A4.5 4.5 0 0 1 16 20h-1"/><path {...p} d="M12 2v20"/></svg>,
star:<svg style={st} viewBox="0 0 24 24"><path {...p} fill={c} opacity="0.2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path {...p} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
fire:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z"/></svg>,
trophy:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2"/><path {...p} d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"/><path {...p} d="M6 3h12v6a6 6 0 0 1-12 0V3z"/><path {...p} d="M9 21h6M12 15v6"/></svg>,
target:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><circle {...p} cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill={c} stroke="none"/></svg>,
book:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path {...p} d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
calendar:<svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="4" width="18" height="17" rx="2"/><path {...p} d="M3 10h18M8 2v4M16 2v4"/></svg>,
shield:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
user:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle {...p} cx="12" cy="7" r="4"/></svg>,
download:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path {...p} d="M7 10l5 5 5-5M12 15V3"/></svg>,
send:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M22 2L11 13"/><path {...p} d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>,
};return icons[n]||null;};

/* ============ PRIMITIVES ============ */
const Card=({children,style,onClick})=> <div onClick={onClick} style={{background:C.card,borderRadius:16,padding:20,border:`1px solid ${C.border}`,...(onClick?{cursor:"pointer"}:{}),...style}}>{children}</div>;
const Pill=({text,color=C.primary,bg,icon})=> <span style={{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 12px",borderRadius:999,fontSize:12,fontWeight:600,background:bg||`${color}15`,color}}>{icon&&<I n={icon} s={13} c={color} w={2}/>}{text}</span>;
const Btn=({children,variant="primary",style,onClick,full,icon})=>{const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,height:44,padding:"0 20px",borderRadius:12,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit",border:"none",transition:"all 0.12s",...(full?{width:"100%"}:{})};const v={primary:{background:C.primary,color:"#fff"},soft:{background:C.primarySoft,color:C.primary},ghost:{background:"transparent",color:C.primary,border:`1.5px solid ${C.border}`},success:{background:C.success,color:"#fff"},warn:{background:C.warnSoft,color:C.warnDark},small:{height:34,padding:"0 12px",fontSize:12,borderRadius:8,background:C.primarySoft,color:C.primary}};return <button onClick={onClick} style={{...base,...v[variant],...style}}>{icon&&<I n={icon} s={16} c={v[variant]?.color||"#fff"} w={2}/>}{children}</button>;};
const Bar=({value,max=100,color=C.primary,h=6})=> <div style={{width:"100%",height:h,background:`${color}20`,borderRadius:h,overflow:"hidden"}}><div style={{width:`${Math.min((value/max)*100,100)}%`,height:"100%",background:color,borderRadius:h,transition:"width 0.5s"}}/></div>;
const Ring=({value,max=100,size=64,stroke=5,color=C.primary,children})=>{const r=(size-stroke)/2,circ=2*Math.PI*r,off=circ-(value/max)*circ;return <div style={{position:"relative",width:size,height:size}}><svg width={size} height={size} style={{transform:"rotate(-90deg)"}}><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={`${color}20`} strokeWidth={stroke}/><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={circ} strokeDashoffset={off} strokeLinecap="round" style={{transition:"stroke-dashoffset 0.6s ease"}}/></svg><div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>{children}</div></div>;};
const Back=({onClick})=> <button onClick={onClick} style={{background:"transparent",border:"none",cursor:"pointer",padding:4,display:"flex",color:C.textMuted}}><I n="arrowL" s={22} c={C.textMuted}/></button>;

/* ============ DATA ============ */
const children=[
  {name:"Aarav",class:"Class 6-B",school:"Delhi Public School",board:"CBSE",mastery:62,growth:24,streak:3,xp:240,level:12,quizzes:18,tutorSessions:12,photoQs:5,lastActive:"4h ago",teacher:"Ms. Sharma"},
  {name:"Ananya",class:"Class 4-A",school:"Delhi Public School",board:"CBSE",mastery:45,growth:12,streak:1,xp:80,level:5,quizzes:6,tutorSessions:4,photoQs:2,lastActive:"1d ago",teacher:"Mrs. Singh"},
];

const subjectsByChild=[
  [
    {name:"Science",mastery:58,growth:18,topics:[{name:"Temperature",score:78,trend:"up"},{name:"Conduction",score:65,trend:"up"},{name:"Convection",score:42,trend:"flat"},{name:"Light",score:48,trend:"up"}]},
    {name:"Math",mastery:66,growth:30,topics:[{name:"Like Fractions",score:82,trend:"up"},{name:"Unlike Fractions",score:55,trend:"up"},{name:"Decimals",score:62,trend:"flat"},{name:"Ratios",score:48,trend:"up"}]},
  ],
  [
    {name:"Science",mastery:38,growth:8,topics:[{name:"Plants",score:52,trend:"up"},{name:"Animals",score:45,trend:"flat"},{name:"Materials",score:30,trend:"up"},{name:"Water",score:28,trend:"flat"}]},
    {name:"Math",mastery:42,growth:15,topics:[{name:"Addition",score:65,trend:"up"},{name:"Subtraction",score:55,trend:"up"},{name:"Shapes",score:35,trend:"flat"},{name:"Measurement",score:22,trend:"flat"}]},
  ],
];

const weeklyDigestByChild=[
  {
    dates:"Mar 10-16, 2026",
    highlights:["Completed 5 daily missions","Mastery up 4% this week","Used photo homework 3 times","New badge: Quiz Master"],
    concern:"Convection is still a weak area — teacher has pushed extra practice",
    teacherNote:"Aarav is showing great improvement in Math. He responds well to visual explanations. I'm keeping an eye on his Science gaps.",
  },
  {
    dates:"Mar 10-16, 2026",
    highlights:["Completed 2 daily missions","Mastery up 2% this week","Started tutor sessions"],
    concern:"Water and Materials topics need more attention — teacher is assigning focused exercises",
    teacherNote:"Ananya is making steady progress. She enjoys the visual lessons. We're working on building her confidence in Science.",
  },
];

const milestonesByChild=[
  [
    {title:"Quiz Master",desc:"Completed 15 quizzes",date:"Today",icon:"trophy",color:C.warn,new:true},
    {title:"3-Day Streak",desc:"Practiced 3 days in a row",date:"Yesterday",icon:"fire",color:"#F97316",new:true},
    {title:"Math Improver",desc:"Fractions mastery up 30%",date:"3 days ago",icon:"trendUp",color:C.success,new:false},
    {title:"First Photo Q",desc:"Used camera for homework help",date:"1 week ago",icon:"target",color:C.blue,new:false},
    {title:"Getting Started",desc:"Completed onboarding",date:"2 weeks ago",icon:"check",color:C.primary,new:false},
  ],
  [
    {title:"First Quiz",desc:"Completed first quiz",date:"Today",icon:"trophy",color:C.warn,new:true},
    {title:"Science Explorer",desc:"Finished Plants topic",date:"2 days ago",icon:"brain",color:C.blue,new:true},
    {title:"Getting Started",desc:"Completed onboarding",date:"1 week ago",icon:"check",color:C.primary,new:false},
  ],
];

const activityByChild=[
  [
    {date:"Today",items:[{time:"4:30 PM",action:"Daily mission: 6/8 correct",icon:"target",color:C.success},{time:"5:00 PM",action:"Tutor session: Convection (12 min)",icon:"brain",color:C.blue},{time:"5:20 PM",action:"Photo homework: Ratios",icon:"target",color:C.accent}]},
    {date:"Yesterday",items:[{time:"5:15 PM",action:"Daily mission: 5/8 correct",icon:"target",color:C.warn},{time:"5:45 PM",action:"Fractions quiz: 8/10",icon:"check",color:C.success},{time:"6:00 PM",action:"Revision: Heat chapter",icon:"book",color:C.primary}]},
    {date:"Monday",items:[{time:"4:00 PM",action:"Daily mission: 7/8 correct",icon:"target",color:C.success},{time:"4:15 PM",action:"Challenge: Weekly contest",icon:"trophy",color:C.warn}]},
  ],
  [
    {date:"Today",items:[{time:"3:30 PM",action:"Daily mission: 4/8 correct",icon:"target",color:C.warn},{time:"4:00 PM",action:"Tutor session: Plants (10 min)",icon:"brain",color:C.blue}]},
    {date:"Yesterday",items:[{time:"4:00 PM",action:"Addition quiz: 6/10",icon:"check",color:C.warn},{time:"4:30 PM",action:"Revision: Animals chapter",icon:"book",color:C.primary}]},
  ],
];

/* ============ HOME ============ */
const HomeScreen=({navigate,activeChild,setActiveChild})=> {
  const child=children[activeChild];
  const subjects=subjectsByChild[activeChild];
  const weeklyDigest=weeklyDigestByChild[activeChild];
  const milestones=milestonesByChild[activeChild];

  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    {/* Child switcher */}
    <div style={{display:"flex",gap:8}}>
      {children.map((ch,i)=> <button key={i} onClick={()=>setActiveChild(i)} style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 16px",borderRadius:999,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",border:"none",transition:"all 0.15s",background:i===activeChild?C.primary:`${C.primary}10`,color:i===activeChild?"#fff":C.primary}}>{ch.name}</button>)}
    </div>

    <div><p style={{fontSize:13,color:C.textMuted,margin:0}}>Your child's progress</p><h1 style={{fontSize:24,fontWeight:800,color:C.text,margin:"2px 0 0"}}>{child.name}</h1><p style={{fontSize:13,color:C.textMuted,margin:"2px 0 0"}}>{child.class} • {child.school} • {child.board}</p></div>

    {/* Overview card */}
    <Card style={{background:"linear-gradient(135deg, #0D9488, #0F766E)",border:"none",padding:24,color:"#fff"}}>
      <div style={{display:"flex",alignItems:"center",gap:20}}>
        <Ring value={child.mastery} size={80} stroke={6} color="#fff"><span style={{fontSize:22,fontWeight:800,color:"#fff"}}>{child.mastery}%</span></Ring>
        <div style={{flex:1}}>
          <p style={{fontSize:18,fontWeight:700,margin:"0 0 4px"}}>Overall mastery</p>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            <Pill icon="trendUp" text={`+${child.growth}% growth`} bg="rgba(255,255,255,0.2)" color="#fff"/>
            <Pill icon="fire" text={`${child.streak}d streak`} bg="rgba(255,255,255,0.2)" color="#fff"/>
          </div>
          <p style={{fontSize:12,opacity:0.7,margin:"8px 0 0"}}>Last active: {child.lastActive}</p>
        </div>
      </div>
    </Card>

    {/* Quick stats */}
    <div style={{display:"flex",gap:10}}>
      {[{label:"Quizzes",value:child.quizzes,icon:"check",color:C.primary},{label:"Tutor sessions",value:child.tutorSessions,icon:"brain",color:C.blue},{label:"Level",value:child.level,icon:"star",color:C.warn}].map(s=> <Card key={s.label} style={{flex:1,padding:14,textAlign:"center"}}><div style={{display:"flex",justifyContent:"center",marginBottom:6}}><I n={s.icon} s={20} c={s.color}/></div><p style={{fontSize:18,fontWeight:800,color:C.text,margin:0}}>{s.value}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{s.label}</p></Card>)}
    </div>

    {/* Subject breakdown */}
    <div><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Subject performance</p>
      {subjects.map((sub,i)=> <Card key={i} onClick={()=>navigate("subject",sub)} style={{marginBottom:8,cursor:"pointer",padding:16}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
          <span style={{fontSize:15,fontWeight:700,color:C.text}}>{sub.name}</span>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <Pill icon="trendUp" text={`+${sub.growth}%`} color={C.success} bg={C.successSoft}/>
            <span style={{fontSize:16,fontWeight:800,color:sub.mastery>=60?C.success:sub.mastery>=40?C.warn:C.error}}>{sub.mastery}%</span>
          </div>
        </div>
        <Bar value={sub.mastery} color={sub.mastery>=60?C.success:sub.mastery>=40?C.warn:C.error} h={5}/>
      </Card>)}
    </div>

    {/* Teacher note */}
    <Card style={{background:C.accentSoft,border:`1px solid ${C.accent}30`,padding:16}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><I n="msg" s={18} c={C.accent}/><p style={{fontSize:13,fontWeight:700,color:C.accent,margin:0}}>Note from {child.teacher}</p></div>
      <p style={{fontSize:13,color:C.text,margin:"0 0 12px",lineHeight:1.6}}>{weeklyDigest.teacherNote}</p>
      <Btn variant="small" icon="send" onClick={()=>navigate("message")}>Reply to teacher</Btn>
    </Card>

    {/* New milestones */}
    {milestones.filter(m=>m.new).length>0&&<div>
      <p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Recent achievements</p>
      {milestones.filter(m=>m.new).map((m,i)=> <Card key={i} style={{marginBottom:8,padding:14,display:"flex",alignItems:"center",gap:14,background:`${m.color}08`,border:`1px solid ${m.color}20`}}>
        <div style={{width:44,height:44,borderRadius:14,background:`${m.color}15`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n={m.icon} s={22} c={m.color}/></div>
        <div style={{flex:1}}><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{m.title}</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{m.desc}</p></div>
        <Pill text={m.date} color={C.textMuted} bg={C.borderSoft}/>
      </Card>)}
    </div>}
  </div>;
};

/* ============ SUBJECT DETAIL ============ */
const SubjectScreen=({navigate,subject:sub})=> {
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>{sub.name}</h1></div>

    <Card style={{display:"flex",alignItems:"center",gap:20,padding:16}}>
      <Ring value={sub.mastery} size={72} stroke={6} color={sub.mastery>=60?C.success:C.warn}><span style={{fontSize:20,fontWeight:800,color:C.text}}>{sub.mastery}%</span></Ring>
      <div><p style={{fontSize:15,fontWeight:700,color:C.text,margin:0}}>Mastery</p><Pill icon="trendUp" text={`+${sub.growth}% since start`} color={C.success} bg={C.successSoft}/></div>
    </Card>

    <div><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Topic breakdown</p>
      {sub.topics.map((t,i)=>{const tc=t.score>=70?C.success:t.score>=40?C.warn:C.error;return <Card key={i} style={{marginBottom:8,padding:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
          <span style={{fontSize:14,fontWeight:600,color:C.text}}>{t.name}</span>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <I n={t.trend==="up"?"trendUp":"clock"} s={14} c={t.trend==="up"?C.success:C.textMuted}/>
            <span style={{fontSize:15,fontWeight:800,color:tc}}>{t.score}%</span>
          </div>
        </div>
        <Bar value={t.score} color={tc} h={5}/>
      </Card>;})}
    </div>

    {sub.topics.some(t=>t.score<50)&&<Card style={{background:C.warnSoft,border:`1px solid ${C.warn}30`,padding:14}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}><I n="brain" s={16} c={C.warnDark}/><p style={{fontSize:13,fontWeight:600,color:C.warnDark,margin:0}}>Areas to watch</p></div>
      <p style={{fontSize:12,color:C.text,margin:0,lineHeight:1.5}}>{sub.topics.filter(t=>t.score<50).map(t=>t.name).join(", ")} need more practice. The teacher is aware and has assigned targeted exercises.</p>
    </Card>}
  </div>;
};

/* ============ WEEKLY DIGEST ============ */
const DigestScreen=({navigate,activeChild})=> {
  const child=children[activeChild];
  const subjects=subjectsByChild[activeChild];
  const weeklyDigest=weeklyDigestByChild[activeChild];

  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Weekly digest</h1>
    <p style={{fontSize:13,color:C.textMuted,margin:0}}>{weeklyDigest.dates}</p>

    {/* Highlights */}
    <Card style={{padding:16}}>
      <p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>This week's highlights</p>
      {weeklyDigest.highlights.map((h,i)=> <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <div style={{width:24,height:24,borderRadius:"50%",background:C.successSoft,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="check" s={14} c={C.success} w={2.5}/></div>
        <span style={{fontSize:13,color:C.text}}>{h}</span>
      </div>)}
    </Card>

    {/* Concern */}
    <Card style={{background:C.warnSoft,border:`1px solid ${C.warn}30`,padding:16}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><I n="target" s={16} c={C.warnDark}/><p style={{fontSize:13,fontWeight:600,color:C.warnDark,margin:0}}>Keep an eye on</p></div>
      <p style={{fontSize:13,color:C.text,margin:0,lineHeight:1.5}}>{weeklyDigest.concern}</p>
    </Card>

    {/* Teacher note */}
    <Card style={{background:C.accentSoft,border:`1px solid ${C.accent}30`,padding:16}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><I n="msg" s={16} c={C.accent}/><p style={{fontSize:13,fontWeight:600,color:C.accent,margin:0}}>From {child.teacher}</p></div>
      <p style={{fontSize:13,color:C.text,margin:0,lineHeight:1.6}}>{weeklyDigest.teacherNote}</p>
    </Card>

    {/* Subject summary */}
    <div><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Subject summary</p>
      {subjects.map((s,i)=> <Card key={i} style={{marginBottom:8,padding:14,display:"flex",alignItems:"center",gap:14}}>
        <Ring value={s.mastery} size={48} stroke={4} color={s.mastery>=60?C.success:C.warn}><span style={{fontSize:14,fontWeight:800,color:C.text}}>{s.mastery}%</span></Ring>
        <div style={{flex:1}}><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{s.name}</p><p style={{fontSize:12,color:C.success,margin:"2px 0 0"}}>+{s.growth}% this week</p></div>
      </Card>)}
    </div>

    {/* Download report */}
    <Btn variant="soft" full icon="download">Download full report (PDF)</Btn>
  </div>;
};

/* ============ ACTIVITY LOG ============ */
const ActivityScreen=({navigate,activeChild})=> {
  const child=children[activeChild];
  const activity=activityByChild[activeChild];

  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Activity</h1>
    <p style={{fontSize:13,color:C.textMuted,margin:0}}>What {child.name} has been working on</p>

    {/* Streak calendar */}
    <Card style={{padding:16}}>
      <p style={{fontSize:13,fontWeight:600,color:C.text,margin:"0 0 10px"}}>This week</p>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        {["M","T","W","T","F","S","S"].map((d,i)=>{const active=[0,1,2].includes(i);const today=i===2;return <div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5}}>
          <span style={{fontSize:11,color:today?C.primary:C.textMuted,fontWeight:today?700:400}}>{d}</span>
          <div style={{width:34,height:34,borderRadius:"50%",background:today?C.primary:active?C.successSoft:"transparent",border:active?"none":`1.5px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center"}}>
            {active&&<I n="check" s={14} c={today?"#fff":C.success} w={2.5}/>}
          </div>
        </div>;})}
      </div>
    </Card>

    {/* Daily activity timeline */}
    {activity.map((day,di)=> <div key={di}>
      <p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 8px"}}>{day.date}</p>
      {day.items.map((item,i)=> <div key={i} style={{display:"flex",gap:12,padding:"10px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:50,flexShrink:0}}>
          <span style={{fontSize:11,fontWeight:600,color:C.textMuted}}>{item.time}</span>
          {i<day.items.length-1&&<div style={{width:2,flex:1,background:C.borderSoft,marginTop:4}}/>}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:10,flex:1}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:item.color}}/>
          <span style={{fontSize:13,color:C.text}}>{item.action}</span>
        </div>
      </div>)}
    </div>)}
  </div>;
};

/* ============ MILESTONES ============ */
const MilestonesScreen=({navigate,activeChild})=> {
  const child=children[activeChild];
  const milestones=milestonesByChild[activeChild];

  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Milestones</h1>
    <p style={{fontSize:13,color:C.textMuted,margin:0}}>{child.name}'s achievements and badges</p>

    <div style={{display:"flex",gap:10}}>
      <Card style={{flex:1,padding:14,textAlign:"center"}}><p style={{fontSize:22,fontWeight:800,color:C.warn,margin:0}}>{milestones.length}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Total</p></Card>
      <Card style={{flex:1,padding:14,textAlign:"center"}}><p style={{fontSize:22,fontWeight:800,color:C.success,margin:0}}>{milestones.filter(m=>m.new).length}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>This week</p></Card>
      <Card style={{flex:1,padding:14,textAlign:"center"}}><p style={{fontSize:22,fontWeight:800,color:C.primary,margin:0}}>{child.level}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Level</p></Card>
    </div>

    {milestones.map((m,i)=> <Card key={i} style={{padding:16,display:"flex",alignItems:"center",gap:14,...(m.new?{background:`${m.color}06`,border:`1px solid ${m.color}20`}:{})}}>
      <div style={{width:48,height:48,borderRadius:14,background:`${m.color}15`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n={m.icon} s={24} c={m.color}/></div>
      <div style={{flex:1}}>
        <div style={{display:"flex",alignItems:"center",gap:6}}><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{m.title}</p>{m.new&&<Pill text="New" color={C.success} bg={C.successSoft}/>}</div>
        <p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{m.desc}</p>
      </div>
      <span style={{fontSize:11,color:C.textFaint}}>{m.date}</span>
    </Card>)}
  </div>;
};

/* ============ SETTINGS ============ */
const SettingsScreen=({navigate,activeChild})=> {
  const child=children[activeChild];

  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Settings</h1>

    <Card style={{padding:0}}>
      {[
        {label:"Notification preferences",desc:"Weekly digest, milestone alerts, streak warnings",icon:"bell"},
        {label:"Child profile",desc:`${child.name} • ${child.class} • ${child.board}`,icon:"user"},
        {label:"Teacher contact",desc:child.teacher,icon:"msg"},
        {label:"Download reports",desc:"Monthly and weekly PDF reports",icon:"download"},
        {label:"Privacy & data",desc:"What data is collected and how it's used",icon:"shield"},
      ].map((item,i)=> <div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"16px 20px",borderTop:i?`1px solid ${C.borderSoft}`:"none",cursor:"pointer"}}>
        <div style={{width:36,height:36,borderRadius:10,background:C.primarySoft,display:"flex",alignItems:"center",justifyContent:"center"}}><I n={item.icon} s={18} c={C.primary}/></div>
        <div style={{flex:1}}><p style={{fontSize:14,fontWeight:500,color:C.text,margin:0}}>{item.label}</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{item.desc}</p></div>
        <I n="arrowR" s={16} c={C.textFaint}/>
      </div>)}
    </Card>

    <Card style={{background:C.primarySoft,border:`1px solid ${C.primary}30`,padding:16,textAlign:"center"}}>
      <I n="shield" s={24} c={C.primary}/>
      <p style={{fontSize:13,fontWeight:600,color:C.primaryDark,margin:"8px 0 4px"}}>Your child's data is safe</p>
      <p style={{fontSize:12,color:C.textMuted,margin:0,lineHeight:1.5}}>LearnAI is COPPA compliant. We never share student data with third parties.</p>
    </Card>
  </div>;
};

/* ============ MESSAGE SCREEN ============ */
const MessageScreen=({navigate,activeChild})=> {
  const child=children[activeChild];
  const subjects=subjectsByChild[activeChild];

  const messages=activeChild===0?[
    {from:"teacher",text:"Good news! Aarav improved 24% in Math this month. He responds well to visual explanations."},
    {from:"parent",text:"That's wonderful! Should we focus more on Science at home?"},
    {from:"teacher",text:"Yes, Convection is his weakest area. I've pushed extra practice exercises. Encourage him to do 10 min daily."},
    {from:"parent",text:"Will do. Thanks for the update!"},
  ]:[
    {from:"teacher",text:"Ananya is settling in well. She's enthusiastic about the Plants topic and asks great questions."},
    {from:"parent",text:"That's great to hear! How is she doing in Math?"},
    {from:"teacher",text:"Math needs some work, especially Shapes and Measurement. I've assigned extra visual exercises. 10 minutes of practice at home would help."},
    {from:"parent",text:"We'll make sure she practices. Thank you!"},
  ];

  return <div style={{display:"flex",flexDirection:"column",height:"100%",minHeight:"calc(100vh - 140px)"}}>
    {/* Header */}
    <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
      <Back onClick={()=>navigate("home")}/>
      <div style={{width:40,height:40,borderRadius:12,background:C.accentSoft,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="user" s={20} c={C.accent}/></div>
      <div style={{flex:1}}>
        <p style={{fontSize:15,fontWeight:700,color:C.text,margin:0}}>{child.teacher}</p>
        <p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{subjects.map(s=>s.name).join(" • ")} • {child.class}</p>
      </div>
    </div>

    {/* Messages */}
    <div style={{flex:1,display:"flex",flexDirection:"column",gap:12,marginBottom:16}}>
      {messages.map((m,i)=>{const isTeacher=m.from==="teacher";return <div key={i} style={{display:"flex",justifyContent:isTeacher?"flex-start":"flex-end"}}>
        <div style={{maxWidth:"80%",padding:"12px 16px",borderRadius:16,...(isTeacher?{borderTopLeftRadius:4,background:C.borderSoft}:{borderTopRightRadius:4,background:C.primary})}}>
          {isTeacher&&<p style={{fontSize:11,fontWeight:600,color:C.accent,margin:"0 0 4px"}}>{child.teacher}</p>}
          <p style={{fontSize:13,color:isTeacher?C.text:"#fff",margin:0,lineHeight:1.5}}>{m.text}</p>
        </div>
      </div>;})}
    </div>

    {/* Input bar */}
    <div style={{display:"flex",gap:10,alignItems:"center",padding:12,background:C.card,borderRadius:14,border:`1px solid ${C.border}`}}>
      <input type="text" placeholder="Type a message..." style={{flex:1,border:"none",outline:"none",fontSize:14,fontFamily:"inherit",color:C.text,background:"transparent",padding:"4px 0"}}/>
      <button style={{width:40,height:40,borderRadius:12,background:C.primary,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="send" s={18} c="#fff" w={2}/></button>
    </div>
  </div>;
};

/* ============ APP SHELL ============ */
export default function ParentApp(){
  const[screen,setScreen]=useState("home");
  const[context,setContext]=useState(null);
  const[activeChild,setActiveChild]=useState(0);
  const scrollRef=useRef(null);
  const navigateRef=useRef(null);
  const navigate=(s,ctx)=>{setScreen(s);if(ctx!==undefined)setContext(ctx);scrollRef.current?.scrollTo(0,0);};
  navigateRef.current=navigate;
  useEffect(()=>{const h=(e)=>navigateRef.current?.(e.detail);window.addEventListener('sidebar-nav',h);return()=>window.removeEventListener('sidebar-nav',h);},[]);

  const navItems=[{id:"home",icon:"home",label:"Home"},{id:"digest",icon:"calendar",label:"Digest"},{id:"activity",icon:"chart",label:"Activity"},{id:"milestones",icon:"trophy",label:"Badges"},{id:"settings",icon:"user",label:"Settings"}];
  const screens={home:<HomeScreen navigate={navigate} activeChild={activeChild} setActiveChild={setActiveChild}/>,subject:<SubjectScreen navigate={navigate} subject={context||subjectsByChild[activeChild][0]}/>,digest:<DigestScreen navigate={navigate} activeChild={activeChild}/>,activity:<ActivityScreen navigate={navigate} activeChild={activeChild}/>,milestones:<MilestonesScreen navigate={navigate} activeChild={activeChild}/>,settings:<SettingsScreen navigate={navigate} activeChild={activeChild}/>,message:<MessageScreen navigate={navigate} activeChild={activeChild}/>};
  const activeNav=screen==="subject"?"home":screen==="message"?"home":screen;

  return <div style={{fontFamily:'"Inter",-apple-system,sans-serif',maxWidth:"100%",margin:"0 auto",background:C.bg,minHeight:"100vh",display:"flex",flexDirection:"column",borderRadius:0,overflow:"hidden",boxShadow:"none",position:"relative"}}>
    {/* Top bar */}
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px 10px",background:C.card,borderBottom:`1px solid ${C.border}`}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:34,height:34,borderRadius:10,background:"linear-gradient(135deg, #0D9488, #115E59)",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="shield" s={18} c="#fff" w={2}/></div>
        <div><span style={{fontSize:15,fontWeight:800,color:C.text}}>LearnAI</span><span style={{fontSize:11,color:C.primary,fontWeight:600,marginLeft:6}}>Parent</span></div>
      </div>
      <button style={{background:"transparent",border:"none",cursor:"pointer",padding:4,position:"relative",display:"flex"}}><I n="bell" s={22} c={C.textMuted}/><div style={{position:"absolute",top:2,right:2,width:7,height:7,borderRadius:"50%",background:C.error,border:"2px solid #fff"}}/></button>
    </div>

    <div ref={scrollRef} style={{flex:1,overflowY:"auto",padding:"14px 18px 100px"}}>{screens[screen]||screens.home}</div>

    {/* Bottom nav */}
    <div style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(255,255,255,0.97)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-around",padding:"6px 0 18px"}}>
      {navItems.map(item=>{const isActive=activeNav===item.id;return <button key={item.id} onClick={()=>{navigate(item.id);setContext(null);}} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,padding:"4px 10px",background:"transparent",border:"none",cursor:"pointer",fontFamily:"inherit",color:isActive?C.primary:C.textFaint,fontSize:10,fontWeight:isActive?700:500}}>
        <div style={{width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",transform:isActive?"scale(1.15)":"scale(1)",transition:"transform 0.2s"}}><I n={item.icon} s={20} c={isActive?C.primary:C.textFaint} w={isActive?2.2:1.6}/></div>
        <span>{item.label}</span>{isActive&&<div style={{width:4,height:4,borderRadius:"50%",background:C.primary}}/>}
      </button>;})}
    </div>
  </div>;
}
