"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Publication from "@/components/Publications";
import RecentProjects from "@/components/RecentProjects";
import Achievements from "@/components/Ahievements"; 
import SkillsSection from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero /> 
        <Experience/>
        <Publication/>
        <RecentProjects />
        <SkillsSection/>
        <Achievements/>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
