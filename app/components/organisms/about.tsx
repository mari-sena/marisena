import "./about.css";

import Image from "next/image";

function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-me-description">
          <h4>Olá!</h4>
          <p>
            Sou desenvolvedora de software, tenho facilidade em colaborar em
            equipe e frequêntemente em busca de aprimorar minhas habilidades e
            em aumentar a eficiência e as boas práticas de segurança! Apaixonada
            por cachorros, estou sempre na companhia de um livro, adoro filmes e
            séries e estou sempre disposta a aprender coisas novas!
          </p>
        </div>
        <div className="about-image">
          <Image
            alt="coming soon"
            width={259}
            height={327}
            className="image"
            src="/about-me.png"
          />
        </div>
        <div>
          <h1>Mariana Sena</h1>
          <p>Desenvolvedora de Software</p>
        </div>
      </div>
    </div>
  );
}

export default About;
