import { ContainerCard, ContainerOuter, TitleStyled } from "./styled";

const SkillsCard = ({ icon, title }: ISkillCards) => {
  return (
    <ContainerOuter>
      <ContainerCard>
        {icon}
        <TitleStyled>{title}</TitleStyled>
      </ContainerCard>
    </ContainerOuter>
  );
};

export default SkillsCard;
