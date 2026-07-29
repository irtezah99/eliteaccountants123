const DSApp=window.SkyHighAccountantsDesignSystem_48a5c0;
const Footer=DSApp.Footer;
const {ShcNav:CmpNav,ShcHero:CmpHero,ShcTrustedBy:CmpTrustedBy,ShcServices:CmpServices,ShcCredibilityStrip:CmpCredibilityStrip}=window.SHCSectionsA;
const {ShcWhyChoose:CmpWhyChoose,ShcProcess:CmpProcess,ShcDashboardShowcase:CmpDashboardShowcase,ShcIndustries:CmpIndustries,ShcImageShowcase:CmpImageShowcase}=window.SHCSectionsB;
const {ShcTestimonials:CmpTestimonials,ShcStats:CmpStats,ShcNewsletter:CmpNewsletter,ShcFooter:CmpFooter}=window.SHCSectionsC;

function App(){
React.useEffect(()=>{
document.body.classList.add("shc-armed");
const els=document.querySelectorAll(".shc-reveal");
const obs=new IntersectionObserver((entries)=>{
entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("shc-in");obs.unobserve(e.target);}});
},{threshold:.1,rootMargin:"0px 0px -60px 0px"});
els.forEach(el=>obs.observe(el));
return ()=>obs.disconnect();
},[]);
return React.createElement("div",null,
React.createElement(CmpNav,null),
React.createElement(CmpHero,null),
React.createElement(CmpTrustedBy,null),
React.createElement(CmpServices,null),
React.createElement(CmpWhyChoose,null),
React.createElement(CmpImageShowcase,null),
React.createElement(CmpProcess,null),
React.createElement(CmpDashboardShowcase,null),
React.createElement(CmpIndustries,null),
React.createElement(CmpTestimonials,null),
React.createElement(CmpStats,null),
React.createElement(CmpCredibilityStrip,null),
React.createElement(CmpNewsletter,null),
React.createElement(CmpFooter,null)
);}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App,null));
