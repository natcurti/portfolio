import { ButtonStyled, ContainerStyled, LinkStyled } from "./styled";

const CustomButton = ({
  as = "button",
  href,
  type,
  disabled,
  children,
}: ICustomButton) => {
  return (
    <ContainerStyled>
      {as === "button" ? (
        <ButtonStyled type={type} disabled={disabled}>
          {children}
        </ButtonStyled>
      ) : (
        <LinkStyled href={href} target="_blank">
          {children}
        </LinkStyled>
      )}
    </ContainerStyled>
  );
};

export default CustomButton;
