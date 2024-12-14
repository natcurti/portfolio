import ImageMe from "../ImageMe";
import Title from "../Title";
import { SectionStyled } from "./styled";

const MainContainer = () => {
  return (
    <main>
      <SectionStyled>
        <Title />
        <ImageMe />
      </SectionStyled>
    </main>
  );
};

export default MainContainer;
