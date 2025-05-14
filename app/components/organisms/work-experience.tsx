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
          "Desenvolvimento e manutenção de funcionalidades front-end com React.js, Vue.js, TypeScript, SASS e Tailwind CSS, garantindo interfaces modernas, responsivas e acessíveis;",
          "Análise de tickets de suporte técnico, investigação de causas-raiz por meio de exploração de APIs e leitura de código back-end, com execução de consultas em MongoDB;",
          "Identificação e correção de vulnerabilidades por meio de ferramentas de segurança como Contrast Security;",
          "Implementação de pipelines de CI/CD para automatizar processos de build, testes e deploy, promovendo maior eficiência e confiabilidade no ciclo de entrega;",
          "Desenvolvimento e manutenção de testes automatizados, adotando práticas de TDD com Jest, com o objetivo de aprimorar a qualidade e a estabilidade da base de código.",
        ]}
      />
      <ExperienceItem
        role="Front-End Developer"
        company="FPASS"
        period="03/2020 - 11/2021"
        description={[
          "Desenvolvimento de plataforma educacional com React.js e Typescript;",
          "Integração de serviços com APIs REST;",
          "Coordenação técnica de equipe, organização de tarefas e decisões de arquitetura;",
        ]}
      />
      <ExperienceItem
        role="Front-End Developer"
        company="CloudMed"
        period="10/2018 - 06/2019"
        description={[
          "Criação de interfaces responsivas com React.js para o setor de saúde;",
        ]}
      />
    </div>
  );
}

export default WorkExperience;
