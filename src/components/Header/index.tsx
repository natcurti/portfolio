"use client";
import { CgMenuRightAlt } from "react-icons/cg";
import { ContainerHeader, HeaderStyled } from "./styled";
import { useNavBarContext } from "@/context/NavbarContext";
import ButtonIcon from "../ButtonIcon";
import { IoClose } from "react-icons/io5";
import Navbar from "../Navbar";
import useGenericRef from "@/hooks/useGenericRef";
import Logo from "../Logo";

const Header = () => {
  const { isOpen, setIsOpen } = useNavBarContext();
  const ref = useGenericRef<HTMLHeadingElement>();

  return (
    <HeaderStyled ref={ref}>
      <ContainerHeader>
        <Logo />
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
