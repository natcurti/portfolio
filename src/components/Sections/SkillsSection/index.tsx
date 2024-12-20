import { FaReact } from "react-icons/fa";
import {
  InnerContainer,
  SectionStyled,
  TitleSection,
  UnderlineDetail,
} from "../sharedStyles";
import SkillsCard from "./SkillsCard";

const SkillsSection = () => {
  return (
    <SectionStyled>
      <InnerContainer>
        <TitleSection>
          Habilidades
          <UnderlineDetail></UnderlineDetail>
        </TitleSection>
        <div>
          <SkillsCard icon={<FaReact size={100} />} title="React" />
        </div>
      </InnerContainer>
    </SectionStyled>
  );
};

export default SkillsSection;
