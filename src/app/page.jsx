"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Product from "@/components/Product";
import Content from "@/components/Content";
import Contact from "@/components/Contact";

export default function Page() {
  const [activePage, setActivePage] = useState("home");
  const containerRef = useRef(null);

  const sectionIds = ["home", "about", "tech", "product", "content", "contact"];

  const scrollToSection = (id) => {
    const container = containerRef.current;
    if (!container) return;
    const idx = sectionIds.indexOf(id);
    if (idx >= 0) container.scrollTo({ top: idx * container.clientHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActivePage(id);
        },
        { root: container, threshold: 0.5 }
      );
      if (el) obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <Navbar activePage={activePage} scrollToSection={scrollToSection} />
      <div className="scroll-container" ref={containerRef}>
        <div id="home" className="snap-section">
          <HomePage scrollToSection={scrollToSection} />
        </div>
        <div id="about" className="snap-section">
          <About />
        </div>
        <div id="tech" className="snap-section">
          <Tech />
        </div>
        <div id="product" className="snap-section">
          <Product />
        </div>
        <div id="content" className="snap-section">
          <Content />
        </div>
        <div id="contact" className="snap-section">
          <Contact />
        </div>
      </div>
    </>
  );
}
