import { ButtonStyled, ContainerStyled, LinkStyled } from "./styled";

const CustomButton = ({
  as = "button",
  href,
  type,
  disabled,
  download,
  children,
}: ICustomButton) => {
  return (
    <ContainerStyled>
      {as === "button" ? (
        <ButtonStyled type={type} disabled={disabled}>
          {children}
        </ButtonStyled>
      ) : (
        <LinkStyled href={href} target="_blank" download={download}>
          {children}
        </LinkStyled>
      )}
    </ContainerStyled>
  );
};

export default CustomButton;
