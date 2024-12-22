"use client";
import { FaReact, FaSass, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
  SiRedux,
} from "react-icons/si";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import {
  InnerContainer,
  SectionStyled,
  TitleSection,
  UnderlineDetail,
} from "../sharedStyles";
import SkillsCard from "./SkillsCard";
import { ContainerCards } from "./styled";
import useShowAnimation from "@/hooks/useShowAnimation";
import useGenericRef from "@/hooks/useGenericRef";
import { useEffect, useState } from "react";

const skillsArray = [
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

const SkillsSection = () => {
  const ref = useGenericRef<HTMLDivElement>();
  const { showAnimation } = useShowAnimation<HTMLDivElement>({ ref });
  const [currentSkillToShow, setCurrentSkillToShow] = useState<number>(0);

  useEffect(() => {
    if (showAnimation) {
      const intervalId = setInterval(() => {
        if (currentSkillToShow < skillsArray.length) {
          setCurrentSkillToShow((prev) => prev + 1);
        }
      }, 500);

      return () => clearInterval(intervalId);
    }
  }, [currentSkillToShow, showAnimation]);

  return (
    <SectionStyled id="skills" $sectionType="skills">
      <InnerContainer ref={ref}>
        <TitleSection $showAnimation={showAnimation}>
          Habilidades
          <UnderlineDetail></UnderlineDetail>
        </TitleSection>
        {showAnimation && (
          <ContainerCards>
            {skillsArray.slice(0, currentSkillToShow + 1).map((skill) => {
              return (
                <SkillsCard
                  icon={skill.icon}
                  title={skill.title}
                  key={skill.title}
                />
              );
            })}
          </ContainerCards>
        )}
      </InnerContainer>
    </SectionStyled>
  );
};

export default SkillsSection;
