import type { StaticImageData } from "next/image";
import fitlogShot from "@/assets/Fitlogweb.png";
import bazarDorShot from "@/assets/bahjarweb.png";
import devStackShot from "@/assets/devweb.png";
import bloodbeeShot from "@/assets/bloodbeeweb.png";

// Edit everything about your portfolio here. Components only read from this file.

export const site = {
  name: "Tunazzina Rahman",
  role: "full-stack developer",
  email: "tunazzina1054@gmail.com",
  github: "https://github.com/TunazzinaEmma2002",
  linkedin: "https://www.linkedin.com/in/tunazzina-rahman-5b882a419/",
  resume: "/Tunazzina-Rahman-Resume.pdf", // file lives in /public
};

export type Project = {
  name: string;
  period?: string;
  summary: string; // one sentence: what it does and who it is for
  features: string[]; // 3-4 key features
  stack: string[];
  repo: string;
  live?: string; // only add when the app is really deployed
  image?: StaticImageData; // screenshot imported from src/assets
  improve: string; // what you would improve next
};

// Details below come from each project's GitHub README. Edit anything that is not accurate.
export const projects: Project[] = [
  {
    name: "FitLog",
    summary:
      "A dark, no-nonsense gym companion: browse a workout library and build your daily training plan.",
    features: [
      "Workout library fetched from a live API, with detail pages for every lift",
      "Today's plan and saved workouts with live navbar counters",
      "My Plan dashboard with exercises, minutes and calories",
      "Plan and saved data persist across reloads with localStorage",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Context", "react-toastify"],
    repo: "https://github.com/TunazzinaEmma2002/FITLOG",
    live: "https://fitlog-plum-rho.vercel.app/",
    image: fitlogShot,
    improve: "Add user accounts and a database so a workout plan syncs across devices instead of living only in localStorage.",
  },
  {
    name: "Bazar Dor",
    summary:
      "A web app for daily grocery prices: rice, lentils, oil, vegetables, fish, meat and more across 12 markets.",
    features: [
      "Live price ticker and today's biggest price rises and drops",
      "8 categories with price sorting, plus product pages comparing market prices",
      "Email-password, Google and GitHub login with BetterAuth and protected routes",
      "Responsive layout, skeleton loading and a custom 404 page",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "BetterAuth",
      "MongoDB Atlas",
    ],
    repo: "https://github.com/TunazzinaEmma2002/bazar-dor",
    live: "https://bazar-dor-henna.vercel.app",
    image: bazarDorShot,
    improve: "Finish Google OAuth app verification so Google login works for every visitor, not only test users.",
  },
  {
    name: "Dev Stack Builder",
    summary:
      "A web app where developers explore technologies, compare them and build their own ideal stack.",
    features: [
      "Browse 10+ technologies across frontend, backend, database, DevOps and more",
      "Add and remove technologies in a personal stack, with toast feedback",
      "Fully responsive, with a mobile hamburger menu and sticky navbar",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React-Toastify"],
    repo: "https://github.com/TunazzinaEmma2002/Dev-stack",
    live: "https://dev-stack-rouge.vercel.app",
    image: devStackShot,
    improve: "Save the personal stack so it survives a reload, and add a share link for a finished stack.",
  },
  {
    name: "BloodBee",
    period: "Feb 2026 to Aug 2026",
    summary: "A web project about blood donation.",
    features: [], // add 3 real features here when you are ready
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/TunazzinaEmma2002/Bloodbee",
    live: "https://tunazzinaemma2002.github.io/Bloodbee/",
    image: bloodbeeShot,
    improve: "Turn the static page into a full-stack MERN app with donor registration stored in MongoDB.",
  },
  {
    name: "DevConf 2026 Landing Page",
    period: "Jul 2026",
    summary:
      "A modern, responsive and minimalist landing page for a developer conference.",
    features: [
      "Interactive hero section",
      "Speaker showcase cards",
      "Pricing tiers",
      "AI hackathon section",
    ],
    stack: ["HTML5", "CSS3", "Flexbox", "Grid"],
    repo: "https://github.com/TunazzinaEmma2002/Assignment-01-B14-DevConf-2026",
    live: "https://tunazzinaemma2002.github.io/Assignment-01-B14-DevConf-2026/",
    // image: "/projects/devconf.png",
    improve: "Rebuild it in Next.js with reusable components and add a working registration form.",
  },
];

// Only list what you can talk about in an interview.
export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML and CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Server Actions", "BetterAuth"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MongoDB Atlas"],
  },
  {
    title: "Tools",
    items: ["Git and GitHub", "Vercel", "Postman", "Figma"],
  },
  {
    title: "Creative",
    items: ["Graphic design", "Video editing", "Digital art", "Canva templates"],
  },
];