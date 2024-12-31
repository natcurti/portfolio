"use client";
import styled from "styled-components";
import { fadeInAndTranslate } from "../Animations/animations";

export const SectionStyled = styled.section`
  padding: 2rem;
  background-color: var(--darkest-navy);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

export const TextStyled = styled.p`
  opacity: 0;
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.5;
  width: 90%;
  animation: ${fadeInAndTranslate} 3s forwards;

  @media (min-width: 768px) {
    width: 75%;
    font-size: 1.5rem;
  }
`;
