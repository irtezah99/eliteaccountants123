const {ShcNav:CmpNav}=window.SHCSectionsA;
const {ShcStats:CmpStats,ShcFinalCta:CmpFinalCta,ShcNewsletter:CmpNewsletter,ShcFooter:CmpFooter}=window.SHCSectionsC;
const PageHeader=window.SHCPageHeader;

function ShcOurStory(){
return React.createElement("div",{style:{position:"relative",background:"linear-gradient(180deg,var(--navy-950),var(--navy-900) 60%,var(--navy-950))",overflow:"hidden"}},
React.createElement("div",{style:{position:"absolute",top:"-120px",left:"50%",transform:"translateX(-50%)",width:700,height:700,background:"radial-gradient(circle,rgba(224,20,44,.28),transparent 70%)",filter:"blur(10px)",pointerEvents:"none"}}),
React.createElement("div",{style:{position:"relative",maxWidth:"var(--content-max)",margin:"0 auto",padding:"96px 24px",marginTop:"-0.5in"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:40}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"Our Story"),
React.createElement("div",{style:{fontSize:44,fontWeight:700,color:"#fff"}},"An ",React.createElement("span",{className:"font-alice",style:{color:"#E63A2E"}},"Elite")," Standard, Built Through Experience")),
React.createElement("div",{className:"shc-reveal",style:{fontSize:18,lineHeight:1.7,color:"var(--on-dark-mute)",maxWidth:760,margin:"0 auto 48px",textAlign:"center"}},
React.createElement("p",{style:{margin:"0 0 16px"}},"Elite Accountants was established in 2007 with a simple vision: to provide honest, reliable and strategic financial advice that empowers individuals and businesses to thrive."),
React.createElement("p",{style:{margin:0}},"Over the past two decades, we've earned the trust of thousands of clients across Sydney by delivering personalised accounting services built on professionalism, integrity and measurable results.")),
React.createElement("div",{className:"shc-grid-2",style:{gap:"0.25in",padding:"0 0.25in"}},
React.createElement("div",{className:"shc-reveal shc-hover-lift",style:{background:"var(--canvas)",border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",padding:32,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:16}},
React.createElement("div",{style:{width:56,height:56,flexShrink:0,borderRadius:"50%",background:"var(--sky-blue-pale)",color:"var(--sky-blue-dark)",display:"flex",alignItems:"center",justifyContent:"center"}},
React.createElement(window.ShcIcon,{name:"badge",size:28})),
React.createElement("div",null,
React.createElement("div",{style:{fontWeight:700,fontSize:20,marginBottom:12,color:"var(--sky-blue)"}},"Our Mission"),
React.createElement("div",{style:{fontSize:16,lineHeight:1.6,color:"var(--body)"}},"To provide trusted accounting and strategic financial advice that creates lasting value for every client."))),
React.createElement("div",{className:"shc-reveal shc-hover-lift",style:{background:"var(--canvas)",border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",padding:32,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:16,transitionDelay:"80ms"}},
React.createElement("div",{style:{width:56,height:56,flexShrink:0,borderRadius:"50%",background:"var(--sky-blue-pale)",color:"var(--sky-blue-dark)",display:"flex",alignItems:"center",justifyContent:"center"}},
React.createElement(window.ShcIcon,{name:"target",size:28})),
React.createElement("div",null,
React.createElement("div",{style:{fontWeight:700,fontSize:20,marginBottom:12,color:"var(--sky-blue)"}},"Our Vision"),
React.createElement("div",{style:{fontSize:16,lineHeight:1.6,color:"var(--body)"}},"To become Sydney's most respected tax and accounting advisory firm by combining professional excellence with innovative financial solutions."))))
));}

function ShcFounder(){
return React.createElement("div",{style:{background:"var(--surface-soft)",padding:"var(--space-section) 24px"}},
React.createElement("div",{style:{maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:40}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"Leadership"),
React.createElement("div",{style:{fontSize:36,fontWeight:700}},"The Man Behind The Success")),
React.createElement("div",{className:"shc-grid-2 shc-founder-grid",style:{gap:"48px",alignItems:"center"}},
React.createElement("div",{className:"shc-reveal shc-founder-col",style:{display:"flex",flexDirection:"column"}},
React.createElement("div",{style:{aspectRatio:"3/4",borderRadius:"var(--radius-sm)",overflow:"hidden",background:"var(--surface-soft)"}},
React.createElement("image-slot",{id:"founder-photo",class:"shc-founder-tone",shape:"rect",fit:"contain",placeholder:"Drop a photo of Mr. Farhat Jaffri",src:"uploads/farhat-jaffri-red-tie.png",style:{width:"100%",height:"100%"}})),
React.createElement("div",{className:"font-alice",style:{color:"#000",fontSize:22,textAlign:"center",marginTop:12}},"Mr. Farhat Jaffri")),
React.createElement("div",{className:"shc-reveal shc-founder-text",style:{fontSize:16,lineHeight:1.7,color:"var(--body)",transitionDelay:"80ms"}},
React.createElement("p",{style:{margin:"0 0 0.5in"}},"Mr. Farhat Jaffri, Director of Elite Accountants, is a Certified Chartered Accountant by (CPA)...... He is also Director of Presto Homes (prestohomes.com.au) and CEO of FJ Group of Companies."),
React.createElement("p",{style:{margin:"0 0 0.5in"}},"He is also recognised as one of Sydney's most dynamic community figures, regularly organising events that represent and entertain the Pakistani community across Sydney, NSW."),
React.createElement("p",{style:{margin:0}},"An avid cricketer with experience in Karachi, Pakistan's domestic circuit, he now shares his expertise as a Cricket Analyst during major international events."))
)));}

function ShcEvolution(){
const milestones=[["2007","The Foundation","Established in Sydney, Elite Accountants opens with a mission to bring corporate-grade strategy to small and mid-size businesses."],["2016","Expansion","Moved to our flagship Bankstown headquarters, tripling capacity to serve a rapidly growing, high-value client base."],["Today","The Digital Era","Leading the industry with AI-driven predictive tax modelling and cloud-first reporting ecosystems for global stakeholders."]];
return React.createElement("div",{style:{padding:"var(--space-section) 24px",maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:48}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"Our Evolution"),
React.createElement("div",{style:{fontSize:36,fontWeight:700}},"Milestones In Our Financial Excellence")),
React.createElement("div",{className:"shc-process-row"},
milestones.map((m,i)=>React.createElement(React.Fragment,{key:i},
React.createElement("div",{className:"shc-reveal shc-process-step",style:{transitionDelay:i*80+"ms",textAlign:"center"}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,color:"var(--sky-blue)",marginBottom:8}},m[0]),
React.createElement("div",{style:{fontWeight:700,fontSize:18,marginBottom:8}},m[1]),
React.createElement("div",{style:{fontSize:15,color:"var(--body)",lineHeight:1.5}},m[2])),
i<milestones.length-1&&React.createElement("div",{className:"shc-process-connector"})
))
));}

function AboutApp(){
React.useEffect(()=>{
document.body.classList.add("shc-armed");
const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("shc-in");});},{threshold:.15});
document.querySelectorAll(".shc-reveal").forEach(el=>obs.observe(el));
return ()=>obs.disconnect();
},[]);
return React.createElement("div",null,
React.createElement(CmpNav,null),
React.createElement(ShcOurStory,null),
React.createElement(ShcFounder,null),
React.createElement(ShcEvolution,null),
React.createElement(CmpStats,null),
React.createElement(CmpFinalCta,null),
React.createElement(CmpNewsletter,null),
React.createElement(CmpFooter,null)
);}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(AboutApp,null));
