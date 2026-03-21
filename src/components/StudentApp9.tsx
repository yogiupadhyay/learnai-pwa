// @ts-nocheck
"use client";
import { useState, useRef, useEffect } from "react";

/* ============ COLORS — Professional, exam-focused palette ============ */
const C = {
  bg:"#F8FAFC",card:"#FFFFFF",text:"#0F172A",textMuted:"#64748B",textFaint:"#94A3B8",
  primary:"#2563EB",primarySoft:"#EFF6FF",accent:"#7C3AED",accentSoft:"#F3E8FF",
  success:"#10B981",successSoft:"#D1FAE5",successDark:"#065F46",
  warn:"#F59E0B",warnSoft:"#FEF3C7",warnDark:"#78350F",
  error:"#EF4444",errorSoft:"#FEE2E2",errorDark:"#7F1D1D",
  border:"#E2E8F0",borderSoft:"#F1F5F9",streak:"#F97316",
};

/* ============ ICONS ============ */
const I=({n,s=24,c="currentColor",w=1.8,active})=>{const st={width:s,height:s,display:"block"},p={fill:"none",stroke:c,strokeWidth:w,strokeLinecap:"round",strokeLinejoin:"round"};const icons={home:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M9 21V13.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6V21"/><path {...p} d="M2 10.5L10.586 2.914a2 2 0 0 1 2.828 0L22 10.5"/><path {...p} d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/>{active&&<path fill={c} opacity="0.15" d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9L12 3Z"/>}</svg>,journey:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2L2 7l10 5 10-5-10-5z"/><path {...p} d="M2 17l10 5 10-5"/><path {...p} d="M2 12l10 5 10-5"/>{active&&<path fill={c} opacity="0.15" d="M12 2L2 7l10 5 10-5z"/>}</svg>,exam:<svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="3" width="18" height="18" rx="3"/><path {...p} d="M8 7h8M8 11h8M8 15h5"/>{active&&<rect fill={c} opacity="0.12" x="3" y="3" width="18" height="18" rx="3"/>}</svg>,chart:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M18 20V10"/><path {...p} d="M12 20V4"/><path {...p} d="M6 20v-6"/>{active&&<rect fill={c} opacity="0.1" x="2" y="2" width="20" height="20" rx="2"/>}</svg>,camera:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle {...p} cx="12" cy="13" r="4"/></svg>,spark:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2C9 2 7 4.5 7 7.5c0 2 1.2 3.8 2.5 5l.5.8h4l.5-.8C15.8 11.3 17 9.5 17 7.5 17 4.5 15 2 12 2z" fill={c} opacity="0.1"/><circle cx="12" cy="6.5" r="1" fill={c} stroke="none"/><circle cx="9.8" cy="9" r="0.7" fill={c} stroke="none"/><circle cx="14.2" cy="9" r="0.7" fill={c} stroke="none"/><line x1="12" y1="6.5" x2="9.8" y2="9" {...p} strokeWidth="0.7" opacity="0.5"/><line x1="12" y1="6.5" x2="14.2" y2="9" {...p} strokeWidth="0.7" opacity="0.5"/><line x1="9" y1="16" x2="15" y2="16" {...p}/><line x1="10" y1="18" x2="14" y2="18" {...p}/></svg>,fire:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z"/></svg>,star:<svg style={st} viewBox="0 0 24 24"><path {...p} fill={c} opacity="0.2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path {...p} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,target:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><circle {...p} cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill={c} stroke="none"/></svg>,zap:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,book:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path {...p} d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,clock:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><path {...p} d="M12 6v6l4 2"/></svg>,check:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M20 6L9 17l-5-5"/></svg>,arrowL:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M19 12H5M12 5l-7 7 7 7"/></svg>,arrowR:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M5 12h14M12 5l7 7-7 7"/></svg>,brain:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2a5 5 0 0 0-4.8 3.6A4 4 0 0 0 4 9.5a4 4 0 0 0 .5 6A4.5 4.5 0 0 0 8 20h1"/><path {...p} d="M12 2a5 5 0 0 1 4.8 3.6A4 4 0 0 1 20 9.5a4 4 0 0 1-.5 6A4.5 4.5 0 0 1 16 20h-1"/><path {...p} d="M12 2v20"/></svg>,trophy:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2"/><path {...p} d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"/><path {...p} d="M6 3h12v6a6 6 0 0 1-12 0V3z"/><path {...p} d="M9 21h6M12 15v6"/></svg>,send:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M22 2L11 13"/><path {...p} d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>,bell:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path {...p} d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,user:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle {...p} cx="12" cy="7" r="4"/></svg>,search:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="11" cy="11" r="8"/><path {...p} d="M21 21l-4.35-4.35"/></svg>,alert:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><path {...p} d="M12 8v4M12 16h.01"/></svg>,shield:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,trendUp:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M23 6l-9.5 9.5-5-5L1 18"/><path {...p} d="M17 6h6v6"/></svg>,play:<svg style={st} viewBox="0 0 24 24"><polygon {...p} points="5 3 19 12 5 21 5 3" fill={c} opacity="0.3"/><polygon {...p} points="5 3 19 12 5 21 5 3"/></svg>,volume:<svg style={st} viewBox="0 0 24 24"><polygon {...p} points="11 5 6 9 2 9 2 15 6 15 11 19"/><path {...p} d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>,calendar:<svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="4" width="18" height="17" rx="2"/><path {...p} d="M3 10h18M8 2v4M16 2v4"/></svg>,formula:<svg style={st} viewBox="0 0 24 24"><text x="3" y="18" fontSize="16" fontWeight="700" fill={c} stroke="none" fontFamily="Georgia">∑x²</text></svg>,grid:<svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="3" width="7" height="7" rx="1.5"/><rect {...p} x="14" y="3" width="7" height="7" rx="1.5"/><rect {...p} x="3" y="14" width="7" height="7" rx="1.5"/><rect {...p} x="14" y="14" width="7" height="7" rx="1.5"/></svg>};return icons[n]||null;};

const NavIcon=({name,active,color})=><div style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,transition:"transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",transform:active?"scale(1.1) translateY(-1px)":"scale(1)"}}>{active&&<div style={{position:"absolute",inset:-4,background:`${color}12`,borderRadius:12}}/>}<I n={name} s={22} c={color} w={active?2.2:1.6} active={active}/></div>;

