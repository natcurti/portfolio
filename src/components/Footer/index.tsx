import Logo from "../Logo";
import { FooterStyled } from "./styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterStyled>
      <Logo />
      <p>© Natalia Curti {currentYear} - Todos os direitos reservados.</p>
    </FooterStyled>
  );
};

export default Footer;
