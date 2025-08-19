import { Briefcase, Code2 } from "lucide-react";

function ExperienceItem({ role, company, period, description }) {
  return (
    <section className="experience-item">
      <h2>{role}</h2>
      <h3>
        {company} | {period}
      </h3>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function WorkExperience() {
  return (
    <div className="experience-container bg-[#f6f3e7]/90 rounded-3xl shadow-2xl p-8 border border-[#e6d7b6]/30">
      <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-[#4a4d36] mb-6 flex items-center gap-2">
        <Briefcase className="w-7 h-7 text-[#a07c4e]" /> Experiência
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#e6d7b6]/80 rounded-xl p-6 shadow flex flex-col gap-2 border border-[#a07c4e]/20">
          <div className="flex items-center gap-2 mb-1">
            <Code2 className="w-5 h-5 text-[#a07c4e]" />
            <span className="font-bold text-[#4a4d36]">IBM</span>
            <span className="text-xs text-[#a07c4e] ml-auto">
              12/2021 - 09/2024
            </span>
          </div>
          <div className="text-[#4a4d36] font-semibold">Software Developer</div>
          <ul className="list-disc pl-5 text-sm text-[#4a4d36] mt-2 space-y-1">
            <li>
              Desenvolvimento e manutenção de funcionalidades front-end com
              React.js, Vue.js, TypeScript, SASS e Tailwind CSS.
            </li>
            <li>
              Análise de tickets de suporte técnico, investigação de causas-raiz
              por meio de APIs e leitura de código back-end, consultas em
              MongoDB.
            </li>
            <li>
              Identificação e correção de vulnerabilidades com ferramentas de
              segurança como Contrast Security.
            </li>
            <li>
              Implementação de pipelines de CI/CD para build, testes e deploy.
            </li>
            <li>
              Desenvolvimento e manutenção de testes automatizados, práticas de
              TDD com Jest.
            </li>
          </ul>
        </div>
        <div className="bg-[#e6d7b6]/80 rounded-xl p-6 shadow flex flex-col gap-2 border border-[#a07c4e]/20">
          <div className="flex items-center gap-2 mb-1">
            <Code2 className="w-5 h-5 text-[#a07c4e]" />
            <span className="font-bold text-[#4a4d36]">FPASS</span>
            <span className="text-xs text-[#a07c4e] ml-auto">
              03/2020 - 11/2021
            </span>
          </div>
          <div className="text-[#4a4d36] font-semibold">
            Front-End Developer
          </div>
          <ul className="list-disc pl-5 text-sm text-[#4a4d36] mt-2 space-y-1">
            <li>
              Desenvolvimento de plataforma educacional com React.js e
              Typescript.
            </li>
            <li>Integração de serviços com APIs REST.</li>
            <li>
              Coordenação técnica de equipe, organização de tarefas e decisões
              de arquitetura.
            </li>
          </ul>
        </div>
        <div className="bg-[#e6d7b6]/80 rounded-xl p-6 shadow flex flex-col gap-2 border border-[#a07c4e]/20 md:col-span-2">
          <div className="flex items-center gap-2 mb-1">
            <Code2 className="w-5 h-5 text-[#a07c4e]" />
            <span className="font-bold text-[#4a4d36]">CloudMed</span>
            <span className="text-xs text-[#a07c4e] ml-auto">
              10/2018 - 06/2019
            </span>
          </div>
          <div className="text-[#4a4d36] font-semibold">
            Front-End Developer
          </div>
          <ul className="list-disc pl-5 text-sm text-[#4a4d36] mt-2 space-y-1">
            <li>
              Criação de interfaces responsivas com React.js para o setor de
              saúde.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ...existing code...
