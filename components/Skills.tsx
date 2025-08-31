// SkillsSection.tsx
import React from 'react';
import Image from 'next/image';

// Define the skill categories and their items
interface Skill {
  name: string;
  icon: string; // Path to the SVG icon
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  // Helper function to create path to icon - updated to use /skills/ directory
  const iconPath = (name: string): string => `/skills/${name.toLowerCase().replace(/[.\s&+]/g, '')}.svg`;

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: "/skills/c++.svg" },
      { name: "SQL", icon: "/skills/sql.svg" },
      { name: "Dart", icon: "/skills/dart.png" },
      { name: "Swift", icon: "/swift.png" },
      { name: "Solidity", icon: "/skills/solidity.png" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Flutter", icon: "/flutter.png" },
      { name: "SwiftUI", icon: "/swiftUi.png" },
      { name: "Riverpod", icon: "/skills/riverpod.png" },
      { name: "GetX", icon: "/skills/getx.png" },
      { name: "REST API", icon: "/skills/rest.png" },
    ]
  },
  {
    title: "Databases & Backend",
    skills: [
      { name: "MySQL", icon: "/skills/mysql.png" },
      { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
      { name: "Firebase", icon: "/firebase.png" },
      { name: "Supabase", icon: "/supabase.png" },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "/skills/git-icon.svg" },
      { name: "GitHub", icon: "/skills/github-icon-1.svg" },
      { name: "Postman", icon: "/skills/postman.svg" },
      { name: "Xcode", icon: "/icons/Xcode.svg" },
      { name: "VS Code", icon: "/skills/vscode.png" },
      { name: "Android Studio", icon: "/skills/androidStudio.png" },
    ]
  },
];

  return (
    <section id="Skills" className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Technical Skills</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center rounded-lg px-4 py-2 border border-gray-200 
                               transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-6 h-6 mr-2 flex-shrink-0">
                      <Image 
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to a default icon or placeholder
                          const target = e.target as HTMLImageElement;
                          target.onerror = null; // Prevent infinite loop
                          target.src = "/skills/default.svg"; // Updated fallback path
                        }}
                      />
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
