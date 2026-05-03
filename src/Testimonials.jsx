import React, { useState, useEffect, useCallback } from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "./data.js";
import { useScrollAnimation } from "./hooks.jsx";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useScrollAnimation();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-300">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-hidden">
        <p className="font-mono text-sm text-neutral-500 text-center">{"// testimonials"}</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mt-2 mb-12">What People Say</h2>

        <div className="relative overflow-hidden">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${i === current ? "opacity-100 translate-x-0" : "opacity-0 absolute inset-0 translate-x-8"}`}
            >
              <div className="p-8 md:p-12 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-center">
                <Quote size={40} className="mx-auto mb-6 text-neutral-300 dark:text-neutral-600" />
                <p className="text-lg md:text-xl leading-relaxed mb-8 italic text-neutral-600 dark:text-neutral-300">&ldquo;{t.quote}&rdquo;</p>
                <div className="w-12 h-12 rounded-full bg-neutral-300 dark:bg-neutral-600 mx-auto mb-3" />
                <p className="font-display font-bold">{t.name}</p>
                <p className="text-sm text-neutral-500">{t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === current ? "bg-neutral-900 dark:bg-white w-6" : "bg-neutral-300 dark:bg-neutral-600"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
