"use client";
import Link from "next/link";
import {
  ContainerButtonStyled,
  ListItemStyled,
  ListStyled,
  NavStyled,
} from "./styled";
import { IoClose } from "react-icons/io5";
import { useNavBarContext } from "@/context/NavbarContext";
import ButtonIcon from "../ButtonIcon";

const Navbar = () => {
  const { isOpen, setIsOpen } = useNavBarContext();

  return (
    <NavStyled $isOpen={isOpen}>
      <ListStyled $isOpen={isOpen}>
        <ListItemStyled>
          <Link href="">Home</Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="">Sobre Mim</Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="">Habilidades</Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="">Projetos</Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="">Contato</Link>
        </ListItemStyled>
      </ListStyled>
      <ContainerButtonStyled>
        <ButtonIcon onClick={() => setIsOpen(!isOpen)}>
          <IoClose size={40} color="FFF" />
        </ButtonIcon>
      </ContainerButtonStyled>
    </NavStyled>
  );
};

export default Navbar;
