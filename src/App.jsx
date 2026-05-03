import React, { useEffect } from "react";
import { useLocalStorage } from "./hooks.jsx";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Blog from "./Blog.jsx";
import Testimonials from "./Testimonials.jsx";
import Notes from "./Notes.jsx";
import Social from "./Social.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  const [dark, setDark] = useLocalStorage("theme-dark", true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-body transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Testimonials />
      <Notes />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
