"use client";
import { useRefContext } from "@/context/SectionRefsContext";
import useGenericRef from "@/hooks/useGenericRef";
import useShowAnimation from "@/hooks/useShowAnimation";
import { useEffect } from "react";
import { FaBootstrap, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiJavascript,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { ContainerCards } from "./styled";
import TitleSection from "../TitleSection";
import useShowOneAtATime from "@/hooks/useShowOneAtATime";
import SkillsCard from "./SkillsCard";
import Section from "../Section";

const array = [
  {
    icon: <FaReact size={100} />,
    title: "React",
  },
  {
    icon: <TbBrandNextjs size={100} />,
    title: "Next",
  },
  {
    icon: <SiJavascript size={100} />,
    title: "JavaScript",
  },
  {
    icon: <SiRedux size={100} />,
    title: "Redux",
  },
  {
    icon: <RiTailwindCssFill size={100} />,
    title: "Tailwind",
  },
  {
    icon: <FaSass size={100} />,
    title: "Sass",
  },
  {
    icon: <FaBootstrap size={100} />,
    title: "Bootstrap",
  },
  {
    icon: <SiStyledcomponents size={100} />,
    title: "Styled Components",
  },
  {
    icon: <SiTypescript size={100} />,
    title: "TypeScript",
  },
  {
    icon: <RiFirebaseFill size={100} />,
    title: "Firebase",
  },
  {
    icon: <FaHtml5 size={100} />,
    title: "HTML",
  },
  {
    icon: <IoLogoCss3 size={100} />,
    title: "CSS",
  },
];

const Skills = () => {
  const ref = useGenericRef<HTMLElement>();
  const { registerRef } = useRefContext();
  const { showAnimation } = useShowAnimation<HTMLElement>({ ref });
  const { current } = useShowOneAtATime({ array, showAnimation });

  useEffect(() => {
    registerRef(ref as React.RefObject<HTMLElement>);
  }, [registerRef, ref]);

  return (
    <Section id="skills" ref={ref}>
      {showAnimation && (
        <>
          <TitleSection title="Habilidades" />
          <ContainerCards>
            {array.slice(0, current + 1).map((skill) => {
              return (
                <SkillsCard
                  icon={skill.icon}
                  title={skill.title}
                  key={skill.title}
                />
              );
            })}
          </ContainerCards>
        </>
      )}
    </Section>
  );
};

export default Skills;
