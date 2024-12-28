import { ButtonStyled, ContainerStyled, LinkStyled } from "./styled";

const CustomButton = ({
  as = "button",
  href,
  onClick,
  children,
}: ICustomButton) => {
  return (
    <ContainerStyled>
      {as === "button" ? (
        <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
      ) : (
        <LinkStyled href={href} target="_blank">
          {children}
        </LinkStyled>
      )}
    </ContainerStyled>
  );
};

export default CustomButton;
