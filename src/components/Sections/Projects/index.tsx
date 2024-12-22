"use client";
import useShowAnimation from "@/hooks/useShowAnimation";
import {
  InnerContainer,
  SectionStyled,
  TitleSection,
  UnderlineDetail,
} from "../sharedStyles";
import useGenericRef from "@/hooks/useGenericRef";
import ProjectCard from "./ProjectCard";
import { ContainerProjects } from "./styled";

const projectsToShow = [
  {
    title: "Kanban Task Manager",
    text: "Gerenciador de tarefas estilo Kanban. Construído com Next, TypeScript, SASS e Redux Toolkit.",
    imgSrc: "/assets/kanban-project.jpg",
    linkApp: "https://kanban-task-manager-ecru.vercel.app/",
    linkGit: "https://github.com/natcurti/kanban-task-manager",
    position: "right",
  },
  {
    title: "Cine Me",
    text: "Site de streaming, listando diversos filmes e séries a partir da API TMDB, com autenticação via JWT.",
    imgSrc: "/assets/cine-me.jpg",
    linkApp: "https://cine-me-khaki.vercel.app/",
    linkGit: "https://github.com/natcurti/cine-me",
    position: "left",
  },
  {
    title: "Make Me Up",
    text: "E-commerce de maquiagem, criado com React, Typescript, Bootstrap e integrado ao Firebase para autenticação.",
    imgSrc: "/assets/make-me-up.jpg",
    linkApp: "https://make-me-up.vercel.app/",
    linkGit: "https://github.com/natcurti/make-me-up",
    position: "right",
  },
  {
    title: "World Ranks",
    text: "Lista de todos os países do mundo usando a API Rest Countries. Construído com React, Typescript e Tailwind.",
    imgSrc: "/assets/world-ranks.jpg",
    linkApp: "https://countries-world-rank.vercel.app/",
    linkGit: "https://github.com/natcurti/countries-world-rank",
    position: "left",
  },
  {
    title: "Lista de Tarefas",
    text: "Gerenciador de tarefas construído com Next e Typescript, e integrado ao Firebase.",
    imgSrc: "/assets/task-board.jpg",
    linkApp: "https://task-manager-two-kohl.vercel.app/",
    linkGit: "https://github.com/natcurti/task-manager",
    position: "right",
  },
];

const Projects = () => {
  const ref = useGenericRef<HTMLDivElement>();
  const { showAnimation } = useShowAnimation<HTMLDivElement>({ ref });

  return (
    <SectionStyled id="projects" $sectionType="projects">
      <InnerContainer ref={ref}>
        <TitleSection $showAnimation={showAnimation}>
          Projetos
          <UnderlineDetail></UnderlineDetail>
        </TitleSection>
        <ContainerProjects>
          {projectsToShow.map((project) => {
            return <ProjectCard key={project.title} {...project} />;
          })}
        </ContainerProjects>
      </InnerContainer>
    </SectionStyled>
  );
};

export default Projects;
