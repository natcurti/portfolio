import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { InputStyled, LabelStyled, TextAreaStyled } from "./styled";

interface IInput<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder: string;
  isTextArea?: boolean;
}

const Input = <T extends FieldValues>({
  register,
  name,
  placeholder,
  isTextArea,
}: IInput<T>) => {
  return (
    <>
      <LabelStyled htmlFor={name}>{name}</LabelStyled>
      {isTextArea ? (
        <TextAreaStyled
          {...register(name)}
          id={name}
          rows={7}
          placeholder={placeholder}
        ></TextAreaStyled>
      ) : (
        <InputStyled {...register(name)} id={name} placeholder={placeholder} />
      )}
    </>
  );
};

export default Input;
