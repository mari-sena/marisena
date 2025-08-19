import React from "react";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Experiência", href: "#experience" },
  { label: "Formação", href: "#education" },
  { label: "Serviços", href: "#services" },
  { label: "Skills", href: "#skills" },
];

const Header: React.FC = () => (
  <header className="sticky top-0 z-50 w-full bg-[#2d1d1b]/80 backdrop-blur-md shadow-md">
    <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
      <span className="text-xl font-extrabold text-[#fcde93] tracking-tight">
        Mariana Sena
      </span>
      <ul className="flex gap-4 md:gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[#f4e2d8] hover:text-[#fcde93] font-medium transition-colors duration-200 px-2 py-1 rounded"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
