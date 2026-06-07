export const universities = [
  "Universitas Indonesia",
  "Institut Teknologi Bandung",
  "Universitas Gadjah Mada",
  "Institut Teknologi Sepuluh Nopember",
  "Universitas Diponegoro",
  "BINUS University",
];

export const companies = [
  { name: "GoTo", logo: "GT", color: "#00AA13" },
  { name: "Shopee", logo: "SP", color: "#EE4D2D" },
  { name: "Tokopedia", logo: "TK", color: "#42B549" },
  { name: "Astra International", logo: "AI", color: "#003DA5" },
  { name: "Bank Mandiri", logo: "BM", color: "#003D79" },
  { name: "Telkom Indonesia", logo: "TI", color: "#E60012" },
  { name: "Elnusa", logo: "EL", color: "#F39200" },
  { name: "LG Sinarmas", logo: "LG", color: "#A50034" },
];

export const careerInterests = [
  "Frontend Engineer", "Backend Engineer", "Mobile Developer",
  "Data Analyst", "Product Manager", "UI/UX Designer", "DevOps Engineer",
];

export const locations = [
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
];

export const skillBank = [
  "HTML","CSS","JavaScript","TypeScript","React","Next.js","Node.js","Express",
  "PostgreSQL","MongoDB","Docker","Kubernetes","AWS","Figma","Tailwind",
  "Python","Pandas","SQL","Machine Learning","Product Strategy","User Research",
];

export type Job = {
  id: string;
  title: string;
  companyIdx: number;
  location: string;
  salary: string;
  posted: string;
  type: "Full-time" | "Internship" | "Graduate Program";
  category: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  match: number;
  roadmapKey: string;
};

export const jobs: Job[] = [
  {
    id: "j1", title: "Frontend Developer", companyIdx: 0, location: "Jakarta, ID",
    salary: "Rp 12 – 18 jt", posted: "2 days ago", type: "Full-time",
    category: "Software Engineering",
    description: "Build modern, performant web experiences for millions of GoTo users across Indonesia. Collaborate with designers and PMs to ship features end-to-end.",
    requirements: ["2+ years React experience","Strong CSS & HTML fundamentals","Familiar with REST APIs","Experience with state management"],
    responsibilities: ["Develop UI components","Optimize performance","Collaborate with designers","Maintain code quality"],
    skills: ["HTML","CSS","JavaScript","React","TypeScript","REST API"],
    match: 72, roadmapKey: "frontend",
  },
  {
    id: "j2", title: "Mobile Developer (Android)", companyIdx: 1, location: "Jakarta, ID",
    salary: "Rp 15 – 22 jt", posted: "1 day ago", type: "Full-time",
    category: "Mobile Development",
    description: "Build the Shopee Android app used by 100M+ shoppers in Southeast Asia.",
    requirements: ["Kotlin proficiency","MVVM architecture","Jetpack Compose"],
    responsibilities: ["Ship native Android features","Improve app performance","Mentor juniors"],
    skills: ["Kotlin","Jetpack Compose","MVVM","REST API"],
    match: 58, roadmapKey: "mobile",
  },
  {
    id: "j3", title: "Data Analyst Intern", companyIdx: 2, location: "Remote", 
    salary: "Rp 4 – 6 jt", posted: "5 days ago", type: "Internship",
    category: "Data Analytics",
    description: "Help Tokopedia's growth team analyze user behavior and unlock insights.",
    requirements: ["SQL proficiency","Excel mastery","Basic Python"],
    responsibilities: ["Build dashboards","Run A/B tests","Present findings"],
    skills: ["SQL","Python","Pandas","Tableau"],
    match: 81, roadmapKey: "data",
  },
  {
    id: "j4", title: "Backend Engineer", companyIdx: 4, location: "Jakarta, ID",
    salary: "Rp 14 – 20 jt", posted: "3 days ago", type: "Full-time",
    category: "Software Engineering",
    description: "Build secure, high-throughput banking systems at Bank Mandiri.",
    requirements: ["Java / Go expertise","Microservices","PostgreSQL"],
    responsibilities: ["Design APIs","Optimize databases","Ensure compliance"],
    skills: ["Java","Go","PostgreSQL","Docker","Kubernetes"],
    match: 64, roadmapKey: "backend",
  },
  {
    id: "j5", title: "Product Manager Graduate Program", companyIdx: 5, location: "Bandung, ID",
    salary: "Rp 10 – 14 jt", posted: "1 week ago", type: "Graduate Program",
    category: "Product Management",
    description: "12-month rotational program for fresh graduates passionate about product.",
    requirements: ["Fresh grad 2024-2026","Analytical mindset","Strong communication"],
    responsibilities: ["Define product specs","Run user research","Drive roadmap"],
    skills: ["Product Strategy","User Research","SQL","Figma"],
    match: 76, roadmapKey: "product",
  },
  {
    id: "j6", title: "UI/UX Designer", companyIdx: 3, location: "Jakarta, ID",
    salary: "Rp 11 – 16 jt", posted: "4 days ago", type: "Full-time",
    category: "Design",
    description: "Craft delightful experiences across Astra's automotive ecosystem.",
    requirements: ["Figma expertise","Portfolio required","UX research skills"],
    responsibilities: ["Design flows","Prototype interactions","Run usability tests"],
    skills: ["Figma","User Research","Prototyping","Design Systems"],
    match: 69, roadmapKey: "design",
  },
];

