import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import Input from "../Input";
import {
  ContainerButton,
  ContainerInputName,
  FormStyled,
  TextForm,
  TitleForm,
} from "./styled";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import ErrorMessage from "../ErrorMessage";

const schema = z.object({
  name: z.string().min(3, "Digite um nome válido"),
  lastname: z.string().min(3, "Digite um sobrenome válido"),
  email: z.string().email("Digite um email válido"),
  message: z.string().min(5, "Digite sua mensagem"),
});

type FormValues = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      message: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const submitForm = (values: FormValues) => {
    console.log(values);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <FormStyled onSubmit={handleSubmit(submitForm)}>
      <TitleForm>Me envie uma mensagem!</TitleForm>
      <TextForm>
        Estou disponível para novos projetos e oportunidades. Entre em contato
        comigo para marcarmos uma conversa.
      </TextForm>
      <ContainerInputName>
        <div>
          <Input name="name" register={register} placeholder="Nome" />
          {errors?.name?.message && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input name="lastname" register={register} placeholder="Sobrenome" />
          {errors?.lastname?.message && (
            <ErrorMessage>{errors.lastname.message}</ErrorMessage>
          )}
        </div>
      </ContainerInputName>
      <div>
        <Input name="email" register={register} placeholder="Email" />
        {errors?.email?.message && (
          <ErrorMessage>{errors.email.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          name="message"
          register={register}
          isTextArea
          placeholder="Digite sua mensagem..."
        />
        {errors?.message?.message && (
          <ErrorMessage>{errors.message.message}</ErrorMessage>
        )}
      </div>
      <ContainerButton>
        <CustomButton as="button">Enviar</CustomButton>
      </ContainerButton>
    </FormStyled>
  );
};

export default Form;
