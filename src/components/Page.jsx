"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Product from "@/components/Product";
import Content from "@/components/Content";
import Contact from "@/components/Contact";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import CoursesList from "@/components/CoursesList";
import { productProjects, productCourses } from "@/data/content";

function ProductProjects() {
  return (
    <section className="fade-up" style={{ minHeight: "100vh", padding: "8rem 4rem 5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem" }}>Product work</p>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.8rem" }}>Projects</h2>
      </div>
      <ProjectsCarousel projects={productProjects} />
    </section>
  );
}

function ProductCourses() {
  return (
    <section className="fade-up" style={{ minHeight: "100vh", padding: "8rem 4rem 5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem" }}>Product work</p>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.8rem" }}>Courses</h2>
      </div>
      <CoursesList courses={productCourses} />
    </section>
  );
}

export default function Page() {
  const [activePage, setActivePage] = useState("home");

  const pages = {
    home: <HomePage setActivePage={setActivePage} />,
    about: <About />,
    tech: <Tech />,
    product: <Product setActivePage={setActivePage} />,
    "product-projects": <ProductProjects />,
    "product-courses": <ProductCourses />,
    content: <Content />,
    contact: <Contact />,
  };

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main key={activePage}>
        {pages[activePage]}
      </main>
    </>
  );
}