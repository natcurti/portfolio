import { ButtonStyled } from "./styled";

interface IButtonIcon {
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonIcon = ({ onClick, children }: IButtonIcon) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default ButtonIcon;
