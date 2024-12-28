import Image from "next/image";
import { ContainerImgStyled, ContainerLogoStyled } from "./styled";

const Logo = () => {
  return (
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
  );
};

export default Logo;
