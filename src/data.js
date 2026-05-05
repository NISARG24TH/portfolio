export const SITE = {
  name: "Nisarg Bhoi",
  initials: "NB",
  tagline: "Crafting digital experiences that make a difference",
  email: "nisargbhoi24@gmail.com",
  phone: null,
  photo: "/photo.png", // ← Your photo must be in the /public folder as "photo.jpg"
  roles: ["AI Engineer", "GenAI Engineer", "Computer Engineer", "Technology Enthusiast"],
  resumeLink: "#",
  whatsappLink: "https://wa.me/message/HPAPHPLMP2JDA1",
  socials: {
    github: "https://github.com/NISARG24TH", linkedin: "https://www.linkedin.com/in/nisargbhoi", twitter: "https://x.com/NisargBhoi", instagram: "https://www.instagram.com/n.s_24th?igsh=MjQyN3J6YTBreWVw", youtube: "#", devto: "#"
  }
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];


export const SKILLS = {
  Languages: ["Python", "JavaScript", "Java", "C++", , "SQL", "HTML", "CSS"],
  "AI / ML": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "Hugging Face", "LangChain", "NumPy", "Pandas"],
  "GenAI & LLMs": ["OpenAI API", "Gemini", "Claude", "Groq", "RAG", "Prompt Engineering", "Fine-Tuning", "Vector Databases", "ChromaDB", "LlamaIndex"],
  Frontend: ["React", "HTML", "CSS", "Tailwind", "TypeScript", "Next.js"],
  Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API"],
  Tools: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Linux"],
  // "Currently Learning": ["Rust", "Web3", "Three.js", "AWS"],
}

export const PROJECTS = [
  {
    id: 1,
    title: "Autonomous RAG System",
    desc: "Self-learning RAG pipeline that ingests feedback, auto-retrains embeddings, and improves retrieval accuracy over time — built as GTU capstone and Maxgen internship project.",
    tags: ["FastAPI", "Next.js", "Qdrant"],
    cat: "AI / Full Stack",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "SaaS RAG Platform",
    desc: "Production-grade multi-tenant RAG platform with JWT auth, SSE streaming, vector search, and a full monorepo setup using Turborepo and Prisma.",
    tags: ["Next.js", "Express", "ChromaDB"],
    cat: "Full Stack",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Paythrough",
    desc: "Mock payment gateway simulating real-world transaction flows with merchant dashboard, webhook events, and a clean REST API.",
    tags: ["Node.js", "Express", "MongoDB"],
    cat: "Backend",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "AGI Sim",
    desc: "Experimental AGI simulation with multi-strategy planning, self-reflection engine, and persistent memory using pgvector — FastAPI backend, Next.js frontend.",
    tags: ["FastAPI", "Next.js", "pgvector"],
    cat: "AI",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "RAG Feedback Engine",
    desc: "Async feedback collection and retraining service for RAG apps — built with FastAPI, SQLAlchemy, Celery workers, and fully containerized via Docker Compose.",
    tags: ["FastAPI", "Celery", "Docker"],
    cat: "Backend",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "StreamGrab Extension",
    desc: "Chrome extension (Manifest V3) that detects and downloads video streams from any webpage, with a minimal popup UI and background service worker.",
    tags: ["JavaScript", "Chrome API", "MV3"],
    cat: "Frontend",
    gradient: "from-amber-500 to-yellow-500",
  },
];

