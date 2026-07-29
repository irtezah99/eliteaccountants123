const DSB=window.SkyHighAccountantsDesignSystem_48a5c0;
const FeatureCardB=DSB.FeatureCard;
const ButtonB=DSB.Button;
const D2=window.SHC_DATA;

function ShcWhyChoose(){
return React.createElement("div",{style:{background:"radial-gradient(ellipse 900px 500px at 88% 0%,rgba(224,20,44,.07),transparent 60%),radial-gradient(ellipse 900px 500px at 8% 100%,rgba(224,20,44,.05),transparent 60%),var(--surface-soft)",padding:"var(--space-section) 24px"}},
React.createElement("div",{style:{maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:48}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"Why Elite Accountants?"),
React.createElement("div",{style:{fontSize:36,fontWeight:700}},"Trusted Guidance To Avoid Surprises")),
React.createElement("div",{className:"shc-grid-3"},
D2.whyChoose.map((w,i)=>React.createElement("div",{key:i,className:"shc-reveal shc-hover-lift",style:{transitionDelay:(i%3)*60+"ms"}},React.createElement(FeatureCardB,{icon:React.createElement(window.ShcIcon,{name:window.SHC_ICON_MAP[w.title],size:26}),title:w.title,description:w.description})))
)));}

function ShcProcess(){
return React.createElement("div",{style:{padding:"var(--space-section) 24px",maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:40}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"Our Process"),
React.createElement("div",{style:{fontSize:36,fontWeight:700}},"A Clear Path To Ongoing Support")),
React.createElement("div",{className:"shc-process-row"},
D2.process.map((p,i)=>React.createElement(React.Fragment,{key:i},
React.createElement("div",{className:"shc-reveal shc-process-step",style:{transitionDelay:i*80+"ms",textAlign:"center"}},
React.createElement("div",{style:{width:48,height:48,borderRadius:"50%",background:"var(--sky-blue)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16,marginBottom:16,marginLeft:"auto",marginRight:"auto"}},p.step),
React.createElement("div",{style:{fontWeight:700,fontSize:18}},p.title)),
i<D2.process.length-1&&React.createElement("div",{className:"shc-process-connector"})
))
),
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginTop:40}},
React.createElement(ButtonB,{variant:"primary",size:"lg"},"Processes In Detail"))
);}

function ShcDashCard({title,kind}){
const bars=[30,50,42,64,55,70];
const donut="conic-gradient(var(--sky-blue) 0 62%, var(--navy-800) 62% 100%)";
return React.createElement("div",{className:"shc-reveal shc-hover-lift",style:{background:"var(--surface-elevated)",border:"1px solid var(--hairline-strong)",borderRadius:"var(--radius-sm)",padding:24,display:"flex",flexDirection:"column",gap:16,minHeight:200}},
React.createElement("div",{style:{color:"#fff",fontWeight:700,fontSize:16}},title),
kind==="bars"&&React.createElement("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,flex:1}},bars.map((h,i)=>React.createElement("div",{key:i,style:{flex:1,height:h+"%",background:"var(--sky-blue)",opacity:.5+i*0.08,borderRadius:2}}))),
kind==="donut"&&React.createElement("div",{style:{display:"flex",alignItems:"center",gap:20,flex:1}},React.createElement("div",{style:{width:88,height:88,borderRadius:"50%",background:donut}}),React.createElement("div",null,React.createElement("div",{style:{color:"var(--sky-blue-pale)",fontSize:24,fontWeight:700}},"62%"),React.createElement("div",{style:{color:"var(--on-dark-mute)",fontSize:13}},"effective rate reduced")) ),
kind==="line"&&React.createElement("svg",{viewBox:"0 0 200 70",style:{width:"100%",height:80,flex:1}},React.createElement("polyline",{points:"0,55 30,40 60,48 90,25 120,32 150,12 200,18",fill:"none",stroke:"var(--sky-blue)",strokeWidth:"3"})),
kind==="list"&&React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:10,flex:1,justifyContent:"center"}},["Payroll","Software","Rent","Contractors"].map((l,i)=>React.createElement("div",{key:i,style:{display:"flex",justifyContent:"space-between",fontSize:14,color:"var(--on-dark-mute)"}},React.createElement("span",null,l),React.createElement("span",{style:{color:"#fff",fontWeight:700}},["$18,400","$4,120","$9,800","$12,650"][i])))),
kind==="doc"&&React.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:8,justifyContent:"center"}},[1,2,3].map((n,i)=>React.createElement("div",{key:i,style:{height:8,borderRadius:2,background:"var(--hairline-strong)",width:100-i*18+"%"}}))),
kind==="profit"&&React.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:10,flex:1}},React.createElement("div",{style:{fontSize:32,fontWeight:700,color:"#fff"}},"+22.4%"),React.createElement("div",{style:{color:"var(--sky-blue-pale)",fontSize:14}},"YoY profit growth"))
);}

