const {ShcNav:CmpNav}=window.SHCSectionsA;
const {ShcContact:CmpContact,ShcContactPhoto:CmpContactPhoto,ShcFaq:CmpFaq,ShcNewsletter:CmpNewsletter,ShcFooter:CmpFooter}=window.SHCSectionsC;
const PageHeader=window.SHCPageHeader;

function ContactApp(){
React.useEffect(()=>{
document.body.classList.add("shc-armed");
const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("shc-in");});},{threshold:.15});
document.querySelectorAll(".shc-reveal").forEach(el=>obs.observe(el));
return ()=>obs.disconnect();
},[]);
return React.createElement("div",null,
React.createElement(CmpNav,null),
React.createElement(PageHeader,{eyebrow:"Get In Touch",title:React.createElement(React.Fragment,null,"Consult With Our ",React.createElement("span",{className:"font-alice",style:{color:"#E63A2E"}},"Elite")," Advisory Team"),subtitle:"Book a consultation or send an enquiry — a member of our team will respond within one business day."}),
React.createElement(CmpContactPhoto,null),
React.createElement(CmpContact,null),
React.createElement(CmpFaq,null),
React.createElement(CmpNewsletter,null),
React.createElement(CmpFooter,null)
);}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(ContactApp,null));
