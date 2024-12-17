"use client";
import { useNavBarContext } from "@/context/NavbarContext";
import ImageMe from "../ImageMe";
import Title from "../Title";
import { SectionStyled } from "./styled";
import ParticlesBg from "../ParticlesBg";

const MainSection = () => {
  const { isOpen } = useNavBarContext();

  return (
    <SectionStyled $isMenuOpen={isOpen}>
      <ParticlesBg />
      <Title />
      <ImageMe />
    </SectionStyled>
  );
};

export default MainSection;
