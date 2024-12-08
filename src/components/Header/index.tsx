import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { ButtonMenuStyled, HeaderStyled } from "./styled";

const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <Image
          src="/assets/logo-portfolio.png"
          width={75}
          height={75}
          priority
          alt="Logo portfolio Natalia Curti. Redondo com degrâde azul e roxo e a letra N no centro."
        />
      </div>
      <ButtonMenuStyled>
        <CgMenuRightAlt size={35} color="FFF" />
      </ButtonMenuStyled>

      {/* <Navbar /> */}
    </HeaderStyled>
  );
};

export default Header;
