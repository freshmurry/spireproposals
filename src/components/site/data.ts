export const AGENCIES = [
  { abbr: "USACE", name: "Army Corps of Engineers" },
  { abbr: "DSS", name: "Defense Security Service" },
  { abbr: "DOE", name: "Department of Energy" },
  { abbr: "EMCBC", name: "Environmental Management Consolidated Business Center" },
  { abbr: "OREM", name: "Oak Ridge Environmental Management" },
  { abbr: "ORNL", name: "Oak Ridge National Laboratories" },
  { abbr: "ORP", name: "Office of River Protection" },
  { abbr: "DHS / FEMA", name: "Department of Homeland Security / FEMA" },
  { abbr: "IRS", name: "Department of the Treasury — IRS" },
  { abbr: "EAGLE", name: "Enhanced Army Global Logistics Enterprise" },
  { abbr: "FBI", name: "Federal Bureau of Investigation" },
  { abbr: "NGA", name: "National Geospatial-Intelligence Agency" },
  { abbr: "NAWCWD", name: "Naval Air Warfare Center Weapons Division" },
];

const wp = (file: string) =>
  `https://i0.wp.com/spireproposals.com/wp-content/uploads/${file}?fit=400%2C400&ssl=1`;

export const CLIENTS: { name: string; work: string; logo: string }[] = [
  { name: "Canadian Nuclear Laboratories", work: "Editing & Graphic Design — Strategy Documents, Employee Handbook", logo: wp("CNL-300x300.png") },
  { name: "HME, Inc.", work: "Proposal Management, Capabilities Statement", logo: wp("SpireClients_Square_HME-16-16.png") },
  { name: "GEM Technology International", work: "Proposal Management, Marketing Support", logo: wp("GEM_Logo-e1510350709221.jpg") },
  { name: "CERM", work: "Proposal Support", logo: wp("CERM-300x300-e1510350744486.jpg") },
  { name: "Smartt Strategies", work: "Proposal Management, Branding, Graphic Design", logo: wp("SS-300x300.png") },
  { name: "Cooper & Co.", work: "Proposal Bootcamp", logo: wp("Cooper-and-Co-300x300.jpg") },
  { name: "Ingenium", work: "Proposal Support", logo: wp("Ingenium-300x300.jpg") },
  { name: "Ingersoll Rand", work: "Training Presentations, Facilitator Guide", logo: wp("Ingersoll-Rand-300x300.png") },
  { name: "SERVPRO", work: "Marketing Materials", logo: wp("ServPro-300x300.png") },
  { name: "Spectrum Consulting", work: "Marketing Materials", logo: wp("Spectrum-300x300.png") },
  { name: "Total Systems Commissioning", work: "Proposal Bootcamp", logo: wp("TSCx-300x300.jpg") },
  { name: "3 Circle Partners", work: "Proposal Management, Branding, Video Production", logo: wp("3CP-250x250.png") },
  { name: "Abel Key Solutions", work: "Capabilities Statement, Report Editing", logo: wp("SpireClients_Square-01.png") },
  { name: "ARS Aleut Remediation", work: "Proposal Management, Graphics Support", logo: wp("SpireClients_Square-02.png") },
  { name: "Bacon Farmer Workman", work: "Proposal Management", logo: wp("SpireClients_Square-03.png") },
  { name: "Protection Strategies Incorporated", work: "Proposal Support (Volume Lead)", logo: wp("SpireClients_Square-04.png") },
  { name: "Patriot Talent Solutions", work: "Proposal Management", logo: wp("SpireClients_Square-05.png") },
  { name: "Envirocon, Inc.", work: "Interview Collateral and Coaching", logo: wp("SpireClients_Square-06.png") },
  { name: "FE&C", work: "Proposal Management", logo: wp("SpireClients_Square-07.png") },
  { name: "Master Machine", work: "Proposal Management, Award Application", logo: wp("SpireClients_Square-08.png") },
  { name: "Oak Ridge Associated Universities", work: "Proposal Assessment, Support & Graphic Design", logo: wp("SpireClients_Square-09.png") },
  { name: "Swift & Staley, Inc.", work: "Proposal Management", logo: wp("SpireClients_Square-10.png") },
  { name: "ECD Capital Partners", work: "Marketing & Presentation Materials", logo: wp("SpireClients_Square-11.png") },
  { name: "Container Technologies Industries", work: "Proposal Management", logo: wp("SpireClients_Square-12.png") },
  { name: "Street Legal Industries, Inc.", work: "Proposal Management", logo: wp("SpireClients_Square-13.png") },
  { name: "Uncle Lem's Mountain Outfitters", work: "Proposal Management, Graphic Design", logo: wp("ULO-300x300-1.png") },
  { name: "W&A Engineering", work: "SOQ Assessment", logo: wp("SpireClients_Square-15.png") },
];

const headshot = (file: string) =>
  `https://i0.wp.com/spireproposals.com/wp-content/uploads/${file}?resize=200%2C200&ssl=1`;

