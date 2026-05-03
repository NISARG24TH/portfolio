import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "./data.js";
import { useScrollAnimation } from "./hooks.jsx";

const FILTERS = ["All", "Frontend", "Backend", "Full Stack", "Open Source"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const ref = useScrollAnimation();
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-hidden">
        <p className="font-mono text-sm text-neutral-500 text-center">{"// projects"}</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mt-2 mb-10">Things I&apos;ve Built</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                filter === f
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                  : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`h-40 bg-gradient-to-br ${p.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="p-5 space-y-3">
                <h3 className="font-display font-bold text-lg">{p.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-700 text-xs font-mono">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="flex items-center gap-1.5 text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                  <a href="#" className="flex items-center gap-1.5 text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
