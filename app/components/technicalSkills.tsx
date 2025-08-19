import React from "react";
import { Code, Settings } from "lucide-react";
import {
  Star,
  Music,
  Film,
  PawPrint,
  Heart,
  Brush,
  Monitor,
  Cpu,
  BookOpen,
} from "lucide-react";

const skills = [
  "Development of modern, accessible, and high-performance interfaces using React.js, Next.js, Vue.js, and TypeScript.",
  "Structuring of web applications focused on componentization and code reusability.",
  "Integration with RESTful APIs, applying best practices in front-end and back-end communication.",
  "Responsive and modular styling using SASS, Tailwind CSS, and CSS Modules.",
  "Front-end performance optimization (WPO), including lazy loading, code splitting, Lighthouse metrics analysis, and payload reduction.",
  "Application of development best practices: SOLID principles, Design Patterns, Clean Code.",
  "Experience with Unit Testing and TDD using Jest and Testing Library.",
  "CI/CD practices with automated pipelines for build, test, and deployment.",
  "Familiarity with Node.js for full-stack development and API support.",
  "Use of security tools like Contrast Security to identify vulnerabilities.",
  "Basic knowledge of containers with Docker and cloud environments (IBM Cloud, GCP).",
];

const interests = [
  { icon: Brush, label: "Ilustração Digital" },
  { icon: Star, label: "Artes Visuais" },
  { icon: Film, label: "Cinema" },
  { icon: BookOpen, label: "Direção de Arte" },
  { icon: Music, label: "Música" },
  { icon: Heart, label: "Meu time do coração" },
  { icon: PawPrint, label: "Doguinhos" },
];

const softwares = [
  { icon: Monitor, label: "Adobe Photoshop" },
  { icon: Monitor, label: "Adobe Illustrator" },
  { icon: Monitor, label: "Adobe InDesign" },
  { icon: Monitor, label: "Adobe After Effects" },
];

const TechnicalSkills: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a4d36] mb-6 flex items-center gap-2">
            <Code className="w-7 h-7 text-[#a07c4e]" /> Skills
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#e6d7b6]/80 text-[#4a4d36] p-4 rounded-xl shadow transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl"
              >
                <p className="text-base leading-relaxed">{skill}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#4a4d36] mb-2 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#a07c4e]" /> Interesses & Paixões
            </h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <span
                    key={idx}
                    className="flex items-center gap-1 bg-[#f6f3e7] border border-[#a07c4e]/20 rounded-full px-3 py-1 text-sm font-medium text-[#4a4d36] shadow"
                  >
                    <Icon className="w-5 h-5 text-[#a07c4e]" /> {item.label}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#4a4d36] mb-2 flex items-center gap-2">
              <Settings className="w-5 h-5 text-[#a07c4e]" /> Softwares
            </h3>
            <div className="flex flex-wrap gap-3">
              {softwares.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <span
                    key={idx}
                    className="flex items-center gap-1 bg-[#f6f3e7] border border-[#a07c4e]/20 rounded-full px-3 py-1 text-sm font-medium text-[#4a4d36] shadow"
                  >
                    <Icon className="w-5 h-5 text-[#a07c4e]" /> {item.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
