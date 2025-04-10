import "./about.css";
import Image from "next/image";

function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-me-description animate-fade-in">
          <h4>Olá!</h4>
          <p>
            Sou desenvolvedora de software com facilidade em colaborar em
            equipe. Estou sempre buscando aprimorar minhas habilidades e
            melhorar as boas práticas de segurança e eficiência.
          </p>
          <p>
            Apaixonada por cachorros 🐶, adoro livros, filmes e séries. Gosto de
            aprender coisas novas e estou sempre aberta a desafios! 🚀
          </p>
        </div>
        <div className="image-frame animate-scale-in">
          <Image
            alt="Avatar de Mariana Sena"
            width={200}
            height={200}
            className="image"
            src="/about-me.png"
          />
        </div>
        <div className="about-info animate-fade-in">
          <h1>Mariana Sena</h1>
          <p>Desenvolvedora de Software</p>
        </div>
      </div>
    </div>
  );
}

export default About;
