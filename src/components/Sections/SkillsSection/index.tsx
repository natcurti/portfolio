import {
  InnerContainer,
  SectionStyled,
  TitleSection,
  UnderlineDetail,
} from "../sharedStyles";

const SkillsSection = () => {
  return (
    <SectionStyled>
      <InnerContainer>
        <TitleSection>
          Habilidades
          <UnderlineDetail></UnderlineDetail>
        </TitleSection>
        <div></div>
      </InnerContainer>
    </SectionStyled>
  );
};

export default SkillsSection;
