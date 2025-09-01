"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Publication from "@/components/Publications";
import RecentProjects from "@/components/RecentProjects";
import Achievements from "@/components/Achievements"; 
import Skills from "@/components/Skills";
// import Clients from "@/components/Clients";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero /> 
        <Experience/>
        <Education />
        <Publication/>
        {/* <RecentProjects /> */}
        <Skills/>
        {/* <Clients/> */}
        <Achievements/>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