export type RoadmapNode = {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  hours: number;
  completed?: boolean;
  resources: { type: string; title: string }[];
};

export const roadmaps: Record<string, RoadmapNode[]> = {
  frontend: [
    { id: "n1", title: "HTML", description: "Master semantic markup, accessibility, and document structure.", difficulty: "Beginner", hours: 10, completed: true,
      resources: [{ type: "Article", title: "MDN HTML Guide" },{ type: "Video", title: "HTML Crash Course" },{ type: "Project", title: "Portfolio landing" }] },
    { id: "n2", title: "CSS", description: "Layouts, Flexbox, Grid, animations, responsive design.", difficulty: "Beginner", hours: 20, completed: true,
      resources: [{ type: "Article", title: "CSS Tricks" },{ type: "Video", title: "Modern CSS" },{ type: "Project", title: "Responsive site" }] },
    { id: "n3", title: "JavaScript", description: "Language fundamentals, DOM, async, ES6+.", difficulty: "Intermediate", hours: 40, completed: true,
      resources: [{ type: "Docs", title: "MDN JS" },{ type: "Video", title: "JS Course" }] },
    { id: "n4", title: "React", description: "Components, hooks, state, lifecycle, patterns.", difficulty: "Intermediate", hours: 35, completed: false,
      resources: [{ type: "Docs", title: "React Docs" },{ type: "Project", title: "Todo app" },{ type: "Quiz", title: "Hooks quiz" }] },
    { id: "n5", title: "State Management", description: "Zustand, Redux, Context API patterns.", difficulty: "Intermediate", hours: 15, completed: false,
      resources: [{ type: "Article", title: "Redux Toolkit" }] },
    { id: "n6", title: "REST API", description: "HTTP, REST principles, fetch, error handling.", difficulty: "Intermediate", hours: 12, completed: false,
      resources: [{ type: "Video", title: "REST in 30 min" }] },
    { id: "n7", title: "Portfolio Project", description: "Ship a real-world project for your portfolio.", difficulty: "Advanced", hours: 30, completed: false,
      resources: [{ type: "Project", title: "Full-stack capstone" }] },
    { id: "n8", title: "Interview Preparation", description: "DSA, system design, behavioral practice.", difficulty: "Advanced", hours: 25, completed: false,
      resources: [{ type: "Article", title: "Frontend interview kit" },{ type: "Community", title: "Mock interview group" }] },
  ],
  backend: [
    { id: "b1", title: "Programming Fundamentals", description: "Data structures, algorithms.", difficulty: "Beginner", hours: 30, completed: true, resources: [] },
    { id: "b2", title: "Databases (SQL)", description: "Relational modeling, joins, indexing.", difficulty: "Intermediate", hours: 20, completed: true, resources: [] },
    { id: "b3", title: "REST APIs", description: "Designing & building APIs.", difficulty: "Intermediate", hours: 18, completed: false, resources: [] },
    { id: "b4", title: "Microservices", description: "Service boundaries, gRPC, messaging.", difficulty: "Advanced", hours: 25, completed: false, resources: [] },
    { id: "b5", title: "Docker & Kubernetes", description: "Container orchestration.", difficulty: "Advanced", hours: 20, completed: false, resources: [] },
    { id: "b6", title: "System Design", description: "Scalability, caching, queues.", difficulty: "Advanced", hours: 30, completed: false, resources: [] },
  ],
  data: [
    { id: "d1", title: "Excel & Spreadsheets", description: "Pivot tables, formulas.", difficulty: "Beginner", hours: 8, completed: true, resources: [] },
    { id: "d2", title: "SQL", description: "Query, aggregate, optimize.", difficulty: "Beginner", hours: 18, completed: true, resources: [] },
    { id: "d3", title: "Python & Pandas", description: "Data wrangling.", difficulty: "Intermediate", hours: 25, completed: true, resources: [] },
    { id: "d4", title: "Statistics", description: "Hypothesis testing, distributions.", difficulty: "Intermediate", hours: 20, completed: false, resources: [] },
    { id: "d5", title: "Visualization (Tableau)", description: "Dashboards & storytelling.", difficulty: "Intermediate", hours: 12, completed: false, resources: [] },
    { id: "d6", title: "A/B Testing", description: "Experiment design.", difficulty: "Advanced", hours: 15, completed: false, resources: [] },
  ],
  mobile: [
    { id: "m1", title: "Kotlin", description: "Language fundamentals.", difficulty: "Beginner", hours: 25, completed: false, resources: [] },
    { id: "m2", title: "Android SDK", description: "Activities, Intents, Lifecycle.", difficulty: "Intermediate", hours: 30, completed: false, resources: [] },
    { id: "m3", title: "Jetpack Compose", description: "Declarative UI.", difficulty: "Intermediate", hours: 25, completed: false, resources: [] },
    { id: "m4", title: "MVVM Architecture", description: "Clean separation.", difficulty: "Advanced", hours: 15, completed: false, resources: [] },
  ],
  product: [
    { id: "p1", title: "Product Thinking", description: "Frameworks & mental models.", difficulty: "Beginner", hours: 12, completed: true, resources: [] },
    { id: "p2", title: "User Research", description: "Interviews, surveys.", difficulty: "Intermediate", hours: 18, completed: true, resources: [] },
    { id: "p3", title: "Analytics & SQL", description: "Data-informed decisions.", difficulty: "Intermediate", hours: 20, completed: false, resources: [] },
    { id: "p4", title: "Roadmapping", description: "Prioritization frameworks.", difficulty: "Intermediate", hours: 10, completed: false, resources: [] },
    { id: "p5", title: "Stakeholder Mgmt", description: "Cross-functional alignment.", difficulty: "Advanced", hours: 12, completed: false, resources: [] },
  ],
  design: [
    { id: "ds1", title: "Design Principles", description: "Hierarchy, balance, contrast.", difficulty: "Beginner", hours: 10, completed: true, resources: [] },
    { id: "ds2", title: "Figma Mastery", description: "Components, auto-layout, variables.", difficulty: "Intermediate", hours: 20, completed: true, resources: [] },
    { id: "ds3", title: "UX Research", description: "Interviews, usability tests.", difficulty: "Intermediate", hours: 15, completed: false, resources: [] },
    { id: "ds4", title: "Design Systems", description: "Tokens, scale, governance.", difficulty: "Advanced", hours: 18, completed: false, resources: [] },
  ],
};

