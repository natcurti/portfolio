import { ContainerCard, TitleStyled } from "./styled";

const SkillsCard = ({ icon, title }: ISkillCards) => {
  return (
    <ContainerCard>
      {icon}
      <TitleStyled>{title}</TitleStyled>
    </ContainerCard>
  );
};

export default SkillsCard;
