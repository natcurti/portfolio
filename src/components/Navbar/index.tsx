"use client";
import Link from "next/link";
import { ListItemStyled, ListStyled, NavStyled } from "./styled";
import { useNavBarContext } from "@/context/NavbarContext";

const Navbar = () => {
  const { isOpen } = useNavBarContext();

  return (
    <NavStyled $isOpen={isOpen}>
      <ListStyled $isOpen={isOpen}>
        <ListItemStyled>
          <Link href="/">Home</Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="#aboutMe">Sobre Mim</Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="#skills">Habilidades</Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="#projects">Projetos</Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="#contact">Contato</Link>
        </ListItemStyled>
      </ListStyled>
    </NavStyled>
  );
};

export default Navbar;
