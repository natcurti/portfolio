"use client";
import styled from "styled-components";
import { ButtonStyled } from "../styled";
import { bounce } from "@/components/animations/animations";

export const ButtonUpStyled = styled(ButtonStyled)`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 10;
  background: linear-gradient(to right, #2954a3, #c961de);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${bounce} 3s ease-in-out infinite;
`;
