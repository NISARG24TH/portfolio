import React from "react";
import { Twitter, Linkedin, Github, Heart, ExternalLink } from "lucide-react";
import { SOCIAL_POSTS } from "./data.js";
import { useScrollAnimation } from "./hooks.jsx";

const DevToIcon = () => <span className="font-bold text-sm">DEV</span>;
DevToIcon.isCustomIcon = true;

const platformIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  devto: DevToIcon,
  github: Github,
};

const Social = () => {
  const ref = useScrollAnimation();
  return (
    <section className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-300">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-hidden">
        <p className="font-mono text-sm text-neutral-500 text-center">{"// social"}</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mt-2 mb-10">Across The Web</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {SOCIAL_POSTS.map((post, i) => {
            const Icon = platformIcons[post.platform];
            return (
              <div key={i} className={`break-inside-avoid p-5 rounded-2xl ${post.style} border border-neutral-700 hover:scale-105 hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    {Icon.isCustomIcon ? <Icon /> : <Icon size={16} />}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{post.handle}</p>
                    <p className="text-xs opacity-60">{post.platform}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4 opacity-90">{post.content}</p>
                <div className="flex items-center justify-between text-xs opacity-60">
                  <span className="flex items-center gap-1"><Heart size={12} />{post.likes}</span>
                  <span>{post.date}</span>
                </div>
                <a href="#" className="inline-flex items-center gap-1 mt-3 text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity">
                  View Post <ExternalLink size={10} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Social;
