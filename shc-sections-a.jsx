const DSA=window.SkyHighAccountantsDesignSystem_48a5c0;
const ButtonA=DSA.Button;
const FeatureCardA=DSA.FeatureCard;
const D=window.SHC_DATA;

function ShcIcon({name,size}){
return React.createElement("span",{style:{display:"inline-flex",width:size||22,height:size||22},dangerouslySetInnerHTML:{__html:window.SHC_ICONS[name]||""}});
}
window.ShcIcon=ShcIcon;

function ShcNav(){
const [open,setOpen]=React.useState(false);
const links=[["Home","index.html"],["About Us","About Us.html"],["Services","Services.html"],["Contact Us","Contact Us.html"]];
const current=typeof window!=="undefined"?decodeURIComponent(window.location.pathname.split("/").pop()):"";
const isActive=(href)=>current===href||((current===""||current==="index.html")&&href==="index.html");
return React.createElement("div",{style:{position:"sticky",top:0,zIndex:50,fontFamily:"var(--font-sans)"}},
React.createElement("div",{style:{background:"var(--surface-dark)",color:"#fff",height:104,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",borderBottom:"1px solid var(--hairline-strong)"}},
React.createElement("img",{src:"uploads/ChatGPT_Image_Jul_21__2026__11_36_44_PM-removebg-preview-f7c83e54.png",alt:"Elite Accountants",style:{height:96}}),
React.createElement("div",{className:"shc-nav-links",style:{display:"flex",gap:32,fontSize:14,fontWeight:400}},
links.map(([t,href],i)=>React.createElement("a",{key:i,href,className:"shc-link",style:{color:isActive(href)?"var(--sky-blue)":"inherit",fontWeight:isActive(href)?700:400,textDecoration:"none"}},t))),
React.createElement("div",{className:"shc-nav-cta",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6}},
React.createElement("a",{href:"Contact Us.html",className:"shc-link",style:{fontSize:12,color:"inherit",textDecoration:"none"}},"Login"),
React.createElement("a",{href:"Contact Us.html",style:{textDecoration:"none"}},React.createElement(ButtonA,{variant:"primary",size:"sm"},"Book a Consultation"))),
React.createElement("button",{className:"shc-nav-toggle","aria-label":"Menu",onClick:()=>setOpen(!open),style:{display:"none",background:"none",border:"1px solid var(--hairline-strong)",borderRadius:"var(--radius-sm)",color:"#fff",width:40,height:40,fontSize:18}},open?"✕":"☰")),
open&&React.createElement("div",{style:{background:"var(--surface-dark)",borderBottom:"1px solid var(--hairline-strong)",padding:"12px 24px 20px",display:"flex",flexDirection:"column",gap:14,color:"#fff"}},
links.map(([t,href],i)=>React.createElement("a",{key:i,href,className:"shc-link",style:{fontSize:16,fontWeight:700,color:isActive(href)?"var(--sky-blue)":"#fff",textDecoration:"none"}},t)),
React.createElement("a",{href:"Contact Us.html",style:{textDecoration:"none"}},React.createElement(ButtonA,{variant:"primary",size:"sm"},"Book a Consultation")))
);}

function ShcDashPreview(){
return React.createElement("div",{style:{position:"relative"}},
React.createElement("div",{className:"shc-reveal",style:{position:"relative",background:"linear-gradient(160deg,var(--surface-elevated),var(--navy-800))",border:"1px solid var(--hairline-strong)",borderRadius:"var(--radius-sm)",padding:12,boxShadow:"0 40px 80px -20px rgba(0,0,0,.5)",aspectRatio:"4/3",display:"flex",overflow:"hidden"}},
React.createElement("image-slot",{id:"hero-dashboard-image",shape:"rounded",radius:"6",placeholder:"Drop your financial dashboard / cash flow image",style:{width:"100%",height:"100%"}})
)
);}

function ShcHero(){
return React.createElement("div",{style:{position:"relative",background:"linear-gradient(180deg,var(--navy-950),var(--navy-900) 60%,var(--navy-950))",overflow:"hidden"}},
React.createElement("div",{className:"shc-float-slow",style:{position:"absolute",top:"5%",left:"8%",width:280,height:280,background:"radial-gradient(circle,rgba(224,20,44,.4),transparent 70%)",filter:"blur(16px)",pointerEvents:"none"}}),
React.createElement("div",{className:"shc-float",style:{position:"absolute",bottom:"10%",right:"6%",width:340,height:340,background:"radial-gradient(circle,rgba(224,20,44,.32),transparent 70%)",filter:"blur(16px)",pointerEvents:"none"}}),
React.createElement("div",{style:{position:"absolute",top:"-120px",left:"50%",transform:"translateX(-50%)",width:700,height:700,background:"radial-gradient(circle,rgba(224,20,44,.28),transparent 70%)",filter:"blur(10px)",pointerEvents:"none"}}),
React.createElement("div",{style:{position:"relative",maxWidth:"var(--content-max)",margin:"0 auto",padding:"48px 24px 56px"},className:"shc-hero-grid"},
React.createElement("div",{className:"shc-reveal",style:{position:"relative"}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".04em",color:"var(--sky-blue)",marginBottom:4}},"Established in 2007"),
React.createElement("div",{style:{fontSize:44,fontWeight:700,lineHeight:1.15,color:"#fff",marginBottom:20}},React.createElement("span",{className:"font-alice",style:{color:"#E63A2E"}},"Elite")," Accountants",React.createElement("br",null),React.createElement("span",{className:"shc-hero-tagline",style:{display:"inline-block"}},"Strategic Business Advisors")),
React.createElement("div",{className:"shc-hero-inner",style:{position:"relative",display:"flex",gap:"48px",alignItems:"center",justifyContent:"space-between",marginTop:32,marginBottom:32}},
React.createElement("div",{style:{fontSize:20,lineHeight:1.6,color:"var(--on-dark-mute)",flex:"1 1 320px",maxWidth:480}},"Elite Accountants has become one of the most trusted accounting and taxation firms in Sydney by way of its integrity, expertise and personalised service. Being Registered Tax Practitioners they are providing expert financial services to individuals, entrepreneurs and businesses to make smarter financial decisions with confidence."),
React.createElement("div",{className:"shc-hero-photo",style:{position:"relative",flexShrink:0,width:420,maxWidth:"100%",height:400}},
React.createElement("div",{className:"shc-reveal shc-kenburns",style:{width:"100%",height:"100%",overflow:"hidden",background:"var(--surface-elevated)",border:"1px solid var(--hairline-strong)",WebkitMaskImage:"radial-gradient(ellipse 70% 70% at center,#000 40%,transparent 95%)",maskImage:"radial-gradient(ellipse 70% 70% at center,#000 40%,transparent 95%)"}},
React.createElement("image-slot",{id:"hero-office-photo-main",shape:"rect",fit:"contain",placeholder:"Drop a photo of your team at work in the office",src:"uploads/hero-office-nologo.png",style:{width:"100%",height:"100%"}})))),
React.createElement("div",{style:{display:"flex",gap:16,marginTop:56,marginBottom:40,flexWrap:"wrap",justifyContent:"center",width:"100%"}},
React.createElement(ButtonA,{variant:"primary",size:"lg"},"Talk to an Accountant"))
)));}

