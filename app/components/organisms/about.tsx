import "./about.css";
import Image from "next/image";

function About() {
  return (
    <div className="about-container flex flex-col md:flex-row items-center gap-8 bg-[#a07c4e]/90 rounded-3xl shadow-2xl p-8 relative overflow-hidden border border-[#e6d7b6]/30">
      <div className="flex flex-col items-center justify-center w-full md:w-auto">
        <div className="relative mb-4 md:mb-0 md:mr-8">
          <Image
            alt="Avatar de Mariana Sena"
            width={180}
            height={220}
            className="rounded-[2.5rem] border-4 border-[#e6d7b6] shadow-lg object-cover"
            src="/about-me.png"
          />
          <span className="absolute -left-4 -top-4 w-8 h-8 bg-[#e6d7b6]/60 rounded-full blur-xl" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start">
        <div className="about-info text-center md:text-left mb-2">
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-[#f6f3e7] mb-1">
            Olá, aqui é a Mariana
          </h1>
          <p className="font-script text-xl text-[#e6d7b6] mb-2">
            seja muito bem-vindo(a)!
          </p>
        </div>
        <div className="about-me-description bg-[#f6f3e7]/80 rounded-xl p-5 shadow-md mb-2 text-[#4a4d36] font-medium text-base">
          <p className="mb-2">
            Sou desenvolvedora de software com facilidade em colaborar em
            equipe. Estou sempre buscando aprimorar minhas habilidades e
            melhorar as boas práticas de segurança e eficiência.
          </p>
          <p>
            Apaixonada por cachorros 🐶, adoro livros, filmes e séries. Gosto de
            aprender coisas novas e estou sempre aberta a desafios! 🚀
          </p>
        </div>
        <a
          href="mailto:mariana.sena.dev@gmail.com"
          className="inline-block mt-2 px-6 py-2 rounded-full bg-[#e6d7b6] text-[#4a4d36] font-bold shadow hover:bg-[#fff8e1] transition-colors duration-200 border border-[#a07c4e]/40"
        >
          Entre em contato
        </a>
      </div>
      <div className="absolute -z-10 left-[-80px] top-[-80px] w-72 h-72 bg-[#e6d7b6]/20 rounded-full blur-3xl animate-pulse-slow" />
    </div>
  );
}

export default About;
