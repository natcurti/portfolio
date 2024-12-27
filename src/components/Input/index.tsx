import { InputStyled, LabelStyled, TextAreaStyled } from "./styled";

const Input = ({ name, id, isTextArea }: IInput) => {
  return (
    <LabelStyled htmlFor={id} $type={name}>
      {name}:
      {isTextArea ? (
        <TextAreaStyled name={name} id={id} rows={7}></TextAreaStyled>
      ) : (
        <InputStyled name={name} id={id} />
      )}
    </LabelStyled>
  );
};

export default Input;
