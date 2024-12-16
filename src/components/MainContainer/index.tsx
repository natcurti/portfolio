"use client";
import { useNavBarContext } from "@/context/NavbarContext";
import ImageMe from "../ImageMe";
import Title from "../Title";
import { SectionStyled } from "./styled";
import ParticlesBg from "../ParticlesBg";

const MainContainer = () => {
  const { isOpen } = useNavBarContext();

  return (
    <main>
      <SectionStyled $isMenuOpen={isOpen}>
        <ParticlesBg />
        <Title />
        <ImageMe />
      </SectionStyled>
    </main>
  );
};

export default MainContainer;
