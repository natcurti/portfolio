import Image from "next/image";
import { ContainerStyled } from "./styled";

const ImageMe = () => {
  return (
    <ContainerStyled>
      <Image
        src="/assets/img-me.png"
        alt="Imagem de uma mulher, cabelos lisos e castanhos, sorrindo"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
        fill
        priority
      />
    </ContainerStyled>
  );
};

export default ImageMe;
