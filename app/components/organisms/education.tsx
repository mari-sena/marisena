import { GraduationCap, BookOpen, Palette } from "lucide-react";

export default function Education() {
  return (
    <div className="education-container bg-[#f6f3e7]/90 rounded-3xl shadow-2xl p-8 border border-[#e6d7b6]/30">
      <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-[#4a4d36] mb-6 flex items-center gap-2">
        <GraduationCap className="w-7 h-7 text-[#a07c4e]" /> Formação
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#e6d7b6]/80 rounded-xl p-6 shadow flex flex-col gap-2 border border-[#a07c4e]/20">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-5 h-5 text-[#a07c4e]" />
            <span className="font-bold text-[#4a4d36]">
              Universidade de Franca
            </span>
            <span className="text-xs text-[#a07c4e] ml-auto">2015 - 2019</span>
          </div>
          <div className="text-[#4a4d36]">
            Bacharelado em Ciência da Computação
          </div>
          <div className="mt-2 text-xs text-[#a07c4e]">
            Projeto de Graduação
          </div>
          <div className="text-sm text-[#4a4d36]">
            Plataforma web para centralizar e exibir prontuários eletrônicos de
            pacientes para médicos, facilitando o acesso e reduzindo erros.
            Front-end em React.js e CSS, back-end em Node.js e MongoDB.
          </div>
        </div>
        <div className="bg-[#e6d7b6]/80 rounded-xl p-6 shadow flex flex-col gap-2 border border-[#a07c4e]/20">
          <div className="flex items-center gap-2 mb-1">
            <Palette className="w-5 h-5 text-[#a07c4e]" />
            <span className="font-bold text-[#4a4d36]">Cursos Livres</span>
            <span className="text-xs text-[#a07c4e] ml-auto">2022</span>
          </div>
          <div className="text-[#4a4d36]">
            Design, UX/UI, Ilustração Digital
          </div>
          <div className="mt-2 text-xs text-[#a07c4e]">Certificados</div>
          <div className="text-sm text-[#4a4d36]">
            Diversos cursos de aperfeiçoamento em design visual, experiência do
            usuário e ilustração digital.
          </div>
        </div>
      </div>
    </div>
  );
}
