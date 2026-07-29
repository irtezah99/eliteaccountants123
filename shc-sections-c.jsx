const DSC=window.SkyHighAccountantsDesignSystem_48a5c0;
const ButtonC=DSC.Button;
const TextInputC=DSC.TextInput;
const D3=window.SHC_DATA;

function ShcTestimonials(){
const trackRef=React.useRef(null);
const scroll=(dir)=>{const el=trackRef.current;if(el)el.scrollBy({left:dir*340,behavior:"smooth"});};
return React.createElement("div",{style:{background:"var(--surface-soft)",padding:"var(--space-section) 24px"}},
React.createElement("div",{style:{maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:48}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"Client Stories"),
React.createElement("div",{style:{fontSize:36,fontWeight:700}},"Trusted By The Businesses We Serve")),
React.createElement("div",{style:{position:"relative",padding:"0 56px"}},
React.createElement("div",{ref:trackRef,className:"shc-testimonial-track"},
D3.testimonials.map((t,i)=>React.createElement("div",{key:i,className:"shc-reveal shc-hover-lift shc-testimonial-card",style:{background:"var(--canvas)",border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",padding:28,display:"flex",flexDirection:"column",gap:16,transitionDelay:(i%3)*80+"ms"}},
React.createElement("div",{style:{color:"var(--sky-blue)",fontSize:16,letterSpacing:2}},"★★★★★".slice(0,t.rating)),
React.createElement("div",{style:{fontSize:16,color:"var(--body)",lineHeight:1.6,flex:1}},"\u201C"+t.quote+"\u201D"),
React.createElement("div",{style:{display:"flex",alignItems:"center",gap:12,borderTop:"1px solid var(--hairline)",paddingTop:16}},
React.createElement("div",{style:{width:40,height:40,borderRadius:"50%",background:"var(--sky-blue-pale)",color:"var(--sky-blue-dark)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:14,flexShrink:0}},t.name.split(" ").map(n=>n[0]).join("")),
React.createElement("div",null,React.createElement("div",{style:{fontWeight:700,fontSize:15}},t.name),React.createElement("div",{style:{fontSize:13,color:"var(--mute)"}},t.company)))
))),
React.createElement("button",{onClick:()=>scroll(-1),"aria-label":"Previous",style:{position:"absolute",left:0,top:"50%",transform:"translateY(-50%)",width:44,height:44,borderRadius:"50%",border:"1px solid var(--hairline-strong)",background:"var(--canvas)",fontSize:18,cursor:"pointer",boxShadow:"0 8px 24px -8px rgba(11,30,51,.25)"}},"‹"),
React.createElement("button",{onClick:()=>scroll(1),"aria-label":"Next",style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",width:44,height:44,borderRadius:"50%",border:"1px solid var(--hairline-strong)",background:"var(--canvas)",fontSize:18,cursor:"pointer",boxShadow:"0 8px 24px -8px rgba(11,30,51,.25)"}},"›")
)));}

function ShcStatCounter({value,prefix,suffix,label}){
const ref=React.useRef(null);
const [n,setN]=React.useState(0);
React.useEffect(()=>{
const el=ref.current;
let done=false;
function run(){
if(done)return;
done=true;
const start=Date.now(),dur=1400;
function tick(){
const p=Math.min(1,(Date.now()-start)/dur);
const eased=1-Math.pow(1-p,3);
setN(Math.round(value*eased));
if(p<1)setTimeout(tick,16);
}
tick();
obs.disconnect();
}
const obs=new IntersectionObserver((entries)=>{if(entries[0].isIntersecting)run();},{threshold:.4});
if(el)obs.observe(el);
const fallback=setTimeout(run,1200);
return ()=>{obs.disconnect();clearTimeout(fallback);};
},[value]);
return React.createElement("div",{ref,style:{background:"var(--canvas)",border:"1px solid var(--hairline)",padding:20,borderRadius:"var(--radius-sm)"}},
React.createElement("div",{style:{fontSize:26,fontWeight:700,color:"var(--sky-blue)",lineHeight:1.2}},(prefix||"")+n.toLocaleString()+(suffix||"")),
React.createElement("div",{style:{fontSize:13,color:"var(--body)",marginTop:4}},label));
}

function ShcStats(){
return React.createElement("div",{style:{padding:"var(--space-section) 24px",maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:48}},
React.createElement("div",{style:{fontSize:36,fontWeight:700}},"Results That Speak For Themselves")),
React.createElement("div",{className:"shc-grid-5",style:{justifyContent:"center",flexWrap:"nowrap"}},
D3.stats.map((s,i)=>React.createElement("div",{key:i,className:"shc-reveal shc-glow-border",style:{transitionDelay:i*70+"ms",maxWidth:180,margin:"0 auto",width:"100%"}},React.createElement(ShcStatCounter,{value:s.value,prefix:s.prefix,suffix:s.suffix,label:s.label})))
));}

function ShcFaqItem({q,a,open,onClick}){
return React.createElement("div",{style:{borderBottom:"1px solid var(--hairline)"}},
React.createElement("button",{onClick,style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",padding:"20px 0",textAlign:"left",fontFamily:"var(--font-sans)",fontSize:18,fontWeight:700,color:"var(--ink)",cursor:"pointer"}},
q,React.createElement("span",{style:{color:"var(--sky-blue)",fontSize:20,transform:open?"rotate(45deg)":"none",transition:"transform .2s ease"}},"+")),
React.createElement("div",{className:"shc-faq-panel",style:{maxHeight:open?"200px":"0px"}},React.createElement("div",{style:{paddingBottom:20,fontSize:16,color:"var(--body)",lineHeight:1.6}},a)));
}

function ShcFaq(){
const [openIdx,setOpenIdx]=React.useState(0);
return React.createElement("div",{style:{background:"var(--surface-soft)",padding:"var(--space-section) 24px"}},
React.createElement("div",{className:"shc-reveal",style:{maxWidth:760,margin:"0 auto"}},
React.createElement("div",{style:{textAlign:"center",marginBottom:40}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"FAQs"),
React.createElement("div",{style:{fontSize:36,fontWeight:700}},"Common Questions")),
React.createElement("div",{style:{background:"var(--canvas)",border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",padding:"0 28px"}},
D3.faq.map((f,i)=>React.createElement(ShcFaqItem,{key:i,q:f.q,a:f.a,open:openIdx===i,onClick:()=>setOpenIdx(openIdx===i?-1:i)})))
));}

function ShcFinalCta(){
return React.createElement("div",{style:{position:"relative",background:"linear-gradient(135deg,var(--navy-950),var(--navy-800))",padding:"var(--space-section) 24px",overflow:"hidden"}},
React.createElement("div",{style:{position:"absolute",top:"-100px",left:"50%",transform:"translateX(-50%)",width:600,height:600,background:"radial-gradient(circle,rgba(224,20,44,.3),transparent 70%)",pointerEvents:"none"}}),
React.createElement("div",{style:{position:"relative",maxWidth:"var(--content-max)",margin:"0 auto",display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:48,alignItems:"center"},className:"shc-hero-grid"},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"left"}},
React.createElement("div",{style:{fontSize:38,fontWeight:700,color:"#fff",marginBottom:16}},"Ready To Simplify Your Books?"),
React.createElement("div",{style:{fontSize:18,color:"var(--on-dark-mute)",marginBottom:36}},"Schedule a consultation and see what Elite Accountants can take off your plate this month."),
React.createElement("div",{style:{display:"flex",gap:16,flexWrap:"wrap"}},
React.createElement(ButtonC,{variant:"primary",size:"lg"},"Schedule a Consultation"))),
React.createElement("div",{className:"shc-reveal",style:{aspectRatio:"4/3",borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--hairline-strong)"}},
React.createElement("image-slot",{id:"final-cta-image",class:"shc-cinematic-strong",shape:"rect",fit:"cover",placeholder:"Drop an image here",src:"uploads/ChatGPT Image Jul 28, 2026, 05_07_38 PM (1).png",style:{width:"100%",height:"100%"}}))
));}

function ShcNewsletter(){
return null;}

function ShcFooter(){
const cols=[["Services",["Bookkeeping","Tax Consultancy","Payroll","Financial Advisory"]],["Industries",["Healthcare","Retail","Construction","Real Estate"]]];
const social=[["in","LinkedIn"],["X","Twitter / X"],["f","Facebook"],["@","Instagram"]];
return React.createElement("div",{style:{background:"var(--surface-dark)",color:"var(--on-dark-mute)",fontFamily:"var(--font-sans)"}},
React.createElement("div",{className:"shc-footer-grid",style:{maxWidth:"var(--content-max)",margin:"0 auto",padding:"64px 24px 32px",display:"grid",gridTemplateColumns:"1.4fr 1fr 1fr 1.1fr",gap:32}},
React.createElement("div",null,
React.createElement("div",{style:{marginTop:"-0.5in"}},
React.createElement("img",{src:"uploads/ChatGPT_Image_Jul_21__2026__11_36_44_PM-removebg-preview-f7c83e54.png",alt:"Elite Accountants",style:{height:100,marginBottom:12}}),
React.createElement("div",{style:{fontSize:16,fontWeight:600,lineHeight:1.6,maxWidth:240,marginTop:"-0.25in"}},"Tax, bookkeeping, payroll, and advisory for businesses that don't have time to worry about the books."))),
cols.map(([h,links],i)=>React.createElement("div",{key:i,style:{display:"flex",flexDirection:"column",gap:12}},
React.createElement("div",{style:{color:"#fff",fontWeight:700,fontSize:16}},h),
links.map((l,j)=>React.createElement("a",{key:j,href:"#",style:{fontSize:15,color:"var(--on-dark-mute)",textDecoration:"none"}},l)))),
React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12}},
React.createElement("div",{style:{color:"#fff",fontWeight:700,fontSize:16}},"Contact"),
React.createElement("div",{style:{fontSize:15}},"Suite 1A, Level 1"),
React.createElement("div",{style:{fontSize:15}},"40 Raymond Street"),
React.createElement("div",{style:{fontSize:15}},"Bankstown, NSW, 2200"),
React.createElement("div",{style:{fontSize:15}},"PO Box 626, Bankstown, NSW, 1885"))
),
React.createElement("div",{style:{maxWidth:"var(--content-max)",margin:"calc(1.75in - 32px - 1.5in) auto 0",padding:"0 24px 32px",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:20}},
React.createElement("div",{style:{display:"flex",gap:10}},
social.map(([g,label],i)=>React.createElement("a",{key:i,href:"#",title:label,style:{width:36,height:36,borderRadius:"50%",border:"1px solid var(--hairline-strong)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:"var(--on-dark-mute)",textDecoration:"none"}},g))),
React.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:20,marginLeft:32}},
React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},React.createElement(window.ShcIcon,{name:"phone",size:16}),React.createElement("a",{href:"tel:+61297900050",style:{fontSize:14,color:"var(--on-dark-mute)",textDecoration:"none"}},"(02) 9790 0050")),
React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},React.createElement(window.ShcIcon,{name:"fax",size:16}),React.createElement("div",{style:{fontSize:14,color:"var(--on-dark-mute)"}},"Fax: (02) 9790 0057")),
React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},React.createElement(window.ShcIcon,{name:"mail",size:16}),React.createElement("a",{href:"mailto:farhat@eliteaccountants.com.au",style:{fontSize:14,color:"var(--on-dark-mute)",textDecoration:"none"}},"farhat@eliteaccountants.com.au")))
),
React.createElement("div",{style:{borderTop:"1px solid var(--hairline-strong)",maxWidth:"var(--content-max)",margin:"0 auto",padding:"24px 24px 32px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}},
React.createElement("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:".04em",color:"var(--mute)"}},"© 2026 Elite Accountants. All rights reserved."),
React.createElement("div",{style:{display:"flex",gap:24}},
React.createElement("a",{href:"Privacy Policy.html",style:{fontSize:13,color:"var(--on-dark-mute)",textDecoration:"none"}},"Privacy Policy"),
React.createElement("a",{href:"Terms and Conditions.html",style:{fontSize:13,color:"var(--on-dark-mute)",textDecoration:"none"}},"Terms & Conditions")))
);}

function ShcContact(){
const [sent,setSent]=React.useState(false);
return React.createElement("div",{style:{padding:"var(--space-section) 24px",maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:48}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"Visit Us"),
React.createElement("div",{style:{fontSize:36,fontWeight:700}},"Send Us A Message")),
React.createElement("div",{className:"shc-grid-2"},
sent?React.createElement("div",{className:"shc-reveal",style:{background:"var(--canvas)",border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",padding:28,display:"flex",flexDirection:"column",gap:12,alignItems:"center",justifyContent:"center",textAlign:"center"}},
React.createElement("div",{style:{fontSize:22,fontWeight:700}},"Message Sent"),
React.createElement("div",{style:{fontSize:15,color:"var(--body)"}},"Thanks for reaching out — a member of our team will respond within one business day.")):
React.createElement("form",{className:"shc-reveal",action:"https://formsubmit.co/farhat@eliteaccountants.com.au",method:"POST",onSubmit:()=>setTimeout(()=>setSent(true),50),style:{background:"var(--canvas)",border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",padding:28,display:"flex",flexDirection:"column",gap:16}},
React.createElement("input",{type:"hidden",name:"_subject",value:"New enquiry from Elite Accountants website"}),
React.createElement("input",{type:"hidden",name:"_captcha",value:"false"}),
React.createElement("input",{type:"hidden",name:"_next",value:"https://www.eliteaccountants.com.au/contact-us?sent=1"}),
React.createElement(TextInputC,{name:"name",required:true,placeholder:"Full name"}),
React.createElement(TextInputC,{name:"email",required:true,placeholder:"Email address",type:"email"}),
React.createElement(TextInputC,{name:"phone",placeholder:"Phone number",type:"tel"}),
React.createElement("textarea",{name:"message",required:true,placeholder:"How can we help?",rows:4,style:{fontFamily:"var(--font-sans)",fontSize:16,padding:"12px 16px",borderRadius:"var(--radius-sm)",border:"1px solid var(--hairline)",color:"var(--ink)",width:"100%",boxSizing:"border-box",resize:"vertical"}}),
React.createElement(ButtonC,{variant:"primary",size:"lg",type:"submit"},"Send Message")),
React.createElement("div",{className:"shc-reveal",style:{background:"var(--surface-soft)",border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",padding:24,display:"flex",flexDirection:"column",gap:16,transitionDelay:"80ms"}},
React.createElement("div",{style:{fontWeight:700,fontSize:16}},"Elite Accountants"),
React.createElement("div",{style:{fontSize:15,color:"var(--body)",lineHeight:1.6}},"Suite 1A, Level 1"),
React.createElement("div",{style:{fontSize:15,color:"var(--body)",lineHeight:1.6}},"40 Raymond Street, Bankstown, NSW, 2200"),
React.createElement("div",{style:{borderTop:"1px solid var(--hairline)",paddingTop:16,marginTop:4}},
React.createElement("div",{style:{fontWeight:700,fontSize:16,marginBottom:6}},"Business Hours"),
React.createElement("div",{style:{fontSize:15,color:"var(--body)"}},"Monday–Friday"),
React.createElement("div",{style:{fontSize:15,color:"var(--body)"}},"9:00 AM–5:30 PM")),
React.createElement("div",{style:{border:"1px solid var(--hairline)",borderRadius:"var(--radius-sm)",overflow:"hidden",flex:1,minHeight:220}},
React.createElement("iframe",{title:"Elite Accountants location",src:"https://www.google.com/maps?q=Suite+1A+Level+1+40+Raymond+Street+Bankstown+NSW+2200&output=embed",style:{border:0,width:"100%",height:"100%",minHeight:220},loading:"lazy"})))
));}

function ShcContactPhoto(){
return React.createElement("div",{style:{padding:"var(--space-section) 24px 0",maxWidth:"var(--content-max)",margin:"0 auto"}},
React.createElement("div",{className:"shc-reveal",style:{textAlign:"center",marginBottom:32}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".03em",color:"var(--sky-blue)",marginBottom:12}},"Our Office"),
React.createElement("div",{style:{fontSize:36,fontWeight:700}},"Step Into Elite Accountants")),
React.createElement("div",{className:"shc-grid-2"},
React.createElement("div",{className:"shc-reveal shc-hover-lift",style:{aspectRatio:"4/3",borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--hairline)"}},
React.createElement("image-slot",{id:"contact-office-photo",class:"shc-cinematic-strong",shape:"rect",fit:"cover",placeholder:"Drop a photo of the office",src:"uploads/ChatGPT Image Jul 28, 2026, 05_16_34 PM (1).png",style:{width:"100%",height:"100%"}})),
React.createElement("div",{className:"shc-reveal shc-hover-lift",style:{aspectRatio:"4/3",borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--hairline)",transitionDelay:"80ms"}},
React.createElement("image-slot",{id:"contact-office-photo-2",class:"shc-cinematic-strong",shape:"rect",fit:"cover",placeholder:"Drop another photo",src:"uploads/ChatGPT Image Jul 28, 2026, 05_07_38 PM (1).png",style:{width:"100%",height:"100%"}}))
));}

window.SHCSectionsC={ShcTestimonials,ShcStats,ShcFaq,ShcFinalCta,ShcNewsletter,ShcFooter,ShcContact,ShcContactPhoto};
