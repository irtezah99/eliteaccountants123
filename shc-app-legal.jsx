const {ShcNav:CmpNav}=window.SHCSectionsA;
const {ShcFooter:CmpFooter}=window.SHCSectionsC;
const PageHeader=window.SHCPageHeader;

function LegalBody({children}){
return React.createElement("div",{style:{padding:"var(--space-section) 24px",maxWidth:820,margin:"0 auto"}},
React.createElement("div",{style:{fontSize:15,lineHeight:1.75,color:"var(--body)",display:"flex",flexDirection:"column",gap:28}},children));}

function LegalSection({title,children}){
return React.createElement("div",null,
React.createElement("div",{style:{fontWeight:700,fontSize:20,color:"var(--ink)",marginBottom:10}},title),
React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:10}},children));}

function PrivacyApp(){
return React.createElement("div",null,
React.createElement(CmpNav,null),
React.createElement(PageHeader,{eyebrow:"Legal",title:"Privacy Policy",subtitle:"Last updated: 28 July 2026"}),
React.createElement(LegalBody,null,
React.createElement("p",null,"Elite Accountants (\u201Cwe\u201D, \u201Cus\u201D, \u201Cour\u201D) is committed to protecting the privacy of your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs) administered by the Office of the Australian Information Commissioner (OAIC). This policy explains how we collect, use, hold and disclose personal information in the course of providing tax, accounting, bookkeeping and business advisory services."),
React.createElement(LegalSection,{title:"1. Information We Collect"},
React.createElement("p",null,"We may collect personal and financial information including your name, contact details, date of birth, Tax File Number (TFN), Australian Business Number (ABN), bank account details, income and expense records, and other information reasonably necessary to provide tax, bookkeeping, payroll and advisory services."),
React.createElement("p",null,"Information is collected directly from you, your authorised representatives, or from the Australian Taxation Office (ATO) and other government agencies where you have authorised us to act as your registered agent.")),
React.createElement(LegalSection,{title:"2. How We Use Your Information"},
React.createElement("p",null,"Your information is used to prepare and lodge tax returns and Business Activity Statements, provide bookkeeping and payroll services, provide financial and business advisory services, comply with our obligations under the Tax Agent Services Act 2009 (Cth) and the Tax Practitioners Board's Code of Professional Conduct, and communicate with you about your engagement.")),
React.createElement(LegalSection,{title:"3. Disclosure Of Information"},
React.createElement("p",null,"We do not sell or trade your personal information. We may disclose information to the ATO, ASIC and other regulatory bodies as required by law, to trusted third-party service providers (such as cloud accounting software providers) bound by confidentiality obligations, or where you have given express consent.")),
React.createElement(LegalSection,{title:"4. Data Security"},
React.createElement("p",null,"We take reasonable technical and organisational measures to protect personal information from misuse, interference, loss, and unauthorised access, modification or disclosure, including secure cloud storage, restricted staff access and confidentiality obligations for all personnel.")),
React.createElement(LegalSection,{title:"5. Access And Correction"},
React.createElement("p",null,"You may request access to, or correction of, personal information we hold about you at any time by contacting us using the details below. We will respond to such requests within a reasonable period in accordance with the Australian Privacy Principles.")),
React.createElement(LegalSection,{title:"6. Retention"},
React.createElement("p",null,"We retain client records for the period required under the Income Tax Assessment Act 1997 (Cth) and other applicable Australian taxation and corporate law (generally a minimum of five years), after which records are securely destroyed or de-identified.")),
React.createElement(LegalSection,{title:"7. Complaints"},
React.createElement("p",null,"If you have concerns about how we have handled your personal information, please contact us first. If you remain dissatisfied, you may lodge a complaint with the Office of the Australian Information Commissioner (oaic.gov.au).")),
React.createElement(LegalSection,{title:"8. Contact Us"},
React.createElement("p",null,"Elite Accountants, Suite 1A, Level 1, 40 Raymond Street, Bankstown, NSW, 2200. Phone: (02) 9790 0050. Email: saroha@eliteaccountants.com.au")),
React.createElement("p",{style:{fontSize:13,color:"var(--mute)"}},"This policy is provided as general guidance and should be reviewed by a qualified legal professional to ensure full compliance with current Australian privacy law prior to publication.")
),
React.createElement(CmpFooter,null));}

