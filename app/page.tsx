import About from "./components/organisms/about";
import Education from "./components/organisms/education";
import WorkExperience from "./components/organisms/work-experience";
import QualityServices from "./components/qualityServices";
import TechnicalSkills from "./components/technicalSkills";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-[#4a4d36] via-[#a07c4e] to-[#e6d7b6] flex flex-col items-center px-0 py-0">
        <Hero />
        <div className="w-full max-w-5xl space-y-16 px-4 py-8">
          <section
            id="about"
            className="rounded-2xl shadow-lg bg-[#a07c4e]/80 p-8 flex flex-col md:flex-row items-center gap-8 opacity-0 animate-fade-in-section"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <About />
          </section>
          <section className="grid md:grid-cols-2 gap-8">
            <div
              id="experience"
              className="rounded-2xl shadow-lg bg-[#a07c4e]/80 p-8 opacity-0 animate-fade-in-section"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <WorkExperience />
            </div>
            <div
              id="education"
              className="rounded-2xl shadow-lg bg-[#a07c4e]/80 p-8 opacity-0 animate-fade-in-section"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <Education />
            </div>
          </section>
          <section
            id="services"
            className="opacity-0 animate-fade-in-section"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <QualityServices />
          </section>
          <section
            id="skills"
            className="opacity-0 animate-fade-in-section"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <TechnicalSkills />
          </section>
        </div>
      </main>
    </>
  );
}
