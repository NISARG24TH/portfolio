import React from "react";
import { Github, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { SITE, NAV_LINKS } from "./data.js";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-lg">{SITE.name}</h3>
            <p className="text-sm text-neutral-500 mt-1">{SITE.tagline}</p>
          </div>

          {/* Center - Nav */}
          <div className="flex flex-wrap justify-center gap-4">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - Socials */}
          <div className="flex gap-2">
            {[
              { Icon: Github, href: SITE.socials.github },
              { Icon: Linkedin, href: SITE.socials.linkedin },
              { Icon: Twitter, href: SITE.socials.twitter },
              { Icon: Instagram, href: SITE.socials.instagram },
              { Icon: Youtube, href: SITE.socials.youtube },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-400">
          <p>Built with ❤️ by Nisarg Bhoi</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
