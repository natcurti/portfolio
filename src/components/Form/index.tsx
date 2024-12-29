"use client";
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
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import { useSubmit } from "@formspree/react";

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
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitting },
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

  const [successMessage, setSuccessMessage] = useState<string>("");

  const submit = useSubmit<FormValues>("mrbbknvk", {
    onError(err) {
      const errors = err.getFormErrors();
      if (errors) {
        setError("root", {
          type: "Error",
          message: "Erro ao submeter formulário.",
        });
      }
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setSuccessMessage("Mensagem enviada! Retornarei o mais breve possível.");
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
  }, [successMessage]);

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
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
      <div>
        {errors?.root?.message && (
          <ErrorMessage>{errors.root.message}</ErrorMessage>
        )}
      </div>
      {successMessage && <p>{successMessage}</p>}
      <ContainerButton>
        <CustomButton as="button" type="submit" disabled={isSubmitting}>
          Enviar
        </CustomButton>
      </ContainerButton>
    </FormStyled>
  );
};

export default Form;
