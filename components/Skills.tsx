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
        { name: "Flutter", icon: "/skills/flutter.svg" },
        { name: "Swift", icon: "/skills/swift.svg" },
        { name: "SwiftUI", icon: "/skills/swiftui.svg" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "/skills/mysql-3.svg" },
        { name: "SQLite", icon: "/skills/sqlite.svg" },
        { name: "MongoDB", icon: "/skills/mongodb.svg" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "/skills/git-icon.svg"},
        { name: "GitHub", icon: "/skills/github-icon-1.svg" },
        { name: "Postman", icon: "/skills/postman.svg" },
        { name: "LaTeX", icon: "/skills/latex.svg" },
        { name: "Firebase", icon: "/skills/firebase.png"},
        { name: "Supabase", icon: "/skills/supabase.png" },
        { name: "Xcode", icon: "/skills/xcode.svg" },
        { name: "VS Code", icon: "/skills/vscode.svg" },
        { name: "IntelliJ IDEA", icon: "/skills/intellij-idea-1.svg" },
        { name: "NPM", icon: "/skills/npm.svg" },
        { name: "FastAPI", icon: "/skills/fastapi.svg" },
        { name: "Material UI", icon: "/skills/material-ui.svg" },
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
                               transition-all duration-300 hover:shadow-md 
                               hover:translate-y-[-2px]"
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