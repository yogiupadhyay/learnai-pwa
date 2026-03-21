// @ts-nocheck
"use client";
import { useState, useRef, useEffect } from "react";

const C={bg:"#F8FAFC",card:"#FFFFFF",text:"#0F172A",textMuted:"#64748B",textFaint:"#94A3B8",primary:"#1E40AF",primarySoft:"#EFF6FF",primaryDark:"#1E3A8A",teal:"#0D9488",tealSoft:"#F0FDFA",success:"#10B981",successSoft:"#D1FAE5",successDark:"#065F46",warn:"#F59E0B",warnSoft:"#FEF3C7",warnDark:"#78350F",error:"#EF4444",errorSoft:"#FEE2E2",errorDark:"#7F1D1D",border:"#E2E8F0",borderSoft:"#F1F5F9",accent:"#7C3AED",accentSoft:"#F3E8FF"};

const I=({n,s=24,c="currentColor",w=1.8})=>{const st={width:s,height:s,display:"block"},p={fill:"none",stroke:c,strokeWidth:w,strokeLinecap:"round",strokeLinejoin:"round"};const icons={
home:<svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="3" width="7" height="7" rx="1.5"/><rect {...p} x="14" y="3" width="7" height="7" rx="1.5"/><rect {...p} x="3" y="14" width="7" height="7" rx="1.5"/><rect {...p} x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
users:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle {...p} cx="9" cy="7" r="4"/><path {...p} d="M23 21v-2a4 4 0 0 0-3-3.87"/><path {...p} d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
book:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path {...p} d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
chart:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M18 20V10"/><path {...p} d="M12 20V4"/><path {...p} d="M6 20v-6"/></svg>,
settings:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="3"/><path {...p} d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
check:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M20 6L9 17l-5-5"/></svg>,
arrowR:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M5 12h14M12 5l7 7-7 7"/></svg>,
arrowL:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M19 12H5M12 5l-7 7 7 7"/></svg>,
trendUp:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M23 6l-9.5 9.5-5-5L1 18"/><path {...p} d="M17 6h6v6"/></svg>,
brain:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 2a5 5 0 0 0-4.8 3.6A4 4 0 0 0 4 9.5a4 4 0 0 0 .5 6A4.5 4.5 0 0 0 8 20h1"/><path {...p} d="M12 2a5 5 0 0 1 4.8 3.6A4 4 0 0 1 20 9.5a4 4 0 0 1-.5 6A4.5 4.5 0 0 1 16 20h-1"/><path {...p} d="M12 2v20"/></svg>,
upload:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path {...p} d="M17 8l-5-5-5 5M12 3v12"/></svg>,
shield:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
plus:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M12 5v14M5 12h14"/></svg>,
bell:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path {...p} d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
edit:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path {...p} d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
palette:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="13.5" cy="6.5" r="2.5"/><circle {...p} cx="6" cy="12" r="2.5"/><circle {...p} cx="8" cy="18" r="2.5"/><path {...p} d="M12 2a10 10 0 0 1 0 20 2 2 0 0 1 0-4 6 6 0 0 0 0-12"/></svg>,
target:<svg style={st} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><circle {...p} cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill={c} stroke="none"/></svg>,
calendar:<svg style={st} viewBox="0 0 24 24"><rect {...p} x="3" y="4" width="18" height="17" rx="2"/><path {...p} d="M3 10h18M8 2v4M16 2v4"/></svg>,
star:<svg style={st} viewBox="0 0 24 24"><path {...p} fill={c} opacity="0.2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path {...p} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
chevD:<svg style={st} viewBox="0 0 24 24"><path {...p} d="M6 9l6 6 6-6"/></svg>,
};return icons[n]||null;};

