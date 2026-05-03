import React, { useState } from "react";
import { SKILLS } from "./data.js";
import { useScrollAnimation } from "./hooks.jsx";

/* ── Devicon CDN icon map ─────────────────────────────────────────── */
const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SKILL_ICONS = {
  // Languages
  Python:       `${ICON_BASE}/python/python-original.svg`,
  JavaScript:   `${ICON_BASE}/javascript/javascript-original.svg`,
  Java:         `${ICON_BASE}/java/java-original.svg`,
  "C++":        `${ICON_BASE}/cplusplus/cplusplus-original.svg`,
  C:            `${ICON_BASE}/c/c-original.svg`,
  SQL:          `${ICON_BASE}/azuresqldatabase/azuresqldatabase-original.svg`,
  HTML:         `${ICON_BASE}/html5/html5-original.svg`,
  CSS:          `${ICON_BASE}/css3/css3-original.svg`,
  // AI / ML
  TensorFlow:   `${ICON_BASE}/tensorflow/tensorflow-original.svg`,
  PyTorch:      `${ICON_BASE}/pytorch/pytorch-original.svg`,
  "Scikit-learn": `${ICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  Keras:        `${ICON_BASE}/keras/keras-original.svg`,
  OpenCV:       `${ICON_BASE}/opencv/opencv-original.svg`,
  "Hugging Face": "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  LangChain:    "https://raw.githubusercontent.com/hwchase17/langchainjs/main/docs/static/img/favicon.ico",
  NumPy:        `${ICON_BASE}/numpy/numpy-original.svg`,
  Pandas:       `${ICON_BASE}/pandas/pandas-original.svg`,
  // GenAI & LLMs
  "OpenAI API": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/openai.svg",
  Gemini:       "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/googlegemini.svg",
  Claude:       "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/anthropic.svg",
  Groq:         "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/groq.svg",
  RAG:          null,
  "Prompt Engineering": null,
  "Fine-Tuning": null,
  "Vector Databases": null,
  ChromaDB:     null,
  LlamaIndex:   null,
  // Frontend
  React:        `${ICON_BASE}/react/react-original.svg`,
  Tailwind:     `${ICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  TypeScript:   `${ICON_BASE}/typescript/typescript-original.svg`,
  "Next.js":    `${ICON_BASE}/nextjs/nextjs-original.svg`,
  // Backend
  "Node.js":    `${ICON_BASE}/nodejs/nodejs-original.svg`,
  Express:      `${ICON_BASE}/express/express-original.svg`,
  MongoDB:      `${ICON_BASE}/mongodb/mongodb-original.svg`,
  PostgreSQL:   `${ICON_BASE}/postgresql/postgresql-original.svg`,
  "REST API":   null,
  // Tools
  Git:          `${ICON_BASE}/git/git-original.svg`,
  GitHub:       `${ICON_BASE}/github/github-original.svg`,
  "VS Code":    `${ICON_BASE}/vscode/vscode-original.svg`,
  Figma:        `${ICON_BASE}/figma/figma-original.svg`,
  Docker:       `${ICON_BASE}/docker/docker-original.svg`,
  Linux:        `${ICON_BASE}/linux/linux-original.svg`,
  // Currently Learning
  Rust:         `${ICON_BASE}/rust/rust-original.svg`,
  Web3:         null,
  "Three.js":   `${ICON_BASE}/threejs/threejs-original.svg`,
  AWS:          `${ICON_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
};

/* ── Fallback circle with initials ────────────────────────────────── */
const FallbackIcon = ({ name }) => (
  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
    {name.charAt(0)}
  </span>
);

const SkillIcon = ({ name }) => {
  const src = SKILL_ICONS[name];
  if (!src) return <FallbackIcon name={name} />;
  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      className="w-5 h-5 flex-shrink-0 object-contain dark:brightness-0 dark:invert"
      style={{ filter: name === "OpenAI API" ? undefined : undefined }}
      onError={(e) => { e.target.style.display = "none"; }}
    />
  );
};

/* ── Category icons (Lucide) ──────────────────────────────────────── */
const TAB_EMOJIS = {
  Languages:          "💻",
  "AI / ML":          "🧠",
  "GenAI & LLMs":     "🤖",
  Frontend:           "🎨",
  Backend:            "⚙️",
  Tools:              "🛠️",
  "Currently Learning": "🚀",
};

const Skills = () => {
  const tabs = Object.keys(SKILLS);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-300">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-hidden">
        <p className="font-mono text-sm text-neutral-500 text-center">{"// skills"}</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mt-2 mb-10">What I Work With</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg"
                  : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              }`}
            >
              <span>{TAB_EMOJIS[tab] || "📦"}</span>
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-3 transition-all duration-300">
          {SKILLS[activeTab].map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-medium text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <SkillIcon name={skill} />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
