"use client";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import {
  ContainerButtonStyled,
  ContainerImgStyled,
  ContainerLogoStyled,
  HeaderStyled,
} from "./styled";
import { useNavBarContext } from "@/context/NavbarContext";
import ButtonIcon from "../ButtonIcon";
import Navbar from "../Navbar";

const Header = () => {
  const { isOpen, setIsOpen } = useNavBarContext();

  return (
    <HeaderStyled>
      <ContainerLogoStyled>
        <ContainerImgStyled>
          <Image
            src="/assets/logo.png"
            fill
            priority
            alt="Logo portfolio Natalia Curti"
          />
        </ContainerImgStyled>
        <h2>Natalia Curti</h2>
      </ContainerLogoStyled>
      <ContainerButtonStyled>
        <ButtonIcon onClick={() => setIsOpen(!isOpen)}>
          <CgMenuRightAlt size={35} color="FFF" />
        </ButtonIcon>
      </ContainerButtonStyled>
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;