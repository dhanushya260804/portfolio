export const personalInfo = {
  name: "Dhanushya Thangaraj",
  role: "Aspiring Full Stack Developer",
  tagline: "From Zoology to Code — Driven by curiosity and passion",
  bio: "I'm a BSc. Zoology graduate making an exciting career switch into the world of IT. My background in science has sharpened my analytical thinking and problem-solving skills, which I now channel into building web applications. I'm currently learning Full Stack Development with React and Java, and I'm passionate about creating clean, functional software that makes a real difference.",
  email: "dhanushya260804@gmail.com",
  phone: "+91 8939547928",
  location: "Chennai, Tamil Nadu, India",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/dhanushya260804",
    linkedin: "https://www.linkedin.com/in/dhanushya-thangaraj-23717a375",
  }
};

export const education = [
  {
    degree: "Bachelor of Science - Advanced Zoology and Biotechnology",
    institution: "Ethiraj College For Women",
    location: "Chennai, India",
    period: "2022 - 2025",
    grade: "CGPA: 8.2 / 10",
    highlights: ["Data Structures", "Web Development", "DBMS"]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "P.N.D. Adarsh Vidayala Matric Higher Sec School",
    location: "Chennai, India",
    period: "2022",
    grade: "83%",
    highlights: ["Computer Science", "Biology", "Physics", "Chemistry"]
  },
  {
    degree: "Full Stack Development",
    institution: "FITA Academy",
    location: "Chennai, India",
    highlights: ["React.js", "Java", "Spring Boot", "MySQL"]
  }
];

export const experience = [];

export const skills = [
  { name: "HTML5 & CSS3",       level: 90, category: "Frontend" },
  { name: "JavaScript (ES6+)",  level: 80, category: "Frontend" },
  { name: "React.js",           level: 75, category: "Frontend" },
  { name: "Tailwind CSS",       level: 70, category: "Frontend" },
  { name: "Java",               level: 82, category: "Backend" },
  { name: "Spring Boot",        level: 72, category: "Backend" },
  { name: "REST APIs",          level: 75, category: "Backend" },
  { name: "MySQL",              level: 78, category: "Database" },
  { name: "MongoDB",            level: 60, category: "Database" },
  { name: "Git & GitHub",       level: 80, category: "Tools" },
  { name: "VS Code",            level: 90, category: "Tools" },
  { name: "Postman",            level: 72, category: "Tools" },
];

export const projects = [
  {
  id: 1,
  title: "Online Food Delivery App",
  description: "A full-stack food delivery web app with user login, restaurant browsing, cart management, and order placement. Built with React frontend and Spring Boot backend with MySQL database.",
  tech: ["React", "Spring Boot", "MySQL", "JWT"],
  github: "https://github.com/dhanushya260804/online-food-delivery-app",  // add your GitHub repo link
  live: "https://online-food-delivery-app-beta.vercel.app",
  featured: true,
  category: "Full Stack"
},
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio website built with React and Framer Motion, featuring dark/light mode, smooth animations, project filtering, and a working contact form.",
    tech: ["React", "Framer Motion", "CSS"],
    github: "https://github.com/yourusername/portfolio",
    live: null,
    featured: false,
    category: "Frontend"
  },

];

export const techCategories = ["All", "Full Stack", "Frontend", "Backend", "Databse", "Tools"];