/* ============ PRIMITIVES ============ */
const Card=({children,style,onClick})=><div onClick={onClick} style={{background:C.card,borderRadius:16,padding:18,border:`1px solid ${C.border}`,...(onClick?{cursor:"pointer"}:{}),...style}}>{children}</div>;
const Pill=({text,color=C.primary,bg,icon,style,onClick})=><span onClick={onClick} style={{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 12px",borderRadius:999,fontSize:12,fontWeight:600,background:bg||`${color}15`,color,...(onClick?{cursor:"pointer"}:{}),...style}}>{icon&&<I n={icon} s={13} c={color} w={2}/>}{text}</span>;
const Btn=({children,variant="primary",style,onClick,full,icon})=>{const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,height:46,padding:"0 22px",borderRadius:12,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",border:"none",transition:"all 0.12s",...(full?{width:"100%"}:{})};const v={primary:{background:C.primary,color:"#fff"},accent:{background:C.accent,color:"#fff"},soft:{background:C.primarySoft,color:C.primary},ghost:{background:"transparent",color:C.primary,border:`1.5px solid ${C.border}`},success:{background:C.success,color:"#fff"},warn:{background:C.warnSoft,color:C.warnDark},small:{height:34,padding:"0 12px",fontSize:12,borderRadius:8,background:C.primarySoft,color:C.primary}};return <button onClick={onClick} style={{...base,...v[variant],...style}}>{icon&&<I n={icon} s={16} c={v[variant]?.color||"#fff"} w={2}/>}{children}</button>;};
const Ring=({value,max=100,size=64,stroke=5,color=C.primary,children})=>{const r=(size-stroke)/2,circ=2*Math.PI*r,off=circ-(value/max)*circ;return <div style={{position:"relative",width:size,height:size}}><svg width={size} height={size} style={{transform:"rotate(-90deg)"}}><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={`${color}20`} strokeWidth={stroke}/><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={circ} strokeDashoffset={off} strokeLinecap="round" style={{transition:"stroke-dashoffset 0.6s ease"}}/></svg><div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>{children}</div></div>;};
const Bar=({value,max=100,color=C.primary,h=6})=><div style={{width:"100%",height:h,background:`${color}20`,borderRadius:h,overflow:"hidden"}}><div style={{width:`${Math.min((value/max)*100,100)}%`,height:"100%",background:color,borderRadius:h,transition:"width 0.5s ease"}}/></div>;
const Back=({onClick})=><button onClick={onClick} style={{background:"transparent",border:"none",cursor:"pointer",padding:4,display:"flex",color:C.textMuted}}><I n="arrowL" s={22} c={C.textMuted}/></button>;

/* ============ ASK BAR ============ */
const AskBar=({onSubmit,onCamera})=>{const[q,setQ]=useState("");const[f,setF]=useState(false);const[isListening,setIsListening]=useState(false);
const sugs=["Derive lens formula","Explain electromagnetic induction","What is Hess's Law?","Solve: ∫x²dx"];
const startListening=()=>{setIsListening(true);setTimeout(()=>{setIsListening(false);setQ("Explain refraction through a glass slab");},2000);};
return <div style={{marginBottom:14}}>
<style>{`@keyframes micPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:0.7}} @keyframes waveBar{0%,100%{height:8px}50%{height:16px}}`}</style>
<div style={{display:"flex",gap:8,alignItems:"center",padding:"10px 14px",borderRadius:14,border:`2px solid ${isListening?C.error:f?C.primary:C.border}`,background:C.card,transition:"border-color 0.2s"}}><I n="search" s={20} c={f?C.primary:C.textFaint}/><input value={q} onChange={e=>setQ(e.target.value)} onFocus={()=>setF(true)} onBlur={()=>setTimeout(()=>setF(false),200)} onKeyDown={e=>{if(e.key==="Enter"&&q.trim()){onSubmit(q);setQ("");}}} placeholder={isListening?"Listening...":"Ask anything or search a topic..."} style={{flex:1,border:"none",outline:"none",fontFamily:"inherit",fontSize:14,color:C.text,background:"transparent"}}/>
{isListening&&<div style={{display:"flex",alignItems:"center",gap:2,marginRight:4}}>{[0,1,2].map(i=><div key={i} style={{width:3,borderRadius:2,background:C.error,animation:`waveBar 0.6s ${i*0.15}s ease-in-out infinite`}}/>)}</div>}
<button onClick={isListening?()=>setIsListening(false):startListening} style={{width:36,height:36,borderRadius:10,background:isListening?C.error:C.borderSoft,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",animation:isListening?"micPulse 1.2s ease-in-out infinite":"none",flexShrink:0}}>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isListening?"#fff":C.textMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="1" width="6" height="12" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
</button>
{q.trim()?<button onClick={()=>{onSubmit(q);setQ("");}} style={{width:36,height:36,borderRadius:10,background:C.primary,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="send" s={16} c="#fff" w={2}/></button>:<button onClick={onCamera} style={{width:36,height:36,borderRadius:10,background:C.primarySoft,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="camera" s={16} c={C.primary} w={2}/></button>}</div>{f&&!q&&<div style={{marginTop:8,display:"flex",gap:6,flexWrap:"wrap"}}>{sugs.map(s=><button key={s} onClick={()=>{onSubmit(s);setF(false);}} style={{padding:"6px 12px",borderRadius:999,border:`1px solid ${C.border}`,background:C.borderSoft,cursor:"pointer",fontFamily:"inherit",fontSize:12,color:C.textMuted}}>{s}</button>)}</div>}</div>;};

/* ============ DATA — Board-agnostic, Class 10 ============ */
const examDaysLeft=42;
const predictedScore={low:74,high:78};
const subjects=[
  {name:"Physics",chapters:[
    {name:"Light — Reflection & Refraction",mastery:72,weightage:8,learn:"done",teach:"done",practice:8,revisionDue:false},
    {name:"Electricity",mastery:58,weightage:7,learn:"done",teach:"ready",practice:3,revisionDue:true},
    {name:"Magnetic Effects of Current",mastery:35,weightage:5,learn:"in-progress",teach:"not-started",practice:0,revisionDue:false},
    {name:"Human Eye & Colourful World",mastery:0,weightage:4,learn:"not-started",teach:"not-started",practice:0,revisionDue:false},
  ]},
  {name:"Chemistry",chapters:[
    {name:"Chemical Reactions & Equations",mastery:80,weightage:6,learn:"done",teach:"done",practice:9,revisionDue:true},
    {name:"Acids, Bases & Salts",mastery:65,weightage:7,learn:"done",teach:"ready",practice:4,revisionDue:false},
    {name:"Carbon & Its Compounds",mastery:22,weightage:8,learn:"in-progress",teach:"not-started",practice:0,revisionDue:false},
  ]},
  {name:"Mathematics",chapters:[
    {name:"Real Numbers",mastery:88,weightage:6,learn:"done",teach:"done",practice:10,revisionDue:false},
    {name:"Quadratic Equations",mastery:52,weightage:8,learn:"done",teach:"ready",practice:2,revisionDue:true},
    {name:"Trigonometry",mastery:40,weightage:10,learn:"in-progress",teach:"not-started",practice:0,revisionDue:false},
    {name:"Statistics & Probability",mastery:0,weightage:6,learn:"not-started",teach:"not-started",practice:0,revisionDue:false},
  ]},
  {name:"Biology",chapters:[
    {name:"Life Processes",mastery:70,weightage:7,learn:"done",teach:"done",practice:7,revisionDue:false},
    {name:"Heredity & Evolution",mastery:45,weightage:5,learn:"done",teach:"not-started",practice:1,revisionDue:true},
  ]},
];
const allChapters=subjects.flatMap(s=>s.chapters.map(ch=>({...ch,subject:s.name})));
const weakChapters=allChapters.filter(c=>c.mastery<50).sort((a,b)=>a.mastery-b.mastery);
const revisionDue=allChapters.filter(c=>c.revisionDue);

const pyqs=[
  {year:2024,chapter:"Electricity",q:"Derive the expression for equivalent resistance of three resistors in parallel.",marks:5,type:"Long Answer"},
  {year:2024,chapter:"Quadratic Equations",q:"Find the roots of 2x² - 7x + 3 = 0 using the quadratic formula.",marks:3,type:"Short Answer"},
  {year:2023,chapter:"Chemical Reactions & Equations",q:"What is a decomposition reaction? Give two examples.",marks:3,type:"Short Answer"},
  {year:2023,chapter:"Light — Reflection & Refraction",q:"Derive the mirror formula: 1/v + 1/u = 1/f",marks:5,type:"Long Answer"},
  {year:2023,chapter:"Trigonometry",q:"Prove that (sin A + cos A)² + (sin A - cos A)² = 2",marks:3,type:"Proof"},
  {year:2022,chapter:"Life Processes",q:"Draw a diagram of the human heart and label all four chambers.",marks:5,type:"Diagram"},
];

const mockTests=[
  {name:"Physics Mid-Term Mock",chapters:4,time:"90 min",questions:30,lastScore:62,bestScore:68},
  {name:"Chemistry Full Mock",chapters:3,time:"60 min",questions:25,lastScore:null,bestScore:null},
  {name:"Math Chapter Test — Quadratics",chapters:1,time:"30 min",questions:15,lastScore:55,bestScore:55},
];

const studyGroupFeed=[
  {name:"Riya S.",action:"Scored 82% on Physics mock",time:"2h ago",icon:"trophy",color:C.success},
  {name:"Karan M.",action:"Completed all Trigonometry PYQs",time:"5h ago",icon:"check",color:C.primary},
];

/* ============ ONBOARDING ============ */
const OnboardingScreen=({onComplete})=>{const[step,setStep]=useState(0);const[selectedSubjects,setSelectedSubjects]=useState(["Physics","Chemistry","Mathematics","Biology"]);const[dqi,setDqi]=useState(0);const[answered,setAnswered]=useState(null);
const allSubjects=["Physics","Chemistry","Mathematics","Biology","English","Social Science","Computer Science"];
const diagQs=[{q:"If R₁=2Ω and R₂=3Ω are in parallel, find equivalent resistance.",opts:["6/5 Ω","5 Ω","1 Ω","5/6 Ω"],correct:0,topic:"Physics"},{q:"Balance: Fe + O₂ → Fe₂O₃",opts:["4Fe + 3O₂ → 2Fe₂O₃","2Fe + O₂ → Fe₂O₃","Fe + O₂ → Fe₂O₃","3Fe + 2O₂ → Fe₂O₃"],correct:0,topic:"Chemistry"},{q:"If sin θ = 3/5, find cos θ",opts:["4/5","3/4","5/3","2/5"],correct:0,topic:"Math"}];

if(step===0)return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"90vh",gap:0,padding:"24px 20px",textAlign:"center",background:`linear-gradient(180deg, ${C.bg} 0%, ${C.primarySoft} 50%, ${C.accentSoft} 100%)`}}>
  <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>
  <div style={{width:72,height:72,borderRadius:20,background:"linear-gradient(135deg, #2563EB, #7C3AED)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 36px rgba(37,99,235,0.25)",marginBottom:28}}><I n="spark" s={36} c="#fff" w={2}/></div>
  <h1 style={{fontSize:28,fontWeight:800,color:C.text,margin:"0 0 8px",letterSpacing:-0.5,animation:"fadeUp 0.5s ease 0.1s both"}}>Your Exam Companion</h1>
  <p style={{fontSize:15,color:C.textMuted,margin:"0 0 32px",lineHeight:1.6,maxWidth:300,animation:"fadeUp 0.5s ease 0.2s both"}}>AI-powered preparation designed for board exams and beyond</p>
  <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%",maxWidth:340,marginBottom:32}}>
    {[{icon:"brain",title:"Socratic AI Tutor",desc:"8 teaching styles including board exam format",color:C.primary},{icon:"target",title:"Exam Prediction",desc:"Know your predicted score before the exam",color:C.accent},{icon:"book",title:"PYQ & Mock Tests",desc:"Previous year questions and timed practice",color:C.success}].map((f,i)=><div key={f.title} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",borderRadius:14,background:"#fff",boxShadow:"0 2px 8px rgba(0,0,0,0.04)",animation:`fadeUp 0.5s ease ${0.3+i*0.1}s both`}}>
      <div style={{width:40,height:40,borderRadius:12,background:`${f.color}10`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n={f.icon} s={20} c={f.color} w={2}/></div>
      <div style={{textAlign:"left"}}><p style={{fontSize:13,fontWeight:700,color:C.text,margin:0}}>{f.title}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{f.desc}</p></div>
    </div>)}
  </div>
  <div style={{width:"100%",maxWidth:340,animation:"fadeUp 0.5s ease 0.6s both"}}><Btn full onClick={()=>setStep(1)} style={{height:50,fontSize:15,borderRadius:14,background:"linear-gradient(135deg, #2563EB, #7C3AED)",boxShadow:"0 8px 24px rgba(37,99,235,0.25)"}}>Get Started</Btn></div>
</div>;

if(step===1)return <div style={{display:"flex",flexDirection:"column",gap:20,padding:"24px 20px",minHeight:"80vh"}}>
  <div><p style={{fontSize:12,color:C.textMuted,margin:"0 0 4px",fontWeight:500,textTransform:"uppercase",letterSpacing:0.5}}>Step 1 of 2</p><h2 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Select your subjects</h2><p style={{fontSize:13,color:C.textMuted,margin:"6px 0 0"}}>Choose the subjects you're preparing for</p></div>
  <div style={{display:"flex",flexDirection:"column",gap:8}}>
    {allSubjects.map(s=>{const sel=selectedSubjects.includes(s);return <button key={s} onClick={()=>setSelectedSubjects(p=>sel?p.filter(x=>x!==s):[...p,s])} style={{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:14,border:`2px solid ${sel?C.primary:C.border}`,background:sel?C.primarySoft:"#fff",cursor:"pointer",fontFamily:"inherit"}}>
      <div style={{width:24,height:24,borderRadius:8,border:`2px solid ${sel?C.primary:C.border}`,background:sel?C.primary:"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>{sel&&<I n="check" s={14} c="#fff" w={2.5}/>}</div>
      <span style={{fontSize:14,fontWeight:sel?700:500,color:sel?C.primary:C.text}}>{s}</span>
    </button>;})}
  </div>
  <Btn full onClick={()=>setStep(2)} style={{marginTop:"auto"}}>Continue to Diagnostic</Btn>
</div>;

const done=dqi>=diagQs.length;
if(done)return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"80vh",gap:0,padding:"24px 20px",textAlign:"center"}}>
  <style>{`@keyframes scaleIn{from{transform:scale(0.5);opacity:0}to{transform:scale(1);opacity:1}} @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>
  <div style={{animation:"scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both",marginBottom:24}}>
    <Ring value={100} size={100} stroke={7} color={C.success}><I n="check" s={36} c={C.success} w={2.5}/></Ring>
  </div>
  <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px",animation:"fadeUp 0.5s ease 0.2s both"}}>You're all set</h2>
  <p style={{fontSize:14,color:C.textMuted,margin:"0 0 20px",animation:"fadeUp 0.5s ease 0.3s both"}}>Your personalized study plan is ready</p>
  <div style={{display:"flex",gap:20,marginBottom:28,animation:"fadeUp 0.5s ease 0.4s both"}}>
    {[{label:"Predicted",value:"74-78%",icon:"target"},{label:"Weak areas",value:"5",icon:"alert"},{label:"Days left",value:`${examDaysLeft}`,icon:"clock"}].map(s=><div key={s.label} style={{textAlign:"center"}}>
      <div style={{width:44,height:44,borderRadius:12,background:C.primarySoft,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px"}}><I n={s.icon} s={20} c={C.primary}/></div>
      <p style={{fontSize:15,fontWeight:800,color:C.text,margin:0}}>{s.value}</p>
      <p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>{s.label}</p>
    </div>)}
  </div>
  <div style={{width:"100%",maxWidth:340,animation:"fadeUp 0.5s ease 0.5s both"}}><Btn full onClick={onComplete} style={{height:50,fontSize:15,borderRadius:14,background:"linear-gradient(135deg, #2563EB, #7C3AED)"}}>Start Preparing</Btn></div>
</div>;

const cur=diagQs[dqi];const progress=((dqi)/diagQs.length)*100;
return <div style={{display:"flex",flexDirection:"column",gap:0,padding:"24px 20px",minHeight:"80vh"}}>
  <div style={{marginBottom:20}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
      <div><p style={{fontSize:12,color:C.textMuted,margin:"0 0 2px",fontWeight:500,textTransform:"uppercase",letterSpacing:0.5}}>Diagnostic</p><h2 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Question {dqi+1} of {diagQs.length}</h2></div>
      <Pill text={cur.topic} color={C.primary} bg={C.primarySoft}/>
    </div>
    <Bar value={progress} color={C.primary} h={5}/>
  </div>
  <Card style={{padding:20,marginBottom:16}}><p style={{fontSize:16,fontWeight:700,color:C.text,margin:0,lineHeight:1.5}}>{cur.q}</p></Card>
  <div style={{display:"flex",flexDirection:"column",gap:8}}>
    {cur.opts.map((o,i)=>{const selected=answered===i;const isCorrect=i===cur.correct;const showResult=answered!==null;
    let bg="transparent",borderC=C.border,textC=C.text;
    if(showResult&&isCorrect){bg=C.successSoft;borderC=C.success;textC=C.successDark;}
    else if(showResult&&selected&&!isCorrect){bg=C.errorSoft;borderC=C.error;textC=C.errorDark;}
    return <button key={i} onClick={()=>{if(answered!==null)return;setAnswered(i);setTimeout(()=>{setDqi(d=>d+1);setAnswered(null);},1200);}} style={{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:14,border:`2px solid ${selected?borderC:C.border}`,background:bg,cursor:answered!==null?"default":"pointer",fontFamily:"inherit",textAlign:"left",transition:"all 0.2s"}}>
      <div style={{width:32,height:32,borderRadius:10,background:showResult&&isCorrect?C.success:showResult&&selected?C.error:C.borderSoft,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:showResult&&(isCorrect||selected)?"#fff":C.textMuted,fontSize:13,fontWeight:700}}>{showResult&&isCorrect?"✓":showResult&&selected?"✗":String.fromCharCode(65+i)}</div>
      <span style={{fontSize:14,fontWeight:500,color:textC}}>{o}</span>
    </button>;})}
  </div>
</div>;};

/* ============ HOME — Exam Command Center ============ */
const HomeScreen=({navigate,streak})=><div style={{display:"flex",flexDirection:"column",gap:14}}>
  {/* Exam countdown banner */}
  <div style={{background:"linear-gradient(135deg, #1E40AF, #7C3AED)",borderRadius:16,padding:"16px 20px",color:"#fff",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <div><p style={{fontSize:12,opacity:0.7,margin:"0 0 2px"}}>Board Exam</p><p style={{fontSize:22,fontWeight:800,margin:0}}>{examDaysLeft} days left</p></div>
    <div style={{display:"flex",gap:8}}><Pill icon="trendUp" text={`${predictedScore.low}-${predictedScore.high}%`} bg="rgba(255,255,255,0.15)" color="#fff"/><Pill icon="fire" text={`${streak}d`} bg="rgba(255,255,255,0.15)" color="#fff"/></div>
  </div>

  <AskBar onSubmit={()=>navigate("tutor")} onCamera={()=>navigate("photo")}/>

  {/* Today's study plan */}
  <Card style={{padding:16}}>
    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><I n="calendar" s={18} c={C.primary}/><p style={{fontSize:14,fontWeight:700,color:C.text,margin:0}}>Today's study plan</p></div>
    {[{text:"Revise: Electricity (due today)",icon:"zap",color:C.warn},{text:"Continue: Magnetic Effects — Learn step",icon:"book",color:C.primary},{text:"Practice: Quadratic Equations (2/10 done)",icon:"target",color:C.accent}].map((t,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
      <div style={{width:28,height:28,borderRadius:8,background:`${t.color}12`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n={t.icon} s={14} c={t.color} w={2}/></div>
      <span style={{fontSize:13,color:C.text,flex:1}}>{t.text}</span><I n="arrowR" s={14} c={C.textFaint}/>
    </div>)}
  </Card>

  {/* 3 stat cards */}
  <div style={{display:"flex",gap:10}}>
    {[{label:"Predicted",value:`${predictedScore.low}%`,icon:"target",color:C.primary},{label:"Weak chapters",value:`${weakChapters.length}`,icon:"alert",color:C.error},{label:"Revision due",value:`${revisionDue.length}`,icon:"clock",color:C.warn}].map(s=><Card key={s.label} style={{flex:1,padding:12,textAlign:"center"}}><div style={{display:"flex",justifyContent:"center",marginBottom:4}}><I n={s.icon} s={18} c={s.color}/></div><p style={{fontSize:18,fontWeight:800,color:C.text,margin:0}}>{s.value}</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>{s.label}</p></Card>)}
  </div>

  {/* Quick action cards */}
  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
    {[{label:"Previous Year Qs",icon:"book",color:C.primary,screen:"pyq"},{label:"My Mistakes",icon:"alert",color:C.error,screen:"mistakes"},{label:"Mock Tests",icon:"exam",color:C.accent,screen:"mocks"},{label:"Foundation Gaps",icon:"shield",color:C.warn,screen:"foundation"}].map(c=><Card key={c.label} onClick={()=>navigate(c.screen)} style={{padding:14,cursor:"pointer",display:"flex",alignItems:"center",gap:10}}>
      <div style={{width:36,height:36,borderRadius:10,background:`${c.color}12`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n={c.icon} s={18} c={c.color}/></div>
      <span style={{fontSize:13,fontWeight:600,color:C.text}}>{c.label}</span>
    </Card>)}
  </div>

  {/* Social proof for back-bencher */}
  <Card style={{background:C.primarySoft,border:`1px solid ${C.primary}20`,padding:14}}>
    <p style={{fontSize:13,color:C.primary,margin:0,fontWeight:600}}>📊 78% of your class completed the Electricity chapter this week</p>
  </Card>

  {/* Study group mini-feed */}
  <div>
    <p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 8px"}}>Study group</p>
    {studyGroupFeed.map((s,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:12,background:C.borderSoft,marginBottom:6}}>
      <div style={{width:28,height:28,borderRadius:"50%",background:`${s.color}15`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n={s.icon} s={14} c={s.color}/></div>
      <div style={{flex:1}}><span style={{fontSize:12,fontWeight:600,color:C.text}}>{s.name}</span><span style={{fontSize:12,color:C.textMuted}}> {s.action}</span></div>
      <span style={{fontSize:10,color:C.textFaint}}>{s.time}</span>
    </div>)}
  </div>
</div>;

/* ============ JOURNEY — Chapter-Wise Board Prep ============ */
const JourneyScreen=({navigate})=>{const[expandedSubject,setExpandedSubject]=useState("Physics");
return <div style={{display:"flex",flexDirection:"column",gap:14}}>
  <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Your Journey</h1>
  <p style={{fontSize:13,color:C.textMuted,margin:0}}>Chapter-wise preparation • Learn → Teach → Practice</p>

  {/* Revision due alert */}
  {revisionDue.length>0&&<Card style={{background:C.warnSoft,border:`1px solid ${C.warn}30`,padding:12}}>
    <div style={{display:"flex",alignItems:"center",gap:8}}><I n="clock" s={16} c={C.warnDark}/><p style={{fontSize:13,fontWeight:600,color:C.warnDark,margin:0}}>{revisionDue.length} chapters due for revision</p></div>
  </Card>}

  {subjects.map(sub=><div key={sub.name}>
    <button onClick={()=>setExpandedSubject(expandedSubject===sub.name?null:sub.name)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"12px 0",background:"transparent",border:"none",cursor:"pointer",fontFamily:"inherit"}}>
      <span style={{fontSize:16,fontWeight:700,color:C.text}}>{sub.name}</span>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <span style={{fontSize:12,color:C.textMuted}}>{sub.chapters.length} chapters</span>
        <I n={expandedSubject===sub.name?"arrowL":"arrowR"} s={14} c={C.textFaint}/>
      </div>
    </button>
    {expandedSubject===sub.name&&sub.chapters.map((ch,ci)=>{
      const mc=ch.mastery>=70?C.success:ch.mastery>=40?C.warn:C.error;
      const stepStyle=(status,type,pCount)=>{
        if(type==="practice"){const done=pCount>=7;const started=pCount>0;return{padding:"6px 14px",borderRadius:999,fontSize:11,fontWeight:600,border:"none",cursor:"pointer",fontFamily:"inherit",background:done?C.successSoft:started?C.warnSoft:C.borderSoft,color:done?C.success:started?C.warnDark:C.textFaint};}
        const s={done:{bg:C.successSoft,color:C.success},ready:{bg:`${C.accent}10`,color:C.accent},"in-progress":{bg:`${C.primary}12`,color:C.primary},"not-started":{bg:C.borderSoft,color:C.textFaint}};const st=s[status]||s["not-started"];
        return{padding:"6px 14px",borderRadius:999,fontSize:11,fontWeight:600,border:"none",cursor:"pointer",fontFamily:"inherit",background:st.bg,color:st.color};
      };
      return <Card key={ci} style={{marginBottom:8,padding:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:14,fontWeight:600,color:C.text}}>{ch.name}</span>
              {ch.revisionDue&&<Pill text="Revision due" color={C.warn} bg={C.warnSoft}/>}
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginTop:4}}>
              <Pill text={`${ch.weightage} marks`} color={C.textMuted} bg={C.borderSoft}/>
              <span style={{fontSize:12,fontWeight:700,color:mc}}>{ch.mastery}% ready</span>
            </div>
          </div>
        </div>
        <Bar value={ch.mastery} color={mc} h={4}/>
        <div style={{display:"flex",gap:8,marginTop:10}}>
          <button onClick={()=>navigate("tutor",{topicKey:ch.name,topicName:ch.name})} style={stepStyle(ch.learn,"learn")}>{ch.learn==="done"?"✓ Learn":ch.learn==="in-progress"?"● Learn":"Learn"}</button>
          <button onClick={()=>navigate("teachback",{topicKey:ch.name,topicName:ch.name})} style={stepStyle(ch.teach,"teach")}>{ch.teach==="done"?"✓ Teach":ch.teach==="ready"?"→ Teach":"Teach"}</button>
          <button onClick={()=>navigate("practice",{topicKey:ch.name,topicName:ch.name})} style={stepStyle(ch.practice>=7?"done":ch.practice>0?"in-progress":"not-started","practice",ch.practice)}>{ch.practice}/10 Practice</button>
        </div>
      </Card>;
    })}
  </div>)}
</div>;};

/* ============ EXAM — Board Exam War Room ============ */
const ExamScreen=({navigate})=>{const[tab,setTab]=useState("pyq");
return <div style={{display:"flex",flexDirection:"column",gap:14}}>
  {/* Countdown */}
  <div style={{background:"linear-gradient(135deg, #1E40AF, #4338CA)",borderRadius:14,padding:"16px 18px",color:"#fff"}}>
    <p style={{fontSize:12,opacity:0.7,margin:"0 0 2px"}}>Board Exam Countdown</p>
    <p style={{fontSize:26,fontWeight:800,margin:0}}>{examDaysLeft} days remaining</p>
  </div>

  {/* Chapter weightage */}
  <Card style={{padding:14}}>
    <p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Chapter weightage</p>
    <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
      {allChapters.sort((a,b)=>b.weightage-a.weightage).slice(0,6).map(ch=>{const mc=ch.mastery>=70?C.success:ch.mastery>=40?C.warn:C.error;return <div key={ch.name} style={{padding:"8px 12px",borderRadius:10,background:`${mc}10`,border:`1px solid ${mc}30`,flex:"1 0 45%"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:11,fontWeight:600,color:C.text}}>{ch.name.slice(0,25)}</span><span style={{fontSize:11,fontWeight:800,color:mc}}>{ch.weightage}m</span></div>
        <Bar value={ch.mastery} color={mc} h={3}/>
      </div>;})}
    </div>
  </Card>

  {/* Tabs */}
  <div style={{display:"flex",gap:8}}>
    {[{id:"pyq",label:"PYQ"},{id:"mocks",label:"Mock Tests"},{id:"speed",label:"Speed Drill"}].map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"8px 16px",borderRadius:999,fontSize:13,fontWeight:600,border:"none",cursor:"pointer",fontFamily:"inherit",background:tab===t.id?C.primary:"transparent",color:tab===t.id?"#fff":C.textMuted}}>{t.label}</button>)}
  </div>

  {/* PYQ */}
  {tab==="pyq"&&<div style={{display:"flex",flexDirection:"column",gap:8}}>
    {pyqs.map((q,i)=><Card key={i} style={{padding:14}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
        <div style={{display:"flex",gap:6}}><Pill text={q.chapter} color={C.primary} bg={C.primarySoft}/><Pill text={`${q.marks}m`} color={C.textMuted} bg={C.borderSoft}/></div>
        <span style={{fontSize:11,color:C.textFaint}}>{q.year}</span>
      </div>
      <p style={{fontSize:13,color:C.text,margin:"0 0 8px",lineHeight:1.5}}>{q.q}</p>
      <div style={{display:"flex",gap:8}}>
        <Pill text={q.type} color={C.accent} bg={C.accentSoft}/>
        <Btn variant="small" onClick={()=>navigate("tutor",{topicKey:q.chapter,topicName:q.chapter})}>Solve with AI</Btn>
      </div>
    </Card>)}
  </div>}

  {/* Mock Tests */}
  {tab==="mocks"&&<div style={{display:"flex",flexDirection:"column",gap:8}}>
    {mockTests.map((m,i)=><Card key={i} style={{padding:16}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <p style={{fontSize:14,fontWeight:700,color:C.text,margin:0}}>{m.name}</p>
        {m.lastScore!==null&&<span style={{fontSize:14,fontWeight:800,color:m.lastScore>=60?C.success:C.warn}}>{m.lastScore}%</span>}
      </div>
      <div style={{display:"flex",gap:8,marginBottom:10}}>
        <Pill text={`${m.chapters} ch.`} color={C.textMuted} bg={C.borderSoft}/><Pill text={m.time} color={C.textMuted} bg={C.borderSoft} icon="clock"/><Pill text={`${m.questions} Qs`} color={C.textMuted} bg={C.borderSoft}/>
      </div>
      <div style={{display:"flex",gap:8}}>
        <Btn variant="primary" full onClick={()=>navigate("quiz")}>Start Mock</Btn>
        {m.bestScore!==null&&<Btn variant="ghost" onClick={()=>{}}>Review</Btn>}
      </div>
    </Card>)}
  </div>}

  {/* Speed Drill */}
  {tab==="speed"&&<Card style={{padding:20,textAlign:"center"}}>
    <div style={{width:64,height:64,borderRadius:16,background:C.accentSoft,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px"}}><I n="zap" s={28} c={C.accent}/></div>
    <h3 style={{fontSize:18,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Speed Drill</h3>
    <p style={{fontSize:13,color:C.textMuted,margin:"0 0 16px"}}>30 MCQs in 20 minutes. Test your speed and accuracy.</p>
    <Btn full onClick={()=>navigate("quiz")}>Start Speed Drill</Btn>
  </Card>}
</div>;};

/* ============ ANALYTICS — Performance Intelligence ============ */
const AnalyticsScreen=({navigate})=>{
return <div style={{display:"flex",flexDirection:"column",gap:14}}>
  <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Analytics</h1>

  {/* Predicted score */}
  <Card style={{background:"linear-gradient(135deg, #2563EB, #7C3AED)",border:"none",padding:20,color:"#fff"}}>
    <div style={{display:"flex",alignItems:"center",gap:16}}>
      <Ring value={76} size={72} stroke={6} color="#fff"><span style={{fontSize:20,fontWeight:800,color:"#fff"}}>76%</span></Ring>
      <div><p style={{fontSize:12,opacity:0.7,margin:0}}>Predicted board score</p><p style={{fontSize:20,fontWeight:800,margin:"2px 0 0"}}>{predictedScore.low} — {predictedScore.high}%</p><p style={{fontSize:11,opacity:0.6,margin:"4px 0 0"}}>↑ 3% improvement this week</p></div>
    </div>
  </Card>

  {/* Subject breakdown */}
  <div>
    <p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Subject-wise prediction</p>
    {[{name:"Physics",pred:"68-72%",mastery:55,color:C.warn},{name:"Chemistry",pred:"70-76%",mastery:62,color:C.warn},{name:"Mathematics",pred:"72-80%",mastery:58,color:C.warn},{name:"Biology",pred:"82-88%",mastery:72,color:C.success}].map(s=><Card key={s.name} style={{marginBottom:8,padding:14}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
        <span style={{fontSize:14,fontWeight:600,color:C.text}}>{s.name}</span>
        <span style={{fontSize:14,fontWeight:800,color:s.color}}>{s.pred}</span>
      </div>
      <Bar value={s.mastery} color={s.color} h={5}/>
    </Card>)}
  </div>

  {/* Weak chapter heatmap */}
  <div>
    <p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Weak chapters (needs attention)</p>
    {weakChapters.map((ch,i)=>{const mc=ch.mastery>=40?C.warn:C.error;return <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:12,background:`${mc}08`,border:`1px solid ${mc}20`,marginBottom:6}}>
      <div style={{width:8,height:8,borderRadius:"50%",background:mc}}/>
      <div style={{flex:1}}><span style={{fontSize:13,fontWeight:600,color:C.text}}>{ch.name}</span><span style={{fontSize:11,color:C.textMuted,marginLeft:8}}>{ch.subject}</span></div>
      <span style={{fontSize:13,fontWeight:800,color:mc}}>{ch.mastery}%</span>
    </div>;})}
  </div>

  {/* Percentile */}
  <Card style={{padding:14,background:C.primarySoft,border:`1px solid ${C.primary}20`}}>
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <div style={{width:48,height:48,borderRadius:14,background:C.primary,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:18,fontWeight:800,color:"#fff"}}>72</span></div>
      <div><p style={{fontSize:14,fontWeight:700,color:C.text,margin:0}}>Class percentile</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>You're in the top 28% of your class</p></div>
    </div>
  </Card>

  {/* Mock test trend */}
  <Card style={{padding:14}}>
    <p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Mock test trend</p>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",height:80,gap:8,padding:"0 8px"}}>
      {[52,55,58,62,68].map((s,i)=><div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",flex:1,gap:4}}>
        <span style={{fontSize:10,fontWeight:700,color:s>=60?C.success:C.warn}}>{s}%</span>
        <div style={{width:"100%",background:s>=60?C.success:C.warn,borderRadius:4,height:`${(s/100)*60}px`,transition:"height 0.3s"}}/>
        <span style={{fontSize:9,color:C.textFaint}}>Mock {i+1}</span>
      </div>)}
    </div>
  </Card>
</div>;};

/* ============ TUTOR — Socratic + Board-Level Teaching ============ */
const TutorScreen=({navigate,ctx})=>{const[step,setStep]=useState(0);const[persona,setPersona]=useState("textbook");const[input,setInput]=useState("");
const personaLabels={textbook:"Textbook",boardExam:"Board Exam",quickRevision:"Quick Revision",derivation:"Derivation",likeImFive:"Like I'm 5",cricket:"Like Cricket",realWorld:"Real-World",deepDive:"Deep-Dive"};
const topicName=ctx?.topicName||"Electricity";
const cards=[
  {type:"concept",icon:"book",label:"Concept",color:C.primary,bg:C.primarySoft,content:`Electricity is the flow of electric charge through a conductor. Current (I) is measured in Amperes, Voltage (V) in Volts, and Resistance (R) in Ohms.`},
  {type:"think",icon:"brain",label:"Think",color:C.accent,bg:C.accentSoft,content:"If you increase the resistance in a circuit but keep the voltage the same, what happens to the current? Why?"},
  {type:"explain",icon:"book",label:"Explain",color:"#06B6D4",bg:"#ECFEFF",content:`By Ohm's Law: V = IR, so I = V/R. If R increases and V stays constant, I must decrease. Think of it like water flowing through a pipe — make the pipe narrower (more resistance), less water flows (less current).`},
  {type:"examiner_tip",icon:"star",label:"Examiner's Tip",color:C.warn,bg:C.warnSoft,content:`When answering Ohm's Law questions, always: (1) State the formula, (2) Substitute values with units, (3) Show the calculation step-by-step. Examiners give marks for each step, not just the final answer.`},
  {type:"practice",icon:"target",label:"Your turn",color:C.success,bg:C.successSoft,content:"A 12V battery is connected to a 4Ω resistor. Calculate the current flowing through the circuit. Show all steps.",hasInput:true},
];

const personaContent={
  boardExam:{0:`In board exams, Electricity problems typically carry 3-5 marks. Start every answer with the relevant formula, substitute with proper units, and show intermediate steps. Diagram is mandatory for circuit questions.`},
  quickRevision:{0:`⚡ ELECTRICITY QUICK REVISION:\n• V = IR (Ohm's Law)\n• P = VI = I²R = V²/R\n• Series: R_total = R₁ + R₂ + R₃\n• Parallel: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃\n• Current same in series, voltage same in parallel`},
  derivation:{0:`DERIVATION — Equivalent Resistance (Parallel):\nStep 1: In parallel, voltage V is same across all resistors\nStep 2: Total current I = I₁ + I₂ + I₃\nStep 3: I₁ = V/R₁, I₂ = V/R₂, I₃ = V/R₃\nStep 4: I = V/R₁ + V/R₂ + V/R₃ = V(1/R₁ + 1/R₂ + 1/R₃)\nStep 5: Since I = V/R_eq → 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ ∎`},
  likeImFive:{0:`Imagine electricity is like a water slide! The battery is like a pump that pushes water up high (that's voltage). The water sliding down is the current. And if you make the slide really twisty and narrow? That's resistance — it slows the water down!`},
  cricket:{0:`Think of voltage like the bowler's speed — it's the force pushing the ball. Current is how many runs you score — it's the result. And resistance? That's the pitch condition — a rough pitch (high resistance) means fewer runs (less current) even with the same bowling speed (voltage).`},
};

return <div style={{display:"flex",flexDirection:"column",gap:14}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><div style={{flex:1}}><p style={{fontSize:12,color:C.textMuted,margin:0}}>Solve with Tutor</p><p style={{fontSize:15,fontWeight:700,color:C.text,margin:0}}>{topicName}</p></div></div>
  {/* Persona selector — scrollable */}
  <div style={{overflowX:"auto",display:"flex",gap:6,padding:"2px 0",WebkitOverflowScrolling:"touch"}}>{Object.entries(personaLabels).map(([k,v])=><button key={k} onClick={()=>setPersona(k)} style={{flexShrink:0,padding:"7px 14px",borderRadius:999,border:persona===k?"none":`1.5px solid ${C.border}`,background:persona===k?C.primary:"transparent",color:persona===k?"#fff":C.textMuted,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>{v}</button>)}</div>
  {/* Step cards */}
  {cards.slice(0,step+1).map((c,i)=>{
    const content=(persona!=="textbook"&&personaContent[persona]&&personaContent[persona][i])||c.content;
    return <Card key={i} style={{padding:16,background:c.bg,border:`1px solid ${c.color}25`}}>
      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}><I n={c.icon} s={16} c={c.color}/><span style={{fontSize:12,fontWeight:700,color:c.color}}>{c.label}</span>
      {persona!=="textbook"&&i===0&&<Pill text={personaLabels[persona]} color={C.primary} bg={C.primarySoft} style={{marginLeft:"auto",fontSize:10}}/>}</div>
      <p style={{fontSize:13,color:C.text,margin:0,lineHeight:1.7,whiteSpace:"pre-wrap"}}>{content}</p>
      {c.hasInput&&<div style={{marginTop:12}}><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Type your answer here..." rows={3} style={{width:"100%",padding:12,borderRadius:10,border:`1px solid ${C.border}`,fontFamily:"inherit",fontSize:13,resize:"vertical",background:"#fff"}}/></div>}
    </Card>;
  })}
  {step<cards.length-1&&<Btn full onClick={()=>setStep(s=>s+1)} style={{marginTop:4}}>Continue</Btn>}
  {step>=cards.length-1&&<Btn full variant="success" onClick={()=>navigate("journey")}>Complete & Return</Btn>}
</div>;};

/* ============ QUIZ — Board Pattern Questions ============ */
const QuizScreen=({navigate})=>{const[qi,setQi]=useState(0);const[sel,setSel]=useState(null);const[checked,setChecked]=useState(false);const[score,setScore]=useState(0);const[wrongStreak,setWrongStreak]=useState(0);
const questions=[
  {q:"What is the SI unit of electric current?",opts:["Volt","Ampere","Ohm","Watt"],correct:1,type:"MCQ",chapter:"Electricity"},
  {q:"Assertion: Resistance increases with temperature in metals.\nReason: More collisions between electrons and ions at higher temperatures.",opts:["Both A and R are true, R explains A","Both true, R doesn't explain A","A is true, R is false","A is false, R is true"],correct:0,type:"Assertion-Reason",chapter:"Electricity"},
  {q:"The pH of a solution is 3. Is it acidic, basic, or neutral?",opts:["Acidic","Basic","Neutral","Cannot determine"],correct:0,type:"MCQ",chapter:"Acids, Bases & Salts"},
  {q:"If sin θ = 1/2, find the value of θ (0° ≤ θ ≤ 90°)",opts:["30°","45°","60°","90°"],correct:0,type:"MCQ",chapter:"Trigonometry"},
];
const total=questions.length;
if(qi>=total)return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",gap:16,padding:24,textAlign:"center"}}>
  <Ring value={score} max={total} size={100} stroke={7} color={score/total>=0.7?C.success:score/total>=0.5?C.warn:C.error}><span style={{fontSize:24,fontWeight:800,color:C.text}}>{Math.round(score/total*100)}%</span></Ring>
  <h2 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>{score}/{total} correct</h2>
  <p style={{fontSize:13,color:C.textMuted,margin:0}}>{score/total>=0.7?"Strong performance. Keep it up.":score/total>=0.5?"Good effort. Review weak areas.":"Focus on fundamentals. Practice more."}</p>
  <div style={{display:"flex",gap:10,width:"100%",padding:"0 20px"}}><Btn variant="ghost" onClick={()=>navigate("home")} style={{flex:1}}>Home</Btn><Btn onClick={()=>{setQi(0);setScore(0);setSel(null);setChecked(false);}} style={{flex:1}}>Try Again</Btn></div>
</div>;
const cur=questions[qi];const empathyMsg=wrongStreak>=2?"This topic is challenging — 60% of students need multiple attempts.":wrongStreak>=1?"Almost. Take a moment to reconsider.":null;
const doCheck=()=>{setChecked(true);if(sel===cur.correct){setScore(s=>s+1);setWrongStreak(0);}else{setWrongStreak(w=>w+1);}setTimeout(()=>{setQi(q=>q+1);setSel(null);setChecked(false);},1500);};
return <div style={{display:"flex",flexDirection:"column",gap:14,padding:"0"}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><div style={{flex:1}}><Bar value={qi+1} max={total} color={C.primary} h={5}/></div><span style={{fontSize:13,fontWeight:700,color:C.text}}>{qi+1}/{total}</span></div>
  <div style={{display:"flex",gap:6}}><Pill text={cur.type} color={C.accent} bg={C.accentSoft}/><Pill text={cur.chapter} color={C.textMuted} bg={C.borderSoft}/></div>
  <Card style={{padding:18}}><p style={{fontSize:15,fontWeight:700,color:C.text,margin:0,lineHeight:1.6,whiteSpace:"pre-wrap"}}>{cur.q}</p></Card>
  {empathyMsg&&checked&&sel!==cur.correct&&<Card style={{background:C.warnSoft,border:`1px solid ${C.warn}30`,padding:12}}><p style={{fontSize:12,color:C.warnDark,margin:0}}>{empathyMsg}</p></Card>}
  <div style={{display:"flex",flexDirection:"column",gap:8}}>
    {cur.opts.map((o,i)=>{const selected=sel===i;const isCorrect=i===cur.correct;let bg="transparent",borderC=C.border;
    if(checked&&isCorrect){bg=C.successSoft;borderC=C.success;}
    else if(checked&&selected&&!isCorrect){bg=C.errorSoft;borderC=C.error;}
    else if(selected){bg=C.primarySoft;borderC=C.primary;}
    return <button key={i} onClick={()=>{if(!checked)setSel(i);}} style={{display:"flex",alignItems:"center",gap:12,padding:"13px 16px",borderRadius:12,border:`2px solid ${borderC}`,background:bg,cursor:checked?"default":"pointer",fontFamily:"inherit",textAlign:"left"}}>
      <div style={{width:30,height:30,borderRadius:8,background:checked&&isCorrect?C.success:checked&&selected?C.error:selected?C.primary:C.borderSoft,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:selected||checked?"#fff":C.textMuted,fontSize:12,fontWeight:700}}>{checked&&isCorrect?"✓":checked&&selected?"✗":String.fromCharCode(65+i)}</div>
      <span style={{fontSize:13,fontWeight:500,color:C.text}}>{o}</span>
    </button>;})}
  </div>
  {sel!==null&&!checked&&<Btn full onClick={doCheck}>Check Answer</Btn>}
</div>;};

/* ============ TEACH BACK ============ */
const TeachBackScreen=({navigate,ctx})=>{const[input,setInput]=useState("");const[submitted,setSubmitted]=useState(false);
const topicName=ctx?.topicName||"Electricity";
return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("journey")}/><div><p style={{fontSize:12,color:C.textMuted,margin:0}}>Teach-back</p><p style={{fontSize:15,fontWeight:700,color:C.text,margin:0}}>{topicName}</p></div></div>
  <Card style={{background:C.accentSoft,border:`1px solid ${C.accent}25`,padding:16}}>
    <p style={{fontSize:14,fontWeight:700,color:C.accent,margin:"0 0 8px"}}>Explain this concept</p>
    <p style={{fontSize:13,color:C.text,margin:0,lineHeight:1.6}}>Explain {topicName} as if you were writing a board exam answer. Include the key formula, one real-world example, and a diagram description if relevant.</p>
  </Card>
  {!submitted?<><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Write your explanation here..." rows={6} style={{width:"100%",padding:14,borderRadius:12,border:`1px solid ${C.border}`,fontFamily:"inherit",fontSize:14,resize:"vertical",lineHeight:1.6}}/>
  <Btn full onClick={()=>setSubmitted(true)} disabled={!input.trim()}>Submit Explanation</Btn></>:
  <Card style={{background:C.successSoft,border:`1px solid ${C.success}30`,padding:16}}>
    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><I n="check" s={18} c={C.success}/><p style={{fontSize:14,fontWeight:700,color:C.successDark,margin:0}}>Good explanation</p></div>
    <p style={{fontSize:13,color:C.text,margin:"0 0 12px",lineHeight:1.6}}>You've covered the key concepts well. Consider adding more detail about the relationship between current and resistance for a complete board-level answer.</p>
    <Btn variant="small" onClick={()=>navigate("journey")}>Back to Journey</Btn>
  </Card>}
</div>;};

/* ============ PRACTICE SCREEN ============ */
const PracticeScreen=({navigate,ctx})=>{const[qi,setQi]=useState(0);const[sel,setSel]=useState(null);const[checked,setChecked]=useState(false);const[score,setScore]=useState(0);
const topicName=ctx?.topicName||"Electricity";
const questions=[
  {q:"A wire of resistance 10Ω is bent into a circle. What is the resistance between two diametrically opposite points?",opts:["2.5 Ω","5 Ω","10 Ω","20 Ω"],correct:0},
  {q:"Which of the following is a good conductor of electricity?",opts:["Rubber","Glass","Copper","Wood"],correct:2},
  {q:"The unit of electric power is:",opts:["Joule","Volt","Watt","Ampere"],correct:2},
];
const total=questions.length;
if(qi>=total)return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",gap:16,padding:24,textAlign:"center"}}>
  <Ring value={score} max={total} size={90} stroke={6} color={score/total>=0.7?C.success:C.warn}><span style={{fontSize:22,fontWeight:800,color:C.text}}>{score}/{total}</span></Ring>
  <h2 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Practice Complete</h2>
  <p style={{fontSize:13,color:C.textMuted}}>{topicName} • {score}/{total} correct</p>
  <Btn full onClick={()=>navigate("journey")}>Back to Journey</Btn>
</div>;
const cur=questions[qi];
const doCheck=()=>{setChecked(true);if(sel===cur.correct)setScore(s=>s+1);setTimeout(()=>{setQi(q=>q+1);setSel(null);setChecked(false);},1200);};
return <div style={{display:"flex",flexDirection:"column",gap:14}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("journey")}/><div style={{flex:1}}><Bar value={qi+1} max={total} color={C.accent} h={5}/></div><span style={{fontSize:13,fontWeight:700,color:C.text}}>{qi+1}/{total}</span></div>
  <p style={{fontSize:12,color:C.textMuted,margin:0}}>Practice — {topicName}</p>
  <Card style={{padding:16}}><p style={{fontSize:14,fontWeight:700,color:C.text,margin:0,lineHeight:1.6}}>{cur.q}</p></Card>
  <div style={{display:"flex",flexDirection:"column",gap:8}}>
    {cur.opts.map((o,i)=>{const selected=sel===i;const isCorrect=i===cur.correct;let bg="transparent",borderC=C.border;
    if(checked&&isCorrect){bg=C.successSoft;borderC=C.success;}else if(checked&&selected&&!isCorrect){bg=C.errorSoft;borderC=C.error;}else if(selected){bg=C.primarySoft;borderC=C.primary;}
    return <button key={i} onClick={()=>{if(!checked)setSel(i);}} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:12,border:`2px solid ${borderC}`,background:bg,cursor:checked?"default":"pointer",fontFamily:"inherit",textAlign:"left"}}>
      <div style={{width:28,height:28,borderRadius:8,background:checked&&isCorrect?C.success:checked&&selected?C.error:selected?C.primary:C.borderSoft,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:selected||checked?"#fff":C.textMuted,fontSize:12,fontWeight:700}}>{String.fromCharCode(65+i)}</div>
      <span style={{fontSize:13,color:C.text}}>{o}</span>
    </button>;})}
  </div>
  {sel!==null&&!checked&&<Btn full onClick={doCheck}>Check</Btn>}
</div>;};

/* ============ MISTAKES SCREEN ============ */
const MistakesScreen=({navigate})=>{
const mistakes=[
  {q:"Find equivalent resistance of 2Ω and 3Ω in parallel",yourAnswer:"5 Ω",correct:"6/5 Ω",chapter:"Electricity",boardFreq:3},
  {q:"Balance: Fe + O₂ → Fe₂O₃",yourAnswer:"Fe + O₂ → Fe₂O₃",correct:"4Fe + 3O₂ → 2Fe₂O₃",chapter:"Chemical Reactions",boardFreq:5},
];
return <div style={{display:"flex",flexDirection:"column",gap:14}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>My Mistakes</h1></div>
  {mistakes.map((m,i)=><Card key={i} style={{padding:14}}>
    <p style={{fontSize:13,fontWeight:600,color:C.text,margin:"0 0 8px"}}>{m.q}</p>
    <div style={{display:"flex",gap:8,marginBottom:8}}>
      <div style={{flex:1,padding:8,borderRadius:8,background:C.errorSoft}}><p style={{fontSize:10,color:C.error,margin:0,fontWeight:600}}>Your answer</p><p style={{fontSize:12,color:C.errorDark,margin:"2px 0 0"}}>{m.yourAnswer}</p></div>
      <div style={{flex:1,padding:8,borderRadius:8,background:C.successSoft}}><p style={{fontSize:10,color:C.success,margin:0,fontWeight:600}}>Correct</p><p style={{fontSize:12,color:C.successDark,margin:"2px 0 0"}}>{m.correct}</p></div>
    </div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div style={{display:"flex",gap:6}}><Pill text={m.chapter} color={C.primary} bg={C.primarySoft}/><Pill text={`Board freq: ${m.boardFreq}x in 5 yrs`} color={C.warn} bg={C.warnSoft}/></div>
      <Btn variant="small" onClick={()=>navigate("tutor",{topicKey:m.chapter,topicName:m.chapter})}>Practice</Btn>
    </div>
  </Card>)}
</div>;};

/* ============ FOUNDATION GAPS ============ */
const FoundationScreen=({navigate})=>{
const gaps=[
  {name:"Basic Fractions (Class 8)",status:"done",mastery:85},{name:"Algebraic Expressions (Class 8)",status:"current",mastery:45},{name:"Decimal Operations (Class 7)",status:"locked",mastery:0},{name:"Ratio & Proportion (Class 8)",status:"locked",mastery:0},
];
return <div style={{display:"flex",flexDirection:"column",gap:14}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Foundation Gaps</h1></div>
  <Card style={{background:C.primarySoft,border:`1px solid ${C.primary}20`,padding:14}}>
    <p style={{fontSize:13,color:C.primary,margin:0,lineHeight:1.5}}>Strengthening these foundations from Class 7-8 will help you perform better in Class 10 topics.</p>
  </Card>
  {gaps.map((g,i)=>{const color=g.status==="done"?C.success:g.status==="current"?C.primary:C.textFaint;return <Card key={i} style={{padding:14,opacity:g.status==="locked"?0.5:1}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
      <span style={{fontSize:14,fontWeight:600,color:C.text}}>{g.name}</span>
      <Pill text={g.status==="done"?"✓ Done":g.status==="current"?"In progress":"Locked"} color={color} bg={`${color}15`}/>
    </div>
    {g.mastery>0&&<Bar value={g.mastery} color={color} h={4}/>}
  </Card>;})}
</div>;};

/* ============ PHOTO SCREEN ============ */
const PhotoScreen=({navigate})=>{const[stage,setStage]=useState("camera");
if(stage==="camera")return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"70vh",gap:16,padding:20}}>
  <Back onClick={()=>navigate("home")}/>
  <div style={{width:"100%",maxWidth:320,aspectRatio:"3/4",borderRadius:20,background:"#1a1a2e",display:"flex",alignItems:"center",justifyContent:"center",border:`3px solid ${C.border}`}}>
    <p style={{color:C.textFaint,fontSize:14}}>Camera preview</p>
  </div>
  <button onClick={()=>setStage("result")} style={{width:64,height:64,borderRadius:"50%",background:C.primary,border:`4px solid ${C.primarySoft}`,cursor:"pointer"}}/>
</div>;
return <div style={{display:"flex",flexDirection:"column",gap:14,padding:4}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>setStage("camera")}/><p style={{fontSize:15,fontWeight:700,color:C.text,margin:0}}>Detected Question</p></div>
  <Card style={{padding:16}}><p style={{fontSize:14,color:C.text,margin:0,lineHeight:1.6}}>Find the value of x if 2x² + 5x - 3 = 0</p></Card>
  <Btn full onClick={()=>navigate("tutor",{topicKey:"Quadratic Equations",topicName:"Quadratic Equations"})}>Solve with AI Tutor</Btn>
</div>;};

/* ============ PROFILE — Academic Profile ============ */
const ProfileScreen=({navigate,streak})=>{
return <div style={{display:"flex",flexDirection:"column",gap:14}}>
  <Card style={{padding:20,background:"linear-gradient(135deg, #1E40AF, #4338CA)",border:"none",color:"#fff"}}>
    <div style={{display:"flex",alignItems:"center",gap:14}}>
      <div style={{width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:24,fontWeight:800}}>RP</span></div>
      <div><p style={{fontSize:18,fontWeight:800,margin:0}}>Rahul Patel</p><p style={{fontSize:13,opacity:0.7,margin:"2px 0 0"}}>Class 10-A • Science + Math</p></div>
    </div>
  </Card>
  <div style={{display:"flex",gap:10}}>
    {[{label:"Predicted",value:`${predictedScore.low}%`,color:C.primary},{label:"Percentile",value:"72nd",color:C.accent},{label:"Streak",value:`${streak}d`,color:C.streak}].map(s=><Card key={s.label} style={{flex:1,padding:12,textAlign:"center"}}><p style={{fontSize:18,fontWeight:800,color:s.color,margin:0}}>{s.value}</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>{s.label}</p></Card>)}
  </div>
  {/* Study calendar */}
  <Card style={{padding:14}}>
    <p style={{fontSize:13,fontWeight:600,color:C.text,margin:"0 0 10px"}}>This week</p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
      {["M","T","W","T","F","S","S"].map((d,i)=>{const active=[0,1,2,3].includes(i);const today=i===3;return <div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5}}>
        <span style={{fontSize:11,color:today?C.primary:C.textMuted,fontWeight:today?700:400}}>{d}</span>
        <div style={{width:32,height:32,borderRadius:"50%",background:today?C.primary:active?C.successSoft:"transparent",border:active?"none":`1.5px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center"}}>
          {active&&<I n="check" s={14} c={today?"#fff":C.success} w={2.5}/>}
        </div>
      </div>;})}
    </div>
  </Card>
  <Card style={{padding:0}}>
    {[{label:"Subject preferences",icon:"book"},{label:"Notification settings",icon:"bell"},{label:"Privacy",icon:"shield"}].map((item,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"14px 18px",borderTop:i?`1px solid ${C.borderSoft}`:"none",cursor:"pointer"}}>
      <I n={item.icon} s={18} c={C.textMuted}/><span style={{fontSize:14,color:C.text,flex:1}}>{item.label}</span><I n="arrowR" s={14} c={C.textFaint}/>
    </div>)}
  </Card>
</div>;};

/* ============ APP SHELL ============ */
export default function StudentApp9(){
  const[screen,setScreen]=useState("onboarding");
  const[context,setContext]=useState(null);
  const[streak]=useState(12);
  const scrollRef=useRef(null);
  const navigateRef=useRef(null);
  const navigate=(s,ctx)=>{setScreen(s);if(ctx!==undefined)setContext(ctx);scrollRef.current?.scrollTo(0,0);};
  navigateRef.current=navigate;
  useEffect(()=>{const h=(e)=>navigateRef.current?.(e.detail);window.addEventListener('sidebar-nav',h);return()=>window.removeEventListener('sidebar-nav',h);},[]);

  const navItems=[{id:"home",icon:"home",label:"Home"},{id:"journey",icon:"journey",label:"Journey"},{id:"exam",icon:"exam",label:"Exams"},{id:"analytics",icon:"chart",label:"Analytics"}];
  const screens={
    onboarding:<OnboardingScreen onComplete={()=>navigate("home")}/>,
    home:<HomeScreen navigate={navigate} streak={streak}/>,
    journey:<JourneyScreen navigate={navigate}/>,
    exam:<ExamScreen navigate={navigate}/>,
    analytics:<AnalyticsScreen navigate={navigate}/>,
    tutor:<TutorScreen navigate={navigate} ctx={context}/>,
    quiz:<QuizScreen navigate={navigate}/>,
    teachback:<TeachBackScreen navigate={navigate} ctx={context}/>,
    practice:<PracticeScreen navigate={navigate} ctx={context}/>,
    mistakes:<MistakesScreen navigate={navigate}/>,
    foundation:<FoundationScreen navigate={navigate}/>,
    photo:<PhotoScreen navigate={navigate}/>,
    profile:<ProfileScreen navigate={navigate} streak={streak}/>,
    pyq:<ExamScreen navigate={navigate}/>,
    mocks:<ExamScreen navigate={navigate}/>,
  };
  const activeNav=["tutor","quiz","teachback","practice","photo","mistakes","foundation","pyq","mocks"].includes(screen)?"home":screen;
  if(screen==="onboarding")return screens.onboarding;

  return <div style={{fontFamily:'"Inter",-apple-system,sans-serif',maxWidth:"100%",margin:"0 auto",background:C.bg,minHeight:"100vh",display:"flex",flexDirection:"column",position:"relative"}}>
    {/* Header */}
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 18px 8px",background:C.card,borderBottom:`1px solid ${C.border}`}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:32,height:32,borderRadius:10,background:"linear-gradient(135deg, #2563EB, #7C3AED)",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9 2 7 4.5 7 7.5c0 2 1.2 3.8 2.5 5l.5.8h4l.5-.8C15.8 11.3 17 9.5 17 7.5 17 4.5 15 2 12 2z" fill="rgba(255,255,255,0.12)"/><circle cx="12" cy="6.5" r="1" fill="#fff" stroke="none"/><circle cx="9.8" cy="9" r=".7" fill="#fff" stroke="none"/><circle cx="14.2" cy="9" r=".7" fill="#fff" stroke="none"/><line x1="12" y1="6.5" x2="9.8" y2="9" strokeWidth=".7" opacity=".5"/><line x1="12" y1="6.5" x2="14.2" y2="9" strokeWidth=".7" opacity=".5"/><line x1="9" y1="16" x2="15" y2="16"/><line x1="10" y1="18" x2="14" y2="18"/></svg></div>
        <div><span style={{fontSize:14,fontWeight:800,color:C.text}}>LearnAI</span><span style={{fontSize:10,color:C.primary,fontWeight:600,marginLeft:6}}>Class 10</span></div>
      </div>
      <div style={{display:"flex",gap:8}}>
        <button onClick={()=>navigate("profile")} style={{background:"transparent",border:"none",cursor:"pointer",padding:4}}><I n="user" s={20} c={C.textMuted}/></button>
        <button style={{background:"transparent",border:"none",cursor:"pointer",padding:4,position:"relative"}}><I n="bell" s={20} c={C.textMuted}/><div style={{position:"absolute",top:2,right:2,width:6,height:6,borderRadius:"50%",background:C.error}}/></button>
      </div>
    </div>

    <div ref={scrollRef} style={{flex:1,overflowY:"auto",padding:"14px 18px 100px"}}>{screens[screen]||screens.home}</div>

    {/* Bottom nav */}
    <div style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(255,255,255,0.97)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-around",padding:"6px 0 18px"}}>
      {navItems.map(item=>{const isActive=activeNav===item.id;return <button key={item.id} onClick={()=>{navigate(item.id);setContext(null);}} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,padding:"4px 10px",background:"transparent",border:"none",cursor:"pointer",fontFamily:"inherit",color:isActive?C.primary:C.textFaint,fontSize:10,fontWeight:isActive?700:500}}>
        <NavIcon name={item.icon} active={isActive} color={isActive?C.primary:C.textFaint}/>
        <span>{item.label}</span>{isActive&&<div style={{width:4,height:4,borderRadius:"50%",background:C.primary}}/>}
      </button>;})}
    </div>
  </div>;
}
