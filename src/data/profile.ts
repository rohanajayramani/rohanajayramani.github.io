// All copy & data is sourced from Rohan's LinkedIn profile (as of May 2026)
// + the existing portfolio. Edit here to update any section.

export const profile = {
  name: "Rohan Ajay Ramani",
  pronouns: "He/Him",
  location: "Mumbai, Maharashtra, India",
  headline:
    "Building Fresh & Select Gro · Former Data & Tech at JPMorganChase · Quick Commerce Facilitator · BS Data Science at IIT Madras · SRM IST Academic Medalist · SuperHost at Airbnb",
  shortIdentity: "Engineer · Operator · Builder",
  about: [
    "I spent 2.5+ years at JPMorganChase as a Software Development Engineer & Analyst — shipping in equities, derivatives and OTC, leading the Engineer Committee for the Software Engineer Program, and running the 6,000-strong Mumbai Ignite agile community.",
    "Today I'm building **Fresh & Select Gro** — operating quick commerce dark stores across the Mumbai Metropolitan Region — and putting **KyRo Core** together brick by brick. In between I picked at Amazon Now and Zepto myself, because you can't build for quick commerce from a slide deck.",
    "Alongside the work I keep one foot in the academic world (BS in Data Science from IIT Madras, B.Tech CSE-SE from SRM IST with a University Rank 3 medal), two published research papers, and ten years of community work with Bhumi and the Rotary Club.",
  ],
  rotatingRoles: [
    "engineer.",
    "operator.",
    "founder.",
    "scrum master.",
    "academic medalist.",
    "super host.",
  ],
  status: {
    label: "Open to what's next",
    detail: "Quick commerce · ops · product engineering",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/rohanajayramani/",
    github: "https://github.com/rohanajayramani",
    twitter: "https://twitter.com/rohanajayramani",
    instagram: "https://www.instagram.com/rohanajayramani.",
    email: "mailto:rohanajayramani@gmail.com",
    phone: "tel:+917977179212",
  },
  emailAddress: "rohanajayramani@gmail.com",
  phoneNumber: "+91 79771 79212",
  resume:
    "https://drive.google.com/file/d/13HECQWuBwwhFspq8q72oJsWxEgCy0trJ/view?usp=sharing",
};

export type Experience = {
  company: string;
  role: string;
  type?: string;
  start: string;
  end: string;
  duration?: string;
  location?: string;
  bullets: string[];
  skills?: string[];
  color: string; // tailwind class for accent dot
};

export const experiences: Experience[] = [
  {
    company: "Zepto",
    role: "Picker · Packer",
    type: "Full-time",
    start: "May 2026",
    end: "Present",
    duration: "1 mo",
    location: "Mumbai · On-site",
    bullets: [
      "Field study inside Zepto's dark stores — picking, packing and shadowing operations to inform Fresh & Select's hub blueprint.",
    ],
    skills: ["Team Management", "Team Building", "Quick Commerce Ops"],
    color: "bg-violet-400",
  },
  {
    company: "Amazon Now",
    role: "Store Manager · Picker Packer",
    type: "Full-time",
    start: "Apr 2026",
    end: "Apr 2026",
    duration: "1 mo",
    location: "Mumbai",
    bullets: [
      "Multi-store operations and shift-floor picking inside Amazon Now's quick commerce network — same goal as Zepto: understand the unit economics from the inside out.",
    ],
    skills: ["Multi-Store Operations", "Store Management", "Critical Thinking"],
    color: "bg-amber-400",
  },
  {
    company: "JPMorganChase",
    role: "Software Development Engineer & Analyst",
    type: "Full-time",
    start: "Jul 2024",
    end: "Apr 2026",
    duration: "1 yr 10 mo",
    location: "Mumbai · On-site",
    bullets: [
      "Delivered projects across Equities, Derivatives, and OTC, contributing to JPMC's global markets technology ecosystem across the full software lifecycle.",
      "Led the Engineer Committee for the Software Engineer Program, championing initiatives that accelerated growth for early-career technologists at scale.",
      "Sustained strong year-on-year performance, balancing reliable BAU delivery with proactive ownership of innovation.",
      "Acted as Scrum Master and Agility Lead for my pod, lifting cadence, focus and cross-functional collaboration.",
      "Ran the Mumbai Ignite Community — 6,000+ technologists — curating events, learning programs and recognition, one of JPMC's most active internal communities.",
    ],
    skills: ["Java", "Data Analysis", "Agile", "Leadership", "Scrum"],
    color: "bg-cyan-400",
  },
  {
    company: "JPMorganChase",
    role: "Software Engineer Intern",
    type: "Internship",
    start: "Jan 2024",
    end: "Jun 2024",
    duration: "6 mo",
    bullets: [
      "Contributed to multiple accounting modernization projects while building expertise in automation and DevOps with Jenkins.",
      "Delivered offline projects and actively supported firmwide initiatives — POWER UP, Ignite Community, the SEP events.",
      "Secured a full-time offer within 6 months — recognised for technical delivery, adaptability and cultural impact.",
    ],
    skills: ["Software Infrastructure", "Software Design", "Jenkins", "DevOps"],
    color: "bg-cyan-400",
  },
  {
    company: "Fresh & Select Groceries",
    role: "Non Executive Director",
    type: "Full-time · Family business",
    start: "Aug 2020",
    end: "Present",
    duration: "5 yrs 10 mo",
    location: "Navi Mumbai",
    bullets: [
      "Managing inventory across fresh produce categories for Mumbai Groceries — reducing stockouts and ensuring consistent availability for a growing customer base.",
      "Pioneered ozone washing in the local market — a chemical-free produce cleaning process that became a hygiene differentiator ahead of competitors.",
      "Built and run a supplier and vendor network for reliable, cost-effective sourcing, plus the in-store and promotional campaigns that grow category sales.",
    ],
    skills: ["Business Development", "Start-ups", "Operations", "GTM"],
    color: "bg-emerald-400",
  },
  {
    company: "Airbnb",
    role: "Super Host",
    type: "Part-time",
    start: "Aug 2022",
    end: "Oct 2025",
    duration: "3 yrs 3 mo",
    location: "Navi Mumbai · On-site",
    bullets: [
      "Managed operations for three distinct properties — seamless guest experiences and top-tier hospitality across each.",
      "Earned Airbnb Superhost status by exceeding expectations on communication, cleanliness and overall guest experience.",
    ],
    skills: ["Hospitality", "Operations", "Customer Experience"],
    color: "bg-rose-400",
  },
];

