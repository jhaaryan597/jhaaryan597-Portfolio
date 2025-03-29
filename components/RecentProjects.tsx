import React from 'react';
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { Code, Terminal, ExternalLink } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  icons: React.ReactNode[];
  link: string;
  isGitHub?: boolean; // Added flag to differentiate between GitHub and live link
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, icons, link, isGitHub }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
      <div className="relative w-full h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-contain" 
        />
      </div>
      
      <div className="p-6 bg-gray-900 flex-1 flex flex-col">
        <h2 className="text-white text-2xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-gray-300 mb-6 flex-1">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex space-x-3">
            {icons.map((icon, index) => (
              <div key={index} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800">
                {icon}
              </div>
            ))}
          </div>
          
          {link && (
            <Link href={link} className="flex items-center text-blue-400 hover:text-blue-300 transition" target="_blank" rel="noopener noreferrer">
              <span className="mr-2"> {isGitHub ? "GitHub" : "Live"} </span>
              {isGitHub ? <FaGithub size={20} /> : <ExternalLink size={16} />}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const GridLayout: React.FC = () => {
  const cards = [
    {
      title: "Metro Routing & Scheduling System",
      description: "Boosted metro navigation with Dijkstra & A⋆ algorithm using heuristics, enhancing path-finding efficiency by 44.86%. Streamlined scheduling, cutting travel delays by 23% & boosting throughput, benefiting 10-15% of urban transit system.",
      imageSrc: "/metromap.png",
      link: "https://github.com/kishan-25/Metro-Routing-and-Scheduling-System",
      isGitHub: true,
      icons: [
        <div className="text-blue-500 font-bold text-sm" key="cpp">C++</div>,
        <Terminal className="text-gray-300" key="tools" size={24} />,
        <Code className="text-blue-400" key="code" size={24} />,
      ]
    },
    {
      title: "EduNexus- EdTech Platform",
      description: "Engineered a highly scalable EdTech platform with secure authentication, course management, and payment integration. Optimized backend performance, significantly reducing API response time by 25% and boosting user engagement by 30%.",
      imageSrc: "/Edunexus.png",
      link: "https://edu-nexus-flame.vercel.app/",
      isGitHub: false,
      icons: [
        <div className="text-blue-400 font-bold text-sm" key="react">⚛️</div>,
        <div className="text-green-500 font-bold text-sm" key="mongodb">M</div>,
        <div className="text-yellow-500 font-bold text-sm" key="express">Ex</div>,
        <div className="text-purple-500 font-bold text-sm" key="redux">Rx</div>,
        <Code className="text-blue-400" key="code" size={24} />
      ]
    },
    {
      title: "NavSarjan- Research Management Platform",
      description: "Developed for 200+ institutions in Gujarat, centralizing research, IPR, and start-up management to enhance efficiency. Improved transparency and decision-making with real-time analytics, resulting in a 30% boost in resource utilization.",
      imageSrc: "/Navsarjan.png",
      link: "https://github.com/kishan-25/NavSarjan",
      isGitHub: true,
      icons: [
        <div className="text-blue-400 font-bold text-sm" key="react">⚛️</div>,
        <div className="text-green-500 font-bold text-sm" key="mongodb">M</div>,
        <div className="text-yellow-500 font-bold text-sm" key="express">Ex</div>,
        <div className="text-cyan-400 font-bold text-sm" key="socketio">S.IO</div>
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-8" id='Projects'>
      <h1 className="heading m-2 mb-10">
        Some of my recent<span className="text-purple"> Projects</span>
      </h1>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              icons={card.icons}
              link={card.link}
              isGitHub={card.isGitHub}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridLayout;