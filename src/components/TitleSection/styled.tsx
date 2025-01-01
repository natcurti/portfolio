"use client";
import styled from "styled-components";
import { fadeIn } from "@/components/Animations";

export const TitleStyled = styled.h3`
  width: max-content;
  font-family: var(--font-poppins);
  font-weight: 600;
  font-size: 2rem;
  position: relative;
  z-index: 1;
  opacity: 0;
  animation: ${fadeIn} 3s forwards;
`;

export const UnderlineDetail = styled.div`
  position: absolute;
  z-index: -1;
  right: -0.75rem;
  bottom: 0.25rem;
  background-color: var(--light-navy);
  width: 80%;
  height: 1rem;
`;