function ShcTrustedBy(){
const track=[...D.logos,...D.logos];
return React.createElement("div",{style:{background:"var(--canvas)",padding:"var(--space-section) 0",borderBottom:"1px solid var(--hairline)"}},
React.createElement("div",{style:{textAlign:"center",fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:28}},"Trusted By Sydney's Growing Businesses"),
React.createElement("div",{className:"shc-marquee-mask"},
React.createElement("div",{className:"shc-marquee-track"},
track.map((l,i)=>React.createElement("span",{key:i,style:{fontSize:20,fontWeight:700,color:"var(--stone)",padding:"0 40px",whiteSpace:"nowrap"}},l)))
));}

function ShcServices(){
return React.createElement("div",{style:{padding:"var(--space-section) 24px",background:"radial-gradient(rgba(224,20,44,.14) 1.5px,transparent 1.5px),radial-gradient(ellipse 900px 500px at 12% 0%,rgba(224,20,44,.07),transparent 60%),radial-gradient(ellipse 900px 500px at 88% 100%,rgba(224,20,44,.06),transparent 60%),#faf9f6",backgroundSize:"20px 20px, auto, auto, auto"}},
React.createElement("div",{style:{maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:48}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"Services"),
React.createElement("div",{style:{fontSize:36,fontWeight:700,marginBottom:12}},"Everything Your Finances Need"),
React.createElement("div",{style:{fontSize:18,color:"var(--body)",maxWidth:640,margin:"0 auto"}},"From day-to-day bookkeeping to boardroom-ready strategy — a full accounting practice built around your business.")),
React.createElement("div",{className:"shc-services-grid"},
D.services.map((s,i)=>React.createElement("div",{key:i,className:"shc-reveal shc-hover-lift",style:{transitionDelay:(i%5)*60+"ms",background:"var(--canvas)",border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",padding:"20px 16px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:10}},
React.createElement("div",{style:{color:"var(--sky-blue)",position:"relative",display:"inline-flex"}},["VAT Services","Business Growth Consultation"].includes(s.title)&&React.createElement("div",{style:{position:"absolute",inset:-8,background:"radial-gradient(circle,rgba(224,20,44,.35),transparent 70%)",filter:"blur(6px)",zIndex:0}}),React.createElement("div",{style:{position:"relative",zIndex:1}},React.createElement(ShcIcon,{name:window.SHC_ICON_MAP[s.title]}))),
React.createElement("div",{style:{fontWeight:700,fontSize:15}},s.title)))
),
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginTop:40,display:"flex",justifyContent:"center"}},
React.createElement(ButtonA,{variant:"primary",size:"lg"},"Services In Detail"))
));}

