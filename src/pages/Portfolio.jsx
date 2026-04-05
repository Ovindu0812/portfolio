import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Education } from "../components/Education";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
