import Image from "next/image";
import { ContainerStyled } from "./styled";

const ImageMe = () => {
  return (
    <ContainerStyled>
      <Image src="/assets/img-me.png" alt="Foto de rosto de Natalia" fill />
    </ContainerStyled>
  );
};

export default ImageMe;
