// @ts-nocheck
"use client";
import { useState, useRef, useEffect } from "react";

const C = {
  bg:"#F8FAFC",card:"#FFFFFF",text:"#0F172A",textMuted:"#64748B",textFaint:"#94A3B8",
  primary:"#2563EB",primarySoft:"#EFF6FF",accent:"#7C3AED",accentSoft:"#F3E8FF",
  success:"#10B981",successSoft:"#D1FAE5",successDark:"#065F46",
  warn:"#F59E0B",warnSoft:"#FEF3C7",warnDark:"#78350F",
  error:"#EF4444",errorSoft:"#FEE2E2",errorDark:"#7F1D1D",
  border:"#E2E8F0",borderSoft:"#F1F5F9",xp:"#F59E0B",streak:"#F97316",
};

const I=({n,s=24,c="currentColor",w=1.8,active})=>{const st={width:s,height:s,display:"block"},p={fill:"none",stroke:c,strokeWidth:w,strokeLinecap:"round",strokeLinejoin:"round"};const icons={home:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M9 21V13.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6V21"/><path {...p} d="M2 10.5L10.586 2.914a2 2 0 0 1 2.828 0L22 10.5"/><path {...p} d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/>{active&&<path fill={c} opacity="0.15" d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9L12 3Z"/>}</svg>,journey:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2L2 7l10 5 10-5-10-5z"/><path {...p} d="M2 17l10 5 10-5"/><path {...p} d="M2 12l10 5 10-5"/>{active&&<path fill={c} opacity="0.15" d="M12 2L2 7l10 5 10-5z"/>}</svg>,exam:<svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="3" width="18" height="18" rx="3"/><path {...p} d="M8 7h8M8 11h8M8 15h5"/>{active&&<rect fill={c} opacity="0.12" x="3" y="3" width="18" height="18" rx="3"/>}</svg>,revision:<svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="4" width="18" height="17" rx="2"/><path {...p} d="M3 10h18M8 2v4M16 2v4"/>{active&&<rect fill={c} opacity="0.12" x="3" y="4" width="18" height="17" rx="2"/>}</svg>,camera:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle {...p} cx="12" cy="13" r="4"/></svg>,spark:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,fire:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z"/></svg>,star:<svg style={st} viewBox="0 0 24 24"><path {...p} fill={c} opacity="0.2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path {...p} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,target:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><circle {...p} cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill={c} stroke="none"/></svg>,zap:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,book:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path {...p} d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,clock:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><path {...p} d="M12 6v6l4 2"/></svg>,check:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M20 6L9 17l-5-5"/></svg>,lock:<svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="11" width="18" height="11" rx="2"/><path {...p} d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,arrowL:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M19 12H5M12 5l-7 7 7 7"/></svg>,chevD:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M6 9l6 6 6-6"/></svg>,brain:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2a5 5 0 0 0-4.8 3.6A4 4 0 0 0 4 9.5a4 4 0 0 0 .5 6A4.5 4.5 0 0 0 8 20h1"/><path {...p} d="M12 2a5 5 0 0 1 4.8 3.6A4 4 0 0 1 20 9.5a4 4 0 0 1-.5 6A4.5 4.5 0 0 1 16 20h-1"/><path {...p} d="M12 2v20"/></svg>,trophy:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2"/><path {...p} d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"/><path {...p} d="M6 3h12v6a6 6 0 0 1-12 0V3z"/><path {...p} d="M9 21h6M12 15v6"/></svg>,send:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M22 2L11 13"/><path {...p} d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>,bell:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path {...p} d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,user:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle {...p} cx="12" cy="7" r="4"/></svg>,x:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M18 6L6 18M6 6l12 12"/></svg>,search:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="11" cy="11" r="8"/><path {...p} d="M21 21l-4.35-4.35"/></svg>,alert:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><path {...p} d="M12 8v4M12 16h.01"/></svg>,shield:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,grid:<svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="3" width="7" height="7" rx="1.5"/><rect {...p} x="14" y="3" width="7" height="7" rx="1.5"/><rect {...p} x="3" y="14" width="7" height="7" rx="1.5"/><rect {...p} x="14" y="14" width="7" height="7" rx="1.5"/></svg>,arrowR:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M5 12h14M12 5l7 7-7 7"/></svg>,play:<svg style={st} viewBox="0 0 24 24"><polygon {...p} points="5 3 19 12 5 21 5 3" fill={c} opacity="0.3"/><polygon {...p} points="5 3 19 12 5 21 5 3"/></svg>,volume:<svg style={st} viewBox="0 0 24 24"><polygon {...p} points="11 5 6 9 2 9 2 15 6 15 11 19"/><path {...p} d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path {...p} d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>,users:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle {...p} cx="9" cy="7" r="4"/><path {...p} d="M23 21v-2a4 4 0 0 0-3-3.87"/><path {...p} d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,trendUp:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M23 6l-9.5 9.5-5-5L1 18"/><path {...p} d="M17 6h6v6"/></svg>,swords:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M2 2l9 9M15 15l7 7"/><path {...p} d="M22 2l-9 9M9 15l-7 7"/><path {...p} d="M18 2h4v4M2 18v4h4"/></svg>,gallery:<svg style={st} viewBox="0 0 24 24"><rect {...p} x="2" y="2" width="20" height="20" rx="3"/><circle {...p} cx="8.5" cy="8.5" r="2"/></svg>,flash:<svg style={st} viewBox="0 0 24 24"><path {...p} fill={c} opacity="0.2" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/><path {...p} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,bookmark:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>};return icons[n]||null;};
const NavIcon=({name,active,color})=><div style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,transition:"transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",transform:active?"scale(1.15) translateY(-2px)":"scale(1)"}}>{active&&<div style={{position:"absolute",inset:-4,background:`${color}12`,borderRadius:12,animation:"navG 2s ease-in-out infinite"}}/>}<I n={name} s={22} c={color} w={active?2.2:1.6} active={active}/></div>;

