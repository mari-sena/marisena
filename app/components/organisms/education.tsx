import "./education.css";

interface EducationItemProps {
  institution: string;
  period: string;
  degree: string;
  project?: {
    title: string;
    period: string;
    description: string;
  };
}

const EducationItem = ({
  institution,
  period,
  degree,
  project,
}: EducationItemProps) => (
  <div className="education-item">
    <h3>
      {institution} | {period}
    </h3>
    <p>{degree}</p>
    {project && (
      <div className="education-project">
        <strong>{project.title}</strong>
        <p>Período: {project.period}</p>
        <p>{project.description}</p>
      </div>
    )}
  </div>
);

export default function Education() {
  return (
    <div className="education-container">
      <h1>Formação</h1>
      <EducationItem
        institution="Universidade de Franca"
        period="2015 - 2019"
        degree="Bacharelado em Ciência da Computação"
        project={{
          title: "Projeto de Graduação - Plataforma de Prontuários Médicos",
          period: "07/2019 - 12/2019",
          description:
            "Desenvolvi uma plataforma web que centraliza e exibe o prontuário eletrônico de pacientes para médicos, facilitando o acesso às informações e reduzindo erros. \
            Implementei o front-end utilizando React.js e CSS; Estruturei o back-end com Node.js e banco de dados MongoDB.",
        }}
      />
    </div>
  );
}