export const candidates = [
  { name: "Abdul Rozzaq", uni: "Institut Teknologi Bandung", major: "Informatika", year: 2025, readiness: 91, resume: 88, interview: 90, match: 94, skills: ["React","TypeScript","Node.js"] },
  { name: "Siti Nurhaliza", uni: "Universitas Indonesia", major: "Computer Science", year: 2025, readiness: 86, resume: 82, interview: 84, match: 89, skills: ["React","CSS","HTML"] },
  { name: "Budi Santoso", uni: "Universitas Gadjah Mada", major: "Sistem Informasi", year: 2024, readiness: 78, resume: 75, interview: 80, match: 82, skills: ["JavaScript","Vue","REST API"] },
  { name: "Dewi Lestari", uni: "BINUS University", major: "Computer Science", year: 2026, readiness: 72, resume: 70, interview: 68, match: 76, skills: ["HTML","CSS","JavaScript"] },
  { name: "Rian Pratama", uni: "ITS", major: "Teknik Informatika", year: 2025, readiness: 68, resume: 71, interview: 65, match: 70, skills: ["React","Tailwind"] },
  { name: "Ayu Wijaya", uni: "Universitas Diponegoro", major: "Informatika", year: 2025, readiness: 64, resume: 60, interview: 66, match: 65, skills: ["HTML","CSS"] },
];

