"use client";
import { useRefContext } from "@/context/SectionRefsContext";
import useGenericRef from "@/hooks/useGenericRef";
import useShowAnimation from "@/hooks/useShowAnimation";
import { useEffect } from "react";
import { TextStyled } from "./styled";
import TitleSection from "../TitleSection";
import Section from "../Section";

const AboutMe = () => {
  const ref = useGenericRef<HTMLElement>();
  const { showAnimation } = useShowAnimation<HTMLElement>({ ref });
  const { registerRef } = useRefContext();

  useEffect(() => {
    registerRef(ref as React.RefObject<HTMLElement>);
  }, [registerRef, ref]);

  return (
    <Section id="aboutMe" ref={ref}>
      {showAnimation && (
        <>
          <TitleSection title="Sobre mim" />
          <TextStyled>
            Desenvolvedora Front-End, atualmente cursando Análise e
            Desenvolvimento de Sistemas na Fatec Araraquara. Possuo
            conhecimentos em desenvolvimento de interfaces intuitivas e
            responsivas, utilizando tecnologias como React.js, Next.js, Redux,
            JavaScript, TypeScript, Styled Components, Tailwind CSS, Bootstrap,
            entre outras.
          </TextStyled>
          <TextStyled>
            Busco constantemente aprimorar meus conhecimentos e minhas
            habilidades, sempre buscando as melhores práticas de
            desenvolvimento. Sou uma pessoa proativa, com forte senso de
            responsabilidade e comprometida com a qualidade do meu trabalho.
            Tenho facilidade de trabalhar em equipe e estou sempre disposta a
            aprender coisas novas.
          </TextStyled>
        </>
      )}
    </Section>
  );
};

export default AboutMe;
