import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiReact,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { FileSpreadsheet, FileText, Presentation, Server } from "lucide-react";

export const SKILL_GROUPS = [
  {
    title: "Front-End",
    path: "~/skills/front-end",
    skills: [
      { name: "HTML", Icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", Icon: SiCss, color: "#663399" },
      { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952b3" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Sass / SCSS", Icon: SiSass, color: "#cc6699" },
      { name: "React", Icon: SiReact, color: "#61dafb" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
    ],
  },
  {
    title: "Database",
    path: "~/skills/database",
    skills: [
      { name: "SQL", Icon: SiMysql, color: "#4479a1" },
      { name: "Microsoft SQL Server", Icon: Server, color: "#a91d22" },
    ],
  },
  {
    title: "Microsoft Office",
    path: "~/skills/office",
    skills: [
      { name: "Excel", Icon: FileSpreadsheet, color: "#21a366" },
      { name: "PowerPoint", Icon: Presentation, color: "#d24726" },
      { name: "Word", Icon: FileText, color: "#2b579a" },
    ],
  },
];
