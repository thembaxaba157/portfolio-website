import Work1 from "../../../assets/work1.jpg"
import Work2 from "../../../assets/work2.jpg"
import Work3 from "../../../assets/work3.jpg"
import Work4 from "../../../assets/work4.jpg"
import Work5 from "../../../assets/work5.jpg"

// Data for each project
export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Web Design",
    category: "full-stack",
    description: "A responsive web design project focused on modern layouts and best UX practices.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    repo: "https://github.com/yourname/web-design-project",
  },
  {
    id: 2,
    image: Work2,
    title: "Mobile App",
    category: "frontend",
    description: "A cross-platform mobile application built with React Native.",
    technologies: ["React Native", "Expo", "JavaScript"],
    repo: "https://github.com/yourname/mobile-app-project",
  },
  {
    id: 3,
    image: Work3,
    title: "Brand Design Backend",
    category: "backend",
    description: "A backend system to support a brand management platform.",
    technologies: ["Node.js", "Express", "MongoDB"],
    repo: "https://github.com/yourname/brand-design-backend",
  },
  {
    id: 4,
    image: Work4,
    title: "CLI Application",
    category: "cli",
    description: "A command-line tool for automating tasks and improving workflow efficiency.",
    technologies: ["Python", "Click"],
    repo: "https://github.com/yourname/cli-tool",
  },
  {
    id: 5,
    image: Work5,
    title: "Full-Stack Web Application",
    category: "full-stack",
    description: "A full-stack web app with authentication, real-time features, and dashboard analytics.",
    technologies: ["React", "Node.js", "Socket.io"],
    repo: "https://github.com/yourname/fullstack-app",
  },
];

// Navigation filter options
export const projectsNav = [
  { name: 'all' },
  { name: 'full-stack' },
  { name: 'frontend' },
  { name: 'backend' },
  { name: 'cli' },
];
