import "./work-experience.css";

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

function WorkExperience() {
  return (
    <div className="experience-container">
      <h1>Experiência</h1>
      <ExperienceItem
        role="Software Developer"
        company="IBM"
        period="12/2021 - 09/2024"
        description={[
          "Desenvolvi e corrigi funcionalidades front-end utilizando React.js, Vue.js, TypeScript, SASS e Tailwind CSS, criando interfaces modernas e responsivas.",
          "Analisei tickets de suporte, explorando APIs e código back-end para solucionar causas-raiz, executando queries em MongoDB.",
          "Realizei análises de segurança com Contrast Security, identificando e corrigindo vulnerabilidades.",
          "Implementei pipelines de CI/CD para automatizar processos de build, testes e deploy.",
        ]}
      />
      <ExperienceItem
        role="Front-End Developer"
        company="FPASS"
        period="03/2020 - 11/2021"
        description={[
          "Desenvolvi interfaces para uma plataforma educacional utilizando React.js e SCSS.",
          "Integrei dados da API da plataforma com TypeScript.",
          "Liderei uma equipe de 2 desenvolvedores, gerenciando tarefas e contribuindo ativamente para o desenvolvimento.",
        ]}
      />
      <ExperienceItem
        role="Front-End Developer"
        company="CloudMed"
        period="10/2018 - 06/2019"
        description={[
          "Conduzi o desenvolvimento da landing page da empresa.",
          "Criei o design das telas e as desenvolvi utilizando React.js.",
          "Estilizei com CSS e garanti a responsividade.",
        ]}
      />
    </div>
  );
}

export default WorkExperience;
