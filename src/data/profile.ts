// All copy & data is sourced from Rohan's LinkedIn profile (as of Jun 2026)
// + the existing portfolio. Edit here to update any section.

export const profile = {
  name: "Rohan Ajay Ramani",
  pronouns: "He/Him",
  location: "Mumbai, Maharashtra, India",
  headline:
    "Director of Business Development at Fresh & Select · Building KyRo · Former Data & Tech at JPMorganChase · BS Data Science at IIT Madras · SRM IST Academic Medalist · Airbnb SuperHost",
  shortIdentity: "Engineer · Operator · Builder",
  about: [
    "I spent close to three years at JPMorganChase as a Software Development Engineer & Analyst — shipping across equities, derivatives and OTC, leading the Engineer Committee for the Software Engineer Program, and running the 6,000-strong Mumbai Ignite agile community.",
    "Today I'm Director of Business Development at Fresh & Select — a quick-commerce venture I've scaled to 50,000+ app users and a growing network of dark-store franchises running under Zepto, Blinkit and Amazon — while building KyRo One and KyRo Automation brick by brick. I picked, packed and ran store shifts inside Zepto, Amazon and Blinkit myself, because you can't build for quick commerce from a slide deck.",
    "On the side I ship real products — That One Wall, Silli, a memorial archive for my late grandmother's poetry, and K-Hair. Alongside it all: a BS in Data Science from IIT Madras, a University Rank 3 medal from SRM, two published papers, and ten years of community work with Bhumi and the Rotary Club.",
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
    company: "Fresh & Select Groceries",
    role: "Director of Business Development",
    type: "Full-time",
    start: "Aug 2020",
    end: "Present",
    duration: "5 yrs 11 mo",
    location: "Navi Mumbai · On-site",
    bullets: [
      "Built and scaled a quick-commerce venture to 50,000+ app users and a growing network of dark-store franchises operating under Zepto, Blinkit and Amazon.",
      "Embedded directly in partner dark-store operations — picking, packing and store-management shifts — to reverse-engineer fulfilment workflows firsthand and ground KyRo's design in operational reality.",
      "Architecting KyRo Automation, a Robotics-as-a-Service and AI-driven warehouse stack, and KyRo One, an enterprise platform unifying operational and financial management across the group.",
      "Pioneered chemical-free ozone washing for fresh produce ahead of local competitors — an early health and hygiene differentiator.",
      "Built supplier and vendor networks for reliable, cost-effective sourcing while driving category growth through in-store and promotional campaigns.",
    ],
    skills: ["Business Development", "Start-ups", "Quick Commerce", "Operations", "GTM"],
    color: "bg-emerald-400",
  },
  {
    company: "Zepto",
    role: "Picker Packer · Founder Immersion",
    type: "Full-time",
    start: "May 2026",
    end: "Jun 2026",
    duration: "2 mo",
    location: "Mumbai · On-site",
    bullets: [
      "Worked live fulfilment shifts inside a Zepto dark store — studying picking, packing and dispatch flow at ground level to directly inform KyRo's warehouse-automation design.",
    ],
    skills: ["Team Management", "Team Building", "Quick Commerce Ops"],
    color: "bg-violet-400",
  },
  {
    company: "Amazon",
    role: "Picker Packer · Founder Immersion",
    type: "Full-time",
    start: "Apr 2026",
    end: "Apr 2026",
    duration: "1 mo",
    location: "Mumbai · Hybrid",
    bullets: [
      "Embedded in Amazon fulfilment operations to benchmark process discipline, throughput and exception handling against quick-commerce models.",
    ],
    skills: ["Critical Thinking", "In-depth Analysis", "Operations"],
    color: "bg-amber-400",
  },
  {
    company: "Blinkit",
    role: "Store Manager Trainee · Founder Immersion",
    type: "Full-time",
    start: "Apr 2026",
    end: "Apr 2026",
    duration: "1 mo",
    location: "Mumbai · On-site",
    bullets: [
      "Ran store-ops shifts to reverse-engineer dark-store management end to end — from inventory accuracy to rider dispatch — feeding directly into KyRo One.",
    ],
    skills: ["Communication", "Business Strategy", "Store Ops"],
    color: "bg-yellow-400",
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
      "Delivered projects across equities, derivatives and OTC, contributing to JPMC's global-markets technology ecosystem across the full software lifecycle.",
      "Led the Engineer Committee for the Software Engineer Program, championing initiatives that accelerated growth for early-career technologists at scale.",
      "Sustained strong year-on-year performance, balancing reliable BAU delivery with proactive ownership of innovation — consistently recognised by senior leadership.",
      "Acted as Scrum Master and Agility Lead for my pod, lifting delivery cadence, focus and cross-functional collaboration.",
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
    location: "Mumbai · On-site",
    bullets: [
      "Contributed to multiple accounting-modernisation projects while building expertise in automation and DevOps with Jenkins.",
      "Delivered offline projects and supported firmwide initiatives — POWER UP, the Ignite Community and Software Engineer Program events.",
      "Secured a full-time offer within six months — recognised for technical delivery, adaptability and cultural impact.",
    ],
    skills: ["Software Infrastructure", "Software Design", "Jenkins", "DevOps"],
    color: "bg-cyan-400",
  },
  {
    company: "JPMorganChase",
    role: "Summer Intern & Campus Hire",
    type: "Internship",
    start: "Jun 2023",
    end: "2024",
    duration: "8 mo",
    location: "Mumbai",
    bullets: [
      "Joined JPMorganChase as a summer intern and campus hire — the on-ramp into the firm's global-markets technology org and a near-three-year run across engineering and community.",
    ],
    skills: ["Software Engineering", "Community"],
    color: "bg-cyan-400",
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
  kind: "paper" | "award" | "code";
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
    kind: "paper",
    span: "wide",
  },
  {
    title: "RTSVU",
    tag: "Published Paper · IEEE ICCCMLA",
    period: "Dec 2023",
    blurb:
      "Internet Fact-Checking using Rating Trust Score by Verified Users — a crowdsourcing protocol that scores trust from verified, consistent commenters to slow misinformation.",
    kind: "paper",
  },
  {
    title: "Modern Application Development",
    tag: "Best Project · IIT Madras",
    period: "2024",
    blurb:
      "Scalable real-time application using Vue.js with Redis caching and Celery job queues — recognised by IIT-M as best project that term.",
    kind: "award",
  },
  {
    title: "Parsify",
    tag: "Compiler Design",
    period: "Jan – May 2023",
    blurb:
      "Lightweight compiler: lex, parse and generate intermediate code for a custom grammar — an end-to-end pass through a compiler front-end.",
    repo: "https://github.com/rohanajayramani/Parsify-Compiler",
    doc: "https://drive.google.com/file/d/1H5UxTpdFU_DYy5O3ZJJB9mbwpcLzPb1q/view?usp=share_link",
    kind: "code",
  },
  {
    title: "3Dify",
    tag: "Computer Vision",
    period: "Jan – May 2023",
    blurb:
      "Single-image 3D reconstruction — deep learning to lift flat 2D imagery into three-dimensional representations.",
    repo: "https://github.com/rohanajayramani/3Dify",
    doc: "https://drive.google.com/file/d/1DbVIxY6N5hCt1XmLd2rOHZ3J2emaW2of/view?usp=sharing",
    kind: "code",
  },
];