const Card=({children,style,onClick})=> <div onClick={onClick} style={{background:C.card,borderRadius:16,padding:20,border:`1px solid ${C.border}`,...(onClick?{cursor:"pointer"}:{}),...style}}>{children}</div>;
const Pill=({text,color=C.primary,bg,icon})=> <span style={{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 12px",borderRadius:999,fontSize:12,fontWeight:600,background:bg||`${color}15`,color}}>{icon&&<I n={icon} s={13} c={color} w={2}/>}{text}</span>;
const Btn=({children,variant="primary",style,onClick,full,icon})=>{const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,height:44,padding:"0 20px",borderRadius:12,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit",border:"none",transition:"all 0.12s",...(full?{width:"100%"}:{})};const v={primary:{background:C.primary,color:"#fff"},soft:{background:C.primarySoft,color:C.primary},ghost:{background:"transparent",color:C.primary,border:`1.5px solid ${C.border}`},success:{background:C.success,color:"#fff"},warn:{background:C.warnSoft,color:C.warnDark},small:{height:34,padding:"0 12px",fontSize:12,borderRadius:8,background:C.primarySoft,color:C.primary}};return <button onClick={onClick} style={{...base,...v[variant],...style}}>{icon&&<I n={icon} s={16} c={v[variant]?.color||"#fff"} w={2}/>}{children}</button>;};
const Bar=({value,max=100,color=C.primary,h=6})=> <div style={{width:"100%",height:h,background:`${color}20`,borderRadius:h,overflow:"hidden"}}><div style={{width:`${Math.min((value/max)*100,100)}%`,height:"100%",background:color,borderRadius:h,transition:"width 0.5s"}}/></div>;
const Stat=({label,value,icon,color=C.primary,sub})=> <Card style={{padding:16,flex:1}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}><I n={icon} s={20} c={color}/>{sub&&<span style={{fontSize:11,color:sub.includes("+")?C.success:C.textMuted,fontWeight:600}}>{sub}</span>}</div><p style={{fontSize:22,fontWeight:800,color:C.text,margin:"0 0 2px"}}>{value}</p><p style={{fontSize:11,color:C.textMuted,margin:0}}>{label}</p></Card>;
const Avatar=({name,size=36,color=C.primary})=> <div style={{width:size,height:size,borderRadius:"50%",background:`${color}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:size*0.38,fontWeight:700,color,flexShrink:0}}>{name[0].toUpperCase()}</div>;
const Back=({onClick})=> <button onClick={onClick} style={{background:"transparent",border:"none",cursor:"pointer",padding:4,display:"flex",color:C.textMuted}}><I n="arrowL" s={22} c={C.textMuted}/></button>;
const Ring=({value,max=100,size=64,stroke=5,color=C.primary,children})=>{const r=(size-stroke)/2,circ=2*Math.PI*r,off=circ-(value/max)*circ;return <div style={{position:"relative",width:size,height:size}}><svg width={size} height={size} style={{transform:"rotate(-90deg)"}}><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={`${color}20`} strokeWidth={stroke}/><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={circ} strokeDashoffset={off} strokeLinecap="round" style={{transition:"stroke-dashoffset 0.6s ease"}}/></svg><div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>{children}</div></div>;};

/* ============ DATA ============ */
const org={name:"Delhi Public School",logo:"DPS",tagline:"Excellence in Education since 1949",board:"CBSE",color:"#1E40AF",students:876,teachers:22,classes:19,activeRate:78};

// MOCK DATA — In production, fetched from API. Teachers reference classes by name (will be classId in backend).
const teachers=[
  {id:"t1",name:"Ms. Sharma",subject:"Science + Math",classes:["6-A","6-B","7-A"],students:90,classAvg:58,topTopic:"Temperature",weakTopic:"Convection",effectiveness:72,active:true},
  {id:"t2",name:"Mr. Patel",subject:"Science",classes:["6-A","8-B"],students:62,classAvg:65,topTopic:"Circuits",weakTopic:"Waves",effectiveness:78,active:true},
  {id:"t3",name:"Mrs. Singh",subject:"Math",classes:["7-A","7-B","8-A"],students:92,classAvg:55,topTopic:"Algebra",weakTopic:"Geometry",effectiveness:68,active:true},
  {id:"t4",name:"Mr. Verma",subject:"Science + Math",classes:["9-A","9-B"],students:64,classAvg:61,topTopic:"Mechanics",weakTopic:"Organic Chem",effectiveness:75,active:false},
  {id:"t5",name:"Dr. Kapoor",subject:"Physics + Chemistry",classes:[],students:0,classAvg:0,topTopic:"Thermodynamics",weakTopic:"Organic Chem",effectiveness:80,active:true},
];

const curriculum=[
  {name:"NCERT Science — Class 6",type:"Textbook",status:"indexed",pages:210,uploadedBy:"Admin"},
  {name:"NCERT Science — Class 7",type:"Textbook",status:"indexed",pages:240,uploadedBy:"Admin"},
  {name:"NCERT Science — Class 8",type:"Textbook",status:"indexed",pages:260,uploadedBy:"Admin"},
  {name:"NCERT Math — Class 6",type:"Textbook",status:"indexed",pages:290,uploadedBy:"Admin"},
  {name:"NCERT Math — Class 7",type:"Textbook",status:"indexed",pages:310,uploadedBy:"Admin"},
  {name:"NCERT Math — Class 8",type:"Textbook",status:"processing",pages:330,uploadedBy:"Admin"},
  {name:"CBSE Lab Manual — Science",type:"Reference",status:"indexed",pages:120,uploadedBy:"Admin"},
  {name:"NCERT Science — Class 9",type:"Textbook",status:"indexed",pages:280,uploadedBy:"Admin"},
  {name:"NCERT Math — Class 9",type:"Textbook",status:"indexed",pages:320,uploadedBy:"Admin"},
  {name:"NCERT Science — Class 10",type:"Textbook",status:"processing",pages:300,uploadedBy:"Admin"},
  {name:"NCERT Math — Class 10",type:"Textbook",status:"processing",pages:340,uploadedBy:"Admin"},
  {name:"NCERT Physics — Class 11",type:"Textbook",status:"pending",pages:350,uploadedBy:"Admin"},
  {name:"NCERT Chemistry — Class 11",type:"Textbook",status:"pending",pages:320,uploadedBy:"Admin"},
  {name:"NCERT Physics — Class 12",type:"Textbook",status:"pending",pages:380,uploadedBy:"Admin"},
  {name:"NCERT Chemistry — Class 12",type:"Textbook",status:"pending",pages:360,uploadedBy:"Admin"},
  {name:"NCERT Biology — Class 11",type:"Textbook",status:"failed",pages:340,uploadedBy:"Admin"},
];

// MOCK DATA — Classes reference teachers[] (many-to-many). In production, classId is the primary key.
const classData=[
  {id:"6a",name:"Class 6-A",teachers:["Mr. Patel","Ms. Sharma"],students:32,mastery:65,active:28,grade:6},
  {id:"6b",name:"Class 6-B",teachers:["Ms. Sharma"],students:28,mastery:58,active:24,grade:6},
  {id:"7a",name:"Class 7-A",teachers:["Ms. Sharma","Mrs. Singh"],students:30,mastery:55,active:26,grade:7},
  {id:"7b",name:"Class 7-B",teachers:["Mrs. Singh"],students:30,mastery:52,active:22,grade:7},
  {id:"8a",name:"Class 8-A",teachers:["Mrs. Singh"],students:32,mastery:60,active:27,grade:8},
  {id:"8b",name:"Class 8-B",teachers:["Mr. Patel"],students:30,mastery:63,active:25,grade:8},
  {id:"9a",name:"Class 9-A",teachers:["Mr. Verma"],students:32,mastery:57,active:26,grade:9},
  {id:"9b",name:"Class 9-B",teachers:["Mr. Verma"],students:32,mastery:54,active:24,grade:9},
  {id:"10a",name:"Class 10-A",teachers:[],students:34,mastery:0,active:0,grade:10},
  {id:"10b",name:"Class 10-B",teachers:[],students:30,mastery:0,active:0,grade:10},
  {id:"11a",name:"Class 11-A",teachers:[],students:28,mastery:0,active:0,grade:11},
  {id:"11b",name:"Class 11-B",teachers:[],students:26,mastery:0,active:0,grade:11},
  {id:"12a",name:"Class 12-A",teachers:[],students:24,mastery:0,active:0,grade:12},
  {id:"ug1",name:"UG Year 1",teachers:[],students:60,mastery:0,active:0,grade:13},
  {id:"ug2",name:"UG Year 2",teachers:[],students:55,mastery:0,active:0,grade:14},
  {id:"ug3",name:"UG Year 3",teachers:[],students:48,mastery:0,active:0,grade:15},
  {id:"ug4",name:"UG Year 4",teachers:[],students:42,mastery:0,active:0,grade:16},
  {id:"pg1",name:"PG Year 1",teachers:[],students:30,mastery:0,active:0,grade:17},
  {id:"pg2",name:"PG Year 2",teachers:[],students:25,mastery:0,active:0,grade:18},
];

/* ============ DASHBOARD ============ */
const DashboardScreen=({navigate})=> {
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:14}}>
      <div style={{width:48,height:48,borderRadius:14,background:org.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:800,color:"#fff"}}>{org.logo}</div>
      <div><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>{org.name}</h1><p style={{fontSize:13,color:C.textMuted,margin:"2px 0 0"}}>{org.board} • Admin Dashboard</p></div>
    </div>

    <div style={{display:"flex",gap:10}}>
      <Stat label="Students" value={org.students} icon="users" color={C.primary} sub={`${org.activeRate}% active`}/>
      <Stat label="Teachers" value={org.teachers} icon="brain" color={C.teal}/>
      <Stat label="Classes" value={org.classes} icon="book" color={C.accent}/>
    </div>

    {/* School-wide mastery */}
    <Card style={{background:"linear-gradient(135deg, #1E40AF, #1E3A8A)",border:"none",padding:20,color:"#fff"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><p style={{fontSize:14,fontWeight:600,opacity:0.8,margin:"0 0 4px"}}>School-wide mastery</p><p style={{fontSize:32,fontWeight:800,margin:0}}>59%</p><Pill text="+5% this month" bg="rgba(255,255,255,0.2)" color="#fff" icon="trendUp"/></div>
        <div style={{textAlign:"right"}}><p style={{fontSize:13,opacity:0.7,margin:"0 0 4px"}}>SA1 in 38 days</p><p style={{fontSize:20,fontWeight:800,margin:0}}>64%</p><p style={{fontSize:12,opacity:0.7,margin:"2px 0 0"}}>exam readiness</p></div>
      </div>
    </Card>

    {/* Class performance */}
    <div><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Class performance</p>
      {classData.map((cl,i)=>{const mc=cl.mastery>=60?C.success:cl.mastery>=45?C.warn:C.error;return <Card key={i} onClick={()=>navigate("classDetail",cl)} style={{marginBottom:8,padding:14,display:"flex",alignItems:"center",gap:14}}>
        <div style={{width:40,textAlign:"center"}}><p style={{fontSize:18,fontWeight:800,color:mc,margin:0}}>{cl.mastery}%</p></div>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}><span style={{fontSize:13,fontWeight:600,color:C.text}}>{cl.name}</span><span style={{fontSize:11,color:C.textMuted}}>• {cl.teachers.length?cl.teachers.join(" / "):"No teacher assigned"}</span></div>
          <Bar value={cl.mastery} color={mc} h={4}/>
          <p style={{fontSize:11,color:C.textMuted,margin:"4px 0 0"}}>{cl.active}/{cl.students} active</p>
        </div>
      </Card>;})}
    </div>

    {/* Quick actions */}
    <div><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Quick actions</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        {[{label:"Upload books",icon:"upload",color:C.primary,screen:"curriculum"},{label:"Add teacher",icon:"plus",color:C.teal,screen:"teachers"},{label:"Assignments",icon:"edit",color:C.warn,screen:"assignments"},{label:"Branding",icon:"palette",color:C.accent,screen:"branding"},{label:"Analytics",icon:"chart",color:C.success,screen:"analytics"}].map(a=> <Card key={a.label} onClick={()=>navigate(a.screen)} style={{cursor:"pointer",padding:16,textAlign:"center"}}>
          <div style={{width:40,height:40,borderRadius:12,background:`${a.color}12`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 8px"}}><I n={a.icon} s={22} c={a.color}/></div>
          <p style={{fontSize:13,fontWeight:600,color:C.text,margin:0}}>{a.label}</p>
        </Card>)}
      </div>
    </div>
  </div>;
};

/* ============ TEACHERS ============ */
const TeachersScreen=({navigate})=> {
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Teachers</h1><Btn variant="primary" icon="plus">Add teacher</Btn></div>

    {teachers.map((t,i)=> <Card key={i} onClick={()=>navigate("teacherDetail",t)} style={{padding:16}}>
      <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12}}>
        <Avatar name={t.name} size={44} color={t.active?C.teal:C.textFaint}/>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:14,fontWeight:600,color:C.text}}>{t.name}</span>{!t.active&&<Pill text="Inactive" color={C.error}/>}</div>
          <p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{t.subject} • {t.classes.join(", ")} • {t.students} students</p>
        </div>
      </div>
      <div style={{display:"flex",gap:10}}>
        <div style={{flex:1,padding:10,borderRadius:8,background:C.borderSoft,textAlign:"center"}}><p style={{fontSize:16,fontWeight:800,color:t.classAvg>=60?C.success:C.warn,margin:0}}>{t.classAvg}%</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Class avg</p></div>
        <div style={{flex:1,padding:10,borderRadius:8,background:C.borderSoft,textAlign:"center"}}><p style={{fontSize:16,fontWeight:800,color:t.effectiveness>=70?C.success:C.warn,margin:0}}>{t.effectiveness}%</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Effectiveness</p></div>
        <div style={{flex:1,padding:10,borderRadius:8,background:C.borderSoft,textAlign:"center"}}><p style={{fontSize:16,fontWeight:800,color:C.success,margin:0}}>{t.topTopic}</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Best topic</p></div>
      </div>
      {t.weakTopic&&<p style={{fontSize:11,color:C.warn,margin:"8px 0 0"}}>Needs improvement: {t.weakTopic} (lowest teaching impact)</p>}
    </Card>)}
  </div>;
};

/* ============ TEACHER DETAIL ============ */
const TeacherDetailScreen=({navigate,teacher})=> {
  const t=teacher||teachers[0];
  const tClasses=classData.filter(cl=>cl.teachers.includes(t.name));
  const activeStudents=tClasses.reduce((s,cl)=>s+cl.active,0);
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("teachers")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>{t.name}</h1></div>

    <Card style={{padding:16}}>
      <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12}}>
        <Avatar name={t.name} size={52} color={t.active?C.teal:C.textFaint}/>
        <div style={{flex:1}}>
          <p style={{fontSize:16,fontWeight:700,color:C.text,margin:0}}>{t.name}</p>
          <p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{t.subject} • {t.classes.join(", ")}</p>
        </div>
        <Pill text={t.active?"Active":"Inactive"} color={t.active?C.success:C.error}/>
      </div>
    </Card>

    <div style={{display:"flex",gap:10}}>
      <div style={{flex:1,padding:14,borderRadius:12,background:C.card,border:`1px solid ${C.border}`,textAlign:"center"}}><p style={{fontSize:22,fontWeight:800,color:t.classAvg>=60?C.success:C.warn,margin:0}}>{t.classAvg}%</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Class average</p></div>
      <div style={{flex:1,padding:14,borderRadius:12,background:C.card,border:`1px solid ${C.border}`,textAlign:"center"}}><p style={{fontSize:22,fontWeight:800,color:t.effectiveness>=70?C.success:C.warn,margin:0}}>{t.effectiveness}%</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Effectiveness</p></div>
    </div>

    <div style={{display:"flex",gap:10}}>
      <Card style={{flex:1,padding:14,background:C.successSoft,border:`1px solid ${C.success}30`}}>
        <p style={{fontSize:11,color:C.successDark,margin:"0 0 4px",fontWeight:600}}>Top topic</p>
        <p style={{fontSize:16,fontWeight:800,color:C.successDark,margin:0}}>{t.topTopic}</p>
      </Card>
      <Card style={{flex:1,padding:14,background:C.warnSoft,border:`1px solid ${C.warn}30`}}>
        <p style={{fontSize:11,color:C.warnDark,margin:"0 0 4px",fontWeight:600}}>Weak topic</p>
        <p style={{fontSize:16,fontWeight:800,color:C.warnDark,margin:0}}>{t.weakTopic}</p>
      </Card>
    </div>

    <Card><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 12px"}}>Class-by-class breakdown</p>
      {tClasses.length>0?tClasses.map((cl,i)=>{const mc=cl.mastery>=60?C.success:cl.mastery>=45?C.warn:C.error;return <div key={i} style={{padding:"10px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
          <span style={{fontSize:13,fontWeight:600,color:C.text}}>{cl.name}</span>
          <span style={{fontSize:12,fontWeight:700,color:mc}}>{cl.mastery}%</span>
        </div>
        <Bar value={cl.mastery} color={mc} h={5}/>
        <p style={{fontSize:11,color:C.textMuted,margin:"4px 0 0"}}>{cl.students} students</p>
      </div>;}):t.classes.map((cls,i)=> <div key={i} style={{padding:"10px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
          <span style={{fontSize:13,fontWeight:600,color:C.text}}>Class {cls}</span>
          <span style={{fontSize:12,fontWeight:700,color:C.warn}}>—</span>
        </div>
      </div>)}
    </Card>

    <Card style={{padding:16,display:"flex",alignItems:"center",gap:14}}>
      <div style={{width:44,height:44,borderRadius:12,background:C.primarySoft,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="users" s={22} c={C.primary}/></div>
      <div><p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>Student engagement</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{activeStudents}/{t.students} students active</p></div>
    </Card>
  </div>;
};

/* ============ CLASS DETAIL ============ */
const ClassDetailScreen=({navigate,classInfo})=> {
  const cl=classInfo||classData[0];
  const mc=cl.mastery>=60?C.success:cl.mastery>=45?C.warn:C.error;
  const top5=[{name:"Riya",mastery:88},{name:"Neha",mastery:71},{name:"Aarav",mastery:62},{name:"Vikram",mastery:52},{name:"Arjun",mastery:45}];
  const bottom5=[{name:"Priya",mastery:28},{name:"Karan",mastery:32},{name:"Ananya",mastery:35},{name:"Meera",mastery:38},{name:"Rahul",mastery:40}];
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("dashboard")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>{cl.name}</h1></div>

    <Card style={{padding:16}}>
      <p style={{fontSize:16,fontWeight:700,color:C.text,margin:"0 0 4px"}}>{cl.name}</p>
      <p style={{fontSize:12,color:C.textMuted,margin:"0 0 4px"}}>{cl.teachers.length?cl.teachers.join(" / "):"No teacher assigned"}</p>
      <Pill text={`${cl.students} students`} color={C.primary} icon="users"/>
    </Card>

    <div style={{display:"flex",alignItems:"center",gap:16}}>
      <Ring value={cl.mastery} size={80} stroke={6} color={mc}><p style={{fontSize:20,fontWeight:800,color:mc,margin:0}}>{cl.mastery}%</p></Ring>
      <div style={{flex:1}}>
        <p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 4px"}}>Class mastery</p>
        <Pill text="+3% this month" color={C.success} icon="trendUp"/>
      </div>
    </div>

    <Card><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 12px"}}>Top 5 students</p>
      {top5.map((s,i)=>{const sc=s.mastery>=60?C.success:s.mastery>=45?C.warn:C.error;return <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <Avatar name={s.name} size={28} color={sc}/>
        <span style={{fontSize:13,color:C.text,flex:1}}>{s.name}</span>
        <span style={{fontSize:13,fontWeight:700,color:sc}}>{s.mastery}%</span>
      </div>;})}
    </Card>

    <Card><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 12px"}}>Bottom 5 students</p>
      {bottom5.map((s,i)=>{const sc=s.mastery>=60?C.success:s.mastery>=45?C.warn:C.error;return <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <Avatar name={s.name} size={28} color={sc}/>
        <span style={{fontSize:13,color:C.text,flex:1}}>{s.name}</span>
        <span style={{fontSize:13,fontWeight:700,color:sc}}>{s.mastery}%</span>
      </div>;})}
    </Card>

    <Card style={{background:C.primarySoft,border:`1px solid ${C.primary}30`,padding:16}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><I n="chart" s={18} c={C.primary}/><p style={{fontSize:13,fontWeight:700,color:C.primary,margin:0}}>Recent activity</p></div>
      <p style={{fontSize:13,color:C.text,margin:0,lineHeight:1.6}}>{cl.active}/{cl.students} students active this week. Average of 3.2 quizzes completed per student. 4 tutor sessions initiated.</p>
    </Card>
  </div>;
};

/* ============ STUDENT DETAIL ============ */
const StudentDetailScreen=({navigate,student})=> {
  const s=student||{name:"Student",class:"6-A",mastery:62,lastActive:"2 hrs ago",streak:5};
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("dashboard")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>{s.name}</h1></div>

    <Card style={{padding:16}}>
      <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12}}>
        <Avatar name={s.name} size={48} color={C.primary}/>
        <div>
          <p style={{fontSize:16,fontWeight:700,color:C.text,margin:0}}>{s.name}</p>
          <p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>Class {s.class||"6-A"}</p>
        </div>
      </div>
      <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
        <Pill text={`${s.mastery||62}% mastery`} color={(s.mastery||62)>=60?C.success:C.warn} icon="brain"/>
        <Pill text={`Last active: ${s.lastActive||"2 hrs ago"}`} color={C.textMuted}/>
        <Pill text={`${s.streak||5} day streak`} color={C.accent} icon="target"/>
      </div>
    </Card>

    <Card><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 12px"}}>Subject mastery</p>
      {[{subject:"Science",mastery:65,color:C.teal},{subject:"Math",mastery:58,color:C.primary}].map((sub,i)=> <div key={i} style={{marginBottom:i===0?12:0}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
          <span style={{fontSize:13,fontWeight:600,color:C.text}}>{sub.subject}</span>
          <span style={{fontSize:13,fontWeight:700,color:sub.mastery>=60?C.success:C.warn}}>{sub.mastery}%</span>
        </div>
        <Bar value={sub.mastery} color={sub.color} h={6}/>
      </div>)}
    </Card>

    <Card><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 12px"}}>Activity summary</p>
      <div style={{display:"flex",gap:10}}>
        <div style={{flex:1,padding:12,borderRadius:10,background:C.borderSoft,textAlign:"center"}}><p style={{fontSize:20,fontWeight:800,color:C.primary,margin:0}}>12</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Quizzes taken</p></div>
        <div style={{flex:1,padding:12,borderRadius:10,background:C.borderSoft,textAlign:"center"}}><p style={{fontSize:20,fontWeight:800,color:C.teal,margin:0}}>5</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Tutor sessions</p></div>
        <div style={{flex:1,padding:12,borderRadius:10,background:C.borderSoft,textAlign:"center"}}><p style={{fontSize:20,fontWeight:800,color:C.accent,margin:0}}>4</p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Days active</p></div>
      </div>
    </Card>

    <Btn variant="soft" full icon="arrowL" onClick={()=>navigate("dashboard")}>Back</Btn>
  </div>;
};

/* ============ CALENDAR ============ */
const CalendarScreen=({navigate})=> {
  const months=["Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const[selMonth,setSelMonth]=useState("Mar");
  const dates=[
    {name:"Term 1 Start",date:"Apr 1",type:"event"},
    {name:"SA1 Exam",date:"Apr 23",type:"exam"},
    {name:"Summer Break",date:"May 20 — Jun 30",type:"holiday"},
    {name:"Term 2 Start",date:"Sep 1",type:"event"},
    {name:"SA2 Exam",date:"Sep 15",type:"exam"},
    {name:"Diwali Break",date:"Oct 20–25",type:"holiday"},
    {name:"Annual Day",date:"Dec 15",type:"event"},
  ];
  const typeColor={exam:{color:C.error,bg:C.errorSoft},holiday:{color:C.success,bg:C.successSoft},event:{color:C.primary,bg:C.primarySoft}};
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("settings")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Academic Calendar</h1></div>

    <Card style={{padding:16,textAlign:"center"}}>
      <p style={{fontSize:18,fontWeight:800,color:C.text,margin:0}}>2025–26 Academic Year</p>
    </Card>

    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
      {months.map(m=> <button key={m} onClick={()=>setSelMonth(m)} style={{padding:"6px 14px",borderRadius:999,fontSize:12,fontWeight:600,border:"none",cursor:"pointer",fontFamily:"inherit",background:selMonth===m?C.primary:`${C.primary}12`,color:selMonth===m?"#fff":C.primary}}>{m}</button>)}
    </div>

    <div><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Key dates</p>
      {dates.map((d,i)=>{const tc=typeColor[d.type];return <Card key={i} style={{marginBottom:8,padding:14,display:"flex",alignItems:"center",gap:14,background:tc.bg,border:`1px solid ${tc.color}30`}}>
        <div style={{width:40,height:40,borderRadius:12,background:`${tc.color}20`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="calendar" s={20} c={tc.color}/></div>
        <div style={{flex:1}}>
          <p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{d.name}</p>
          <p style={{fontSize:12,color:tc.color,fontWeight:600,margin:"2px 0 0"}}>{d.date}</p>
        </div>
        <Pill text={d.type} color={tc.color}/>
      </Card>;})}
    </div>

    <Btn variant="soft" full icon="plus">Add date</Btn>
  </div>;
};

/* ============ BILLING ============ */
const BillingScreen=({navigate})=> {
  const features=["Unlimited quizzes","AI tutoring for all students","Parent dashboard","Custom branding","Analytics & reports","Priority support"];
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("settings")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Billing</h1></div>

    <Card style={{background:"linear-gradient(135deg, #1E40AF, #7C3AED)",border:"none",padding:20,color:"#fff"}}>
      <p style={{fontSize:14,fontWeight:600,opacity:0.8,margin:"0 0 4px"}}>Current plan</p>
      <p style={{fontSize:24,fontWeight:800,margin:"0 0 8px"}}>School Plan — Active</p>
      <Pill text="Renews Mar 2027" bg="rgba(255,255,255,0.2)" color="#fff" icon="calendar"/>
    </Card>

    <div style={{display:"flex",gap:10}}>
      <Card style={{flex:1,padding:14,textAlign:"center"}}><p style={{fontSize:18,fontWeight:800,color:C.primary,margin:0}}>420<span style={{fontSize:12,fontWeight:500,color:C.textMuted}}>/500</span></p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Students</p></Card>
      <Card style={{flex:1,padding:14,textAlign:"center"}}><p style={{fontSize:18,fontWeight:800,color:C.teal,margin:0}}>18<span style={{fontSize:12,fontWeight:500,color:C.textMuted}}>/25</span></p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Teachers</p></Card>
      <Card style={{flex:1,padding:14,textAlign:"center"}}><p style={{fontSize:18,fontWeight:800,color:C.accent,margin:0}}>2.1<span style={{fontSize:12,fontWeight:500,color:C.textMuted}}>/5 GB</span></p><p style={{fontSize:10,color:C.textMuted,margin:"2px 0 0"}}>Storage</p></Card>
    </div>

    <Card><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 12px"}}>Plan features</p>
      {features.map((f,i)=> <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <div style={{width:22,height:22,borderRadius:6,background:C.successSoft,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="check" s={14} c={C.success} w={2.5}/></div>
        <span style={{fontSize:13,color:C.text}}>{f}</span>
      </div>)}
    </Card>

    <div style={{display:"flex",gap:10}}>
      <Btn variant="primary" full icon="star">Contact sales</Btn>
      <Btn variant="ghost" full icon="chart">View invoices</Btn>
    </div>
  </div>;
};

/* ============ CURRICULUM ============ */
const CurriculumScreen=({navigate})=> {
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Curriculum</h1><Btn variant="primary" icon="upload">Upload books</Btn></div>

    <Card style={{background:C.primarySoft,border:`1px solid ${C.primary}30`,padding:14,display:"flex",alignItems:"center",gap:10}}>
      <I n="shield" s={18} c={C.primary}/>
      <p style={{fontSize:12,color:C.primary,margin:0}}>Books uploaded here become the official curriculum. They power AI answers for all students and teachers in your institution.</p>
    </Card>

    <div style={{display:"flex",gap:8}}><Pill text={`${curriculum.filter(c=>c.status==="indexed").length} indexed`} color={C.success} icon="check"/><Pill text={`${curriculum.filter(c=>c.status==="processing").length} processing`} color={C.warn} icon="brain"/>{curriculum.filter(c=>c.status==="failed").length>0&&<Pill text={`${curriculum.filter(c=>c.status==="failed").length} failed`} color={C.error} icon="alert"/>}</div>

    {curriculum.map((b,i)=> <Card key={i} style={{padding:14,display:"flex",alignItems:"center",gap:14}}>
      <div style={{width:44,height:44,borderRadius:12,background:`${C.primary}12`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="book" s={22} c={C.primary}/></div>
      <div style={{flex:1}}>
        <p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{b.name}</p>
        <p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{b.type} • {b.pages} pages</p>
      </div>
      <Pill text={b.status==="indexed"?"Indexed":b.status==="processing"?"Processing...":b.status==="failed"?"Failed":"Pending"} color={b.status==="indexed"?C.success:b.status==="processing"?C.warn:b.status==="failed"?C.error:C.textMuted} icon={b.status==="indexed"?"check":b.status==="failed"?"alert":"brain"}/>
      {b.status==="failed"&&<Btn variant="small" style={{background:C.errorSoft,color:C.errorDark,height:28,fontSize:11}}>Re-index</Btn>}
    </Card>)}

    <Card style={{border:`2px dashed ${C.primary}`,background:C.primarySoft,padding:24,textAlign:"center",cursor:"pointer"}}>
      <I n="upload" s={28} c={C.primary}/>
      <p style={{fontSize:14,fontWeight:600,color:C.primary,margin:"8px 0 4px"}}>Upload new book or material</p>
      <p style={{fontSize:12,color:C.textMuted,margin:0}}>PDF, DOCX, EPUB — auto-indexed for AI in 5-10 minutes</p>
    </Card>
  </div>;
};

/* ============ BRANDING ============ */
const BrandingScreen=({navigate})=> {
  const[preview,setPreview]=useState(false);
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("dashboard")}/><h1 style={{fontSize:20,fontWeight:800,color:C.text,margin:0}}>Branding</h1></div>

    <Card style={{background:C.accentSoft,border:`1px solid ${C.accent}30`,padding:14}}>
      <p style={{fontSize:12,color:C.accent,margin:0}}>Customize how the app appears to your students, teachers, and parents. Your branding replaces "LearnAI" across all apps.</p>
    </Card>

    <Card style={{padding:16}}>
      <p style={{fontSize:13,fontWeight:700,color:C.text,margin:"0 0 12px"}}>School identity</p>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        <div><label style={{fontSize:12,color:C.textMuted,display:"block",marginBottom:4}}>School name</label><input value={org.name} readOnly style={{width:"100%",height:40,borderRadius:10,border:`1.5px solid ${C.border}`,padding:"0 14px",fontFamily:"inherit",fontSize:14,boxSizing:"border-box",outline:"none"}}/></div>
        <div><label style={{fontSize:12,color:C.textMuted,display:"block",marginBottom:4}}>Tagline</label><input value={org.tagline} readOnly style={{width:"100%",height:40,borderRadius:10,border:`1.5px solid ${C.border}`,padding:"0 14px",fontFamily:"inherit",fontSize:14,boxSizing:"border-box",outline:"none"}}/></div>
        <div><label style={{fontSize:12,color:C.textMuted,display:"block",marginBottom:4}}>Brand color</label><div style={{display:"flex",gap:8}}>{["#1E40AF","#7C3AED","#0D9488","#DC2626","#16A34A","#EA580C"].map(c=> <button key={c} style={{width:36,height:36,borderRadius:10,background:c,border:c===org.color?`3px solid ${C.text}`:`3px solid transparent`,cursor:"pointer"}}/>)}</div></div>
        <div><label style={{fontSize:12,color:C.textMuted,display:"block",marginBottom:4}}>Logo</label><div style={{width:"100%",height:80,borderRadius:10,border:`2px dashed ${C.border}`,background:C.borderSoft,display:"flex",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer"}}><I n="upload" s={20} c={C.textMuted}/><span style={{fontSize:13,color:C.textMuted}}>Upload school logo (PNG, SVG)</span></div></div>
      </div>
    </Card>

    <Btn variant="soft" full icon="edit" onClick={()=>setPreview(!preview)}>{preview?"Hide preview":"Preview branded app"}</Btn>

    {preview&&<Card style={{border:`2px solid ${org.color}`,padding:0,overflow:"hidden"}}>
      <div style={{background:org.color,padding:"12px 16px",display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:30,height:30,borderRadius:8,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:"#fff"}}>{org.logo}</div>
        <span style={{fontSize:14,fontWeight:700,color:"#fff"}}>{org.name}</span>
        <span style={{fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.6)",marginLeft:4}}>Learning</span>
      </div>
      <div style={{padding:16}}>
        <p style={{fontSize:11,color:C.textMuted,margin:0}}>This is how students and parents see the app</p>
        <div style={{marginTop:10,padding:12,borderRadius:10,background:C.borderSoft}}>
          <p style={{fontSize:13,fontWeight:600,color:C.text,margin:"0 0 4px"}}>Today's Mission</p>
          <p style={{fontSize:12,color:C.textMuted,margin:"0 0 8px"}}>8 questions • ~10 min</p>
          <div style={{height:36,borderRadius:10,background:org.color,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:600}}>Start Mission</div>
        </div>
      </div>
    </Card>}

    <Btn full variant="primary" icon="check">Save branding</Btn>
  </div>;
};

/* ============ ANALYTICS ============ */
const AnalyticsScreen=({navigate})=> {
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>School analytics</h1>

    <div style={{display:"flex",gap:10}}>
      <Stat label="School mastery" value="59%" icon="brain" color={C.primary} sub="+5%"/>
      <Stat label="Active rate" value="78%" icon="users" color={C.teal}/>
      <Stat label="Engagement" value="4.2d/wk" icon="target" color={C.accent}/>
    </div>

    {/* Class comparison */}
    <Card><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 12px"}}>Class comparison</p>
      {classData.sort((a,b)=>b.mastery-a.mastery).map((cl,i)=>{const mc=cl.mastery>=60?C.success:cl.mastery>=45?C.warn:C.error;return <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <span style={{fontSize:12,color:C.text,width:60,flexShrink:0}}>{cl.name}</span>
        <div style={{flex:1}}><Bar value={cl.mastery} color={mc} h={6}/></div>
        <span style={{fontSize:12,fontWeight:700,color:mc,width:36,textAlign:"right"}}>{cl.mastery}%</span>
      </div>;})}
    </Card>

    {/* Teacher effectiveness ranking */}
    <Card><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 12px"}}>Teacher effectiveness</p>
      {teachers.sort((a,b)=>b.effectiveness-a.effectiveness).map((t,i)=> <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <Avatar name={t.name} size={28} color={t.effectiveness>=70?C.success:C.warn}/>
        <span style={{fontSize:12,color:C.text,flex:1}}>{t.name}</span>
        <span style={{fontSize:12,fontWeight:700,color:t.effectiveness>=70?C.success:C.warn}}>{t.effectiveness}%</span>
      </div>)}
    </Card>

    {/* AI insight */}
    <Card style={{background:C.warnSoft,border:`1px solid ${C.warn}30`,padding:16}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><I n="brain" s={18} c={C.warnDark}/><p style={{fontSize:13,fontWeight:700,color:C.warnDark,margin:0}}>School-wide insight</p></div>
      <p style={{fontSize:13,color:C.text,margin:0,lineHeight:1.6}}>Convection and Geometry are the weakest topics across all classes. Consider a school-wide focus week or workshop for teachers on these topics.</p>
    </Card>

    <Btn variant="soft" full icon="chart">Download full school report (PDF)</Btn>
  </div>;
};

/* ============ USER MANAGEMENT ============ */
const UsersScreen=({navigate})=> {
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Users</h1>

    <div style={{display:"flex",gap:10}}>
      <Card style={{flex:1,padding:14,textAlign:"center"}}><p style={{fontSize:22,fontWeight:800,color:C.primary,margin:0}}>{org.students}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Students</p></Card>
      <Card style={{flex:1,padding:14,textAlign:"center"}}><p style={{fontSize:22,fontWeight:800,color:C.teal,margin:0}}>{org.teachers}</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Teachers</p></Card>
      <Card style={{flex:1,padding:14,textAlign:"center"}}><p style={{fontSize:22,fontWeight:800,color:C.accent,margin:0}}>340</p><p style={{fontSize:11,color:C.textMuted,margin:"2px 0 0"}}>Parents</p></Card>
    </div>

    <div style={{display:"flex",gap:8}}><Btn variant="primary" icon="plus">Add students (CSV)</Btn><Btn variant="ghost" icon="plus">Add teacher</Btn></div>

    {/* Class-wise enrollment */}
    <Card><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 12px"}}>Enrollment by class</p>
      {classData.map((cl,i)=> <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderTop:i?`1px solid ${C.borderSoft}`:"none"}}>
        <span style={{fontSize:12,fontWeight:600,color:C.text,width:60}}>{cl.name}</span>
        <div style={{flex:1}}><Bar value={cl.active} max={cl.students} color={cl.active/cl.students>0.8?C.success:C.warn} h={5}/></div>
        <span style={{fontSize:11,color:C.textMuted,width:50,textAlign:"right"}}>{cl.active}/{cl.students}</span>
      </div>)}
    </Card>

    {/* Inactive alerts */}
    <Card style={{background:C.errorSoft,border:`1px solid ${C.error}30`,padding:16}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><I n="bell" s={16} c={C.errorDark}/><p style={{fontSize:13,fontWeight:600,color:C.errorDark,margin:0}}>92 students inactive (5+ days)</p></div>
      <p style={{fontSize:12,color:C.text,margin:"0 0 10px"}}>Across all classes, 92 students haven't used the app in 5+ days. Teachers have been notified.</p>
      <Btn variant="small" icon="bell">Send school-wide nudge</Btn>
    </Card>
  </div>;
};

/* ============ SETTINGS ============ */
const SettingsScreen=({navigate})=> {
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Settings</h1>

    <Card style={{padding:0}}>
      {[
        {label:"Branding & appearance",desc:"Logo, colors, school name",icon:"palette",screen:"branding"},
        {label:"Academic calendar",desc:"Exam dates, holidays, term schedule",icon:"calendar",screen:"calendar"},
        {label:"Board & curriculum",desc:"CBSE • Can be changed",icon:"book"},
        {label:"Data & privacy",desc:"Student data policy, COPPA compliance",icon:"shield"},
        {label:"Notifications",desc:"Who gets what alerts and when",icon:"bell"},
        {label:"Billing & subscription",desc:"School plan • Active",icon:"star",screen:"billing"},
      ].map((item,i)=> <div key={i} onClick={item.screen?()=>navigate(item.screen):undefined} style={{display:"flex",alignItems:"center",gap:14,padding:"16px 20px",borderTop:i?`1px solid ${C.borderSoft}`:"none",cursor:item.screen?"pointer":"default"}}>
        <div style={{width:36,height:36,borderRadius:10,background:C.primarySoft,display:"flex",alignItems:"center",justifyContent:"center"}}><I n={item.icon} s={18} c={C.primary}/></div>
        <div style={{flex:1}}><p style={{fontSize:14,fontWeight:500,color:C.text,margin:0}}>{item.label}</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{item.desc}</p></div>
        <I n="arrowR" s={16} c={C.textFaint}/>
      </div>)}
    </Card>
  </div>;
};

/* ============ CLASS-TEACHER ASSIGNMENTS ============ */
// Admin assigns teachers to classes here. In production, this writes to the assignments API.
const AssignmentsScreen=({navigate})=>{
  const[editing,setEditing]=useState(null);
  const[assignments,setAssignments]=useState(classData.map(cl=>({id:cl.id,name:cl.name,teachers:[...cl.teachers],grade:cl.grade})));

  const toggleTeacher=(classId,teacherName)=>{
    setAssignments(prev=>prev.map(a=>{
      if(a.id!==classId)return a;
      const has=a.teachers.includes(teacherName);
      return {...a,teachers:has?a.teachers.filter(t=>t!==teacherName):[...a.teachers,teacherName]};
    }));
  };

  // Group by grade label
  const gradeLabels={6:"Class 6",7:"Class 7",8:"Class 8",9:"Class 9",10:"Class 10",11:"Class 11",12:"Class 12",13:"UG Year 1",14:"UG Year 2",15:"UG Year 3",16:"UG Year 4",17:"PG Year 1",18:"PG Year 2"};
  const grades=[...new Set(assignments.map(a=>a.grade))];

  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Back onClick={()=>navigate("dashboard")}/><div><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Class assignments</h1><p style={{fontSize:13,color:C.textMuted,margin:"2px 0 0"}}>Assign teachers to classes</p></div></div>

    {grades.map(g=>{
      const gClasses=assignments.filter(a=>a.grade===g);
      return <div key={g}>
        <p style={{fontSize:13,fontWeight:700,color:C.textMuted,margin:"0 0 8px",textTransform:"uppercase",letterSpacing:0.5}}>{gradeLabels[g]||`Grade ${g}`}</p>
        {gClasses.map(cl=>{
          const isEditing=editing===cl.id;
          return <Card key={cl.id} style={{marginBottom:8,padding:0,overflow:"hidden"}}>
            <button onClick={()=>setEditing(isEditing?null:cl.id)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"14px 16px",background:"transparent",border:"none",cursor:"pointer",fontFamily:"inherit"}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <span style={{fontSize:14,fontWeight:600,color:C.text}}>{cl.name}</span>
                {cl.teachers.length===0&&<span style={{fontSize:11,color:C.error,fontWeight:500}}>No teacher</span>}
              </div>
              <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                {cl.teachers.map(t=><Pill key={t} text={t} color={C.primary} bg={C.primarySoft}/>)}
                <I n={isEditing?"chevD":"arrowR"} s={16} c={C.textMuted}/>
              </div>
            </button>
            {isEditing&&<div style={{padding:"0 16px 14px",borderTop:`1px solid ${C.borderSoft}`}}>
              <p style={{fontSize:12,color:C.textMuted,margin:"10px 0 8px"}}>Toggle teachers for {cl.name}:</p>
              {teachers.map(t=>{
                const assigned=cl.teachers.includes(t.name);
                return <button key={t.id} onClick={()=>toggleTeacher(cl.id,t.name)} style={{display:"flex",alignItems:"center",gap:12,width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${assigned?C.primary:C.border}`,background:assigned?C.primarySoft:"transparent",cursor:"pointer",fontFamily:"inherit",marginBottom:6}}>
                  <div style={{width:22,height:22,borderRadius:6,border:`2px solid ${assigned?C.primary:C.border}`,display:"flex",alignItems:"center",justifyContent:"center",background:assigned?C.primary:"transparent"}}>{assigned&&<I n="check" s={13} c="#fff" w={2.5}/>}</div>
                  <div style={{flex:1,textAlign:"left"}}><p style={{fontSize:13,fontWeight:assigned?600:400,color:assigned?C.primary:C.text,margin:0}}>{t.name}</p><p style={{fontSize:11,color:C.textMuted,margin:"1px 0 0"}}>{t.subject}</p></div>
                  {!t.active&&<Pill text="Inactive" color={C.textFaint} bg={C.borderSoft}/>}
                </button>;
              })}
            </div>}
          </Card>;
        })}
      </div>;
    })}
  </div>;
};

