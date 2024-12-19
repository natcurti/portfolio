import { ButtonStyled } from "./styled";

const ButtonIcon = ({ onClick, children, isMenuBtn }: IButtonIcon) => {
  return (
    <ButtonStyled onClick={onClick} $isMenuBtn={isMenuBtn}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonIcon;
