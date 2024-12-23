"use client";
import { FirstText, SecondText } from "./styled";
import useGenericRef from "@/hooks/useGenericRef";
import {
  InnerContainer,
  SectionStyled,
  TitleSection,
  UnderlineDetail,
} from "../sharedStyles";
import useShowAnimation from "@/hooks/useShowAnimation";
import { useEffect } from "react";
import { useRefContext } from "@/context/SectionRefsContext";

const AboutMe = () => {
  const ref = useGenericRef<HTMLElement>();
  const { showAnimation } = useShowAnimation<HTMLElement>({ ref });
  const { registerRef } = useRefContext();

  useEffect(() => {
    registerRef(ref as React.RefObject<HTMLElement>);
  }, [registerRef, ref]);

  return (
    <SectionStyled id="aboutMe" $sectionType="about" ref={ref}>
      <InnerContainer>
        <TitleSection $showAnimation={showAnimation}>
          Sobre mim
          <UnderlineDetail></UnderlineDetail>
        </TitleSection>
        <FirstText $showAnimation={showAnimation}>
          Desenvolvedora Front-End, atualmente cursando Análise e
          Desenvolvimento de Sistemas na Fatec Araraquara. Possuo conhecimentos
          em desenvolvimento de interfaces intuitivas e responsivas, utilizando
          tecnologias como React.js, Next.js, Redux, JavaScript, TypeScript,
          Styled Components, Tailwind CSS, Bootstrap, entre outras.
        </FirstText>
        <SecondText $showAnimation={showAnimation}>
          Busco constantemente aprimorar meus conhecimentos e minhas
          habilidades, sempre buscando as melhores práticas de desenvolvimento.
          Sou uma pessoa proativa, com forte senso de responsabilidade e
          comprometida com a qualidade do meu trabalho. Tenho facilidade de
          trabalhar em equipe e estou sempre disposta a aprender coisas novas.
        </SecondText>
      </InnerContainer>
    </SectionStyled>
  );
};

export default AboutMe;
