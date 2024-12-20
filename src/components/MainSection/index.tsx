"use client";
import { useNavBarContext } from "@/context/NavbarContext";
import ImageMe from "../ImageMe";
import Title from "../Title";
import { OverlayDiv, SectionStyled } from "./styled";
import ParticlesBg from "../ParticlesBg";
import { useLoadingParticlesContext } from "@/context/LoadingParticlesContext";

const MainSection = () => {
  const { isOpen } = useNavBarContext();
  const { isLoading } = useLoadingParticlesContext();

  return (
    <SectionStyled $isMenuOpen={isOpen}>
      {isLoading && <OverlayDiv />}
      <ParticlesBg />
      <Title />
      <ImageMe />
    </SectionStyled>
  );
};

export default MainSection;
