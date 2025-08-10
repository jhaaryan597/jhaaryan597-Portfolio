import React from 'react';
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { Code, Terminal, ExternalLink } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  icons: React.ReactNode[];
  link: string;
  isGitHub?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, icons, link, isGitHub }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
      {/* Responsive image container - adjusted height for different screen sizes */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 bg-gray-900 flex-1 flex flex-col">
        {/* Responsive text sizes */}
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 flex-1">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          {/* Responsive icon sizes and spacing */}
          <div className="flex space-x-2 sm:space-x-3">
            {icons.map((icon, index) => (
              <div key={index} className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-gray-800">
                {icon}
              </div>
            ))}
          </div>
          
          {link && (
            <Link href={link} className="flex items-center text-blue-400 hover:text-blue-300 transition text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
              <span className="mr-1 sm:mr-2"> {isGitHub ? "GitHub" : "Live"} </span>
              {isGitHub ? <FaGithub size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <ExternalLink size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

// Define the card type based on CardProps (excluding the optional isGitHub)
type CardType = {
  title: string;
  description: string;
  imageSrc: string;
  icons: React.ReactNode[];
  link: string;
  isGitHub: boolean;
};

const GridLayout: React.FC = () => {
  const cards: CardType[] = [
    // {
    //   title: "Metro Routing & Scheduling System",
    //   description: "Boosted metro navigation with Dijkstra & A⋆ algorithm...",
    //   imageSrc: "/metromap.png",
    //   link: "https://github.com/jhaaryan597/Metro-Routing-and-Scheduling-System",
    //   isGitHub: true,
    //   icons: [
    //     <div className="text-blue-500 font-bold text-xs sm:text-sm" key="cpp">C++</div>,
    //     <Terminal className="text-gray-300 w-5 h-5 sm:w-6 sm:h-6" key="tools" />,
    //     <Code className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" key="code" />,
    //   ]
    // },
    // {
    //   title: "EduNexus- EdTech Platform",
    //   description: "Engineered a highly scalable EdTech platform...",
    //   imageSrc: "/Edunexus.png",
    //   link: "https://edunexus-eight.vercel.app/",
    //   isGitHub: false,
    //   icons: [
    //     <div className="text-blue-400 font-bold text-xs sm:text-sm" key="react">⚛️</div>,
    //     <div className="text-green-500 font-bold text-xs sm:text-sm" key="mongodb">M</div>,
    //     <div className="text-yellow-500 font-bold text-xs sm:text-sm" key="express">Ex</div>,
    //     <div className="text-purple-500 font-bold text-xs sm:text-sm" key="redux">Rx</div>,
    //     <Code className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" key="code" />
    //   ]
    // },
    // {
    //   title: "NavSarjan- Research Management Platform",
    //   description: "Developed for 200+ institutions in Gujarat...",
    //   imageSrc: "/Navsarjan.png",
    //   link: "https://github.com/jhaaryan597/NavSarjan",
    //   isGitHub: true,
    //   icons: [
    //     <div className="text-blue-400 font-bold text-xs sm:text-sm" key="react">⚛️</div>,
    //     <div className="text-green-500 font-bold text-xs sm:text-sm" key="mongodb">M</div>,
    //     <div className="text-yellow-500 font-bold text-xs sm:text-sm" key="express">Ex</div>,
    //     <div className="text-cyan-400 font-bold text-xs sm:text-sm" key="socketio">S.IO</div>
    //   ]
    // }
  ];

  if (cards.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-950 p-4 sm:p-6 md:p-8" id='Projects'>
      <h1 className="heading m-2 mb-6 sm:mb-8 md:mb-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Some of my recent<span className="text-purple"> Projects</span>
      </h1>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