function TermsApp(){
return React.createElement("div",null,
React.createElement(CmpNav,null),
React.createElement(PageHeader,{eyebrow:"Legal",title:"Terms & Conditions",subtitle:"Last updated: 28 July 2026"}),
React.createElement(LegalBody,null,
React.createElement("p",null,"These Terms & Conditions govern your use of the Elite Accountants website and the engagement of our tax, accounting, bookkeeping and business advisory services. By engaging our services or using this website, you agree to be bound by these terms, which are governed by the laws of New South Wales, Australia."),
React.createElement(LegalSection,{title:"1. Engagement Of Services"},
React.createElement("p",null,"All professional services are provided subject to a separate signed Letter of Engagement, which sets out the specific scope of work, fees and responsibilities of both parties. In the event of any inconsistency between these Terms and a Letter of Engagement, the Letter of Engagement prevails.")),
React.createElement(LegalSection,{title:"2. Professional Standards"},
React.createElement("p",null,"Our services are provided in accordance with the Tax Agent Services Act 2009 (Cth), the Code of Professional Conduct issued by the Tax Practitioners Board, and applicable accounting and auditing standards issued by the Australian Accounting Standards Board (AASB) and CPA Australia / Chartered Accountants Australia and New Zealand, as relevant.")),
React.createElement(LegalSection,{title:"3. Client Responsibilities"},
React.createElement("p",null,"You agree to provide complete, accurate and timely information and documentation necessary for us to perform our services, and to review all returns, statements and reports before they are lodged or relied upon.")),
React.createElement(LegalSection,{title:"4. Fees And Payment"},
React.createElement("p",null,"Fees are charged in accordance with the agreed engagement terms and are payable within the timeframe specified on the relevant invoice. Late payments may incur interest in accordance with the Penalty Interest Rates Act 1983 (NSW) or as otherwise agreed.")),
React.createElement(LegalSection,{title:"5. Liability"},
React.createElement("p",null,"To the extent permitted by law, our liability for services provided is limited in accordance with a scheme approved under Professional Standards legislation in New South Wales, where applicable. Nothing in these terms excludes any guarantee, right or remedy conferred on you under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) that cannot lawfully be excluded.")),
React.createElement(LegalSection,{title:"6. Confidentiality"},
React.createElement("p",null,"We treat all client information as strictly confidential in accordance with our professional and legal obligations, and will not disclose it to third parties except as permitted by law, professional standards, or with your consent.")),
React.createElement(LegalSection,{title:"7. Website Use"},
React.createElement("p",null,"Content on this website is provided for general informational purposes only and does not constitute personalised financial, tax or legal advice. You should seek professional advice specific to your circumstances before acting on any information contained on this site.")),
React.createElement(LegalSection,{title:"8. Termination"},
React.createElement("p",null,"Either party may terminate an engagement by providing reasonable written notice, subject to payment of fees for work performed up to the date of termination.")),
React.createElement(LegalSection,{title:"9. Governing Law"},
React.createElement("p",null,"These Terms are governed by the laws of New South Wales, Australia, and both parties submit to the exclusive jurisdiction of the courts of New South Wales.")),
React.createElement(LegalSection,{title:"10. Contact Us"},
React.createElement("p",null,"Elite Accountants, Suite 1A, Level 1, 40 Raymond Street, Bankstown, NSW, 2200. Phone: (02) 9790 0050. Email: saroha@eliteaccountants.com.au")),
React.createElement("p",{style:{fontSize:13,color:"var(--mute)"}},"These terms are provided as general guidance and should be reviewed by a qualified legal professional to ensure full compliance with current Australian law prior to publication.")
),
React.createElement(CmpFooter,null));}

window.SHCLegal={PrivacyApp,TermsApp};
