import React from 'react';
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { Code, Terminal, ExternalLink } from 'lucide-react';
import { ProjectsData } from '@/data';

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
  return (
    <div className="min-h-screen bg-gray-950 p-4 sm:p-6 md:p-8" id='Projects'>
      <a href="https://github.com/jhaaryan597" target="_blank" rel="noopener noreferrer">
        <h1 className="heading m-2 mb-6 sm:mb-8 md:mb-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          My Recent<span className="text-purple"> Projects</span>
        </h1>
      </a>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {ProjectsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.desc}
              imageSrc={card.thumbnail}
              icons={[]}
              link={card.link}
              isGitHub={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