export const EXPERIENCES = [
  // {
  //   company: "Goldman Sachs",
  //   role: "AI / ML Engineer",
  //   period: "2026 – Present",
  //   desc: "Engineered robust machine learning pipelines for financial risk assessment and quantitative modeling. Implemented large-scale data processing workflows and optimized AI-driven predictive algorithms for high-frequency trading insights.",
  //   tags: ["Python", "Machine Learning", "Pandas", "SQL", "Data Engineering", "Predictive Modeling"],
  // },
  // {
  //   company: "Nembus Technologies",
  //   role: "Software Engineering Intern",
  //   period: "Apr 2025 – Aug 2025",
  //   desc: "Developed and maintained full-stack web applications, contributing to both frontend UI components and backend API services. Collaborated with cross-functional teams to optimize application performance and streamline deployment workflows.",
  //   tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Git"],
  // },
  {
    company: "Maxgen Technologies",
    role: "AI / ML Intern",
    period: "Jan 2026 – Jun 2026",
    desc: "Built an Autonomous Self-Learning RAG System that ingests user feedback and auto-improves retrieval over time. Designed FastAPI backends, integrated Qdrant/ChromaDB for vector search, and developed the frontend in Next.js.",
    tags: ["FastAPI", "Next.js", "Qdrant", "ChromaDB", "Python"],
  },
  {
    company: "BrainyBeam Technologies",
    role: "ML Intern",
    period: "Jun 2025 – Jul 2025",
    desc: "Worked on applied machine learning tasks including data preprocessing, model training, and evaluation pipelines. Gained hands-on exposure to real-world ML workflows in a production-oriented environment.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  },
];

export const BLOG_POSTS = [
  { id: 1, category: "AI / RAG", title: "Building a Self-Learning RAG System from Scratch", excerpt: "How I designed a RAG pipeline that ingests user feedback and automatically improves its own retrieval accuracy over time.", date: "Apr 10, 2026", readTime: "8 min" },
  { id: 2, category: "FastAPI", title: "Structuring Production-Ready FastAPI Projects", excerpt: "Folder layout, dependency injection, async SQLAlchemy, and Celery workers — everything I learned building real AI backends.", date: "Mar 22, 2026", readTime: "6 min" },
  { id: 3, category: "Vector DBs", title: "Qdrant vs ChromaDB: Which Should You Use?", excerpt: "A practical comparison of two popular vector databases — performance, ease of setup, and when each one makes sense.", date: "Mar 5, 2026", readTime: "5 min" },
  { id: 4, category: "Career", title: "Navigating a Fresher AI Job Hunt in 2026", excerpt: "My honest take on targeting AI/GenAI engineer roles as a final-year student — what works, what doesn't, and what I'd do differently.", date: "Feb 18, 2026", readTime: "7 min" },
  { id: 5, category: "LLMs", title: "Chunking Strategies That Actually Improve RAG Quality", excerpt: "Fixed-size, semantic, and recursive chunking compared — with real retrieval quality differences you can measure.", date: "Feb 2, 2026", readTime: "6 min" },
  { id: 6, category: "Docker", title: "Dockerizing a FastAPI + Celery App Step by Step", excerpt: "A practical walkthrough of containerizing an async Python backend with Redis, Celery workers, and Docker Compose.", date: "Jan 14, 2026", readTime: "7 min" },
];

export const TESTIMONIALS = [
  { quote: "Nisarg built our RAG feedback pipeline end-to-end — the async architecture with Celery was clean and well thought out. He picks up new tools fast and ships without hand-holding.", name: "Internship Mentor", role: "Tech Lead", company: "Maxgen Technologies" },
  { quote: "He approached every task with genuine curiosity. Nisarg didn't just implement what was asked — he'd come back with improvements and edge cases we hadn't considered.", name: "Senior Engineer", role: "ML Engineer", company: "Maxgen Technologies" },
  { quote: "Nisarg delivered a solid Next.js + FastAPI integration for the project frontend. Good communication, clean commits, and always open to feedback.", name: "Project Supervisor", role: "Project Manager", company: "Maxgen Technologies" },
  { quote: "One of the more self-driven interns I've worked with. He set up the entire Qdrant vector store integration independently and documented it properly — rare for a fresher.", name: "Team Lead", role: "Backend Lead", company: "Maxgen Technologies" },
];

export const NOTES = [
  { id: 1, subject: "RAG", title: "RAG System Design Cheatsheet", excerpt: "Chunking strategies, embedding models, retrieval modes, and re-ranking — everything needed to build a solid RAG pipeline.", date: "Apr 2026" },
  { id: 2, subject: "DSA", title: "Graph & DP Patterns for Coding Interviews", excerpt: "BFS/DFS, Dijkstra, topological sort, and classic DP problems with C++ implementations from Supreme 3.0.", date: "Mar 2026" },
  { id: 3, subject: "System Design", title: "Designing a Multi-Tenant SaaS RAG Platform", excerpt: "Architecture decisions behind JWT auth, SSE streaming, vector namespacing per tenant, and monorepo setup with Turborepo.", date: "Mar 2026" },
  { id: 4, subject: "FastAPI", title: "Async FastAPI Patterns I Use in Production", excerpt: "Dependency injection, background tasks, SQLAlchemy async sessions, and Celery integration — patterns that actually scale.", date: "Feb 2026" },
  { id: 5, subject: "GenAI", title: "LLM Concepts Every AI Engineer Should Know", excerpt: "Tokens, context windows, temperature, RAG vs fine-tuning, and prompt engineering fundamentals distilled into one reference.", date: "Feb 2026" },
  { id: 6, subject: "DevOps", title: "Docker Compose for AI Backends", excerpt: "Setting up FastAPI + Redis + Celery + vector DB in a single Compose file — with health checks and volume management.", date: "Jan 2026" },
];

export const SOCIAL_POSTS = [
  { platform: "twitter", handle: "@nisargbhoi", content: "Just pushed the feedback loop module for my RAG system — it now auto-retrains embeddings based on user thumbs up/down. Wild to watch it improve itself. 🤖", likes: 48, date: "Apr 18, 2026", style: "bg-neutral-900 text-white" },
  { platform: "linkedin", handle: "Nisarg Bhoi", content: "Excited to share that I've joined Maxgen Technologies as an AI/ML Intern! Working on a self-learning RAG system — learning an insane amount every week. 🚀", likes: 312, date: "Jan 6, 2026", style: "bg-blue-900 text-white" },
  { platform: "github", handle: "nisargbhoi", content: "autonomous-rag-system — FastAPI + Next.js + Qdrant | Self-improving retrieval pipeline with async feedback ingestion and Celery retraining workers.", likes: 34, date: "Ongoing", style: "bg-gray-900 text-white" },
  { platform: "twitter", handle: "@nisargbhoi", content: "Hot take: most RAG systems fail not because of bad LLMs, but because of bad chunking. Spend more time on your data pipeline than your prompt. 💡", likes: 91, date: "Mar 8, 2026", style: "bg-neutral-900 text-white" },
  { platform: "linkedin", handle: "Nisarg Bhoi", content: "Finished building Paythrough — a mock payment gateway with merchant dashboard, webhook events, and a REST API. Great exercise in thinking through real-world transaction flows.", likes: 178, date: "Feb 10, 2026", style: "bg-blue-900 text-white" },
  { platform: "devto", handle: "nisargbhoi", content: "New post: 'Qdrant vs ChromaDB — a practical comparison for RAG systems.' Written from actual experience building both into production pipelines.", likes: 43, date: "Mar 5, 2026", style: "bg-neutral-800 text-white" },
];

export const ABOUT_BIO = [
  "I'm a final-year Computer Engineering student at GTU, graduating in 2026, with a deep focus on AI engineering — specifically building RAG systems, LLM-powered backends, and full-stack AI applications. My interest started with curiosity about how intelligent systems work, and quickly turned into building them from scratch.",
  "I specialize in FastAPI and Next.js for AI-first applications, with hands-on experience in vector databases like Qdrant and ChromaDB, async Python pipelines, and multi-tenant SaaS architecture. I completed an internship at Maxgen Technologies where I designed and built an Autonomous Self-Learning RAG System as my core project.",
  "Outside of work, I run Leak.ai — my freelance AI services venture — and spend time doing DSA in C++ and contributing to my own open-source tooling. I'm actively looking for AI/GenAI engineer roles where I can keep building things that actually matter.",
];