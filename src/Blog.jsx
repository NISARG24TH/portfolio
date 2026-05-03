import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "./data.js";
import { useScrollAnimation } from "./hooks.jsx";

const Blog = () => {
  const ref = useScrollAnimation();
  return (
    <section id="blog" className="py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-hidden">
        <p className="font-mono text-sm text-neutral-500 text-center">{"// blog"}</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mt-2 mb-10">Latest Thoughts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all duration-300">
              <span className="inline-block px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-xs font-mono font-semibold mb-4">{post.category}</span>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">{post.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>{post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
              </div>
              <a href="#" className="inline-flex items-center gap-1 mt-4 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                Read More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
