import React, { useState } from "react";
import { User } from "lucide-react";
import { ABOUT_BIO, SITE } from "./data.js";
import { useScrollAnimation } from "./hooks.jsx";

const About = () => {
  const ref = useScrollAnimation();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Profile Photo */}
          <div className="relative flex-shrink-0 group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-2xl">
              {SITE.photo && !imgError ? (
                <img
                  src={SITE.photo}
                  alt={SITE.name}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User size={100} className="text-neutral-400 dark:text-neutral-600" />
                </div>
              )}
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 space-y-6">
            <p className="font-mono text-sm text-neutral-500">{"// about_me"}</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">Who Am I?</h2>
            {ABOUT_BIO.map((p, i) => (
              <p key={i} className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

