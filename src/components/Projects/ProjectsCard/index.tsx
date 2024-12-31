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

const ProjectCard = ({
  title,
  text,
  imgSrc,
  linkApp,
  linkGit,
  position,
}: IProjectCard) => {
  return (
    <SectionProject $position={position}>
      <ContainerInfo $position={position}>
        <TitleProject>{title}</TitleProject>
        <TextProject>{text}</TextProject>
        <LinksProject>
          <Link href={linkApp} target="_blank">
            Live App
          </Link>
        </LinksProject>
        <LinksProject>
          <Link href={linkGit} target="_blank">
            Repositório
          </Link>
        </LinksProject>
      </ContainerInfo>
      <ContainerColorful>
        <Link href={linkApp} target="_blank">
          <ContainerImg $position={position}>
            <Image
              src={imgSrc}
              alt={`Screenshot do projeto ${title}`}
              fill
              sizes="(max-width: 992px) 80vw, 60vw"
              placeholder="blur"
              blurDataURL={imgSrc}
            />
          </ContainerImg>
        </Link>
      </ContainerColorful>
    </SectionProject>
  );
};

export default ProjectCard;
