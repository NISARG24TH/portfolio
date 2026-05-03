import React, { useRef, useEffect, useState, useCallback } from "react";
import { Github, Linkedin, Twitter, Instagram, Youtube, FileText, Briefcase, Mail, MessageCircle, User } from "lucide-react";
import { SITE } from "./data.js";
import { useTypewriter } from "./hooks.jsx";

const ParticleCanvas = ({ dark }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener("mousemove", handleMouse);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = dark ? "255,255,255" : "0,0,0";

      particles.forEach((p) => {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx += dx * 0.00005;
          p.vy += dy * 0.00005;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},0.3)`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${color},${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [dark]);

  return <canvas ref={canvasRef} id="particle-canvas" />;
};

const HeroPhoto = () => {
  const containerRef = useRef(null);
  const [imgError, setImgError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  const handleLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem]"
    >
      {/* Pulsing glow backdrop */}
      <div
        className="absolute inset-4 rounded-3xl opacity-40 blur-3xl"
        style={{
          background: "linear-gradient(135deg, #8b5cf6, #6366f1, #a78bfa)",
          animation: "heroGlow 4s ease-in-out infinite alternate",
        }}
      />

      {/* Animated rotating gradient border ring */}
      <div
        className="absolute inset-0 rounded-3xl p-[3px]"
        style={{ animation: "heroSpin 8s linear infinite" }}
      >
        <div
          className="w-full h-full rounded-3xl"
          style={{
            background: "conic-gradient(from 0deg, #8b5cf6, #6366f1, #a78bfa, #c084fc, #818cf8, #8b5cf6)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            padding: "3px",
          }}
        />
      </div>

      {/* Main photo container */}
      <div
        className="absolute inset-[6px] rounded-[1.35rem] overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-2xl"
        style={{
          transform: `perspective(800px) rotateX(${mousePos.y * -6}deg) rotateY(${mousePos.x * 6}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {SITE.photo && !imgError ? (
          <img
            src={SITE.photo}
            alt={SITE.name}
            className="w-full h-full object-cover"
            style={{
              transform: `scale(1.05) translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
              transition: "transform 0.15s ease-out",
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-indigo-500/20">
            <User size={80} className="text-neutral-400 dark:text-neutral-500" />
          </div>
        )}

        {/* Glassmorphic overlay badge */}
        <div className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl bg-white/15 dark:bg-black/25 backdrop-blur-xl border border-white/20 dark:border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-display font-bold text-sm drop-shadow-lg">{SITE.name}</p>
              <p className="text-white/70 text-xs font-mono drop-shadow-md">AI / GenAI Engineer</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-300 text-[10px] font-semibold uppercase tracking-wider">Open to work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating orbital dots */}
      <div
        className="absolute w-3 h-3 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50"
        style={{
          top: "8%", right: "5%",
          animation: "heroDot1 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50"
        style={{
          bottom: "12%", left: "3%",
          animation: "heroDot2 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-2.5 h-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"
        style={{
          top: "50%", left: "-2%",
          animation: "heroDot3 7s ease-in-out infinite",
        }}
      />
    </div>
  );
};

const SocialIcon = ({ Icon, href }) => (
  <a href={href || "#"} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200">
    <Icon size={20} />
  </a>
);

const Hero = ({ dark }) => {
  const typed = useTypewriter(SITE.roles);
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <ParticleCanvas dark={dark} />
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left */}
          <div className="flex-1 space-y-6">
            <p className="text-neutral-500 font-mono text-sm">Hello, I&apos;m</p>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight">
              {SITE.name}
            </h1>
            <div className="h-8 font-mono text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
              <span>{typed}</span>
              <span className="cursor-blink ml-0.5">|</span>
            </div>
            <p className="text-neutral-500 max-w-lg">{SITE.tagline}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={SITE.resumeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm hover:opacity-90 transition-opacity">
                <FileText size={16} /> Download Resume
              </a>
              <a href="#contact" className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                <Briefcase size={16} /> Hire Me
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                <Mail size={16} /> Email Me
              </a>
              <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>

            <div className="flex gap-1 pt-2">
              <SocialIcon Icon={Github} href={SITE.socials.github} />
              <SocialIcon Icon={Linkedin} href={SITE.socials.linkedin} />
              <SocialIcon Icon={Twitter} href={SITE.socials.twitter} />
              <SocialIcon Icon={Instagram} href={SITE.socials.instagram} />
              <SocialIcon Icon={Youtube} href={SITE.socials.youtube} />
            </div>
          </div>

          {/* Right */}
          <div className="flex-shrink-0">
            <HeroPhoto />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
