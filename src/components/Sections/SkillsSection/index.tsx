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

const SkillsSection = () => {
  const ref = useGenericRef<HTMLDivElement>();

  const { showAnimation } = useShowAnimation<HTMLDivElement>({ ref });

  return (
    <SectionStyled>
      <InnerContainer ref={ref}>
        <TitleSection $showAnimation={showAnimation}>
          Habilidades
          <UnderlineDetail></UnderlineDetail>
        </TitleSection>
        <ContainerCards>
          <SkillsCard icon={<FaReact size={100} />} title="React" />
          <SkillsCard icon={<TbBrandNextjs size={100} />} title="Next" />
          <SkillsCard icon={<SiJavascript size={100} />} title="JavaScript" />
          <SkillsCard icon={<SiRedux size={100} />} title="Redux" />
          <SkillsCard
            icon={<RiTailwindCssFill size={100} />}
            title="Tailwind"
          />
          <SkillsCard icon={<FaSass size={100} />} title="Sass" />
          <SkillsCard icon={<FaBootstrap size={100} />} title="Bootstrap" />
          <SkillsCard
            icon={<SiStyledcomponents size={100} />}
            title="Styled Components"
          />
          <SkillsCard icon={<SiTypescript size={100} />} title="TypeScript" />
          <SkillsCard icon={<RiFirebaseFill size={100} />} title="Firebase" />
          <SkillsCard icon={<FaHtml5 size={100} />} title="HTML" />
          <SkillsCard icon={<IoLogoCss3 size={100} />} title="CSS" />
        </ContainerCards>
      </InnerContainer>
    </SectionStyled>
  );
};

export default SkillsSection;
