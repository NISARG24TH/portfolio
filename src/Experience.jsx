import React from "react";
import { Briefcase } from "lucide-react";
import { EXPERIENCES } from "./data.js";
import { useScrollAnimation } from "./hooks.jsx";

const Experience = () => {
  const ref = useScrollAnimation();
  return (
    <section id="experience" className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-300">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-hidden">
        <p className="font-mono text-sm text-neutral-500 text-center">{"// experience"}</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mt-2 mb-16">My Journey</h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-300 dark:bg-neutral-700 md:-translate-x-px" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center gap-6 md:gap-12`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-neutral-900 dark:bg-white -translate-x-1.5 md:-translate-x-1.5 mt-6 md:mt-0 z-10" />

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div className="flex-1 ml-10 md:ml-0 p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                        <Briefcase size={18} className="text-neutral-500" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold">{exp.company}</h3>
                        <p className="text-sm text-neutral-500">{exp.role}</p>
                      </div>
                    </div>
                    <p className="text-xs font-mono text-neutral-400 mb-3">{exp.period}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span key={t} className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-700 text-xs font-mono">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
