import React, { useState } from "react";
import { FileText, Briefcase, Mail, MessageCircle, Send, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";
import { SITE } from "./data.js";
import { useScrollAnimation } from "./hooks.jsx";

const Contact = () => {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Required";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 transition-all duration-200";

  return (
    <section id="contact" className="py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-hidden">
        <p className="font-mono text-sm text-neutral-500 text-center">{"// contact"}</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mt-2 mb-12">Let&apos;s Work Together</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-neutral-500 leading-relaxed">
              Have a project in mind or just want to chat? I&apos;m always open to discussing new opportunities, creative ideas, or ways to help bring your vision to life.
            </p>
            <div className="space-y-3">
              <a href={SITE.resumeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm hover:opacity-90 transition-opacity w-full md:w-auto">
                <FileText size={16} /> Download Resume
              </a>
              <a href="#contact" className="flex items-center gap-3 px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors w-full md:w-auto">
                <Briefcase size={16} /> Hire Me
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors w-full md:w-auto">
                <Mail size={16} /> Send Email
              </a>
              <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors w-full md:w-auto">
                <MessageCircle size={16} /> WhatsApp Me
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"><Github size={20} /></a>
              <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"><Linkedin size={20} /></a>
              <a href={SITE.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm space-y-4">
            {submitted && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-sm font-medium">
                <CheckCircle size={16} /> Message sent successfully!
              </div>
            )}
            <div>
              <input type="text" placeholder="Nisarg Bhoi" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input type="email" placeholder="nisarg@nisargbhoi.tech" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input type="text" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>
            <div>
              <textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button onClick={handleSubmit} className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm hover:opacity-90 transition-opacity">
              <Send size={16} /> Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