function ShcDashboardShowcase(){
return React.createElement("div",{style:{position:"relative",background:"linear-gradient(180deg,var(--navy-950),var(--navy-900))",padding:"var(--space-section) 24px",overflow:"hidden"}},
React.createElement("div",{style:{position:"absolute",bottom:"-160px",right:"-80px",width:600,height:600,background:"radial-gradient(circle,rgba(224,20,44,.22),transparent 70%)",pointerEvents:"none"}}),
React.createElement("div",{style:{position:"relative",maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:48}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue-pale)",marginBottom:12}},"Your Numbers, In Real Time"),
React.createElement("div",{style:{fontSize:36,fontWeight:700,color:"#fff",marginBottom:12}},"A Dashboard For Confident Decisions"),
React.createElement("div",{style:{fontSize:18,color:"var(--on-dark-mute)",maxWidth:640,margin:"0 auto"}},"Every engagement includes live visibility into the metrics that matter — no waiting on a monthly export.")),
React.createElement("div",{className:"shc-grid-3"},
React.createElement(ShcDashCard,{title:"Cash Flow",kind:"bars"}),
React.createElement(ShcDashCard,{title:"Tax Planning",kind:"donut"}),
React.createElement(ShcDashCard,{title:"Revenue",kind:"line"}),
React.createElement(ShcDashCard,{title:"Expenses",kind:"list"}),
React.createElement(ShcDashCard,{title:"Profit Analysis",kind:"profit"}),
React.createElement(ShcDashCard,{title:"Financial Reporting",kind:"doc"})
)));}

function ShcIndustries(){
return React.createElement("div",{style:{padding:"var(--space-section) 24px",background:"radial-gradient(rgba(224,20,44,.14) 1.5px,transparent 1.5px),radial-gradient(ellipse 900px 500px at 8% 0%,rgba(224,20,44,.06),transparent 60%),radial-gradient(ellipse 900px 500px at 92% 100%,rgba(224,20,44,.07),transparent 60%),#faf9f6",backgroundSize:"20px 20px, auto, auto, auto"}},
React.createElement("div",{style:{maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:48}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"Industries We Serve"),
React.createElement("div",{style:{fontSize:36,fontWeight:700}},"Specialised Accounting For Every Industry")),
React.createElement("div",{className:"shc-grid-3"},
D2.industries.map((ind,i)=>React.createElement("div",{key:i,className:"shc-reveal shc-hover-lift",style:{transitionDelay:(i%3)*60+"ms"}},React.createElement(FeatureCardB,{icon:React.createElement(window.ShcIcon,{name:window.SHC_ICON_MAP[ind.title],size:26}),title:ind.title,description:ind.description})))
)));}

function ShcImageShowcase(){
return React.createElement("div",{style:{padding:"var(--space-section) 24px",maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-grid-2"},
React.createElement("div",{className:"shc-reveal shc-hover-lift",style:{background:"var(--canvas)",border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",overflow:"hidden",display:"flex",flexDirection:"column"}},
React.createElement("div",{style:{aspectRatio:"16/9",flex:"0 0 auto"}},React.createElement("image-slot",{id:"office-image",shape:"rect",fit:"cover",placeholder:"Drop an office / team photo",style:{width:"100%",height:"100%"}})),
React.createElement("div",{style:{padding:20,flex:1}},React.createElement("div",{style:{fontWeight:700,fontSize:18,marginBottom:4}},"A Team That Feels Like Your Own"),React.createElement("div",{style:{fontSize:15,color:"var(--body)"}},"Real accountants, dedicated to your business, working from wherever you need them."))),
React.createElement("div",{className:"shc-reveal shc-hover-lift",style:{background:"var(--canvas)",border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",overflow:"hidden",transitionDelay:"80ms",display:"flex",flexDirection:"column"}},
React.createElement("div",{style:{aspectRatio:"16/9",flex:"0 0 auto"}},React.createElement("image-slot",{id:"financial-data-image",className:"shc-cinematic-strong",shape:"rect",placeholder:"Drop a financial data / reporting photo",src:"uploads/ChatGPT Image Jul 28, 2026, 04_50_47 PM (1).png",style:{width:"100%",height:"100%"}})),
React.createElement("div",{style:{padding:20,flex:1}},React.createElement("div",{style:{fontWeight:700,fontSize:18,marginBottom:4}},"Financials You Can Actually Read And Trust"),React.createElement("div",{style:{fontSize:15,color:"var(--body)"}},"Clean reporting that turns raw numbers into decisions your whole team can act on.")))
));}

window.SHCSectionsB={ShcWhyChoose,ShcProcess,ShcDashboardShowcase,ShcIndustries,ShcImageShowcase};
