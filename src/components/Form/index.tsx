import Button from "../Button";
import Input from "../Input";
import {
  ContainerButton,
  ContainerInputName,
  FormStyled,
  TextForm,
  TitleForm,
} from "./styled";

const Form = () => {
  return (
    <FormStyled>
      <TitleForm>Me envie uma mensagem!</TitleForm>
      <TextForm>
        Estou aberta para novas oportunidades e pronta para contribuir com seu
        projeto.
      </TextForm>
      <ContainerInputName>
        <Input name="Nome" id="nome" />
        <Input name="Sobrenome" id="sobrenome" />
      </ContainerInputName>
      <Input name="Email" id="email" />
      <Input name="Mensagem" id="mensagem" isTextArea />
      <ContainerButton>
        <Button>Enviar</Button>
      </ContainerButton>
    </FormStyled>
  );
};

export default Form;
