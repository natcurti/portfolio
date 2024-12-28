import { InputStyled, LabelStyled, TextAreaStyled } from "./styled";

const Input = ({ name, id, isTextArea }: IInput) => {
  return (
    <>
      <LabelStyled htmlFor={id}>{name}</LabelStyled>
      {isTextArea ? (
        <TextAreaStyled
          name={name}
          id={id}
          rows={7}
          placeholder={name}
        ></TextAreaStyled>
      ) : (
        <InputStyled name={name} id={id} placeholder={name} $type={name} />
      )}
    </>
  );
};

export default Input;