/* ============ APP SHELL ============ */
export default function OrgApp(){
  const[screen,setScreen]=useState("dashboard");
  const[context,setContext]=useState(null);
  const scrollRef=useRef(null);
  const navigateRef=useRef(null);
  const navigate=(s,ctx)=>{setScreen(s);if(ctx!==undefined)setContext(ctx);scrollRef.current?.scrollTo(0,0);};
  navigateRef.current=navigate;
  useEffect(()=>{const h=(e)=>navigateRef.current?.(e.detail);window.addEventListener('sidebar-nav',h);return()=>window.removeEventListener('sidebar-nav',h);},[]);

  const navItems=[{id:"dashboard",icon:"home",label:"Dashboard"},{id:"teachers",icon:"users",label:"Teachers"},{id:"curriculum",icon:"book",label:"Curriculum"},{id:"analytics",icon:"chart",label:"Analytics"},{id:"settings",icon:"settings",label:"Settings"}];
  const screens={dashboard:<DashboardScreen navigate={navigate}/>,teachers:<TeachersScreen navigate={navigate}/>,curriculum:<CurriculumScreen navigate={navigate}/>,branding:<BrandingScreen navigate={navigate}/>,analytics:<AnalyticsScreen navigate={navigate}/>,users:<UsersScreen navigate={navigate}/>,settings:<SettingsScreen navigate={navigate}/>,teacherDetail:<TeacherDetailScreen navigate={navigate} teacher={context||teachers[0]}/>,classDetail:<ClassDetailScreen navigate={navigate} classInfo={context||classData[0]}/>,studentDetail:<StudentDetailScreen navigate={navigate} student={context}/>,calendar:<CalendarScreen navigate={navigate}/>,billing:<BillingScreen navigate={navigate}/>,assignments:<AssignmentsScreen navigate={navigate}/>};
  const activeNav=screen==="branding"?"settings":screen==="users"?"settings":screen==="teacherDetail"?"teachers":screen==="classDetail"?"dashboard":screen==="studentDetail"?"dashboard":screen==="calendar"?"settings":screen==="billing"?"settings":screen==="assignments"?"dashboard":screen;

  return <div style={{fontFamily:'"Inter",-apple-system,sans-serif',maxWidth:"100%",margin:"0 auto",background:C.bg,minHeight:"100vh",display:"flex",flexDirection:"column",borderRadius:0,overflow:"hidden",boxShadow:"none",position:"relative"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px 10px",background:C.card,borderBottom:`1px solid ${C.border}`}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:34,height:34,borderRadius:10,background:"linear-gradient(135deg, #2563EB, #7C3AED)",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9 2 7 4.5 7 7.5c0 2 1.2 3.8 2.5 5l.5.8h4l.5-.8C15.8 11.3 17 9.5 17 7.5 17 4.5 15 2 12 2z" fill="rgba(255,255,255,0.12)"/><circle cx="12" cy="6.5" r="1" fill="#fff" stroke="none"/><circle cx="9.8" cy="9" r=".7" fill="#fff" stroke="none"/><circle cx="14.2" cy="9" r=".7" fill="#fff" stroke="none"/><line x1="12" y1="6.5" x2="9.8" y2="9" strokeWidth=".7" opacity=".5"/><line x1="12" y1="6.5" x2="14.2" y2="9" strokeWidth=".7" opacity=".5"/><line x1="9" y1="16" x2="15" y2="16"/><line x1="10" y1="18" x2="14" y2="18"/></svg></div>
        <div><span style={{fontSize:15,fontWeight:800,color:C.text}}>{org.name}</span><span style={{fontSize:11,color:C.primary,fontWeight:600,marginLeft:6}}>Admin</span></div>
      </div>
      <div style={{display:"flex",gap:6,alignItems:"center"}}>
        <button onClick={()=>navigate("users")} style={{background:"transparent",border:"none",cursor:"pointer",padding:4,display:"flex"}}><I n="users" s={20} c={C.textMuted}/></button>
        <Avatar name="Admin" size={32} color={C.primary}/>
      </div>
    </div>

    <div ref={scrollRef} style={{flex:1,overflowY:"auto",padding:"14px 18px 100px"}}>{screens[screen]||screens.dashboard}</div>

    <div style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(255,255,255,0.97)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-around",padding:"6px 0 18px"}}>
      {navItems.map(item=>{const isActive=activeNav===item.id;return <button key={item.id} onClick={()=>{navigate(item.id);setContext(null);}} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,padding:"4px 10px",background:"transparent",border:"none",cursor:"pointer",fontFamily:"inherit",color:isActive?C.primary:C.textFaint,fontSize:10,fontWeight:isActive?700:500}}>
        <div style={{width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",transform:isActive?"scale(1.15)":"scale(1)",transition:"transform 0.2s"}}><I n={item.icon} s={20} c={isActive?C.primary:C.textFaint} w={isActive?2.2:1.6}/></div>
        <span>{item.label}</span>{isActive&&<div style={{width:4,height:4,borderRadius:"50%",background:C.primary}}/>}
      </button>;})}
    </div>
  </div>;
}