const Card=({children,style,onClick})=><div onClick={onClick} style={{background:C.card,borderRadius:20,padding:20,border:`1px solid ${C.border}`,...(onClick?{cursor:"pointer"}:{}),...style}}>{children}</div>;
const Pill=({text,color=C.primary,bg,icon,style,onClick})=><span onClick={onClick} style={{display:"inline-flex",alignItems:"center",gap:5,padding:"5px 12px",borderRadius:999,fontSize:12,fontWeight:600,background:bg||`${color}15`,color,...(onClick?{cursor:"pointer"}:{}),...style}}>{icon&&<I n={icon} s={14} c={color} w={2}/>}{text}</span>;
const Btn=({children,variant="primary",style,onClick,full,icon})=>{const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,height:48,padding:"0 24px",borderRadius:14,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",border:"none",transition:"all 0.12s",...(full?{width:"100%"}:{})};const v={primary:{background:C.primary,color:"#fff"},accent:{background:C.accent,color:"#fff"},soft:{background:C.primarySoft,color:C.primary},ghost:{background:"transparent",color:C.primary,border:`1.5px solid ${C.border}`},success:{background:C.success,color:"#fff"},warn:{background:C.warnSoft,color:C.warnDark},danger:{background:C.errorSoft,color:C.errorDark},small:{height:36,padding:"0 14px",fontSize:13,borderRadius:10,background:C.primarySoft,color:C.primary}};return <button onClick={onClick} style={{...base,...v[variant],...style}}>{icon&&<I n={icon} s={18} c={v[variant]?.color||"#fff"} w={2}/>}{children}</button>;};
const Ring=({value,max=100,size=64,stroke=5,color=C.primary,children})=>{const r=(size-stroke)/2,circ=2*Math.PI*r,off=circ-(value/max)*circ;return <div style={{position:"relative",width:size,height:size}}><svg width={size} height={size} style={{transform:"rotate(-90deg)"}}><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={`${color}20`} strokeWidth={stroke}/><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={circ} strokeDashoffset={off} strokeLinecap="round" style={{transition:"stroke-dashoffset 0.6s ease"}}/></svg><div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>{children}</div></div>;};
const Bar=({value,max=100,color=C.primary,h=6})=><div style={{width:"100%",height:h,background:`${color}20`,borderRadius:h,overflow:"hidden"}}><div style={{width:`${Math.min((value/max)*100,100)}%`,height:"100%",background:color,borderRadius:h,transition:"width 0.5s ease"}}/></div>;
const Dot=({level})=><div style={{width:8,height:8,borderRadius:"50%",background:{weak:C.error,practicing:C.warn,mastered:C.success}[level],flexShrink:0}}/>;
const Back=({onClick})=><button onClick={onClick} style={{background:"transparent",border:"none",cursor:"pointer",padding:4,display:"flex",color:C.textMuted}}><I n="arrowL" s={22} c={C.textMuted}/></button>;
const Confetti=({show})=>{if(!show)return null;const p=Array.from({length:20},(_,i)=>({left:`${Math.random()*100}%`,color:["#2563EB","#7C3AED","#10B981","#F59E0B","#EF4444","#F97316"][i%6],delay:`${Math.random()*0.4}s`,dur:`${0.6+Math.random()*0.6}s`,size:4+Math.random()*5}));return <div style={{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden",zIndex:50}}><style>{`@keyframes cF{0%{transform:translateY(-20px) rotate(0);opacity:1}100%{transform:translateY(420px) rotate(720deg);opacity:0}}`}</style>{p.map((x,i)=><div key={i} style={{position:"absolute",top:0,left:x.left,width:x.size,height:x.size*1.5,background:x.color,borderRadius:1,animation:`cF ${x.dur} ${x.delay} ease-in forwards`}}/>)}</div>;};
const XPToast=({show,amount=10})=>{if(!show)return null;return <div style={{position:"absolute",top:70,left:"50%",transform:"translateX(-50%)",background:C.xp,color:"#fff",padding:"8px 20px",borderRadius:999,fontSize:14,fontWeight:700,zIndex:60,animation:"xpP 1.2s ease forwards",boxShadow:"0 4px 20px rgba(245,158,11,0.4)"}}><style>{`@keyframes xpP{0%{opacity:0;transform:translateX(-50%) translateY(10px) scale(0.8)}20%{opacity:1;transform:translateX(-50%) translateY(0) scale(1.05)}40%{transform:translateX(-50%) translateY(0) scale(1)}100%{opacity:0;transform:translateX(-50%) translateY(-30px)}}`}</style>+{amount} XP</div>;};

/* ============ ASK BAR ============ */
const AskBar=({onSubmit,onCamera})=>{const[q,setQ]=useState("");const[f,setF]=useState(false);const[isListening,setIsListening]=useState(false);const sugs=["Explain photosynthesis","What is Pythagoras theorem?","How does convection work?","Help me with fractions"];
const startListening=()=>{setIsListening(true);setTimeout(()=>{setIsListening(false);setQ("How does convection work?");},2000);};
return <div style={{marginBottom:16}}>
<style>{`@keyframes micPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:0.7}} @keyframes waveBar{0%,100%{height:8px}50%{height:16px}}`}</style>
<div style={{display:"flex",gap:8,alignItems:"center",padding:"10px 14px",borderRadius:16,border:`2px solid ${isListening?C.error:f?C.accent:C.border}`,background:C.card,transition:"border-color 0.2s"}}><I n="search" s={20} c={f?C.accent:C.textFaint}/><input value={q} onChange={e=>setQ(e.target.value)} onFocus={()=>setF(true)} onBlur={()=>setTimeout(()=>setF(false),200)} onKeyDown={e=>{if(e.key==="Enter"&&q.trim()){onSubmit(q);setQ("");}}} placeholder={isListening?"Listening...":"Ask anything or type a topic..."} style={{flex:1,border:"none",outline:"none",fontFamily:"inherit",fontSize:14,color:C.text,background:"transparent"}}/>
{isListening&&<div style={{display:"flex",alignItems:"center",gap:2,marginRight:4}}>{[0,1,2].map(i=><div key={i} style={{width:3,borderRadius:2,background:C.error,animation:`waveBar 0.6s ${i*0.15}s ease-in-out infinite`}}/>)}</div>}
<button onClick={isListening?()=>setIsListening(false):startListening} style={{width:36,height:36,borderRadius:10,background:isListening?C.error:C.borderSoft,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",animation:isListening?"micPulse 1.2s ease-in-out infinite":"none",flexShrink:0}}>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isListening?"#fff":C.textMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="1" width="6" height="12" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
</button>
{q.trim()?<button onClick={()=>{onSubmit(q);setQ("");}} style={{width:36,height:36,borderRadius:10,background:C.accent,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="send" s={16} c="#fff" w={2}/></button>:<button onClick={onCamera} style={{width:36,height:36,borderRadius:10,background:C.primarySoft,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="camera" s={16} c={C.primary} w={2}/></button>}</div>{f&&!q&&<div style={{marginTop:8,display:"flex",gap:6,flexWrap:"wrap"}}>{sugs.map(s=><button key={s} onClick={()=>{onSubmit(s);setF(false);}} style={{padding:"6px 12px",borderRadius:999,border:`1px solid ${C.border}`,background:C.borderSoft,cursor:"pointer",fontFamily:"inherit",fontSize:12,color:C.textMuted}}>{s}</button>)}</div>}</div>;};

/* ============ ONBOARDING ============ */
const OnboardingScreen=({onComplete})=>{const[step,setStep]=useState(0);const[dqi,setDqi]=useState(0);const[dans,setDans]=useState({});
const diagQs=[{q:"What is 3/4 + 1/2?",opts:["5/4","4/6","1","5/6"],correct:0},{q:"Heat travels through vacuum by:",opts:["Conduction","Convection","Radiation","All"],correct:2},{q:"Simplify: 2x + 3x",opts:["5x","6x","5x²","23x"],correct:0}];
if(step===0)return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"80vh",gap:24,padding:20,textAlign:"center"}}><div style={{width:80,height:80,borderRadius:0,background:"linear-gradient(135deg, #2563EB, #7C3AED)",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="spark" s={40} c="#fff" w={2}/></div><h1 style={{fontSize:28,fontWeight:800,color:C.text,margin:0}}>Welcome to LearnAI</h1><p style={{fontSize:15,color:C.textMuted,margin:0,lineHeight:1.6}}>Your personal AI learning companion</p><Btn full onClick={()=>setStep(1)}>Get Started</Btn></div>;
const done=dqi>=diagQs.length;if(done)return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"70vh",gap:20,padding:20,textAlign:"center"}}><Confetti show={true}/><Ring value={100} size={100} stroke={7} color={C.success}><I n="check" s={36} c={C.success} w={2.5}/></Ring><h2 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>You're all set!</h2><Btn full onClick={onComplete} variant="accent">Start Learning</Btn></div>;
const cur=diagQs[dqi];return <div style={{display:"flex",flexDirection:"column",gap:16,padding:20}}><div><p style={{fontSize:13,color:C.textMuted,margin:"0 0 4px"}}>Quick diagnostic — {dqi+1}/{diagQs.length}</p><h2 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Let's see where you are</h2></div><Bar value={dqi+1} max={diagQs.length} color={C.accent} h={4}/><Card><p style={{fontSize:16,fontWeight:600,color:C.text,margin:0,lineHeight:1.5}}>{cur.q}</p></Card><div style={{display:"flex",flexDirection:"column",gap:8}}>{cur.opts.map((o,i)=><button key={i} onClick={()=>{setDans({...dans,[dqi]:i});setTimeout(()=>setDqi(dqi+1),300);}} style={{padding:"14px 16px",borderRadius:14,border:`2px solid ${dans[dqi]===i?C.primary:C.border}`,background:dans[dqi]===i?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:14,color:C.text,textAlign:"left"}}>{o}</button>)}</div></div>;};

/* ============ HOME ============ */
const HomeScreen=({navigate,xp,streak})=><div style={{display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}><div><p style={{fontSize:13,color:C.textMuted,margin:0}}>Good evening</p><h1 style={{fontSize:26,fontWeight:800,color:C.text,margin:"2px 0 0",letterSpacing:-0.5}}>Aarav</h1></div><div style={{display:"flex",gap:8}}><Pill icon="fire" text={`${streak}`} color={C.streak} bg={`${C.streak}15`}/><Pill icon="star" text={`${xp}`} color={C.xp} bg={`${C.xp}15`}/></div></div>
  <AskBar onSubmit={()=>navigate("tutor")} onCamera={()=>navigate("photo")}/>
  <Card style={{borderLeft:`4px solid ${C.accent}`,borderRadius:"4px 20px 20px 4px",padding:16}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10}}><Pill text="Ms. Sharma" color={C.accent} bg={C.accentSoft}/><Pill icon="clock" text="Due today" color={C.warn} bg={C.warnSoft}/></div><p style={{fontSize:15,fontWeight:700,color:C.text,margin:"0 0 4px"}}>Fractions — Unlike Denominators</p><p style={{fontSize:12,color:C.textMuted,margin:"0 0 12px"}}>10 questions • ~8 min</p><Btn onClick={()=>navigate("quiz")} style={{height:42,fontSize:14}} variant="accent">Start Assignment</Btn></Card>
  <Card style={{background:"linear-gradient(145deg, #1E40AF 0%, #7C3AED 100%)",border:"none",padding:24,position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:-30,right:-30,width:120,height:120,borderRadius:"50%",background:"rgba(255,255,255,0.06)"}}/><div style={{position:"relative"}}><div style={{display:"flex",gap:6,marginBottom:14}}><Pill text="Science 4" bg="rgba(255,255,255,0.15)" color="#fff"/><Pill text="Math 4" bg="rgba(255,255,255,0.15)" color="#fff"/></div><h2 style={{fontSize:20,fontWeight:800,color:"#fff",margin:"0 0 4px"}}>Today's Mission</h2><p style={{fontSize:13,color:"rgba(255,255,255,0.7)",margin:"0 0 18px"}}>8 questions • ~10 min • Up to 80 XP</p><Btn onClick={()=>navigate("quiz")} style={{width:"100%",background:"#fff",color:C.primary,height:52,fontSize:16,fontWeight:800,borderRadius:16}}>Start Mission</Btn></div></Card>
  <div style={{display:"flex",gap:10}}>{[{label:"Streak",value:`${streak}d`,icon:"fire",color:C.streak},{label:"Level",value:"12",icon:"trophy",color:C.accent},{label:"Mastery",value:"62%",icon:"brain",color:C.success}].map(s=><Card key={s.label} style={{flex:1,padding:14,textAlign:"center",border:"none",background:C.borderSoft}}><div style={{display:"flex",justifyContent:"center",marginBottom:6}}><I n={s.icon} s={22} c={s.color}/></div><p style={{fontSize:16,fontWeight:800,color:s.color,margin:0}}>{s.value}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{s.label}</p></Card>)}</div>
  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
    {[{label:"Challenge",sub:"Weekly contest",icon:"swords",screen:"challenge",color:C.accent},{label:"My Mistakes",sub:"Review errors",icon:"alert",screen:"mistakes",color:C.error},{label:"Exam Mode",sub:"Mock tests",icon:"exam",screen:"exam",color:C.error},{label:"Foundation",sub:"Catch-up plan",icon:"shield",screen:"foundation",color:C.primary}].map(a=><Card key={a.label} onClick={()=>navigate(a.screen)} style={{cursor:"pointer",padding:16}}><div style={{marginBottom:8}}><I n={a.icon} s={24} c={a.color}/></div><p style={{fontSize:13,fontWeight:700,color:C.text,margin:0}}>{a.label}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{a.sub}</p></Card>)}
  </div>
  <MiniFeed navigate={navigate}/>
</div>;

/* ============ VISUAL EXPLAINERS ============ */
const FractionBarExplainer=()=>{
  const[playing,setPlaying]=useState(true);const[phase,setPhase]=useState(0);const[audio,setAudio]=useState(false);
  const narrations=["We start with 3/4 and 1/2","To add fractions, we need common denominators","Convert 1/2 to 2/4 — now both bars show fourths","3/4 + 2/4 = 5/4, which is 1 and 1/4"];
  useEffect(()=>{if(!playing)return;const t=setInterval(()=>setPhase(p=>p<3?p+1:0),2200);return()=>clearInterval(t);},[playing]);
  useEffect(()=>{if(audio&&'speechSynthesis' in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(narrations[phase]);u.rate=0.9;speechSynthesis.speak(u);}return()=>{if(audio)speechSynthesis.cancel();};},[phase,audio]);
  const barH=28,gap=6,colors={a:"#7C3AED",b:"#2563EB",merged:"#10B981"};
  return <div style={{background:"#0F172A",borderRadius:14,padding:16,position:"relative",overflow:"hidden"}}>
    <style>{`@keyframes fracSlide{0%{transform:translateX(-8px);opacity:0}100%{transform:translateX(0);opacity:1}} @keyframes fracMerge{0%{gap:16px}100%{gap:0}} @keyframes fracPulse{0%,100%{opacity:1}50%{opacity:0.6}}`}</style>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
      <span style={{fontSize:11,color:"#94A3B8",fontWeight:600}}>FRACTION ADDITION: 3/4 + 1/2</span>
      <div style={{display:"flex",gap:6}}>
        <button onClick={()=>setAudio(!audio)} style={{width:28,height:28,borderRadius:8,background:audio?"#7C3AED30":"#1E293B",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="volume" s={14} c={audio?"#A78BFA":"#64748B"}/></button>
        <button onClick={()=>setPlaying(!playing)} style={{width:28,height:28,borderRadius:8,background:playing?"#7C3AED30":"#1E293B",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><I n={playing?"clock":"play"} s={14} c={playing?"#A78BFA":"#64748B"}/></button>
      </div>
    </div>
    {/* Phase 0&1: Original fractions */}
    <div style={{minHeight:140,display:"flex",flexDirection:"column",justifyContent:"center",gap:14}}>
      {/* 3/4 bar */}
      <div>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
          <span style={{fontSize:13,color:"#E2E8F0",fontWeight:700,width:32}}>3/4</span>
          <div style={{flex:1,display:"flex",gap:2,height:barH,borderRadius:6,overflow:"hidden",border:"1px solid #334155"}}>
            {[0,1,2,3].map(i=><div key={i} style={{flex:1,background:i<3?colors.a:"#1E293B",transition:"background 0.5s"}}/>)}
          </div>
        </div>
      </div>
      {/* 1/2 bar — transforms to 2/4 in phase 2 */}
      <div>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
          <span style={{fontSize:13,color:"#E2E8F0",fontWeight:700,width:32}}>{phase>=2?"2/4":"1/2"}</span>
          <div style={{flex:1,display:"flex",gap:2,height:barH,borderRadius:6,overflow:"hidden",border:"1px solid #334155"}}>
            {phase<2?[0,1].map(i=><div key={i} style={{flex:1,background:i<1?colors.b:"#1E293B",transition:"background 0.5s"}}/>)
            :[0,1,2,3].map(i=><div key={i} style={{flex:1,background:i<2?colors.b:"#1E293B",transition:"background 0.5s",animation:"fracSlide 0.4s ease forwards",animationDelay:`${i*0.1}s`}}/>)}
          </div>
        </div>
      </div>
      {/* Phase 3: Merged result = 5/4 */}
      {phase>=3&&<div style={{animation:"fracSlide 0.5s ease forwards"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
          <span style={{fontSize:13,color:"#10B981",fontWeight:700,width:32}}>5/4</span>
          <div style={{flex:1,display:"flex",gap:2,height:barH,borderRadius:6,overflow:"hidden",border:"1px solid #10B98150"}}>
            {[0,1,2,3,4].map(i=><div key={i} style={{flex:1,background:i<3?colors.a:i<5?colors.b:"#1E293B",transition:"background 0.5s"}}/>)}
          </div>
          <span style={{fontSize:12,color:"#10B981",fontWeight:600}}>= 1 1/4</span>
        </div>
      </div>}
      {/* Step indicator */}
      <div style={{display:"flex",gap:4,justifyContent:"center",marginTop:4}}>
        {[0,1,2,3].map(i=><div key={i} style={{width:i===phase?20:6,height:6,borderRadius:3,background:i===phase?"#A78BFA":"#334155",transition:"all 0.3s",cursor:"pointer"}} onClick={()=>{setPhase(i);setPlaying(false);}}/>)}
      </div>
      <p style={{fontSize:12,color:"#94A3B8",textAlign:"center",margin:"4px 0 0",minHeight:16}}>{narrations[phase]}</p>
    </div>
  </div>;
};

const BeakerConvectionExplainer=()=>{
  const[playing,setPlaying]=useState(true);const[heatOn,setHeatOn]=useState(true);const[audio,setAudio]=useState(false);const[tick,setTick]=useState(0);
  useEffect(()=>{if(!playing)return;const t=setInterval(()=>setTick(k=>k+1),80);return()=>clearInterval(t);},[playing]);
  const narrate=(text)=>{if('speechSynthesis' in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.rate=0.9;speechSynthesis.speak(u);}};
  useEffect(()=>{if(audio)narrate(heatOn?"Heat is on. Hot particles rise, cool ones sink — creating a convection current.":"Heat is off. Particles slow down and settle. No convection current.");},[heatOn,audio]);
  // 12 particles in a loop
  const particles=Array.from({length:12},(_,i)=>{
    const angle=(tick*(heatOn?1.2:0.15)+i*30)*(Math.PI/180);
    const rx=35+i*3,ry=40;
    const cx=75+Math.sin(angle+i*0.5)*rx;
    const cy=70+Math.cos(angle+i*0.5)*ry*(heatOn?1:0.3);
    const speed=heatOn?1:0.2;
    const temp=heatOn?(Math.sin(angle+i)>0?1:0):0;
    return{cx:Math.max(30,Math.min(170,cx)),cy:Math.max(24,Math.min(120,cy)),temp,r:heatOn?4.5:3.5};
  });
  return <div style={{background:"#0F172A",borderRadius:14,padding:16,position:"relative",overflow:"hidden"}}>
    <style>{`@keyframes heatGlow{0%,100%{opacity:0.4}50%{opacity:0.9}} @keyframes bubble{0%{transform:translateY(0);opacity:0.8}100%{transform:translateY(-20px);opacity:0}}`}</style>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
      <span style={{fontSize:11,color:"#94A3B8",fontWeight:600}}>CONVECTION CURRENT</span>
      <div style={{display:"flex",gap:6}}>
        <button onClick={()=>setAudio(!audio)} style={{width:28,height:28,borderRadius:8,background:audio?"#06B6D430":"#1E293B",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="volume" s={14} c={audio?"#22D3EE":"#64748B"}/></button>
        <button onClick={()=>setPlaying(!playing)} style={{width:28,height:28,borderRadius:8,background:playing?"#06B6D430":"#1E293B",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><I n={playing?"clock":"play"} s={14} c={playing?"#22D3EE":"#64748B"}/></button>
      </div>
    </div>
    <div style={{display:"flex",gap:16,alignItems:"flex-start"}}>
      <svg width="200" height="140" viewBox="0 0 200 140">
        {/* Beaker */}
        <rect x="20" y="15" width="160" height="110" rx="8" fill="#0C1929" stroke="#334155" strokeWidth="1.5"/>
        {/* Heat source glow */}
        {heatOn&&<rect x="20" y="115" width="160" height="10" rx="2" fill="#EF4444" style={{animation:"heatGlow 1.5s ease-in-out infinite"}}/>}
        {/* Particles */}
        {particles.map((p,i)=><circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.temp?"#EF4444":"#3B82F6"} style={{transition:"cx 0.15s, cy 0.15s, fill 0.5s, r 0.3s"}}/>)}
        {/* Convection arrows */}
        {heatOn&&<><path d="M50 95 L50 35" stroke="#EF444480" strokeWidth="1.2" fill="none" strokeDasharray="4 3" markerEnd="url(#arrUp)"/>
        <path d="M150 35 L150 95" stroke="#3B82F680" strokeWidth="1.2" fill="none" strokeDasharray="4 3" markerEnd="url(#arrDn)"/>
        <defs><marker id="arrUp" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 6L3 0L6 6" fill="#EF444480"/></marker>
        <marker id="arrDn" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L3 6L6 0" fill="#3B82F680"/></marker></defs></>}
        {/* Bubbles when heat on */}
        {heatOn&&[0,1,2].map(i=><circle key={`b${i}`} cx={60+i*35} cy={110} r={2} fill="#EF444460" style={{animation:`bubble 1.${i+2}s ease-out ${i*0.4}s infinite`}}/>)}
      </svg>
      <div style={{flex:1,display:"flex",flexDirection:"column",gap:8,paddingTop:4}}>
        <div style={{fontSize:11,color:"#94A3B8"}}>
          {heatOn?<><span style={{color:"#EF4444"}}>●</span> Hot particles rise<br/><span style={{color:"#3B82F6"}}>●</span> Cool particles sink<br/><span style={{color:"#94A3B8",fontSize:10}}>→ creates a circular current</span></>
          :<><span style={{color:"#3B82F6"}}>●</span> Particles settle<br/><span style={{color:"#94A3B8",fontSize:10}}>No heat = no convection</span></>}
        </div>
        {/* Heat toggle */}
        <button onClick={()=>setHeatOn(!heatOn)} style={{marginTop:8,display:"flex",alignItems:"center",gap:8,padding:"8px 12px",borderRadius:10,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,background:heatOn?"#EF444425":"#1E293B",color:heatOn?"#FCA5A5":"#64748B",transition:"all 0.3s"}}>
          <div style={{width:36,height:20,borderRadius:10,background:heatOn?"#EF4444":"#334155",position:"relative",transition:"background 0.3s"}}>
            <div style={{width:16,height:16,borderRadius:8,background:"#fff",position:"absolute",top:2,left:heatOn?18:2,transition:"left 0.3s"}}/>
          </div>
          {heatOn?"Heat ON":"Heat OFF"}
        </button>
      </div>
    </div>
    <p style={{fontSize:12,color:"#94A3B8",textAlign:"center",margin:"8px 0 0"}}>{heatOn?"Warm fluid rises, cooler fluid sinks — forming a convection loop":"Toggle heat on to see the convection current in action"}</p>
  </div>;
};

const VisualExplainerMap={
  "fraction-bar":FractionBarExplainer,
  "beaker":BeakerConvectionExplainer,
};

const WatchLearnBadge=()=><span style={{display:"inline-flex",alignItems:"center",gap:4,padding:"3px 10px",borderRadius:999,fontSize:10,fontWeight:700,background:"linear-gradient(135deg,#06B6D420,#7C3AED20)",color:"#06B6D4",border:"1px solid #06B6D430",letterSpacing:0.3}}>
  <I n="play" s={10} c="#06B6D4" w={2.2}/>WATCH & LEARN
</span>;

/* ============ TUTOR WITH VISUAL EXPLAINERS + READ ALOUD ============ */
const TutorScreen=({navigate,addXP})=>{const[step,setStep]=useState(0);const[input,setInput]=useState("");const[reading,setReading]=useState(false);const[topic,setTopic]=useState(null);const[persona,setPersona]=useState("textbook");const[realWorldOpen,setRealWorldOpen]=useState({});
const personaLabels={textbook:"Textbook",cricket:"Like cricket",story:"Like a story",game:"Like a game",cooking:"Like cooking",likeImFive:"Like I'm 5"};
const personaContent={
  fractions:{
    cricket:[
      "Imagine you scored 3 runs in 4 balls. That's 3/4. Your friend scored 1 in 2 balls — that's 1/2. To compare, we need the same number of balls...",
      "To add fractions with different denominators, think of converting overs. If one bowler bowls 4-ball overs and another bowls 2-ball overs, convert to the same over length. 1/2 = 2/4, so 3/4 + 2/4 = 5/4."
    ],
    story:[
      "Once upon a time, a pizza was cut into 4 slices. Someone ate 3 of them — that's 3/4 of the pizza gone...",
      "To add fractions, imagine combining two pizzas cut differently. One has 4 slices (3 eaten), the other has 2 slices (1 eaten). Re-cut the second pizza into 4 slices — now 2 are eaten. Total eaten: 5 out of 4 slices = 5/4."
    ],
    cooking:[
      "A recipe needs 3/4 cup of flour and 1/2 cup of sugar. To add them, we need the same measuring cup size...",
      "Convert 1/2 cup to 2/4 cup — now both use quarter-cup measures. 3/4 + 2/4 = 5/4 cups total. That's 1 and 1/4 cups. Same idea for any fraction addition!"
    ],
    game:[
      "You completed 3 out of 4 levels — that's 3/4. Your friend completed 1 out of 2 — that's 1/2. Who did more?...",
      "To compare or add, make both scores out of the same number of levels. 1/2 = 2/4. Now: 3/4 + 2/4 = 5/4. Together you cleared more than a full set of levels!"
    ],
    likeImFive:[
      "You have 4 candies and you ate 3. That's 3/4. Your friend has 2 candies and ate 1. That's 1/2...",
      "To add your eaten candies together, make the candy bags the same size. Your friend's 1/2 becomes 2/4. Now 3/4 + 2/4 = 5/4 — more than a whole bag!"
    ],
  },
  evaporation:{
    cricket:["Think of a cricket pitch drying after rain. The sun heats the water, and the fastest water molecules escape into the air — just like batsmen running between wickets...","When the fastest molecules leave, the remaining water is slower and cooler. Like if the best batsmen get out, the run rate drops."],
    story:["Once, a puddle sat in the sun. The tiny water drops got so excited from the heat that the fastest ones jumped right out into the air...","After the speediest drops left, the puddle felt cooler. The remaining drops didn't have as much energy — that's evaporative cooling."],
    cooking:["When you boil water for tea, you see steam rising. The hottest water molecules escape first as vapor...","That's why a cup of hot chai cools down — the fastest molecules leave as steam, lowering the temperature of what's left."],
    game:["Imagine a game where particles have speed points. When heated, the fastest particles reach escape velocity and leave the liquid...","After the speed-demons escape, the average speed of remaining particles drops. Lower speed = lower temperature. Level: Evaporative Cooling unlocked!"],
    likeImFive:["When it's hot outside, water gets warm. The really fast tiny bits of water jump out into the air — like they're too excited to stay...","After the fast bits leave, the water left behind is slower and cooler. That's why you feel cold when you come out of a pool!"],
  }
};
const realWorldData={
  fractions:"Every time you split a pizza, share snacks equally, or read a cricket strike rate like 156.5 — you're using fractions. Chefs use fractions to scale recipes. Builders use fractions to measure materials. Even your phone battery is a fraction!",
  evaporation:"This is why your room feels warm near the heater but cold near the window. Convection currents carry warm air up and away. It's also why coastal areas have sea breezes — the land heats faster than water, creating convection loops."
};
const topics={
  fractions:{
    title:"Fractions — Adding Unlike Denominators",subtitle:"3/4 + 1/2",
    cards:[
      {type:"visual_explainer",icon:"play",label:"Watch",color:"#06B6D4",bg:"#ECFEFF",content:"Watch how we add 3/4 + 1/2 by finding common denominators:",visual:{type:"animation",component:"fraction-bar",props:{}}},
      {type:"concept",icon:"spark",label:"Key Idea",color:C.primary,bg:C.primarySoft,content:"To add fractions with different denominators, first convert them so both have the same denominator. Multiply top and bottom of each fraction until the bottoms match. Here: 1/2 = 2/4, so 3/4 + 2/4 = 5/4."},
      {type:"think",icon:"brain",label:"Think",color:C.accent,bg:C.accentSoft,content:"What would you multiply 1/3 by to get a denominator of 12?",hasInput:true},
      {type:"feedback",icon:"check",label:"Correct",color:C.success,bg:C.successSoft,content:"Multiply by 4/4. Since 3 × 4 = 12, we get 1/3 = 4/12. Always multiply top and bottom by the same number!"},
      {type:"practice",icon:"target",label:"Your turn",color:C.warn,bg:C.warnSoft,content:"Solve: 2/3 + 1/6. What is the answer in simplest form?",hasInput:true},
    ]
  },
  evaporation:{
    title:"Evaporation & Cooling",subtitle:"Convection & heat transfer",
    cards:[
      {type:"visual_explainer",icon:"play",label:"Watch",color:"#06B6D4",bg:"#ECFEFF",content:"See how heat creates convection currents in a fluid:",visual:{type:"animation",component:"beaker",props:{}}},
      {type:"concept",icon:"spark",label:"Concept",color:C.primary,bg:C.primarySoft,content:"When a liquid is heated, the fastest (highest-energy) molecules rise. Cooler, denser molecules sink to take their place. This creates a circular flow called a convection current."},
      {type:"think",icon:"brain",label:"Think",color:C.accent,bg:C.accentSoft,content:"After the fastest molecules leave a liquid surface, what happens to the temperature of the remaining liquid?",hasInput:true},
      {type:"feedback",icon:"check",label:"Correct",color:C.success,bg:C.successSoft,content:"Yes! Average kinetic energy drops → temperature decreases. This is evaporative cooling — the same reason you feel cold stepping out of a pool."},
      {type:"practice",icon:"target",label:"Your turn",color:C.warn,bg:C.warnSoft,content:"Why does a fan make you feel cooler even though it doesn't lower room temperature?",hasInput:true},
    ]
  },
};
// topic picker or active session
if(!topic)return <div style={{display:"flex",flexDirection:"column",gap:14}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><div style={{flex:1}}><p style={{fontSize:12,color:C.textMuted,margin:0}}>Solve with Tutor</p><p style={{fontSize:18,fontWeight:800,color:C.text,margin:0}}>Choose a Topic</p></div></div>
  {Object.entries(topics).map(([key,t])=><Card key={key} onClick={()=>setTopic(key)} style={{cursor:"pointer",borderLeft:`4px solid ${key==="fractions"?C.accent:C.primary}`,borderRadius:"4px 20px 20px 4px",padding:16}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div><p style={{fontSize:15,fontWeight:700,color:C.text,margin:"0 0 2px"}}>{t.title}</p><p style={{fontSize:12,color:C.textMuted,margin:0}}>{t.subtitle} • {t.cards.length} steps</p></div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4}}>
        <Pill icon="star" text={`+${t.cards.length*5} XP`} color={C.xp} bg={C.warnSoft}/>
        {t.cards.some(c=>c.visual)&&<WatchLearnBadge/>}
      </div>
    </div>
  </Card>)}
</div>;

const tp=topics[topic];const cards=tp.cards;
const adv=()=>{if(step<cards.length-1){setStep(s=>s+1);setInput("");addXP(5);}};
const readAloud=(text)=>{if('speechSynthesis' in window){setReading(true);const u=new SpeechSynthesisUtterance(text);u.rate=0.9;u.onend=()=>setReading(false);speechSynthesis.cancel();speechSynthesis.speak(u);}};
const getCardContent=(c,i)=>{
  if(persona!=="textbook"&&personaContent[topic]&&personaContent[topic][persona]&&i<2){
    return personaContent[topic][persona][i];
  }
  return c.content;
};
return <div style={{display:"flex",flexDirection:"column",gap:14}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>{setTopic(null);setStep(0);}}/><div style={{flex:1}}><p style={{fontSize:12,color:C.textMuted,margin:0}}>Solve with Tutor</p><p style={{fontSize:15,fontWeight:700,color:C.text,margin:0}}>{tp.title}</p></div><Pill icon="star" text="+5/step" color={C.xp} bg={C.warnSoft}/></div>
  {/* Persona selector */}
  <div style={{overflowX:"auto",display:"flex",gap:8,padding:"4px 0",WebkitOverflowScrolling:"touch"}}>{Object.entries(personaLabels).map(([k,v])=><button key={k} onClick={()=>setPersona(k)} style={{flexShrink:0,padding:"7px 14px",borderRadius:999,border:persona===k?"none":`1.5px solid ${C.border}`,background:persona===k?C.accent:"transparent",color:persona===k?"#fff":C.textMuted,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}>{v}</button>)}</div>
  <div style={{display:"flex",gap:3}}>{cards.map((_,i)=><div key={i} style={{flex:1,height:4,borderRadius:2,background:i<=step?C.accent:C.border,transition:"background 0.3s"}}/>)}</div>
  {cards.slice(0,step+1).map((c,i)=>{
    const ExplainerComp=c.visual?VisualExplainerMap[c.visual.component]:null;
    const displayContent=getCardContent(c,i);
    return <div key={i}><Card style={{borderLeft:`4px solid ${c.color}`,borderRadius:"4px 20px 20px 4px",padding:18}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{width:28,height:28,borderRadius:8,background:c.bg,display:"flex",alignItems:"center",justifyContent:"center"}}><I n={c.icon} s={16} c={c.color}/></span>
          <span style={{fontSize:11,fontWeight:700,color:c.color,textTransform:"uppercase",letterSpacing:0.5}}>{c.label}</span>
          {c.visual&&<WatchLearnBadge/>}
        </div>
        {displayContent&&!c.visual&&<button onClick={()=>readAloud(displayContent)} style={{width:32,height:32,borderRadius:8,background:reading?`${C.accent}15`:C.borderSoft,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="volume" s={16} c={reading?C.accent:C.textMuted}/></button>}
      </div>
      {persona!=="textbook"&&i<2&&<span style={{display:"inline-flex",alignItems:"center",gap:4,padding:"3px 10px",borderRadius:999,fontSize:10,fontWeight:600,background:`${C.accent}12`,color:C.accent,marginBottom:8}}>Explaining {personaLabels[persona].toLowerCase()}</span>}
      {displayContent&&<p style={{fontSize:14,color:C.text,margin:"0 0 12px",lineHeight:1.65}}>{displayContent}</p>}
      {ExplainerComp&&<ExplainerComp {...(c.visual.props||{})}/>}
      {c.hasInput&&i===step&&<div style={{marginTop:12}}><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Type your answer..." style={{width:"100%",minHeight:56,padding:"10px 14px",borderRadius:12,border:`1.5px solid ${C.border}`,fontFamily:"inherit",fontSize:13,resize:"vertical",boxSizing:"border-box",outline:"none"}}/><Btn variant="accent" onClick={adv} style={{marginTop:8,height:40,fontSize:13}}>Submit</Btn></div>}
    </Card>
    {/* Real world connect */}
    {realWorldData[topic]&&<div style={{marginTop:6}}>
      <button onClick={()=>setRealWorldOpen(o=>({...o,[i]:!o[i]}))} style={{display:"flex",alignItems:"center",gap:8,width:"100%",padding:"10px 14px",borderRadius:12,border:`1px solid ${C.border}`,background:C.borderSoft,cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,color:C.textMuted}}>
        <I n="spark" s={14} c={C.warn}/><span style={{flex:1,textAlign:"left"}}>Why does this matter?</span><I n="chevD" s={14} c={C.textMuted}/>
      </button>
      {realWorldOpen[i]&&<div style={{marginTop:6,padding:14,borderRadius:14,background:"linear-gradient(135deg, #FEF3C7, #FFEDD5)",border:`1px solid ${C.warn}30`}}>
        <p style={{fontSize:13,color:C.warnDark,margin:0,lineHeight:1.6}}>{realWorldData[topic]}</p>
      </div>}
    </div>}
    </div>;
  })}
  {step<cards.length-1&&!cards[step].hasInput&&<Btn full onClick={adv} variant="accent">Continue</Btn>}
</div>;};

/* ============ QUIZ WITH VARIED FORMATS + EMPATHETIC FEEDBACK ============ */
const QuizScreen=({navigate,addXP})=>{const[qi,setQi]=useState(0);const[sel,setSel]=useState(null);const[checked,setChecked]=useState(false);const[showConf,setShowConf]=useState(false);const[showXP,setShowXP]=useState(false);const[score,setScore]=useState(0);const[wrongStreak,setWrongStreak]=useState(0);const[tfAns,setTfAns]=useState(null);const[dragOrder,setDragOrder]=useState(null);
const Qs=[
  {type:"mcq",q:"Why does sweat cool our body?",opts:["Absorbs heat & evaporates","Freezes on skin","Reflects sunlight","Increases temperature"],correct:0},
  {type:"tf",q:"Conduction can happen through a vacuum.",answer:false},
  {type:"order",q:"Put the steps of evaporative cooling in order:",items:["Liquid absorbs heat","Fast molecules gain energy","Fast molecules escape surface","Remaining liquid cools down"],correctOrder:[0,1,2,3]},
  {type:"mcq",q:"Which is a conductor of heat?",opts:["Iron rod","Wooden spoon","Plastic cup","Rubber band"],correct:0},
];
const total=Qs.length;const cur=Qs[qi];const done=qi>=total;
const empathyMsg=wrongStreak>=2?"This is a tough topic — 60% of students need multiple tries here. You're learning!":wrongStreak>=1?"Almost! Many students find this tricky at first.":null;
const chk=()=>{
  let correct=false;
  if(cur.type==="mcq"){if(sel===null)return;correct=sel===cur.correct;}
  if(cur.type==="tf"){if(tfAns===null)return;correct=tfAns===cur.answer;}
  if(cur.type==="order"){correct=JSON.stringify(dragOrder)===JSON.stringify(cur.correctOrder);}
  setChecked(true);
  if(correct){setScore(s=>s+1);setWrongStreak(0);setShowConf(true);setShowXP(true);addXP(10);setTimeout(()=>{setShowConf(false);setShowXP(false);},1500);}
  else{setWrongStreak(w=>w+1);}
};
const next=()=>{setChecked(false);setSel(null);setTfAns(null);setDragOrder(null);setQi(q=>q+1);};

if(done){const pct=Math.round((score/total)*100);return <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:20,paddingTop:40,textAlign:"center",position:"relative"}}><Confetti show={true}/><Ring value={pct} size={120} stroke={8} color={pct>=70?C.success:C.warn}><span style={{fontSize:28,fontWeight:800,color:C.text}}>{pct}%</span></Ring>
  {/* EMPATHETIC results for low scores */}
  <h2 style={{fontSize:22,fontWeight:800,color:C.text,margin:"0 0 6px"}}>{pct>=70?"Great job!":pct>=40?`You got ${score} right — that's progress!`:`${score} correct — and that's ${score} more than before you started!`}</h2>
  <p style={{fontSize:14,color:C.textMuted,margin:0}}>{score}/{total} correct</p>
  {pct<50&&<Card style={{background:C.accentSoft,border:`1px solid ${C.accent}30`,padding:14,width:"100%",textAlign:"left"}}><p style={{fontSize:13,color:C.accent,margin:0,lineHeight:1.5}}>💡 Most students need 2-3 attempts to master this topic. Each try strengthens your understanding.</p></Card>}
  <Pill icon="star" text={`+${score*10} XP`} color={C.xp} bg={C.warnSoft} style={{fontSize:16,padding:"8px 20px"}}/>
  <div style={{display:"flex",gap:10,width:"100%",padding:"0 20px"}}><Btn variant="ghost" onClick={()=>navigate("home")} style={{flex:1}}>Home</Btn><Btn onClick={()=>{setQi(0);setScore(0);setSel(null);setChecked(false);setWrongStreak(0);}} style={{flex:1}}>Try Again</Btn></div></div>;}

return <div style={{display:"flex",flexDirection:"column",gap:16,position:"relative"}}>
  <Confetti show={showConf}/><XPToast show={showXP}/>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><div style={{flex:1}}><Bar value={qi+1} max={total} color={C.accent} h={5}/></div><span style={{fontSize:13,fontWeight:700,color:C.text}}>{qi+1}/{total}</span><Pill icon="star" text={`${score*10}`} color={C.xp} bg={C.warnSoft}/></div>

  {/* Question type badge */}
  <div style={{display:"flex",gap:6}}><Pill text="Science • Heat" color={C.accent} bg={C.accentSoft}/><Pill text={cur.type==="tf"?"True / False":cur.type==="order"?"Put in order":"Multiple choice"} color={C.textMuted} bg={C.borderSoft}/></div>

  <h2 style={{fontSize:18,fontWeight:700,color:C.text,margin:0,lineHeight:1.5}}>{cur.q}</h2>

  {/* MCQ FORMAT */}
  {cur.type==="mcq"&&<div style={{display:"flex",flexDirection:"column",gap:10}}>
    {cur.opts.map((o,i)=>{const isSel=sel===i,isCor=i===cur.correct;let bd=C.border,bg="transparent",tc=C.text,fw=400;if(checked&&isCor){bd=C.success;bg=C.successSoft;tc=C.successDark;fw=600}else if(checked&&isSel&&!isCor){bd=C.error;bg=C.errorSoft;tc=C.errorDark;fw=600}else if(!checked&&isSel){bd=C.primary;bg=C.primarySoft;fw=600}return <button key={i} onClick={()=>!checked&&setSel(i)} style={{display:"flex",alignItems:"center",gap:14,width:"100%",padding:"16px 18px",borderRadius:14,border:`2px solid ${bd}`,background:bg,cursor:checked?"default":"pointer",fontFamily:"inherit",fontSize:14,color:tc,fontWeight:fw,textAlign:"left"}}><div style={{width:28,height:28,borderRadius:"50%",border:`2px solid ${bd}`,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,background:checked&&isCor?C.success:checked&&isSel?C.error:isSel?C.primary:"transparent",color:(isSel||(checked&&isCor))?"#fff":C.textMuted}}>{checked&&isCor?<I n="check" s={14} c="#fff" w={3}/>:String.fromCharCode(65+i)}</div>{o}</button>;})}
  </div>}

  {/* TRUE/FALSE FORMAT */}
  {cur.type==="tf"&&<div style={{display:"flex",gap:12}}>
    {[true,false].map(v=>{const isSel=tfAns===v;const isCor=v===cur.answer;let bd=C.border,bg="transparent",tc=C.text;if(checked&&isCor){bd=C.success;bg=C.successSoft;tc=C.successDark}else if(checked&&isSel&&!isCor){bd=C.error;bg=C.errorSoft;tc=C.errorDark}else if(!checked&&isSel){bd=C.primary;bg=C.primarySoft}
    return <button key={String(v)} onClick={()=>!checked&&setTfAns(v)} style={{flex:1,height:80,borderRadius:16,border:`2px solid ${bd}`,background:bg,cursor:checked?"default":"pointer",fontFamily:"inherit",fontSize:18,fontWeight:700,color:tc,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4}}>
      <I n={v?"check":"x"} s={24} c={checked&&isCor?C.success:checked&&isSel&&!isCor?C.error:isSel?C.primary:C.textMuted} w={2.5}/>
      {v?"True":"False"}
    </button>;})}
  </div>}

  {/* ORDER / SORTING FORMAT */}
  {cur.type==="order"&&<div style={{display:"flex",flexDirection:"column",gap:8}}>
    {(dragOrder||cur.items.map((_,i)=>i)).map((idx,pos)=>(
      <div key={idx} style={{display:"flex",alignItems:"center",gap:10,padding:"14px 16px",borderRadius:14,border:`2px solid ${checked?(JSON.stringify(dragOrder)===JSON.stringify(cur.correctOrder)?C.success:C.error):C.border}`,background:C.card}}>
        <span style={{width:28,height:28,borderRadius:"50%",background:C.borderSoft,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:C.textMuted}}>{pos+1}</span>
        <span style={{flex:1,fontSize:14,color:C.text}}>{cur.items[idx]}</span>
        {!checked&&<div style={{display:"flex",flexDirection:"column",gap:2}}>
          {pos>0&&<button onClick={()=>{const o=[...(dragOrder||cur.items.map((_,i)=>i))];[o[pos],o[pos-1]]=[o[pos-1],o[pos]];setDragOrder(o);}} style={{background:"transparent",border:"none",cursor:"pointer",padding:0,fontSize:10,color:C.textMuted}}>▲</button>}
          {pos<cur.items.length-1&&<button onClick={()=>{const o=[...(dragOrder||cur.items.map((_,i)=>i))];[o[pos],o[pos+1]]=[o[pos+1],o[pos]];setDragOrder(o);}} style={{background:"transparent",border:"none",cursor:"pointer",padding:0,fontSize:10,color:C.textMuted}}>▼</button>}
        </div>}
      </div>
    ))}
  </div>}

  {/* EMPATHETIC wrong-streak feedback */}
  {checked&&empathyMsg&&!((cur.type==="mcq"&&sel===cur.correct)||(cur.type==="tf"&&tfAns===cur.answer))&&(
    <Card style={{background:C.accentSoft,border:`1px solid ${C.accent}30`,padding:14,display:"flex",alignItems:"flex-start",gap:10}}>
      <I n="brain" s={18} c={C.accent}/><p style={{fontSize:13,color:C.accent,margin:0,lineHeight:1.5}}>{empathyMsg}</p>
    </Card>
  )}

  {checked&&<Card style={{background:C.primarySoft,border:`1px solid ${C.primary}30`,padding:14}}>
    <p style={{fontSize:13,color:C.textMuted,margin:0,lineHeight:1.5}}>Sweat absorbs heat and evaporates, carrying heat away from your body.</p>
  </Card>}

  {!checked?<Btn full onClick={chk} variant="primary">Check Answer</Btn>:<Btn full onClick={next} variant="accent">{qi<total-1?"Next Question":"See Results"}</Btn>}
</div>;};

/* ============ JOURNEY WITH GROWTH VIEW ============ */
const JourneyScreen=({navigate})=>{const[exp,setExp]=useState("heat");const[viewMode,setViewMode]=useState("growth");
const chs=[{id:"heat",name:"Heat",subj:"Science",m:80,start:45,topics:[{name:"Temperature",l:"mastered",s:92,start:60},{name:"Conduction",l:"practicing",s:65,start:30},{name:"Convection",l:"weak",s:32,start:8}]},{id:"light",name:"Light",subj:"Science",m:40,start:15,topics:[{name:"Reflection",l:"practicing",s:55,start:20},{name:"Refraction",l:"weak",s:28,start:5}]},{id:"fractions",name:"Fractions",subj:"Math",m:55,start:25,topics:[{name:"Like Fractions",l:"mastered",s:88,start:50},{name:"Unlike Fractions",l:"practicing",s:62,start:22},{name:"Mixed Numbers",l:"weak",s:35,start:10}]}];
return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Your Journey</h1>
  {/* GROWTH vs CURRENT toggle */}
  <div style={{display:"flex",background:C.borderSoft,borderRadius:12,padding:3}}>
    {[{id:"growth",label:"My Growth"},{id:"current",label:"Current Level"}].map(v=>(
      <button key={v.id} onClick={()=>setViewMode(v.id)} style={{flex:1,height:36,borderRadius:10,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,background:viewMode===v.id?C.card:"transparent",color:viewMode===v.id?C.primary:C.textMuted,boxShadow:viewMode===v.id?"0 1px 3px rgba(0,0,0,0.08)":"none"}}>{v.label}</button>
    ))}
  </div>

  <Card style={{display:"flex",alignItems:"center",gap:20,background:"linear-gradient(135deg, #059669, #10B981)",border:"none",color:"#fff"}}>
    <Ring value={viewMode==="growth"?62-30:62} size={72} stroke={5} color="#fff"><span style={{fontSize:18,fontWeight:800,color:"#fff"}}>{viewMode==="growth"?"+32%":"62%"}</span></Ring>
    <div><p style={{fontSize:15,fontWeight:700,margin:"0 0 4px"}}>{viewMode==="growth"?"Total Growth":"Overall Mastery"}</p><Pill text={viewMode==="growth"?"Since you started":"This week +4%"} bg="rgba(255,255,255,0.2)" color="#fff"/></div>
  </Card>

  {chs.map(ch=>{const mc=ch.m>=70?C.success:ch.m>=40?C.warn:C.error;const mb=ch.m>=70?C.successSoft:ch.m>=40?C.warnSoft:C.errorSoft;const delta=ch.m-ch.start;return(
    <Card key={ch.id} style={{padding:0,overflow:"hidden"}}>
      <button onClick={()=>setExp(exp===ch.id?null:ch.id)} style={{display:"flex",alignItems:"center",gap:14,width:"100%",padding:"14px 18px",background:"transparent",border:"none",cursor:"pointer",fontFamily:"inherit"}}>
        <div style={{width:40,height:40,borderRadius:12,background:mb,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,color:mc}}>{viewMode==="growth"?`+${delta}%`:`${ch.m}%`}</div>
        <div style={{flex:1,textAlign:"left"}}><p style={{fontSize:14,fontWeight:700,color:C.text,margin:0}}>{ch.name}</p>
          {viewMode==="growth"&&<p style={{fontSize:11,color:C.success,margin:"2px 0 0"}}>{ch.start}% → {ch.m}%</p>}
          {viewMode==="current"&&<p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{ch.subj}</p>}
        </div><I n="chevD" s={18} c={C.textMuted}/>
      </button>
      {exp===ch.id&&<div style={{padding:"0 18px 14px"}}>{ch.topics.map((t,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <Dot level={t.l}/><span style={{fontSize:13,color:C.text,flex:1}}>{t.name}</span>
        {viewMode==="growth"?<span style={{fontSize:11,color:C.success,marginRight:6}}>+{t.s-t.start}%</span>:<span style={{fontSize:11,color:C.textMuted,marginRight:6}}>{t.s}%</span>}
        {t.s>=60&&<Pill text="Teach it" color={C.accent} bg={C.accentSoft} style={{cursor:"pointer",fontSize:11,padding:"3px 10px"}} onClick={()=>navigate("teachback")}/>}
        <Btn variant="small" onClick={()=>navigate("quiz")}>Practice</Btn>
      </div>)}</div>}
    </Card>
  );})}
</div>;};

/* ============ CHALLENGE MODE + LEADERBOARD ============ */
const ChallengeScreen=({navigate})=>{
  const leaders=[{name:"Riya S.",xp:520,you:false},{name:"You (Aarav)",xp:480,you:true},{name:"Arjun K.",xp:340,you:false},{name:"Priya M.",xp:280,you:false},{name:"Neha R.",xp:210,you:false}];
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Challenge</h1></div>

    {/* Weekly challenge */}
    <Card style={{background:"linear-gradient(135deg, #7C3AED, #9333EA)",border:"none",padding:24,color:"#fff"}}>
      <Pill text="This week's challenge" bg="rgba(255,255,255,0.2)" color="#fff" icon="zap"/>
      <h2 style={{fontSize:18,fontWeight:800,margin:"12px 0 4px"}}>5 Hardest Questions — Heat</h2>
      <p style={{fontSize:13,opacity:0.7,margin:"0 0 16px"}}>Olympiad-level • No hints • Bonus 50 XP</p>
      <Btn onClick={()=>navigate("quiz")} style={{width:"100%",background:"#fff",color:C.accent,height:48,fontWeight:800,borderRadius:14}}>Accept Challenge</Btn>
    </Card>

    {/* Quiz duel */}
    <Card onClick={()=>{}} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:14,padding:16}}>
      <div style={{width:44,height:44,borderRadius:14,background:`${C.primary}12`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="swords" s={22} c={C.primary}/></div>
      <div style={{flex:1}}><p style={{fontSize:14,fontWeight:700,color:C.text,margin:0}}>Challenge a friend</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>Same 5 questions — who scores higher?</p></div>
      <I n="arrowR" s={18} c={C.textFaint}/>
    </Card>

    {/* Leaderboard */}
    <div>
      <p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Class leaderboard — this week</p>
      {leaders.map((l,i)=>(
        <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",borderRadius:14,background:l.you?C.primarySoft:"transparent",border:l.you?`2px solid ${C.primary}`:"none",marginBottom:6}}>
          <span style={{width:24,fontSize:14,fontWeight:800,color:i===0?"#F59E0B":i===1?"#94A3B8":i===2?"#CD7F32":C.textMuted}}>#{i+1}</span>
          <div style={{width:32,height:32,borderRadius:"50%",background:l.you?C.primary:C.borderSoft,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:l.you?"#fff":C.textMuted}}>{l.name[0]}</div>
          <span style={{flex:1,fontSize:13,fontWeight:l.you?700:400,color:C.text}}>{l.name}</span>
          <Pill icon="star" text={`${l.xp}`} color={C.xp} bg={C.warnSoft}/>
        </div>
      ))}
    </div>
  </div>;
};

/* ============ TEACH IT BACK ============ */
const TeachBackScreen=({navigate,addXP})=>{const[tbInput,setTbInput]=useState("");const[tbResult,setTbResult]=useState(null);
const evaluate=(text)=>{const t=text.toLowerCase();if(t.includes("denominator")||t.includes("common"))return "green";if(t.includes("divide")||t.includes("top by bottom"))return "red";return "orange";};
const submit=()=>{if(!tbInput.trim())return;const r=evaluate(tbInput);setTbResult(r);addXP(20);};
const resultMsg={green:{text:"Excellent explanation! You clearly understand the concept.",bg:C.successSoft,border:C.success,color:C.successDark,icon:"check"},red:{text:"Hmm, there might be a misconception. Dividing top by bottom isn't quite right for adding fractions.",bg:C.errorSoft,border:C.error,color:C.errorDark,icon:"alert"},orange:{text:"Good attempt! Try mentioning common denominators to make your explanation clearer.",bg:C.warnSoft,border:C.warn,color:C.warnDark,icon:"brain"}};
return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("journey")}/><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Teach it back</h1></div>
  <Card style={{background:C.accentSoft,border:`1px solid ${C.accent}30`,padding:20,textAlign:"center"}}>
    <svg width="48" height="48" viewBox="0 0 48 48" style={{margin:"0 auto 12px",display:"block"}}><circle cx="24" cy="24" r="22" fill="#E9D5FF" stroke="#7C3AED" strokeWidth="2"/><circle cx="17" cy="20" r="2" fill="#7C3AED"/><circle cx="31" cy="20" r="2" fill="#7C3AED"/><path d="M16 32 Q24 26 32 32" stroke="#7C3AED" strokeWidth="2" fill="none" strokeLinecap="round"/><text x="36" y="14" fontSize="14">?</text></svg>
    <p style={{fontSize:15,fontWeight:700,color:C.accent,margin:"0 0 4px"}}>Pretend I'm your friend who doesn't understand Fractions.</p>
    <p style={{fontSize:13,color:C.textMuted,margin:0}}>Can you explain it to me?</p>
  </Card>
  {!tbResult&&<>
    <textarea value={tbInput} onChange={e=>setTbInput(e.target.value)} placeholder="Explain fractions in your own words..." style={{width:"100%",minHeight:120,padding:"14px 16px",borderRadius:14,border:`1.5px solid ${C.border}`,fontFamily:"inherit",fontSize:14,resize:"vertical",boxSizing:"border-box",outline:"none",lineHeight:1.6,color:C.text}}/>
    <Btn full onClick={submit} variant="accent" icon="send">Submit explanation</Btn>
  </>}
  {tbResult&&<>
    <Card style={{background:resultMsg[tbResult].bg,border:`1px solid ${resultMsg[tbResult].border}30`,padding:16,display:"flex",alignItems:"flex-start",gap:12}}>
      <I n={resultMsg[tbResult].icon} s={20} c={resultMsg[tbResult].color}/><p style={{fontSize:14,color:resultMsg[tbResult].color,margin:0,lineHeight:1.6}}>{resultMsg[tbResult].text}</p>
    </Card>
    <Pill icon="star" text="+20 XP for teaching!" color={C.xp} bg={C.warnSoft} style={{alignSelf:"center",fontSize:14,padding:"8px 18px"}}/>
    <div style={{display:"flex",gap:10}}><Btn variant="ghost" onClick={()=>{setTbInput("");setTbResult(null);}} style={{flex:1}}>Try again</Btn><Btn onClick={()=>navigate("journey")} style={{flex:1}}>Back to Journey</Btn></div>
  </>}
</div>;};

/* ============ EXAM MODE WITH PRACTICE OPTION ============ */
const ExamScreen=({navigate})=>{const[mode,setMode]=useState(null);
const tests=[{name:"Heat — Chapter Test",sub:"Science • 15 Qs",time:"15 min",icon:"book",color:C.primary},{name:"SA1 Mock — Science",sub:"All chapters • 40 Qs",time:"45 min",icon:"exam",color:C.error},{name:"Speed Drill",sub:"Mental math • 20 Qs",time:"5 min",icon:"zap",color:C.warn}];
return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Exam Mode</h1>
  {/* MODE TOGGLE — Practice vs Strict */}
  <div style={{display:"flex",background:C.borderSoft,borderRadius:12,padding:3}}>
    {[{id:"practice",label:"Practice Mode",desc:"No timer, hints OK"},{id:"strict",label:"Exam Mode",desc:"Timed, no hints"}].map(v=>(
      <button key={v.id} onClick={()=>setMode(v.id)} style={{flex:1,padding:"10px 8px",borderRadius:10,border:"none",cursor:"pointer",fontFamily:"inherit",background:mode===v.id?C.card:"transparent",boxShadow:mode===v.id?"0 1px 3px rgba(0,0,0,0.08)":"none",textAlign:"center"}}>
        <p style={{fontSize:13,fontWeight:600,color:mode===v.id?v.id==="strict"?C.error:C.success:C.textMuted,margin:0}}>{v.label}</p>
        <p style={{fontSize:10,color:C.textFaint,margin:"2px 0 0"}}>{v.desc}</p>
      </button>
    ))}
  </div>
  {mode==="practice"&&<Card style={{background:C.successSoft,border:`1px solid ${C.success}30`,padding:14,display:"flex",alignItems:"center",gap:10}}>
    <I n="shield" s={20} c={C.successDark}/><div><p style={{fontSize:13,fontWeight:600,color:C.successDark,margin:0}}>Safe practice mode</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>Take your time, learn from each question, no pressure</p></div>
  </Card>}
  {mode==="strict"&&<Card style={{background:C.errorSoft,border:`1px solid ${C.error}30`,padding:14,display:"flex",alignItems:"center",gap:10}}>
    <I n="clock" s={20} c={C.errorDark}/><div><p style={{fontSize:13,fontWeight:600,color:C.errorDark,margin:0}}>Strict exam conditions</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>Timer active, auto-submits, no hints</p></div>
  </Card>}
  {mode&&tests.map((t,i)=><Card key={i} onClick={()=>navigate("quiz")} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:14,padding:16}}>
    <div style={{width:44,height:44,borderRadius:14,background:`${t.color}12`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n={t.icon} s={22} c={t.color}/></div>
    <div style={{flex:1}}><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{t.name}</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{t.sub}</p></div>
    <span style={{fontSize:13,fontWeight:700,color:t.color}}>{mode==="practice"?"No limit":t.time}</span>
  </Card>)}
  {!mode&&<p style={{fontSize:13,color:C.textMuted,textAlign:"center",margin:"20px 0"}}>Select a mode above to see available tests</p>}
</div>;};

/* ============ FOUNDATION REPAIR ============ */
const FoundationScreen=({navigate})=>{
  const plan=[{topic:"Basic Fractions",grade:"Class 5",status:"done",pct:100},{topic:"Decimals",grade:"Class 5",status:"done",pct:100},{topic:"Fraction Operations",grade:"Class 6",status:"current",pct:60},{topic:"Ratios",grade:"Class 6",status:"locked",pct:0},{topic:"Percentages",grade:"Class 7",status:"locked",pct:0}];
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>My Foundation</h1></div>
    <Card style={{background:C.primarySoft,border:`1px solid ${C.primary}30`,padding:16}}>
      <p style={{fontSize:13,color:C.primary,margin:0,fontWeight:600}}>Your catch-up plan</p>
      <p style={{fontSize:12,color:C.textMuted,margin:"4px 0 0",lineHeight:1.5}}>We tested your basics and built a path starting from where you actually are. Complete each step to unlock the next.</p>
    </Card>
    <div style={{display:"flex",alignItems:"center",gap:8,padding:"0 8px"}}><Bar value={2.6} max={5} color={C.success} h={6}/><span style={{fontSize:12,fontWeight:700,color:C.success,whiteSpace:"nowrap"}}>2 of 5</span></div>
    {plan.map((p,i)=>(
      <Card key={i} style={{padding:16,opacity:p.status==="locked"?0.5:1,display:"flex",alignItems:"center",gap:14,...(p.status==="current"?{borderLeft:`4px solid ${C.primary}`,borderRadius:"4px 20px 20px 4px"}:{})}}>
        <div style={{width:40,height:40,borderRadius:12,background:p.status==="done"?C.successSoft:p.status==="current"?C.primarySoft:C.borderSoft,display:"flex",alignItems:"center",justifyContent:"center"}}>
          {p.status==="done"?<I n="check" s={20} c={C.success} w={2.5}/>:p.status==="current"?<Ring value={p.pct} size={32} stroke={3} color={C.primary}><span style={{fontSize:9,fontWeight:700,color:C.primary}}>{p.pct}%</span></Ring>:<I n="lock" s={18} c={C.textFaint}/>}
        </div>
        <div style={{flex:1}}>
          <p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{p.topic}</p>
          <p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>{p.grade} foundation</p>
        </div>
        {p.status==="current"&&<Btn variant="small" onClick={()=>navigate("quiz")}>Continue</Btn>}
      </Card>
    ))}
  </div>;
};

/* ============ MISTAKES ============ */
const MistakeScreen=({navigate})=>{const mistakes=[{q:"Heat always flows from:",yourAns:"Cold to hot",correct:"Hot to cold",topic:"Heat Transfer",subject:"Science",date:"2d ago",misconception:"Confusing heat flow direction"},{q:"Simplify: 3/4 ÷ 1/2",yourAns:"3/8",correct:"3/2",topic:"Fractions",subject:"Math",date:"3d ago",misconception:"Dividing instead of multiplying by reciprocal"},{q:"Convection occurs in:",yourAns:"Solids",correct:"Liquids & gases",topic:"Convection",subject:"Science",date:"5d ago",misconception:"Mixing up conduction and convection"}];
return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>My Mistakes</h1></div>
  <p style={{fontSize:13,color:C.textMuted,margin:0}}>Review errors before exams — your secret weapon</p>
  {mistakes.map((m,i)=><Card key={i} style={{padding:16}}>
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><Pill text={m.topic} color={C.accent} bg={C.accentSoft}/><span style={{fontSize:11,color:C.textFaint}}>{m.date}</span></div>
    <p style={{fontSize:14,fontWeight:600,color:C.text,margin:"0 0 10px",lineHeight:1.5}}>{m.q}</p>
    <div style={{display:"flex",flexDirection:"column",gap:6}}>
      <div style={{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",borderRadius:10,background:C.errorSoft}}><I n="x" s={14} c={C.error} w={2.5}/><span style={{fontSize:13,color:C.errorDark}}>You: {m.yourAns}</span></div>
      <div style={{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",borderRadius:10,background:C.successSoft}}><I n="check" s={14} c={C.success} w={2.5}/><span style={{fontSize:13,color:C.successDark}}>Correct: {m.correct}</span></div>
    </div>
    <div style={{marginTop:10,padding:"8px 12px",borderRadius:10,background:C.warnSoft,display:"flex",alignItems:"flex-start",gap:8}}><I n="brain" s={16} c={C.warnDark}/><span style={{fontSize:12,color:C.warnDark}}>{m.misconception}</span></div>
    <Btn variant="small" onClick={()=>navigate("tutor")} style={{marginTop:10}} icon="brain">Practice this</Btn>
  </Card>)}
</div>;};

/* ============ PROFILE + BADGES ============ */
const ProfileScreen=({navigate,xp,streak})=>{
  const badges=[{name:"First Mission",icon:"star",earned:true,color:C.xp},{name:"3-Day Streak",icon:"fire",earned:true,color:C.streak},{name:"Quiz Master",icon:"trophy",earned:true,color:C.accent},{name:"Science Explorer",icon:"spark",earned:true,color:C.primary},{name:"Speed Demon",icon:"zap",earned:false,color:C.warn},{name:"7-Day Streak",icon:"fire",earned:false,color:C.streak},{name:"Math Warrior",icon:"shield",earned:false,color:C.error},{name:"Perfect Score",icon:"target",earned:false,color:C.success}];
  const streakDays=[1,1,1,0,0,0,0,1,1,1,0,1,0,0];
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <Card style={{textAlign:"center",padding:24,background:"linear-gradient(145deg, #1E40AF, #7C3AED)",border:"none",color:"#fff"}}>
      <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",fontSize:28,fontWeight:800}}>A</div>
      <h2 style={{fontSize:20,fontWeight:800,margin:"0 0 4px"}}>Aarav Sharma</h2>
      <p style={{fontSize:13,opacity:0.7,margin:0}}>Class 6 • CBSE</p>
      <div style={{display:"flex",gap:8,justifyContent:"center",marginTop:12}}><Pill icon="star" text={`${xp} XP`} bg="rgba(255,255,255,0.2)" color="#fff"/><Pill icon="fire" text={`${streak}d`} bg="rgba(255,255,255,0.2)" color="#fff"/><Pill text="Lvl 12" bg="rgba(255,255,255,0.2)" color="#fff"/></div>
    </Card>
    <Card style={{padding:16}}><p style={{fontSize:13,fontWeight:600,color:C.text,margin:"0 0 10px"}}>Streak (14 days)</p><div style={{display:"flex",gap:4,justifyContent:"center"}}>{streakDays.map((d,i)=><div key={i} style={{width:20,height:20,borderRadius:4,background:d?C.success:C.borderSoft,display:"flex",alignItems:"center",justifyContent:"center"}}>{d===1&&<I n="check" s={12} c="#fff" w={2.5}/>}</div>)}</div></Card>
    <div><p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Your moments</p>
      <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:16}}>
        {[{text:"You solved a problem that 80% of Class 7 gets wrong",icon:"star",color:C.accent,bg:C.accentSoft,time:"2 days ago"},{text:"Your fractions mastery went from 32% to 62% in 1 week",icon:"zap",color:C.success,bg:C.successSoft,time:"3 days ago"},{text:"You taught the AI about convection and nailed it",icon:"brain",color:C.primary,bg:C.primarySoft,time:"5 days ago"},{text:"142 questions answered this month",icon:"trophy",color:C.streak,bg:`${C.streak}15`,time:"This month"}].map((m,i)=><Card key={i} style={{background:m.bg,border:`1px solid ${m.color}30`,padding:14,display:"flex",alignItems:"flex-start",gap:12}}>
          <div style={{width:32,height:32,borderRadius:10,background:`${m.color}20`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n={m.icon} s={16} c={m.color}/></div>
          <div style={{flex:1}}><p style={{fontSize:13,fontWeight:700,color:C.text,margin:0,lineHeight:1.4}}>{m.text}</p><p style={{fontSize:11,color:C.textMuted,margin:"4px 0 0"}}>{m.time}</p></div>
        </Card>)}
      </div>
    </div>
    <div><p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Badges ({badges.filter(b=>b.earned).length}/{badges.length})</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>{badges.map((b,i)=><Card key={i} style={{padding:14,textAlign:"center",opacity:b.earned?1:0.4}}>
        <div style={{width:44,height:44,borderRadius:14,background:b.earned?`${b.color}15`:C.borderSoft,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 8px"}}>{b.earned?<I n={b.icon} s={22} c={b.color}/>:<I n="lock" s={18} c={C.textFaint}/>}</div>
        <p style={{fontSize:12,fontWeight:700,color:C.text,margin:0}}>{b.name}</p>
      </Card>)}</div>
    </div>
    <Card style={{padding:0}}>{[{label:"Notifications",icon:"bell"},{label:"Offline packs",icon:"grid"},{label:"Settings",icon:"user"}].map((item,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"14px 18px",borderTop:i?`1px solid ${C.borderSoft}`:"none",cursor:"pointer"}}><I n={item.icon} s={20} c={C.textMuted}/><span style={{fontSize:14,color:C.text,flex:1}}>{item.label}</span><I n="arrowR" s={16} c={C.textFaint}/></div>)}</Card>
  </div>;
};

/* ============ CLASS STORIES FEED ============ */
const StoriesScreen=({navigate})=>{const[filter,setFilter]=useState("myclass");
const stories=[
  {type:"achievement",bg:C.successSoft,border:C.success,icon:"star",color:C.successDark,name:"Priya",text:"Priya just mastered Convection!",reactions:14},
  {type:"streak",bg:`${C.streak}15`,border:C.streak,icon:"fire",color:C.streak,name:"Karan",text:"Karan is on a 7-day streak!",reactions:8},
  {type:"milestone",bg:C.primarySoft,border:C.primary,icon:"trendUp",color:C.primary,name:"Class 6-B",text:"Class 6-B average crossed 60%!",extra:{before:48,after:62},reactions:23},
  {type:"announcement",bg:C.accentSoft,border:C.accent,icon:"book",color:C.accent,name:"Ms. Sharma",text:"Great work on Heat chapter! Starting Light chapter next week. Prepare by reviewing reflection basics.",reactions:11},
  {type:"challenge",bg:`${C.xp}15`,border:C.xp,icon:"trophy",color:C.xp,name:"Weekly",text:"Weekly Challenge top 3:",extra:{leaders:["Riya S. — 520 XP","Aarav S. — 480 XP","Arjun K. — 340 XP"]},reactions:19},
  {type:"helpful",bg:"#CCFBF120",border:"#14B8A6",icon:"brain",color:"#0D9488",name:"Aarav",text:"Aarav answered 5 ask-bar questions today!",reactions:6},
];
return <div style={{display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Class 6-B Feed</h1></div>
  <div style={{display:"flex",gap:8}}>
    {[{id:"myclass",label:"My class"},{id:"all",label:"All classes"}].map(f=><button key={f.id} onClick={()=>setFilter(f.id)} style={{padding:"7px 16px",borderRadius:999,border:filter===f.id?"none":`1.5px solid ${C.border}`,background:filter===f.id?C.primary:"transparent",color:filter===f.id?"#fff":C.textMuted,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>{f.label}</button>)}
  </div>
  {stories.map((s,i)=><Card key={i} style={{background:s.bg,border:`1px solid ${s.border}30`,padding:16}}>
    <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
      <div style={{width:36,height:36,borderRadius:10,background:`${s.border}20`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n={s.icon} s={18} c={s.color}/></div>
      <div style={{flex:1}}>
        <p style={{fontSize:11,fontWeight:600,color:s.color,margin:"0 0 4px",textTransform:"uppercase",letterSpacing:0.3}}>{s.name}</p>
        <p style={{fontSize:14,fontWeight:600,color:C.text,margin:0,lineHeight:1.5}}>{s.text}</p>
        {s.extra?.before!=null&&<div style={{marginTop:10,display:"flex",alignItems:"center",gap:10}}>
          <div style={{flex:1}}><p style={{fontSize:11,color:C.textMuted,margin:"0 0 4px"}}>Before</p><Bar value={s.extra.before} max={100} color={C.textMuted} h={6}/></div>
          <I n="arrowR" s={14} c={C.textMuted}/>
          <div style={{flex:1}}><p style={{fontSize:11,color:C.success,margin:"0 0 4px"}}>After</p><Bar value={s.extra.after} max={100} color={C.success} h={6}/></div>
        </div>}
        {s.extra?.leaders&&<div style={{marginTop:8}}>{s.extra.leaders.map((l,j)=><p key={j} style={{fontSize:12,color:C.text,margin:"2px 0",fontWeight:j===0?700:400}}>{j===0?"🥇":j===1?"🥈":"🥉"} {l}</p>)}</div>}
      </div>
    </div>
    <div style={{display:"flex",justifyContent:"flex-end",marginTop:10}}>
      <button style={{display:"flex",alignItems:"center",gap:4,padding:"5px 12px",borderRadius:999,border:`1px solid ${C.border}`,background:C.card,cursor:"pointer",fontFamily:"inherit",fontSize:12,color:C.textMuted}}>Nice! ({s.reactions})</button>
    </div>
  </Card>)}
</div>;};

const MiniFeed=({navigate})=>{
const miniStories=[{icon:"star",color:C.successDark,bg:C.successSoft,text:"Priya just mastered Convection!"},{icon:"fire",color:C.streak,bg:`${C.streak}15`,text:"Karan is on a 7-day streak!"}];
return <div style={{marginTop:4}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><p style={{fontSize:13,fontWeight:700,color:C.text,margin:0}}>Class Feed</p><button onClick={()=>navigate("stories")} style={{background:"transparent",border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,color:C.primary}}>See all →</button></div>
  {miniStories.map((s,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:14,background:s.bg,marginBottom:6}}>
    <I n={s.icon} s={16} c={s.color}/><span style={{fontSize:12,fontWeight:500,color:C.text}}>{s.text}</span>
  </div>)}
</div>;};

/* ============ REVISION / PHOTO / BOOSTER — compact ============ */
const RevisionScreen=({navigate})=>{const days=["M","T","W","T","F","S","S"],today=0,active=[0,1,3,6];return <div style={{display:"flex",flexDirection:"column",gap:16}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Revision</h1><Pill icon="check" text="Good" color={C.success} bg={C.successSoft}/></div><Card style={{padding:14}}><div style={{display:"flex",justifyContent:"space-between"}}>{days.map((d,i)=><div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5}}><span style={{fontSize:11,color:i===today?C.primary:C.textMuted,fontWeight:i===today?700:400}}>{d}</span><div style={{width:34,height:34,borderRadius:"50%",background:i===today?C.primary:active.includes(i)?C.primarySoft:"transparent",border:active.includes(i)?"none":`1.5px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:i===today?700:400,color:i===today?"#fff":C.textMuted}}>{10+i}</div></div>)}</div></Card><div><p style={{fontSize:11,fontWeight:700,color:C.error,margin:"0 0 8px",textTransform:"uppercase",letterSpacing:0.8}}>Overdue</p><Card style={{borderLeft:`4px solid ${C.error}`,borderRadius:"4px 20px 20px 4px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:16}}><div style={{display:"flex",alignItems:"center",gap:10}}><Dot level="weak"/><div><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>Fractions</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Math • 5 min</p></div></div><Btn variant="warn" onClick={()=>navigate("quiz")} style={{height:34,fontSize:12,padding:"0 14px"}}>Start</Btn></Card></div><div><p style={{fontSize:11,fontWeight:700,color:C.warn,margin:"0 0 8px",textTransform:"uppercase",letterSpacing:0.8}}>Due today</p>{[{t:"Heat",tm:"5 min"},{t:"Conduction",tm:"4 min"}].map((item,i)=><Card key={i} style={{borderLeft:`4px solid ${C.warn}`,borderRadius:"4px 20px 20px 4px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:16,marginBottom:8}}><div style={{display:"flex",alignItems:"center",gap:10}}><Dot level="practicing"/><div><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{item.t}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Science • {item.tm}</p></div></div><Btn variant="small" onClick={()=>navigate("quiz")}>Start</Btn></Card>)}</div></div>;};

const PhotoScreen=({navigate})=>{const[stage,setStage]=useState("camera");const[ext,setExt]=useState("If the ratio of boys to girls is 3:5 and there are 24 boys, how many girls?");
if(stage==="camera")return <div style={{display:"flex",flexDirection:"column",gap:16}}><div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><p style={{fontSize:15,fontWeight:700,color:C.text,margin:0}}>Photo Homework</p></div><div style={{background:"#1a1a2e",borderRadius:20,padding:20,minHeight:280,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><div style={{width:"85%",height:160,border:"2px dashed rgba(255,255,255,0.3)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:8}}><I n="camera" s={32} c="rgba(255,255,255,0.4)"/><p style={{color:"rgba(255,255,255,0.4)",fontSize:13,margin:0}}>Point at your question</p></div><div style={{display:"flex",gap:24,marginTop:24}}><button style={{width:40,height:40,borderRadius:10,background:"rgba(255,255,255,0.1)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="gallery" s={20} c="rgba(255,255,255,0.7)"/></button><button onClick={()=>setStage("confirm")} style={{width:64,height:64,borderRadius:"50%",background:"#fff",border:"4px solid rgba(255,255,255,0.3)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{width:48,height:48,borderRadius:"50%",background:C.primary}}/></button><button style={{width:40,height:40,borderRadius:10,background:"rgba(255,255,255,0.1)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="flash" s={20} c="rgba(255,255,255,0.7)"/></button></div></div></div>;
return <div style={{display:"flex",flexDirection:"column",gap:16}}><div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>setStage("camera")}/><p style={{fontSize:15,fontWeight:700,color:C.text,margin:0}}>Confirm Question</p></div><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}><p style={{fontSize:12,fontWeight:600,color:C.textMuted,margin:0}}>EXTRACTED</p><Pill text="Math" color={C.primary} bg={C.primarySoft} icon="spark"/></div><textarea value={ext} onChange={e=>setExt(e.target.value)} style={{width:"100%",minHeight:70,padding:"12px 14px",borderRadius:14,border:`1.5px solid ${C.border}`,fontFamily:"inherit",fontSize:14,resize:"vertical",boxSizing:"border-box",outline:"none",lineHeight:1.6,color:C.text}}/><Btn full onClick={()=>navigate("tutor")} variant="accent" icon="brain">Solve with Tutor</Btn></div>;};

const BoosterScreen=({navigate,addXP})=>{const[stage,setStage]=useState(0);return <div style={{display:"flex",flexDirection:"column",gap:16}}><div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><div style={{flex:1}}><p style={{fontSize:12,color:C.textMuted,margin:0}}>Math Booster</p><p style={{fontSize:15,fontWeight:700,color:C.text,margin:0}}>Unit Conversion</p></div><Pill icon="clock" text="3 min" color={C.warn} bg={C.warnSoft}/></div>
{stage===0&&<Card style={{padding:24}}><h2 style={{fontSize:17,fontWeight:700,color:C.text,margin:"0 0 16px"}}>Length Conversions</h2><div style={{background:C.primarySoft,borderRadius:14,padding:18,textAlign:"center",marginBottom:16}}><p style={{fontSize:22,fontWeight:800,color:C.primary,margin:"0 0 6px"}}>100 cm = 1 m</p></div><Btn full onClick={()=>{setStage(1);addXP(5)}}>Got it</Btn></Card>}
{stage===1&&<Card style={{padding:24}}><div style={{display:"flex",gap:8,alignItems:"center",justifyContent:"center"}}><span>250 cm =</span><input type="text" placeholder="?" style={{width:72,height:44,borderRadius:12,border:`2px solid ${C.border}`,textAlign:"center",fontSize:18,fontWeight:700,fontFamily:"inherit",outline:"none"}}/><span>m</span></div><Btn full onClick={()=>{setStage(2);addXP(5)}} variant="accent" style={{marginTop:16}}>Check</Btn></Card>}
{stage===2&&<Card style={{padding:24,textAlign:"center"}}><I n="target" s={40} c={C.success}/><h2 style={{fontSize:17,fontWeight:700,color:C.text,margin:"12px 0 8px"}}>Ready!</h2><Btn full onClick={()=>navigate("quiz")}>Start Quiz</Btn></Card>}
</div>;};

/* ============ NOTIFICATIONS ============ */
const NotifScreen=({navigate})=>{const notifs=[{title:"Streak about to break!",body:"Complete a mission to keep your 3-day streak.",time:"2h",icon:"fire",color:C.streak,action:"quiz"},{title:"New assignment from Ms. Sharma",body:"Fractions (10 questions)",time:"4h",icon:"book",color:C.accent,action:"quiz"},{title:"Weekly challenge is live",body:"5 hardest Heat questions — bonus 50 XP",time:"6h",icon:"swords",color:C.accent,action:"challenge"},{title:"Badge unlocked!",body:"Quiz Master — 25 quizzes completed!",time:"1d",icon:"trophy",color:C.xp,action:"profile"}];
return <div style={{display:"flex",flexDirection:"column",gap:16}}><div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("home")}/><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Notifications</h1></div>{notifs.map((n,i)=><Card key={i} onClick={()=>navigate(n.action)} style={{cursor:"pointer",padding:16,display:"flex",gap:14,alignItems:"flex-start",...(i===0?{background:`${n.color}08`,border:`1px solid ${n.color}30`}:{})}}><div style={{width:40,height:40,borderRadius:12,background:`${n.color}15`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n={n.icon} s={20} c={n.color}/></div><div style={{flex:1}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{n.title}</p><span style={{fontSize:11,color:C.textFaint,flexShrink:0,marginLeft:8}}>{n.time}</span></div><p style={{fontSize:12,color:C.textMuted,margin:"4px 0 0"}}>{n.body}</p></div></Card>)}</div>;};

/* ============ STUDY BUDDY ============ */
const BuddyPanel=({navigate,onClose,streak})=>{
const messages=[
  ...(streak>=3?[{text:`${streak} days in a row! You're on fire! Keep the streak going.`,action:"quiz",actionLabel:"Do a mission",color:C.streak}]:[{text:"Hey! You haven't started today's mission yet. Let's go!",action:"quiz",actionLabel:"Start mission",color:C.primary}]),
  {text:"I noticed Convection is still tricky. Want to practice?",action:"tutor",actionLabel:"Practice now",color:C.accent},
  {text:"Fun fact: you've answered 142 questions this month!",action:"profile",actionLabel:"See stats",color:C.success},
];
return <div style={{position:"absolute",bottom:80,left:12,right:12,maxHeight:"60%",background:C.card,borderRadius:20,boxShadow:"0 8px 40px rgba(0,0,0,0.15)",border:`1px solid ${C.border}`,zIndex:45,display:"flex",flexDirection:"column",overflow:"hidden",animation:"buddySlide 0.3s ease forwards"}}>
  <style>{`@keyframes buddySlide{0%{transform:translateY(20px);opacity:0}100%{transform:translateY(0);opacity:1}}`}</style>
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",borderBottom:`1px solid ${C.borderSoft}`}}>
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      {/* Spark avatar */}
      <div style={{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg, #7C3AED, #2563EB)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
        <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="8" r="6" fill="#fff" opacity="0.3"/><circle cx="7" cy="7" r="1.5" fill="#fff"/><circle cx="13" cy="7" r="1.5" fill="#fff"/><path d="M7 11 Q10 14 13 11" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>
      </div>
      <div><p style={{fontSize:14,fontWeight:700,color:C.text,margin:0}}>Spark</p><p style={{fontSize:11,color:C.textMuted,margin:0}}>Your study buddy</p></div>
    </div>
    <button onClick={onClose} style={{width:28,height:28,borderRadius:8,background:C.borderSoft,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="x" s={16} c={C.textMuted}/></button>
  </div>
  <div style={{flex:1,overflowY:"auto",padding:14,display:"flex",flexDirection:"column",gap:10}}>
    {messages.map((m,i)=><div key={i} style={{background:C.borderSoft,borderRadius:16,borderTopLeftRadius:4,padding:14}}>
      <p style={{fontSize:13,color:C.text,margin:"0 0 10px",lineHeight:1.5}}>{m.text}</p>
      <button onClick={()=>{navigate(m.action);onClose();}} style={{padding:"6px 14px",borderRadius:999,border:"none",background:`${m.color}15`,color:m.color,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>{m.actionLabel}</button>
    </div>)}
  </div>
</div>;};

/* ============ APP SHELL ============ */
export default function App(){
  const[onboarded,setOnboarded]=useState(false);const[screen,setScreen]=useState("home");const[xp,setXP]=useState(240);const[streak]=useState(3);const scrollRef=useRef(null);const[buddyOpen,setBuddyOpen]=useState(false);
  const navigateRef=useRef(null);
  const navigate=(s)=>{setOnboarded(true);setScreen(s);scrollRef.current?.scrollTo(0,0);};const addXP=(n)=>setXP(x=>x+n);
  navigateRef.current=navigate;
  useEffect(()=>{const h=(e)=>navigateRef.current?.(e.detail);window.addEventListener('sidebar-nav',h);return()=>window.removeEventListener('sidebar-nav',h);},[]);

  if(!onboarded)return <div style={{fontFamily:'"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',maxWidth:"100%",margin:"0 auto",background:C.bg,minHeight:"100vh",borderRadius:0,overflow:"hidden",boxShadow:"none",position:"relative"}}><OnboardingScreen onComplete={()=>setOnboarded(true)}/></div>;

  const navItems=[{id:"home",icon:"home",label:"Home"},{id:"journey",icon:"journey",label:"Journey"},{id:"exam",icon:"exam",label:"Exams"},{id:"stories",icon:"gallery",label:"Feed"}];
  const screens={home:<HomeScreen navigate={navigate} xp={xp} streak={streak}/>,quiz:<QuizScreen navigate={navigate} addXP={addXP}/>,tutor:<TutorScreen navigate={navigate} addXP={addXP}/>,journey:<JourneyScreen navigate={navigate}/>,revision:<RevisionScreen navigate={navigate}/>,booster:<BoosterScreen navigate={navigate} addXP={addXP}/>,photo:<PhotoScreen navigate={navigate}/>,exam:<ExamScreen navigate={navigate}/>,mistakes:<MistakeScreen navigate={navigate}/>,notifs:<NotifScreen navigate={navigate}/>,profile:<ProfileScreen navigate={navigate} xp={xp} streak={streak}/>,challenge:<ChallengeScreen navigate={navigate}/>,foundation:<FoundationScreen navigate={navigate}/>,teachback:<TeachBackScreen navigate={navigate} addXP={addXP}/>,stories:<StoriesScreen navigate={navigate}/>};
  const activeNav=["quiz","tutor","booster","photo","mistakes","notifs","profile","challenge","foundation"].includes(screen)?"home":["teachback"].includes(screen)?"journey":screen;
  const showBuddy=["home","journey","stories"].includes(screen);

  return <div style={{fontFamily:'"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',maxWidth:"100%",margin:"0 auto",background:C.bg,minHeight:"100vh",display:"flex",flexDirection:"column",borderRadius:0,overflow:"hidden",boxShadow:"none",position:"relative"}}>
    <style>{`@keyframes navG{0%,100%{opacity:0.6}50%{opacity:1}}`}</style>
    <div style={{display:"flex",justifyContent:"space-between",padding:"14px 24px 6px",fontSize:12,fontWeight:600,color:C.text}}><span>9:41</span><div style={{display:"flex",gap:4,alignItems:"center",fontSize:10,color:C.textMuted}}><svg width="16" height="10" viewBox="0 0 16 10"><rect x="0" y="6" width="3" height="4" rx="0.5" fill={C.textMuted}/><rect x="4" y="4" width="3" height="6" rx="0.5" fill={C.textMuted}/><rect x="8" y="2" width="3" height="8" rx="0.5" fill={C.textMuted}/><rect x="12" y="0" width="3" height="10" rx="0.5" fill={C.border}/></svg><svg width="22" height="10" viewBox="0 0 22 10"><rect x="0" y="1" width="18" height="8" rx="2" stroke={C.textMuted} strokeWidth="1" fill="none"/><rect x="1.5" y="2.5" width="12" height="5" rx="1" fill={C.success}/></svg></div></div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 20px 10px"}}>
      <div style={{width:34,height:34,borderRadius:10,background:"linear-gradient(135deg, #2563EB, #7C3AED)",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="spark" s={18} c="#fff" w={2}/></div>
      <span style={{fontSize:15,fontWeight:800,color:C.text,letterSpacing:-0.3}}>LearnAI</span>
      <div style={{display:"flex",gap:8,alignItems:"center"}}>
        <button onClick={()=>navigate("notifs")} style={{background:"transparent",border:"none",cursor:"pointer",padding:4,position:"relative",display:"flex"}}><I n="bell" s={22} c={C.textMuted}/><div style={{position:"absolute",top:2,right:2,width:8,height:8,borderRadius:"50%",background:C.error,border:"2px solid #fff"}}/></button>
        <button onClick={()=>navigate("profile")} style={{width:34,height:34,borderRadius:"50%",background:C.warnSoft,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,color:C.warnDark}}>A</button>
      </div>
    </div>
    <div ref={scrollRef} style={{flex:1,overflowY:"auto",padding:"4px 20px 110px"}}>{screens[screen]||screens.home}</div>
    {/* Study buddy */}
    {buddyOpen&&showBuddy&&<BuddyPanel navigate={navigate} onClose={()=>setBuddyOpen(false)} streak={streak}/>}
    {showBuddy&&!buddyOpen&&<button onClick={()=>setBuddyOpen(true)} style={{position:"absolute",bottom:90,right:20,width:48,height:48,borderRadius:"50%",background:"linear-gradient(135deg, #7C3AED, #2563EB)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(124,58,237,0.4)",zIndex:40}}>
      <I n="spark" s={22} c="#fff" w={2}/>
      <div style={{position:"absolute",top:0,right:0,width:10,height:10,borderRadius:"50%",background:C.error,border:"2px solid #fff"}}/>
    </button>}
    <div style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(255,255,255,0.97)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-around",padding:"8px 0 24px"}}>
      {navItems.map(item=>{const isActive=activeNav===item.id;return <button key={item.id} onClick={()=>navigate(item.id)} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:"4px 20px",background:"transparent",border:"none",cursor:"pointer",fontFamily:"inherit",color:isActive?C.primary:C.textFaint,fontSize:10,fontWeight:isActive?700:500,transition:"color 0.2s"}}><NavIcon name={item.icon} active={isActive} color={isActive?C.primary:C.textFaint}/><span>{item.label}</span></button>;})}
    </div>
  </div>;
}
