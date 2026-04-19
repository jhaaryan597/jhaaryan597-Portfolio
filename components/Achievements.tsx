"use client";

import React from "react";
import Image from "next/image";

const Achievements = () => {
  const achievementsData = [
    {
      id: 1,
      title: "LeetCode: Global Top 5.24%",
      thumbnail: "/ss3.jpeg",
      desc: "Ranked in the global Top 5.24% with a peak contest rating of 1,867.",
    },
    {
      id: 2,
      title: "NER'25 Tech Hackathon: Finalist",
      thumbnail: "/ss1.jpeg",
      desc: "Finalist (top 3%) among 1,300+ teams, building an enterprise-grade solution within a 48-hour deadline.",
    },
    {
      id: 3,
      title: "Ahouba Hackathon: 3rd Place",
      thumbnail: "/ss2.jpeg",
      desc: "Built a full-stack Flutter app in 24 hours, validated by a panel of 5 industry experts.",
    },
    {
      id: 4,
      title: "Engineers' Ring of Honour 2025",
      thumbnail: "/ss3.jpeg",
      desc: "Secured Rank #9 at IIIT Manipur and an All India Rank of #973 in this prestigious nationwide competition.",
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