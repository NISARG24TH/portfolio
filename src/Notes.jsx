import React from "react";
import { FileText } from "lucide-react";
import { NOTES } from "./data.js";
import { useScrollAnimation } from "./hooks.jsx";

const Notes = () => {
  const ref = useScrollAnimation();
  return (
    <section id="notes" className="py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-hidden">
        <p className="font-mono text-sm text-neutral-500 text-center">{"// notes"}</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mt-2 mb-10">My Notes &amp; Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NOTES.map((note) => (
            <div key={note.id} className="lined-paper p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <span className="inline-block px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-xs font-mono font-semibold mb-3">{note.subject}</span>
              <h3 className="font-display font-bold mb-2">{note.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">{note.excerpt}</p>
              <p className="text-xs text-neutral-400 mb-4">{note.date}</p>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity">
                <FileText size={14} /> View Note
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notes;
