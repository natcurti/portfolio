import Link from "next/link";
import {
  ContainerColorful,
  ContainerImg,
  ContainerInfo,
  LinksProject,
  SectionProject,
  TextProject,
  TitleProject,
} from "./styled";
import Image from "next/image";

const ProjectCard = ({ title, text, imgSrc }: IProjectCard) => {
  return (
    <SectionProject>
      <ContainerInfo>
        <TitleProject>{title}</TitleProject>
        <TextProject>{text}</TextProject>
        <LinksProject>
          <Link
            href="https://kanban-task-manager-ecru.vercel.app/"
            target="_blank"
          >
            Live App
          </Link>
        </LinksProject>
        <LinksProject>
          <Link
            href="https://github.com/natcurti/kanban-task-manager"
            target="_blank"
          >
            Repositório
          </Link>
        </LinksProject>
      </ContainerInfo>
      <ContainerColorful>
        <ContainerImg>
          <Image src={imgSrc} alt={`Screenshot do projeto ${title}`} fill />
        </ContainerImg>
      </ContainerColorful>
    </SectionProject>
  );
};

export default ProjectCard;