export type Education = {
  school: string;
  degree: string;
  spec?: string;
  start: string;
  end: string;
  grade?: string;
  activities: string[];
  logo: string;
  link?: string;
};

export const education: Education[] = [
  {
    school: "SRM Institute of Science & Technology",
    degree: "B.Tech, Computer Science & Engineering",
    spec: "Specialization in Software Engineering",
    start: "2020",
    end: "2024",
    grade: "9.76 CGPA · 3.9 GPA · University Rank 3",
    activities: [
      "Corporate Associate · Microsoft Learn Student Ambassadors",
      "Department Student Placement Coordinator (2023–24)",
      "Class Representative · 8 consecutive semesters",
      "Placement Trainer · Batch of 2024",
      "Mentor · ACM Student Chapter + Computational Intelligence Association",
    ],
    logo: "/images/educat/college.png",
  },
  {
    school: "Indian Institute of Technology, Madras",
    degree: "BS, Data Science & Applications",
    spec: "Parallel undergraduate programme",
    start: "Jan 2021",
    end: "Sep 2025",
    grade: "Diploma in Data Science · Diploma in Programming · 5× Academic Topper",
    activities: [
      "Technical Executive · Pichhavaram Club",
      "Corporate Executive · Saarang (IIT-M cultural fest)",
      "Best Project Recognition · Modern Application Development (Vue + Redis + Celery)",
      "Elite badges in IIT Ropar, Hyderabad, Bombay & Kanpur electives",
    ],
    logo: "/images/educat/school.png",
  },
];

export type Project = {
  title: string;
  tag: string;
  period: string;
  blurb: string;
  href?: string;
  repo?: string;
  doc?: string;
  image?: string;
  span?: "wide" | "tall" | "default";
};

export const projects: Project[] = [
  {
    title: "TechHorizion",
    tag: "Published Paper · Springer Nature",
    period: "Dec 2024 · IconDeepCom",
    blurb:
      "Navigating IT Careers in a Recession Era — AI and digital tooling to help fresh graduates find footing in a tough market. Published in Springer Nature CCIS, Vol. 2688.",
    href: "https://lnkd.in/dcDrZ8tZ",
    image: "/images/educat/par.png",
    span: "wide",
  },
  {
    title: "RTSVU",
    tag: "Published Paper · IEEE ICCCMLA",
    period: "Dec 2023",
    blurb:
      "Internet Fact-Checking using Rating Trust Score by Verified Users — a crowdsourcing protocol that scores trust from verified, consistent commenters to slow misinformation.",
    image: "/images/educat/3.png",
  },
  {
    title: "Modern Application Development",
    tag: "Best Project · IIT Madras",
    period: "2024",
    blurb:
      "Scalable real-time application using Vue.js with Redis caching and Celery job queues — recognised by IIT-M as best project that term.",
  },
  {
    title: "Parsify",
    tag: "Compiler Design",
    period: "Jan – May 2023",
    blurb:
      "Lightweight compiler: lex, parse and generate intermediate code for a custom grammar — an end-to-end pass through a compiler front-end.",
    repo: "https://github.com/rohanajayramani/Parsify-Compiler",
    doc: "https://drive.google.com/file/d/1H5UxTpdFU_DYy5O3ZJJB9mbwpcLzPb1q/view?usp=share_link",
  },
  {
    title: "3Dify",
    tag: "Computer Vision",
    period: "Jan – May 2023",
    blurb:
      "Single-image 3D reconstruction — deep learning to lift flat 2D imagery into three-dimensional representations.",
    repo: "https://github.com/rohanajayramani/3Dify",
    doc: "https://drive.google.com/file/d/1DbVIxY6N5hCt1XmLd2rOHZ3J2emaW2of/view?usp=sharing",
  },
];

