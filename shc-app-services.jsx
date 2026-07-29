const {ShcNav:CmpNav,ShcServicesDetailed:CmpServices,ShcProcessDetailed:CmpProcess,ShcServicesClosing:CmpServicesClosing}=window.SHCSectionsA;
const {ShcNewsletter:CmpNewsletter,ShcFooter:CmpFooter}=window.SHCSectionsC;
const PageHeader=window.SHCPageHeader;

function ServicesApp(){
React.useEffect(()=>{
document.body.classList.add("shc-armed");
const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("shc-in");});},{threshold:.15});
document.querySelectorAll(".shc-reveal").forEach(el=>obs.observe(el));
return ()=>obs.disconnect();
},[]);
return React.createElement("div",null,
React.createElement(CmpNav,null),
React.createElement(PageHeader,{eyebrow:"What We Offer",title:React.createElement(React.Fragment,null,React.createElement("span",{className:"font-alice",style:{color:"#E63A2E"}},"Elite")," Services Built For Growing Businesses"),subtitle:"From day-to-day bookkeeping to boardroom-ready strategy — a full accounting practice built around your business."}),
React.createElement(CmpServices,null),
React.createElement(CmpProcess,null),
React.createElement(CmpServicesClosing,null),
React.createElement(CmpNewsletter,null),
React.createElement(CmpFooter,null)
);}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(ServicesApp,null));
