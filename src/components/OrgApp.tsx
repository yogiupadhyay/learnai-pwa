// @ts-nocheck
"use client";
import { useState, useRef } from "react";

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
};return icons[n]||null;};

const Card=({children,style,onClick})=> <div onClick={onClick} style={{background:C.card,borderRadius:16,padding:20,border:`1px solid ${C.border}`,...(onClick?{cursor:"pointer"}:{}),...style}}>{children}</div>;
const Pill=({text,color=C.primary,bg,icon})=> <span style={{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 12px",borderRadius:999,fontSize:12,fontWeight:600,background:bg||`${color}15`,color}}>{icon&&<I n={icon} s={13} c={color} w={2}/>}{text}</span>;
const Btn=({children,variant="primary",style,onClick,full,icon})=>{const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,height:44,padding:"0 20px",borderRadius:12,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit",border:"none",transition:"all 0.12s",...(full?{width:"100%"}:{})};const v={primary:{background:C.primary,color:"#fff"},soft:{background:C.primarySoft,color:C.primary},ghost:{background:"transparent",color:C.primary,border:`1.5px solid ${C.border}`},success:{background:C.success,color:"#fff"},warn:{background:C.warnSoft,color:C.warnDark},small:{height:34,padding:"0 12px",fontSize:12,borderRadius:8,background:C.primarySoft,color:C.primary}};return <button onClick={onClick} style={{...base,...v[variant],...style}}>{icon&&<I n={icon} s={16} c={v[variant]?.color||"#fff"} w={2}/>}{children}</button>;};
const Bar=({value,max=100,color=C.primary,h=6})=> <div style={{width:"100%",height:h,background:`${color}20`,borderRadius:h,overflow:"hidden"}}><div style={{width:`${Math.min((value/max)*100,100)}%`,height:"100%",background:color,borderRadius:h,transition:"width 0.5s"}}/></div>;
const Stat=({label,value,icon,color=C.primary,sub})=> <Card style={{padding:16,flex:1}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}><I n={icon} s={20} c={color}/>{sub&&<span style={{fontSize:11,color:sub.includes("+")?C.success:C.textMuted,fontWeight:600}}>{sub}</span>}</div><p style={{fontSize:22,fontWeight:800,color:C.text,margin:"0 0 2px"}}>{value}</p><p style={{fontSize:11,color:C.textMuted,margin:0}}>{label}</p></Card>;
const Avatar=({name,size=36,color=C.primary})=> <div style={{width:size,height:size,borderRadius:"50%",background:`${color}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:size*0.38,fontWeight:700,color,flexShrink:0}}>{name[0].toUpperCase()}</div>;
const Back=({onClick})=> <button onClick={onClick} style={{background:"transparent",border:"none",cursor:"pointer",padding:4,display:"flex",color:C.textMuted}}><I n="arrowL" s={22} c={C.textMuted}/></button>;

/* ============ DATA ============ */
const org={name:"Delhi Public School",logo:"DPS",tagline:"Excellence in Education since 1949",board:"CBSE",color:"#1E40AF",students:420,teachers:18,classes:14,activeRate:78};

const teachers=[
  {name:"Ms. Sharma",subject:"Science + Math",classes:["6-A","6-B","7-A"],students:90,classAvg:58,topTopic:"Temperature",weakTopic:"Convection",effectiveness:72,active:true},
  {name:"Mr. Patel",subject:"Science",classes:["6-A","8-B"],students:62,classAvg:65,topTopic:"Circuits",weakTopic:"Waves",effectiveness:78,active:true},
  {name:"Mrs. Singh",subject:"Math",classes:["7-A","7-B","8-A"],students:92,classAvg:55,topTopic:"Algebra",weakTopic:"Geometry",effectiveness:68,active:true},
  {name:"Mr. Verma",subject:"Science + Math",classes:["9-A","9-B"],students:64,classAvg:61,topTopic:"Mechanics",weakTopic:"Organic Chem",effectiveness:75,active:false},
];

const curriculum=[
  {name:"NCERT Science — Class 6",type:"Textbook",status:"indexed",pages:210,uploadedBy:"Admin"},
  {name:"NCERT Science — Class 7",type:"Textbook",status:"indexed",pages:240,uploadedBy:"Admin"},
  {name:"NCERT Science — Class 8",type:"Textbook",status:"indexed",pages:260,uploadedBy:"Admin"},
  {name:"NCERT Math — Class 6",type:"Textbook",status:"indexed",pages:290,uploadedBy:"Admin"},
  {name:"NCERT Math — Class 7",type:"Textbook",status:"indexed",pages:310,uploadedBy:"Admin"},
  {name:"NCERT Math — Class 8",type:"Textbook",status:"processing",pages:330,uploadedBy:"Admin"},
  {name:"CBSE Lab Manual — Science",type:"Reference",status:"indexed",pages:120,uploadedBy:"Admin"},
];

const classData=[
  {name:"Class 6-A",teacher:"Mr. Patel",students:32,mastery:65,active:28},
  {name:"Class 6-B",teacher:"Ms. Sharma",students:28,mastery:58,active:24},
  {name:"Class 7-A",teacher:"Ms. Sharma / Mrs. Singh",students:30,mastery:55,active:26},
  {name:"Class 7-B",teacher:"Mrs. Singh",students:30,mastery:52,active:22},
  {name:"Class 8-A",teacher:"Mrs. Singh",students:32,mastery:60,active:27},
  {name:"Class 8-B",teacher:"Mr. Patel",students:30,mastery:63,active:25},
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
      {classData.map((cl,i)=>{const mc=cl.mastery>=60?C.success:cl.mastery>=45?C.warn:C.error;return <Card key={i} style={{marginBottom:8,padding:14,display:"flex",alignItems:"center",gap:14}}>
        <div style={{width:40,textAlign:"center"}}><p style={{fontSize:18,fontWeight:800,color:mc,margin:0}}>{cl.mastery}%</p></div>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}><span style={{fontSize:13,fontWeight:600,color:C.text}}>{cl.name}</span><span style={{fontSize:11,color:C.textMuted}}>• {cl.teacher}</span></div>
          <Bar value={cl.mastery} color={mc} h={4}/>
          <p style={{fontSize:11,color:C.textMuted,margin:"4px 0 0"}}>{cl.active}/{cl.students} active</p>
        </div>
      </Card>;})}
    </div>

    {/* Quick actions */}
    <div><p style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>Quick actions</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        {[{label:"Upload books",icon:"upload",color:C.primary,screen:"curriculum"},{label:"Add teacher",icon:"plus",color:C.teal,screen:"teachers"},{label:"Branding",icon:"palette",color:C.accent,screen:"branding"},{label:"Analytics",icon:"chart",color:C.success,screen:"analytics"}].map(a=> <Card key={a.label} onClick={()=>navigate(a.screen)} style={{cursor:"pointer",padding:16,textAlign:"center"}}>
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

    {teachers.map((t,i)=> <Card key={i} style={{padding:16}}>
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

/* ============ CURRICULUM ============ */
const CurriculumScreen=({navigate})=> {
  return <div style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>Curriculum</h1><Btn variant="primary" icon="upload">Upload books</Btn></div>

    <Card style={{background:C.primarySoft,border:`1px solid ${C.primary}30`,padding:14,display:"flex",alignItems:"center",gap:10}}>
      <I n="shield" s={18} c={C.primary}/>
      <p style={{fontSize:12,color:C.primary,margin:0}}>Books uploaded here become the official curriculum. They power AI answers for all students and teachers in your institution.</p>
    </Card>

    <div style={{display:"flex",gap:8}}><Pill text={`${curriculum.filter(c=>c.status==="indexed").length} indexed`} color={C.success} icon="check"/><Pill text={`${curriculum.filter(c=>c.status==="processing").length} processing`} color={C.warn} icon="brain"/></div>

    {curriculum.map((b,i)=> <Card key={i} style={{padding:14,display:"flex",alignItems:"center",gap:14}}>
      <div style={{width:44,height:44,borderRadius:12,background:`${C.primary}12`,display:"flex",alignItems:"center",justifyContent:"center"}}><I n="book" s={22} c={C.primary}/></div>
      <div style={{flex:1}}>
        <p style={{fontSize:14,fontWeight:600,color:C.text,margin:0}}>{b.name}</p>
        <p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{b.type} • {b.pages} pages</p>
      </div>
      <Pill text={b.status==="indexed"?"Indexed":"Processing..."} color={b.status==="indexed"?C.success:C.warn} icon={b.status==="indexed"?"check":"brain"}/>
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
        {label:"Academic calendar",desc:"Exam dates, holidays, term schedule",icon:"calendar"},
        {label:"Board & curriculum",desc:"CBSE • Can be changed",icon:"book"},
        {label:"Data & privacy",desc:"Student data policy, COPPA compliance",icon:"shield"},
        {label:"Notifications",desc:"Who gets what alerts and when",icon:"bell"},
        {label:"Billing & subscription",desc:"School plan • Active",icon:"star"},
      ].map((item,i)=> <div key={i} onClick={item.screen?()=>navigate(item.screen):undefined} style={{display:"flex",alignItems:"center",gap:14,padding:"16px 20px",borderTop:i?`1px solid ${C.borderSoft}`:"none",cursor:item.screen?"pointer":"default"}}>
        <div style={{width:36,height:36,borderRadius:10,background:C.primarySoft,display:"flex",alignItems:"center",justifyContent:"center"}}><I n={item.icon} s={18} c={C.primary}/></div>
        <div style={{flex:1}}><p style={{fontSize:14,fontWeight:500,color:C.text,margin:0}}>{item.label}</p><p style={{fontSize:12,color:C.textMuted,margin:"2px 0 0"}}>{item.desc}</p></div>
        <I n="arrowR" s={16} c={C.textFaint}/>
      </div>)}
    </Card>
  </div>;
};

/* ============ APP SHELL ============ */
export default function OrgApp(){
  const[screen,setScreen]=useState("dashboard");
  const[context,setContext]=useState(null);
  const scrollRef=useRef(null);
  const navigate=(s,ctx)=>{setScreen(s);if(ctx!==undefined)setContext(ctx);scrollRef.current?.scrollTo(0,0);};

  const navItems=[{id:"dashboard",icon:"home",label:"Dashboard"},{id:"teachers",icon:"users",label:"Teachers"},{id:"curriculum",icon:"book",label:"Curriculum"},{id:"analytics",icon:"chart",label:"Analytics"},{id:"settings",icon:"settings",label:"Settings"}];
  const screens={dashboard:<DashboardScreen navigate={navigate}/>,teachers:<TeachersScreen navigate={navigate}/>,curriculum:<CurriculumScreen navigate={navigate}/>,branding:<BrandingScreen navigate={navigate}/>,analytics:<AnalyticsScreen navigate={navigate}/>,users:<UsersScreen navigate={navigate}/>,settings:<SettingsScreen navigate={navigate}/>};
  const activeNav=screen==="branding"?"settings":screen==="users"?"settings":screen;

  return <div style={{fontFamily:'"Inter",-apple-system,sans-serif',maxWidth:"100%",margin:"0 auto",background:C.bg,minHeight:"100vh",display:"flex",flexDirection:"column",borderRadius:0,overflow:"hidden",boxShadow:"none",position:"relative"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px 10px",background:C.card,borderBottom:`1px solid ${C.border}`}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:34,height:34,borderRadius:10,background:org.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,color:"#fff"}}>{org.logo}</div>
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
