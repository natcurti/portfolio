"use client";
import { useNavBarContext } from "@/context/NavbarContext";
import ImageMe from "../ImageMe";
import { SectionStyled } from "./styled";
import ParticlesBg from "../ParticlesBg";
import Intro from "../Intro";

const HeroSection = () => {
  const { isOpen } = useNavBarContext();

  return (
    <SectionStyled $isMenuOpen={isOpen}>
      <ParticlesBg />
      <Intro />
      <ImageMe />
    </SectionStyled>
  );
};

export default HeroSection;
