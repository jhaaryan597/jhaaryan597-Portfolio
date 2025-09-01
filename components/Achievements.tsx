"use client";

import React from "react";
import Image from "next/image";

const Achievements = () => {
  const achievementsData = [
    {
      id: 2, // Changed order to match screenshot
      title: "Ahouba Hackathon: 3rd place",
      thumbnail: "/ss2.jpeg", // Corrected image path
      desc: "Built a full-stack app in 24 hours using Flutter, Firebase, and REST APIs.",
    },
    {
      id: 3,
      title: "Engineers' Ring of Honour 2025",
      thumbnail: "/ss3.jpeg", // Using your uploaded image
      desc: "Secured Rank #9 at IIIT Manipur and an All India Rank of #973 in this prestigious nationwide competition.",
    },
    {
      id: 1,
      title: "NER'25 Tech Hackathon: Finalist",
      thumbnail: "/ss1.jpeg", // Corrected image path
      desc: "Finalist (top 3% of 1,300+ teams) for an AI & IoT-powered smart agriculture solution.",
    },
  ];

  return (
    <section className="py-20" id="Achievements">
      <div className="container mx-auto px-4">
        <h2 className="heading text-center mb-12">
          My <span className="text-purple">Achievements</span>
        </h2>
        
        {/* Replaced Marquee with a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-slate-900 rounded-lg p-6 flex flex-col items-center text-center border border-slate-800 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg font-bold mb-3 h-12">
                {achievement.title}
              </h3>
              <div className="relative w-full h-44 mb-4">
                <Image
                  src={achievement.thumbnail}
                  alt={achievement.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-gray-400">
                {achievement.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;