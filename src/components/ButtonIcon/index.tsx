import { ButtonStyled } from "./styled";

interface IButtonIcon {
  onClick: () => void;
  children: React.ReactNode;
  isMenuBtn?: boolean;
}

const ButtonIcon = ({ onClick, children, isMenuBtn }: IButtonIcon) => {
  return (
    <ButtonStyled onClick={onClick} $isMenuBtn={isMenuBtn}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonIcon;