export const TESTIMONIALS: { quote: string; name: string; title: string; photo: string }[] = [
  {
    quote: "Meredith is an outstanding proposal manager. She implements a very thorough process to ensure that proposals are strong and fully compliant with customer requirements. She also provides innovative thoughts for ways in which topics may be conveyed better for understanding.",
    name: "Kirste Webb",
    title: "Senior VP Business Development, ARS Aleut Remediation",
    photo: headshot("KirstieWebb.jpeg"),
  },
  {
    quote: "For the first proposal we submitted after attending your bootcamp, we were shortlisted from a group of ten very competitive contractors. Ultimately we won that project and others since. Your training was extremely valuable to our firm.",
    name: "Steve Cooper",
    title: "Owner, Cooper & Company General Contractors",
    photo: headshot("SteveCooper.jpeg"),
  },
  {
    quote: "Meredith was so helpful when I was beginning my work with federal contracts. She walked me through the steps to write a successful bid and gave me valuable advice on what to include. I highly recommend her services — I could not have won the government contract without her help.",
    name: "Dr. Kim Stephens",
    title: "Founder, Inclusive Thinking",
    photo: headshot("DrKimStephens.jpeg"),
  },
  {
    quote: "I hired Meredith as a freelance consultant for marketing materials and PowerPoint presentations. I was beyond thrilled with the results. She elevated the level of creativity and sophistication in the final product.",
    name: "DeeDee Smartt Lynch",
    title: "President & Chief Resource Investigator, Smartt Strategies",
    photo: headshot("DeeDee-Smartt-Lynch-1750x1750.jpg"),
  },
  {
    quote: "Meredith Roedel is an exceptional proposal manager, technical writer and professional organizer of proposals. She is articulate, cost effective and is our go-to for proposal needs. Highly recommended.",
    name: "DeVerne Dunnum",
    title: "President, FE&C Canada Ltd.",
    photo: headshot("DeVerneDunnum.png"),
  },
  {
    quote: "Meredith provided excellent service under an 11th-hour request. PowerPoint improvements, interview prep, eye-catching leave-behinds — she formulated win themes we hadn't properly pitched in our initial submittal. Spire really came through.",
    name: "William Hladick",
    title: "Senior Program Manager, ARS Aleut Remediation",
    photo: headshot("WilliamHladick.jpeg"),
  },
  {
    quote: "I have had the opportunity to work with Meredith on several projects and with every project she exceeds my expectations. Recently she led a project in collaboration with industry partners — the feedback was outstanding on both the final product and Meredith's expertise.",
    name: "Troy Courtney",
    title: "Director of Business Development, Swift & Staley Inc.",
    photo: headshot("TroyCourtney.jpeg"),
  },
  {
    quote: "Meredith by far exceeded our expectations and helped us at Uncle Lem's win a very competitive bid. The visuals and layout were wonderful and her writing communicated effectively at every turn. The bid committee even commented on the quality of our proposal as a vital reason for our win.",
    name: "Kevin Hill",
    title: "Business Owner, Uncle Lem's Mountain Outfitters",
    photo: headshot("KevinHill-.jpeg"),
  },
  {
    quote: "It is rare to come across a standout talent like Meredith. Her most valuable skills are persistence and adaptability — an ability unlike anyone I have worked with to meet seemingly impossible deadlines under a variety of constraints.",
    name: "Gregory Smith",
    title: "Project Manager, Brailsford & Dunlavey",
    photo: headshot("Greg-Smith.jpg"),
  },
  {
    quote: "Her efforts have consistently produced high-quality end-products, often resulting in winning results, including projects ranging from $50 million to $1 billion. A take-charge person who presents and implements creative ideas clearly.",
    name: "Karen Maida",
    title: "Senior Marketing Associate, McKissack",
    photo: headshot("Karen-Maida.jpg"),
  },
  {
    quote: "Working with Meredith is a delight. Her expertise in branding and graphic design were invaluable in our product development and marketing. She delivers beautiful final products and investigates solutions to recommend the right course of action.",
    name: "Lindsay Lalla",
    title: "Leadership Coaching & Belbin® Team Roles Expert",
    photo: headshot("LindsayLalla.jpeg"),
  },
  {
    quote: "I've used a number of outsourced services and by far Meredith has been the best. I simply provided her with a vision and she turned it into reality. Responsive, accurate, and efficient.",
    name: "Road Ammons",
    title: "Managing Partner, ECD Capital Partners",
    photo: headshot("RoadAmmons.jpeg"),
  },
  {
    quote: "Great self-starter. Any task or activity she is given she runs with it to completion. Always provided high quality work products. Her work was held up as examples of the work that should be produced by others. Always willing to pitch in and go the extra mile to help others.",
    name: "Rob Rivers, CCM",
    title: "Vice President, Project Lead — Columbus Water Capital Program, AECOM",
    photo: headshot("Rob-Rivers.jpg"),
  },
  {
    quote: "Meredith is one of the most hard working, dedicated, and committed individuals I have met. Her focus and teamwork are true strengths. She is detail-oriented and always thinking outside the box to challenge the norm while striving for efficiency. She excels in developing and assembling presentations and in meeting deadlines.",
    name: "Marcus Huff",
    title: "Document Controls Specialist for DCSD, Brailsford & Dunlavey",
    photo: headshot("Marcus-Huff.jpg"),
  },
  {
    quote: "Meredith is an exceptionally talented individual. In working with her for more than six years at URS, I valued the strengths she brought to our very large and complex proposals in terms of creativity and team management. She was a sought-after resource because of the high quality of her work product — requests came in from other business lines for her to work on their similarly complex proposals. She is easy to work with and well regarded for her dedication, loyalty, integrity, and positive attitude.",
    name: "David Lamutt",
    title: "Project Manager, OnQGlobal",
    photo: headshot("DavidLamutt.jpeg"),
  },
  {
    quote: "We have used Meredith's services a number of times and have always been pleased with her deliverables and her customer service. She is always professional, prompt, and consultative — a true asset for a small business like ours.",
    name: "Joe Storch",
    title: "Director of Business Development, Patriot Talent Solutions",
    photo: headshot("JoeStorch.jpeg"),
  },
  {
    quote: "I have known Meredith since 2008 and have collaborated with her as both a colleague and as a client. Her work ethic and dedication to work product make her a reliable service provider your company can count on. I recommend Meredith wholeheartedly.",
    name: "Assaf Newmark, PSP",
    title: "Construction Scheduler / Project Consultant",
    photo: "",
  },
];

