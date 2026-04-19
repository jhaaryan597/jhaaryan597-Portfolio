"use client";

import React from "react";
import Image from "next/image";

const Achievements = () => {
  const achievementsData = [
    {
      id: 1,
      title: "LeetCode: Global Top 5.24%",
      thumbnail: "/leetcode.png",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((achievement) => (
            <div
              key={achievement.id}
              className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-gradient-to-b from-slate-800/60 to-slate-900/80 backdrop-blur-sm p-6 flex flex-col items-center text-center hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <h3 className="text-base font-bold mb-4 text-white">
                {achievement.title}
              </h3>
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-slate-800/50">
                <Image
                  src={achievement.thumbnail}
                  alt={achievement.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
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