export const communityPosts = [
  { author: "Andi P.", role: "Mentor • Senior FE at GoTo", time: "2h", title: "5 things I wish I knew before my first frontend interview", excerpt: "Don't memorize. Understand WHY behind each pattern. Here are 5 lessons from 6 years in industry…", likes: 124, comments: 23, tag: "Career Articles" },
  { author: "Maya R.", role: "Student • UI", time: "5h", title: "Got an offer at Tokopedia! Here's my roadmap journey", excerpt: "It took 4 months following the Nawasena roadmap. Mock interviews changed everything…", likes: 287, comments: 56, tag: "Interview Experiences" },
  { author: "Rizky F.", role: "Mentor • PM at Shopee", time: "1d", title: "How to break into Product Management as a fresh grad", excerpt: "Most people think PM needs years of experience. Here's the truth…", likes: 198, comments: 41, tag: "Mentor Sessions" },
  { author: "Putri S.", role: "Student • ITB", time: "1d", title: "Bank Mandiri assessment — what to expect", excerpt: "Numerical, verbal, logical reasoning. Plus an English test. Tips inside.", likes: 92, comments: 14, tag: "Company Insights" },
];

export const interviewQuestions = [
  { id: 1, q: "Tell me about yourself.", category: "Behavioral" },
  { id: 2, q: "Explain the difference between let, const, and var.", category: "Technical" },
  { id: 3, q: "How does React's virtual DOM work?", category: "Technical" },
  { id: 4, q: "Describe a time you handled conflict in a team.", category: "Behavioral" },
  { id: 5, q: "What's the difference between SQL and NoSQL?", category: "Technical" },
  { id: 6, q: "Why do you want to work at this company?", category: "Behavioral" },
];

export const applications = {
  Wishlist: [{ id: "a1", job: "Senior Frontend", company: "GoTo", date: "Jun 1" }],
  Applied: [
    { id: "a2", job: "Frontend Developer", company: "Shopee", date: "May 28" },
    { id: "a3", job: "Mobile Developer", company: "Tokopedia", date: "May 30" },
  ],
  Assessment: [{ id: "a4", job: "Backend Engineer", company: "Bank Mandiri", date: "May 25" }],
  Interview: [{ id: "a5", job: "PM Graduate", company: "Telkom", date: "May 20" }],
  Offer: [{ id: "a6", job: "Data Analyst", company: "Astra", date: "May 15" }],
  Rejected: [{ id: "a7", job: "DevOps", company: "Elnusa", date: "May 10" }],
};
