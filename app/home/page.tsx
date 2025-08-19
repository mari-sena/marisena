import React from "react";
import QualityServices from "../components/qualityServices";
import TechnicalSkills from "../components/technicalSkills";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 font-sans">
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 py-4 bg-[#2d1d1b]/20 backdrop-blur-md rounded-xl border-b border-[#725b58]/30 shadow-sm">
        <div className="text-[#e0a9a0] text-2xl font-bold tracking-wide">
          Sena
        </div>

        <nav className="hidden md:flex gap-8 text-sm">
          {["Home", "Portfolio", "Testimonial", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#d4b2aa] hover:text-[#fcde93] transition duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4b2aa] hover:text-[#fcde93] transition duration-200"
          >
            {/* Ícone LinkedIn */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7.5 7H12v2.4h.07c.62-1.2 2.13-2.47 4.43-2.47 4.74 0 5.61 3.12 5.61 7.17V24h-5v-8.2c0-1.95-.04-4.47-2.72-4.47-2.72 0-3.14 2.13-3.14 4.33V24h-5V7z" />
            </svg>
          </a>

          <button className="md:hidden text-[#d4b2aa] text-xl">☰</button>
        </div>
      </header>

      <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10 text-left mt-10">
        <div className="relative flex-shrink-0 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-[#e0cfc7] opacity-70 z-0" />
          <img
            src="/about-me.png"
            alt="Mariana Sena"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        </div>

        <div className="relative z-10 max-w-xl">
          <h2 className="text-xl text-[#e0cfc7]">I'm</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-[#f4e2d8]">
            Mariana <span className="text-[#e0a9a0]">Sena</span>
          </h1>
          <p className="mt-4 text-[#e0cfc7]">
            Sou desenvolvedora de software com facilidade em colaborar em
            equipe. Estou sempre buscando aprimorar minhas habilidades e
            melhorar as boas práticas de segurança e eficiência.
          </p>

          <div className="mt-6 space-y-2">
            <h3 className="text-lg text-[#e0cfc7]">Services</h3>
            <p className="text-[#f4e2d8]">
              Let's build quality products in programming and design with my
              services
            </p>
            <a
              href="#"
              className="inline-block text-[#e0a9a0] hover:underline mt-2"
            >
              show more →
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {["Meta", "Google", "LinkedIn", "Slack"].map((brand) => (
          <div
            key={brand}
            className="bg-[#e0cfc7] text-center py-4 rounded-lg text-[#2d1d1b]"
          >
            {brand}
          </div>
        ))}
      </div>
      <QualityServices />
      <TechnicalSkills />
    </section>
  );
};

export default Home;
