export const navItems = [
  {name: "Home", link:"#home"},
  {name: "Experience", link:"#Experience"},
  {name: "Education", link: "#education"},
  {name: "Projects", link:"#Projects"},
  {name: "Achievements", link:"#Achievements"},
  {name: "Contact", link:"#Contact"}
];

export const techStack = [
  { svg: "/swift.png" },
  { svg: "/icons/C++.svg" },
  { svg: "/swiftUi.png" },
  { svg: "/UIkit.png" },
  { svg: "/flutter.png" },
  { svg: "/supabase.png" },
  { svg: "/firebase.png" },
  { svg: "/icons/Xcode.svg" },
  { svg: "/icons/Git.svg" },
  { svg: "/skills/github-icon-1.svg" },
  { svg: "/icons/Postman.svg" },
  { svg: "/icons/PostgresSQL.svg" },
];


export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern - Railse",
    desc: "Built scalable Flutter modules with priority-based task management and advanced filters, improving execution speed by 40% and enhancing workflow visibility. Integrated WhatsApp Business API for automated messaging and media sharing; optimized backend workflows with Git and REST APIs, reducing bugs by 30%.",
    className: "md:col-span-2",
    thumbnail: "/railse_logo.jpeg",
    link: "https://www.linkedin.com/in/jhaaryan597/overlay/1755191211151/single-media-viewer/?profileId=ACoAAE6VwwsBlNlQMzh5qHNUz9boXjVGfK2Cq0E",
    date: "Jun 2025 – Jul 2025",
  },
 
  {
    id: 2,
    title: "Flutter Developer Intern - Gravitones",
    desc: "Delivered Guftagu AI character creation app using Flutter, Dart, and Firebase with Google OAuth, offline storage via HiveDB, and 40% faster load times. Conducted high-scale performance testing with 1,000+ simulated users and maintained quality standards via code reviews and best practices.",
    className: "md:col-span-2",
    thumbnail: "/gravitones_logo.jpeg",
    link: "https://www.linkedin.com/in/jhaaryan597/overlay/1755193222106/single-media-viewer/?profileId=ACoAAE6VwwsBlNlQMzh5qHNUz9boXjVGfK2Cq0E",
    date: "Apr 2025 – May 2025",
  },
];

export const educationExperience = [
  {
    id: 1,
    title: "Indian Institute of Information Technology Manipur",
    location: "Imphal, Manipur",
    desc: "Bachelor of Technology in Computer Science and Engineering with a specialization in Artificial Intelligence and Data Science. SGPA: 8.76, CGPA: 7.75",
    coursework: "Relevant Coursework: Data Structures, Algorithms, System Design, OOP, OS, Software Engineering, Blockchain, Software Testing, DBMS, Computer Networks",
    date: "Nov 2022 – May 2026",
  },
];

export const ProjectsData = [
  {
    id: 1,
    title: "Kollaborate",
    desc: "A modern iOS app for collaboration, discussions, and project management. Built with SwiftUI and powered by Supabase, Kollaborate provides a space where users can share updates, explore projects, manage tasks, and connect with peers.",
    className: "md:col-span-2",
    thumbnail: "/Kollaborate-app-icon.png",
    link: "https://github.com/jhaaryan597/Kollaborate",
    isGitHub: true,
  },
  {
    id: 2,
    title: "HostelHunt",
    desc: "A modern, sleek, and user-friendly iOS application for discovering and booking hostels. Built with SwiftUI and powered by Supabase, HostelHunt makes it simple for travelers to explore, wishlist, and reserve accommodations worldwide.",
    className: "md:col-span-2",
    thumbnail: "/hostelhunt.png",
    link: "https://github.com/jhaaryan597/HostelHunt",
    isGitHub: true,
  },
  {
    id: 3,
    title: "ZappyChat",
    desc: "A modern, feature-rich & cross-platform chat application built with Flutter + Supabase. Seamlessly chat with friends, manage profiles, and interact with an AI-powered assistant (Gemini) — all in one sleek app.",
    className: "md:col-span-2",
    thumbnail: "/zappychat.png",
    link: "https://github.com/jhaaryan597/ZappyChat",
    isGitHub: true,
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/jhaaryan597"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jhaaryan597"
  },
  {
    id: 3,
    img: "/wha.svg",
    link: "https://wa.me/917389125979"
  },
];

export const liveLink = [
  {
    id:1,
    link:"https://github.com/jhaaryan597/HostelHunt",
  },
  {
    id:2,
    link:"https://github.com/jhaaryan597/Kollaborate"
  },
  {
    id:3,
    link:"https://github.com/jhaaryan597/ZappyChat",
  }
];

export const personalInfo = {
  name: "Aryan Jha",
  email: "aryanjha230705@gmail.com",
  phone: "+91 7389125979",
  education: {
    institution: "Indian Institute of Information Technology Manipur",
    location: "Imphal, Manipur",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "Nov 2022 – May 2026",
    specialization: "Artificial Intelligence and Data Science",
    sgpa: "8.76",
    cgpa: "7.75"
  },
  extracurricular: [
    "General Sports Secretary, IIIT Manipur: Organized intra-college tournaments with 200+ participants.",
    "Contingent Leader, Asmita '24 (IIIT Allahabad): Led 85-member team; won medals in 16 events.",
    "Tech Core Member, GDG Imphal: Led Flutter workshops and deployed production apps showcased at GDG events with 100+ developers."
  ]
};
