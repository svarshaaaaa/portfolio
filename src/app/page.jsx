"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Product from "@/components/Product";
import Content from "@/components/Content";
import Contact from "@/components/Contact";

export default function Page() {
  const [activePage, setActivePage] = useState("home");

  const pages = {
    home: <HomePage setActivePage={setActivePage} />,
    about: <About />,
    tech: <Tech />,
    product: <Product />,
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