function ShcCredibilityStrip(){
return React.createElement("div",{style:{position:"relative",background:"linear-gradient(180deg,var(--navy-950),var(--navy-800) 60%,var(--sky-blue-dark))",padding:"var(--space-section) 24px",overflow:"hidden"}},
React.createElement("div",{style:{position:"absolute",top:"-100px",left:"50%",transform:"translateX(-50%)",width:600,height:600,background:"radial-gradient(circle,rgba(224,20,44,.28),transparent 70%)",pointerEvents:"none"}}),
React.createElement("div",{className:"shc-reveal",style:{position:"relative",maxWidth:720,margin:"0 auto",textAlign:"center"}},
React.createElement("div",{style:{fontSize:32,fontWeight:700,color:"#fff",marginBottom:16,lineHeight:1.25}},"Precision You Can Rely On"),
React.createElement("div",{style:{fontSize:17,lineHeight:1.7,color:"var(--on-dark-mute)"}},"Our professional and experienced team brings verified accuracy, meets deadlines, and provides advice grounded in real financial analysis — the trusted choice for passionate businesses.")));}

function ShcServicesDetailed(){
return React.createElement("div",{style:{padding:"var(--space-section) 24px",background:"radial-gradient(rgba(224,20,44,.14) 1.5px,transparent 1.5px),radial-gradient(ellipse 900px 500px at 12% 0%,rgba(224,20,44,.07),transparent 60%),radial-gradient(ellipse 900px 500px at 88% 100%,rgba(224,20,44,.06),transparent 60%),#faf9f6",backgroundSize:"20px 20px, auto, auto, auto"}},
React.createElement("div",{style:{maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-grid-3"},
D.servicesDetailed.map((s,i)=>React.createElement("div",{key:i,className:"shc-reveal shc-hover-lift",style:{transitionDelay:(i%3)*60+"ms",background:"var(--canvas)",border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",padding:28,display:"flex",flexDirection:"column",gap:12,alignSelf:"start"}},
React.createElement("div",{style:{color:"var(--sky-blue)",position:"relative",display:"inline-flex"}},["VAT Services","Business Growth Consultation"].includes(s.title)&&React.createElement("div",{style:{position:"absolute",inset:-8,background:"radial-gradient(circle,rgba(224,20,44,.35),transparent 70%)",filter:"blur(6px)",zIndex:0}}),React.createElement("div",{style:{position:"relative",zIndex:1}},React.createElement(ShcIcon,{name:window.SHC_ICON_MAP[s.title],size:26}))),
React.createElement("div",{style:{fontWeight:700,fontSize:18}},s.title),
React.createElement("div",{style:{fontSize:15,lineHeight:1.6,color:"var(--body)"}},s.description))),
React.createElement("div",{className:"shc-reveal shc-hover-lift",style:{borderRadius:"var(--radius-sm)",overflow:"hidden",gridColumn:"span 2",aspectRatio:"16/9"}},
React.createElement("image-slot",{id:"services-page-image-2",class:"shc-cinematic-strong",shape:"rect",fit:"cover",placeholder:"Drop a photo here",src:"uploads/ChatGPT Image Jul 28, 2026, 05_07_38 PM (1).png",style:{width:"100%",height:"100%"}}))
)));}

function ShcProcessDetailed(){
return React.createElement("div",{style:{padding:"var(--space-section) 24px",maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:40}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"Our Process"),
React.createElement("div",{style:{fontSize:36,fontWeight:700}},"A Clear Path To Ongoing Support")),
React.createElement("div",{className:"shc-process-row"},
D.process.map((p,i)=>React.createElement(React.Fragment,{key:i},
React.createElement("div",{className:"shc-reveal shc-process-step",style:{transitionDelay:i*80+"ms",textAlign:"center"}},
React.createElement("div",{style:{width:48,height:48,borderRadius:"50%",background:"var(--sky-blue)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16,marginBottom:16,marginLeft:"auto",marginRight:"auto"}},p.step),
React.createElement("div",{style:{fontWeight:700,fontSize:18,marginBottom:8}},p.title),
React.createElement("div",{style:{fontSize:15,color:"var(--body)",lineHeight:1.5}},p.description)),
i<D.process.length-1&&React.createElement("div",{className:"shc-process-connector"})
))
));}

function ShcServicesClosing(){
return React.createElement("div",{style:{position:"relative",background:"linear-gradient(135deg,var(--navy-950),var(--navy-800))",padding:"var(--space-section) 24px",overflow:"hidden"}},
React.createElement("div",{style:{position:"absolute",top:"-100px",left:"50%",transform:"translateX(-50%)",width:600,height:600,background:"radial-gradient(circle,rgba(224,20,44,.3),transparent 70%)",pointerEvents:"none"}}),
React.createElement("div",{style:{position:"relative",maxWidth:"var(--content-max)",margin:"0 auto",display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:48,alignItems:"center"},className:"shc-hero-grid"},
React.createElement("div",{style:{textAlign:"left"}},
React.createElement("div",{className:"shc-reveal",style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:4}},"A Complete Accounting Practice"),
React.createElement("div",{className:"shc-reveal",style:{fontSize:32,fontWeight:700,marginBottom:20,color:"#fff"}},"One Trusted Partner For Your Business"),
React.createElement("div",{className:"shc-reveal",style:{fontSize:18,lineHeight:1.7,color:"var(--on-dark-mute)"}},"Whether you're registering a new entity, lodging a tax return, or planning your next stage of growth, our team brings the same precision and accountability to every engagement — so you always know exactly where your business stands.")),
React.createElement("div",{className:"shc-reveal",style:{aspectRatio:"4/3",borderRadius:"var(--radius-sm)",overflow:"hidden"}},
React.createElement("image-slot",{id:"services-closing-image",class:"shc-cinematic-strong",shape:"rect",fit:"cover",placeholder:"Drop a photo here",src:"uploads/ChatGPT Image Jul 28, 2026, 04_47_03 PM (1).png",style:{width:"100%",height:"100%"}}))
));}

window.SHCSectionsA={ShcNav,ShcHero,ShcTrustedBy,ShcServices,ShcCredibilityStrip,ShcServicesDetailed,ShcProcessDetailed,ShcServicesClosing};
