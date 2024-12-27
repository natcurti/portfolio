import { ButtonStyled } from "./styled";

const Button = ({ children }: IButton) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
