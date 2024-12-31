import { TitleStyled, UnderlineDetail } from "./styled";

const TitleSection = ({ title }: ITitleSection) => {
  return (
    <TitleStyled>
      {title}
      <UnderlineDetail></UnderlineDetail>
    </TitleStyled>
  );
};

export default TitleSection;