// ── Shipped products / live builds ──────────────────────────────────────────
export type Build = {
  name: string;
  category: string;
  year: string;
  domain?: string; // display label for the live link, e.g. "silli.vercel.app"
  href?: string; // full URL
  status: string; // "Live", "In production", …
  blurb: string;
  stack: string[];
  glyph: string; // short mark shown on the poster (fallback when no image)
  gradient: string; // CSS gradient for the poster band (fallback when no image)
  accent: string; // tailwind text color for hover accents
  image?: string; // real product screenshot; replaces the gradient/glyph poster
  span?: "wide" | "default";
};

export const builds: Build[] = [
  {
    name: "KyRo One",
    category: "Dark-Store Command Centre",
    year: "2026",
    domain: "kyro.in",
    href: "https://kyro.in",
    status: "In production",
    blurb:
      "One platform, three faces. The enterprise command centre behind a quick-commerce dark-store network — real-time attendance, order tracking, CPO management and financial controls across 50+ locations, all in IST. KyRo One splits into Vault (accounting), Apex (leadership) and Pulse (store ops), each a role-gated view on the same system of record, paired with KyRo Automation's Robotics-as-a-Service stack.",
    stack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL", "Supabase", "Tailwind v4"],
    glyph: "KY",
    gradient: "linear-gradient(135deg, #34d399 0%, #059669 60%, #064e3b 120%)",
    accent: "text-emerald-400",
    image: "/images/builds/kyro-one.webp",
    span: "wide",
  },
  {
    name: "KyRo Vault",
    category: "KyRo One · Accounting",
    year: "2026",
    status: "In production",
    blurb:
      "The finance core of KyRo One — disbursements, vendor invoices with GST + TDS, reimbursements, store expenses, mathadi logs, rent payments and per-entity bank balances, reconciled across the group in real time.",
    stack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL"],
    glyph: "KV",
    gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 60%, #b45309 120%)",
    accent: "text-amber-400",
    image: "/images/builds/kyro-vault.webp",
  },
  {
    name: "KyRo Apex",
    category: "KyRo One · Leadership",
    year: "2026",
    status: "In production",
    blurb:
      "The super-admin layer for upper management — a platform-wide live dashboard with order and CPO targets vs actuals, budget allocation, SLA alerts, approvals and reporting lines, every action audit-logged.",
    stack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL"],
    glyph: "KA",
    gradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 60%, #4c1d95 120%)",
    accent: "text-violet-400",
    image: "/images/builds/kyro-apex.webp",
  },
  {
    name: "KyRo Pulse",
    category: "KyRo One · Store Ops",
    year: "2026",
    status: "In production",
    blurb:
      "The cluster-level cockpit for store managers — roster, OT and ad-hoc attendance approvals, geo check-ins, governance queues and performance reviews, with target vs actual CPO tracked per store.",
    stack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL"],
    glyph: "KP",
    gradient: "linear-gradient(135deg, #f0abfc 0%, #d946ef 60%, #86198f 120%)",
    accent: "text-fuchsia-400",
    image: "/images/builds/kyro-pulse.webp",
  },
  {
    name: "Fresh & Select",
    category: "Quick Commerce · Company Site",
    year: "2026",
    domain: "freshandselect.com",
    href: "https://freshandselect.com",
    status: "Live",
    blurb:
      "The marketing site for the quick-commerce venture I help run — we engineer and operate the dark stores behind India's biggest quick-commerce platforms, with 25 hubs live across the Mumbai Metropolitan Region and more incoming.",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Motion"],
    glyph: "FS",
    gradient: "linear-gradient(135deg, #a3b18a 0%, #588157 55%, #3a5a40 120%)",
    accent: "text-emerald-400",
    image: "/images/builds/fresh-select.webp",
  },
  {
    name: "DE VIEW",
    category: "Corporate Events · Agency",
    year: "2026",
    domain: "de-view-theta.vercel.app",
    href: "https://de-view-theta.vercel.app",
    status: "Live",
    blurb:
      "An editorial site for DE VIEW LLP, a corporate-events agency — conferences, product launches, employee-engagement programmes, award ceremonies and brand activations, each run of show built to reflect the brand and deliver measurable results.",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Motion"],
    glyph: "DV",
    gradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 60%, #1e3a8a 120%)",
    accent: "text-blue-400",
    image: "/images/builds/deview.webp",
  },
  {
    name: "That One Wall",
    category: "Interior Design Studio",
    year: "2026",
    domain: "thatonewwall.com",
    href: "https://thatonewwall.com",
    status: "Live",
    blurb:
      "An editorial marketing site for an interior-design studio — biophilic imagery, a Fraunces × Inter type pairing, smooth inertia scroll and tactile scroll-reveal motion. Your space, elevated.",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Motion", "Lenis"],
    glyph: "TOW",
    gradient: "linear-gradient(135deg, #a3b18a 0%, #588157 55%, #3a5a40 120%)",
    accent: "text-emerald-400",
  },
  {
    name: "Silli",
    category: "Dating · Social",
    year: "2026",
    domain: "silli.vercel.app",
    href: "https://silli.vercel.app",
    status: "Live",
    blurb:
      "A dating app that throws away the swipe — real-world social mixers (board games, bachata, zero algorithms) across Mumbai, Pune and Bengaluru. Come as you are, leave with a Silli.",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Motion"],
    glyph: "Si",
    gradient: "linear-gradient(135deg, #f472b6 0%, #a855f7 60%, #6366f1 120%)",
    accent: "text-pink-400",
    image: "/images/builds/silli.webp",
  },
  {
    name: "Tiny Room Concert",
    category: "Live Music · Community",
    year: "2026",
    domain: "tiny-room-concert.vercel.app",
    href: "https://tiny-room-concert.vercel.app",
    status: "Live",
    blurb:
      "A living room turned concert space in Mumbai — invite-only gigs, stripped-down sets and conversations that run long after the last song. A tiny room, a whole room of people.",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Motion"],
    glyph: "TR",
    gradient: "linear-gradient(135deg, #fb923c 0%, #ea580c 60%, #7c2d12 120%)",
    accent: "text-orange-400",
    image: "/images/builds/tiny-room.webp",
  },
  {
    name: "K-Hair",
    category: "Healthcare · Commerce",
    year: "2026",
    domain: "k-hair.vercel.app",
    href: "https://k-hair.vercel.app",
    status: "Live",
    blurb:
      "A brand site for a hair atelier crafting real-human-hair wigs since 1980 — including chemotherapy wigs that help cancer fighters feel like themselves again. Handfinished in Mumbai, with a Three.js hero.",
    stack: ["Next.js 16", "React 19", "Three.js", "Tailwind v4", "Drizzle"],
    glyph: "KH",
    gradient: "linear-gradient(135deg, #2dd4bf 0%, #0891b2 60%, #155e75 120%)",
    accent: "text-cyan-400",
    image: "/images/builds/khair.webp",
  },
  {
    name: "Kalpana Ramani",
    category: "Memorial · Poetry Archive",
    year: "2026",
    domain: "kalpanaramani.com",
    href: "https://kalpanaramani.com",
    status: "Live",
    blurb:
      "A living memorial and digital archive for my late grandmother, the poet Shrimati Kalpana Ramani — her Geet, Navgeet and Sindhi ghazals, a daily verse, and a guestbook to leave a memory.",
    stack: ["Astro", "TypeScript"],
    glyph: "क",
    gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 55%, #b45309 120%)",
    accent: "text-amber-400",
    image: "/images/builds/kalpana.webp",
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

export const recommendations = [
  {
    quote:
      "Rohan possesses rare leadership acumen — his ebullience, receptiveness, and resoluteness showcase his adeptness at surmounting challenges and leading others. He was not only assiduous but instrumental in engendering a propitious classroom milieu. I heartily recommend this talented and dedicated young man.",
    name: "Dr. B. Jothi",
    title: "Associate Professor · SRM IST",
    note: "Mentored Rohan for four years",
    initials: "BJ",
  },
  {
    quote:
      "Rohan is an excellent student, excelling in programming and academics. He is responsible and punctual, and his strong interpersonal skills make him an effective collaborator. His eagerness to learn and his ability to communicate complex ideas clearly distinguish him — both academically and personally.",
    name: "Dr. Hariharan B",
    title: "Associate Professor · SRM IST",
    note: "Was Rohan's mentor",
    initials: "HB",
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
  "Fresh & Select",
  "KyRo",
  "IIT Madras",
  "SRM IST",
  "Mumbai Ignite",
  "Zepto",
  "Blinkit",
  "Amazon",
  "That One Wall",
  "DE VIEW",
  "Silli",
  "Tiny Room Concert",
  "K-Hair",
  "Airbnb Superhost",
  "Bhumi",
  "Rotary",
];

export const stats = [
  { label: "Years at JPMC", value: "3" },
  { label: "Mumbai Ignite community", value: "6k+" },
  { label: "Quick-commerce users", value: "50k+" },
  { label: "Live products shipped", value: "8" },
  { label: "Papers published", value: "2" },
  { label: "SRM University rank", value: "3" },
];
