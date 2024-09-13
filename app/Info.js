import {
  FaGithub,
  FaLinkedin,
  FaFileLines,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaDocker,
  FaUbuntu,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiEclipseide,
  SiMilvus,
  SiOpenai,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Refs to different sections

// Sections in NavBar
const sectionInfo = [
  { name: "About" },
  { name: "Projects" },
  { name: "Skills" },
];

// Outer Links in NavBar
const links = [
  {
    name: "Github",
    url: "https://github.com/GauravKano",
    icon: FaGithub,
    alt: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gaurav-kanoujia/",
    icon: FaLinkedin,
    alt: "linkedin",
  },
  {
    name: "Resume",
    url: "/Resume.pdf",
    icon: FaFileLines,
    alt: "resume",
  },
];

// Messages Displayed In About
const aboutMessage = [
  "I'm Gaurav Kanoujia, studying Computer Science with a minor in Communication at the University of Central Florida.",
  "I started coding in high school when I joined the competitive programming team. I quickly fell in love with software development while diving into Python, and it’s been a great ride ever since.",
  "Right now, I’m exploring full-stack development and getting into AI and Machine Learning. I’m excited about the journey ahead and look forward to picking up new skills and tackling interesting challenges as I grow in the tech world",
];

// Projects Info
const projects = [
  {
    name: "Personal Portfolio",
    date: "July 2024",
    description:
      "A stylish and interactive portfolio showcasing my work and skills. It features a modern design, smooth navigation, and responsive layouts, providing a polished and engaging user experience.",
    languages: ["NextJs", "Tailwind CSS", "Vercel"],
    url: "https://gauravkanou.vercel.app/",
  },
  {
    name: "CelebBot",
    date: "August 2024",
    description:
      "Chat with your favorite celebrity's personality. Choose who to talk to, enjoy seamless API-driven chats, and stay organized with clear chat. Sign in easily with registration and email verification for secure access.",
    languages: [
      "NextJs",
      "Material UI",
      "GROQ",
      "Llama API",
      "Firebase",
      "Vercel",
    ],
    url: "https://celebbot.vercel.app/",
  },
  {
    name: "Party Manager",
    date: "August 2024",
    description:
      "An intuitive platform for managing pantry inventory. Users can add items, adjust quantities, and search their stock, while a streamlined interface ensures easy and efficient tracking for a well-organized kitchen.",
    languages: ["NextJs", "Material UI", "Firebase", "Vercel"],
    url: "https://pantrymanager.vercel.app/",
  },
  {
    name: "VolunTrack",
    date: "Feb 2023 - April 2023",
    description:
      "Your essential tool for managing volunteer hours. Log, edit, and track your total hours effortlessly. Perfect for nonprofits and volunteers, VolunTrack keeps your contributions organized and easy to monitor.",
    languages: ["Python"],
    url: "https://github.com/GauravKano/VolunTrack",
  },
  {
    name: "Seat Sync",
    date: "Jan 2024",
    description:
      "User-friendly tool for a hassle-free movie seat bookings. Effortlessly check seat availability, reserve your spot, and find out who’s sitting where—all with instant feedback to make your booking experience smooth and interactive",
    languages: ["C"],
    url: "",
  },
  {
    name: "QueueMaster",
    date: "Feb 2024",
    description:
      "An efficient system for handling customer ticket requests. Users enter their details and ticket quantity, while an intelligent queue ensures smooth and organized processing for a better overall experience.",
    languages: ["C"],
    url: "",
  },
];

// Skill with logo and name
const skills = [
  { name: "NextJS", src: RiNextjsFill },
  { name: "Tailwind", src: RiTailwindCssFill },
  { name: "React", src: FaReact },
  { name: "Firebase", src: RiFirebaseFill },
  { name: "Milvus", src: SiMilvus },
  { name: "OpenAI API", src: SiOpenai },
  { name: "NodeJS", src: FaNodeJs },
  { name: "Python", src: FaPython },
  { name: "Java", src: FaJava },
  { name: "HTML", src: FaHtml5 },
  { name: "CSS", src: FaCss3Alt },
  { name: "JavaScript", src: FaJs },
  { name: "Vercel", src: SiVercel },
  { name: "VsCode", src: VscVscode },
  { name: "Figma", src: FaFigma },
  { name: "Github", src: FaGithub },
  { name: "Eclipse", src: SiEclipseide },
  { name: "Postnan", src: SiPostman },
  { name: "Ubuntu", src: FaUbuntu },
  { name: "Docker", src: FaDocker },
];

export { skills, sectionInfo, links, projects, aboutMessage };
