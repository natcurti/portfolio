"use client";
import {
  ContainerText,
  FirstText,
  SecondText,
  SectionStyled,
  TitleSection,
  UnderlineDetail,
} from "./styled";
import useElementIsVisible from "@/hooks/useElementIsVisible";
import useGenericRef from "@/hooks/useGenericRef";
import { useRef } from "react";

const AboutMe = () => {
  const parentRef = useRef<HTMLElement>(null);
  const ref = useGenericRef<HTMLDivElement>();
  const options = {
    root: parentRef.current,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const { isVisible } = useElementIsVisible<HTMLDivElement>({ ref, options });

  return (
    <SectionStyled ref={parentRef}>
      <ContainerText ref={ref}>
        {isVisible && (
          <>
            <TitleSection>
              Sobre mim
              <UnderlineDetail></UnderlineDetail>
            </TitleSection>
            <FirstText>
              Desenvolvedora Front-End, atualmente cursando Análise e
              Desenvolvimento de Sistemas na Fatec Araraquara. Possuo
              conhecimentos em desenvolvimento de interfaces intuitivas e
              responsivas, utilizando tecnologias como React.js, Next.js, Redux,
              JavaScript, TypeScript, Styled Components, Tailwind CSS e
              Bootstrap, entre outras.
            </FirstText>
            <SecondText>
              Busco constantemente aprimorar meus conhecimentos e minhas
              habilidades, sempre buscando as melhores práticas de
              desenvolvimento. Sou uma pessoa proativa, com forte senso de
              responsabilidade e comprometida com a qualidade do meu trabalho.
              Tenho facilidade de trabalhar em equipe e estou sempre disposta a
              aprender coisas novas.
            </SecondText>
          </>
        )}
      </ContainerText>
    </SectionStyled>
  );
};

export default AboutMe;
