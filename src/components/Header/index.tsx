"use client";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import {
  ContainerHeader,
  ContainerImgStyled,
  ContainerLogoStyled,
  HeaderStyled,
} from "./styled";
import { useNavBarContext } from "@/context/NavbarContext";
import ButtonIcon from "../ButtonIcon";
import { IoClose } from "react-icons/io5";
import Navbar from "../Navbar";
import useGenericRef from "@/hooks/useGenericRef";

const Header = () => {
  const { isOpen, setIsOpen } = useNavBarContext();
  const ref = useGenericRef<HTMLHeadingElement>();

  return (
    <HeaderStyled ref={ref}>
      <ContainerHeader>
        <ContainerLogoStyled>
          <ContainerImgStyled>
            <Image
              src="/assets/logo.png"
              fill
              sizes="(max-width: 992px) 15vw, 10vw"
              alt="Logo portfolio Natalia Curti"
              placeholder="blur"
              blurDataURL={"/assets/logo.png"}
            />
          </ContainerImgStyled>
          <h2>Natalia Curti</h2>
        </ContainerLogoStyled>
        <ButtonIcon onClick={() => setIsOpen(!isOpen)} isMenuBtn>
          {isOpen ? (
            <IoClose size={40} color="FFF" />
          ) : (
            <CgMenuRightAlt size={35} color="FFF" />
          )}
        </ButtonIcon>
      </ContainerHeader>
      <Navbar headerRef={ref} />
    </HeaderStyled>
  );
};

export default Header;
