"use client";
import Link from "next/link";
import { ListItemStyled, ListStyled, NavStyled } from "./styled";
import { useNavBarContext } from "@/context/NavbarContext";
import { useRefContext } from "@/context/SectionRefsContext";

const Navbar = ({ headerRef }: INavBar) => {
  const { isOpen } = useNavBarContext();
  const { sectionRefs } = useRefContext();

  const handleScroll = (
    id: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const headerHeight = headerRef.current?.clientHeight;

    const refToScroll = sectionRefs.find((ref) => ref.current.id === id);

    if (refToScroll && headerHeight) {
      window.scroll({
        behavior: "smooth",
        top: refToScroll.current.offsetTop - headerHeight,
      });
    }
  };

  return (
    <NavStyled $isOpen={isOpen}>
      <ListStyled $isOpen={isOpen}>
        <ListItemStyled>
          <Link href="/">Home</Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="" onClick={(e) => handleScroll("aboutMe", e)}>
            Sobre Mim
          </Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="" onClick={(e) => handleScroll("skills", e)}>
            Habilidades
          </Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="" onClick={(e) => handleScroll("projects", e)}>
            Projetos
          </Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link href="" onClick={(e) => handleScroll("contact", e)}>
            Contato
          </Link>
        </ListItemStyled>
      </ListStyled>
    </NavStyled>
  );
};

export default Navbar;
