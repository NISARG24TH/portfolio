import { useState, useEffect, useRef, useCallback } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch { return initialValue; }
  });
  const setStoredValue = useCallback((v) => {
    try {
      const val = v instanceof Function ? v(value) : v;
      setValue(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { console.error(e); }
  }, [key, value]);
  return [value, setStoredValue];
};

export const useScrollAnimation = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll-visible");
          el.classList.remove("scroll-hidden");
        }
      },
      { threshold: 0.1 }
    );
    el.classList.add("scroll-hidden");
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

export const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1500) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);
  return text;
};

export const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sectionIds[i]);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds]);
  return active;
};
