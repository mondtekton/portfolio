"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import getProjects from "@/utils/projects";
import { useTranslations } from "next-intl";
import scrollToSection from "@/utils/scrollToSection";
import { useState } from "react";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = useTranslations("projectsDesc");
  const projects = getProjects(t);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <Nav
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        action0={(sectionID) => scrollToSection(sectionID)}
        action1={(sectionID) => scrollToSection(sectionID)}
        action2={(sectionID) => scrollToSection(sectionID)}
        action3={(sectionID) => scrollToSection(sectionID)}
      />
      <LocaleSwitcher />

      <div className="pt-[70px] w-full">
        <section className="min-h-screen flex items-center justify-center">
          <Hero id={"about"} setCurrentIndex={setCurrentIndex} />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <Projects id={"projects"} projects={projects} />
        </section>

        <section className="flex items-center justify-center">
          <TechStack id={"competences"} projects={projects} />
        </section>

        <Contact />
      </div>
    </div>
  );
};

export default Home;