export const honors = [
  {
    title: "University Rank Holder",
    issuer: "Chairman of AICTE, Government of India",
    when: "Oct 2024",
    detail:
      "Received the medal from Sitharam T.G (Chairman, AICTE) and Dr. T.R. Paarivendhar (Founding Chancellor, SRM).",
  },
  {
    title: "Academic Topper · Computational Intelligence",
    issuer: "School of Computing, SRM IST",
    when: "Jun 2024",
    detail:
      "Awarded to the student with the highest cumulative grade point average in the department.",
  },
  {
    title: "5× Academic Topper Badge",
    issuer: "IIT Madras · Online BS",
    when: "2023 – 2025",
    detail:
      "Business Data Management · Tools in Data Science · Software Engineering · Strategies for Professional Growth · Machine Learning Practices.",
  },
  {
    title: "Best Project Recognition",
    issuer: "IIT Madras · Modern Application Development",
    when: "2024",
    detail:
      "Real-time scalable application built with Vue, Redis caching and Celery job queues.",
  },
];

export const certifications = [
  {
    title: "Software Engineer Program",
    issuer: "JPMorganChase",
    when: "Feb 2026",
    cred: "E934766",
  },
  {
    title: "BS in Data Science & Applications",
    issuer: "Indian Institute of Technology, Madras",
    when: "Sep 2025",
    cred: "21F3000618",
  },
];

export const volunteering = [
  {
    org: "Bhumi",
    role: "Community Volunteer",
    period: "Aug 2022 – Present · 3 yrs 10 mo",
    bullets: [
      "Led large-scale initiatives — a 5,000-volunteer seedball drive, flood relief sourcing, plus support campaigns for old age homes and animal shelters.",
      "Drove sustainability and social awareness work alongside diverse volunteer groups across multiple states.",
    ],
  },
  {
    org: "Rotary Club",
    role: "Student Volunteer · President-Elect (2024)",
    period: "Mar 2015 – Jul 2024 · 9 yrs 5 mo",
    bullets: [
      "Led projects — school wall painting, cleanliness drives, literacy awareness events — as President-Elect of the local Rotaract.",
      "Worked with fellow Rotaractors to strengthen civic responsibility and youth participation in community action.",
    ],
  },
];

export const organizations = [
  {
    name: "Mumbai Ignite Agile",
    role: "Lead",
    when: "May 2025 – Present",
    via: "JPMorganChase",
  },
  {
    name: "Career Development Centre, SRM IST",
    role: "Advisor to the Director of Placements",
    when: "Jul 2023 – Present",
    via: "SRMIST, Kattankulathur",
  },
];

export const skillGroups = [
  {
    name: "Engineering",
    chips: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Celery",
    ],
    dot: "bg-violet-400",
  },
  {
    name: "Practice",
    chips: [
      "Agile / Scrum",
      "DevOps · Jenkins",
      "Data Analysis",
      "ML Practices",
      "Software Design",
      "Software Infrastructure",
    ],
    dot: "bg-cyan-400",
  },
  {
    name: "Operator",
    chips: [
      "Business Development",
      "Multi-Store Operations",
      "Store Management",
      "Inventory · Supply Chain",
      "GTM",
      "Community Building",
      "Hospitality",
    ],
    dot: "bg-amber-400",
  },
];

export const marqueeItems = [
  "JPMorganChase",
  "Fresh & Select Gro",
  "IIT Madras",
  "SRM IST",
  "Mumbai Ignite",
  "Airbnb Superhost",
  "Amazon Now",
  "Zepto",
  "Bhumi",
  "Rotary",
  "Microsoft Learn Student Ambassadors",
  "Adani Wilmar",
];

export const stats = [
  { label: "Years at JPMC", value: "2.5+" },
  { label: "Mumbai Ignite community", value: "6k+" },
  { label: "LinkedIn followers", value: "8k+" },
  { label: "Papers published", value: "2" },
  { label: "SRM University rank", value: "3" },
  { label: "Years volunteering", value: "9+" },
];
