"use client";
import styled from "styled-components";

export const LabelStyled = styled.label<{ $type?: string }>`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  gap: 0.5rem;
  padding: 0.5rem 0;
  font-family: var(--font-poppins);
  font-weight: 600;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    gap: 0.75rem;
    width: ${(props) =>
      props.$type === "Nome" || props.$type === "Sobrenome" ? "48%" : "100%"};
  }
`;

export const InputStyled = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.25rem;
  background-color: transparent;
  border: 1px solid var(--white);
  font-family: var(--font-quicksand);
  color: var(--white);

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  &:focus {
    outline: 3px solid var(--light-blue);
    border: 1px solid var(--light-blue);
  }
`;

export const TextAreaStyled = styled.textarea`
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.25rem;
  background-color: transparent;
  border: 1px solid var(--white);
  font-family: var(--font-quicksand);
  color: var(--white);
  resize: none;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  &:focus {
    outline: 3px solid var(--light-blue);
    border: 1px solid var(--light-blue);
  }
`;
