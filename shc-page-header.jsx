const DSPH=window.SkyHighAccountantsDesignSystem_48a5c0;
function ShcPageHeader({eyebrow,title,subtitle}){
return React.createElement("div",{style:{position:"relative",background:"linear-gradient(180deg,var(--navy-950),var(--navy-900) 60%,var(--navy-950))",overflow:"hidden"}},
React.createElement("div",{className:"shc-float-slow",style:{position:"absolute",top:"5%",left:"8%",width:280,height:280,background:"radial-gradient(circle,rgba(224,20,44,.4),transparent 70%)",filter:"blur(16px)",pointerEvents:"none"}}),
React.createElement("div",{className:"shc-float",style:{position:"absolute",bottom:"5%",right:"6%",width:340,height:340,background:"radial-gradient(circle,rgba(224,20,44,.32),transparent 70%)",filter:"blur(16px)",pointerEvents:"none"}}),
React.createElement("div",{style:{position:"absolute",top:"-120px",left:"50%",transform:"translateX(-50%)",width:700,height:700,background:"radial-gradient(circle,rgba(224,20,44,.28),transparent 70%)",filter:"blur(10px)",pointerEvents:"none"}}),
React.createElement("div",{style:{position:"relative",maxWidth:"var(--content-max)",margin:"0 auto",padding:"calc(72px - 0.5in) 24px",textAlign:"center"}},
React.createElement("div",{style:{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:".04em",color:"var(--sky-blue)",marginBottom:16}},eyebrow),
React.createElement("div",{style:{fontSize:44,fontWeight:700,lineHeight:1.15,color:"#fff",marginBottom:16}},title),
subtitle&&React.createElement("div",{style:{fontSize:20,lineHeight:1.6,color:"var(--on-dark-mute)",maxWidth:640,margin:"0 auto"}},subtitle)
));}
window.SHCPageHeader=ShcPageHeader;
