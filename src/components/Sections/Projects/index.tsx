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
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                text={project.text}
                imgSrc={project.imgSrc}
              />
            );
          })}
        </ContainerProjects>
      </InnerContainer>
    </SectionStyled>
  );
};

export default Projects;
