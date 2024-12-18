"use client";
import styled, { keyframes } from "styled-components";

const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

const TextBaseStyled = styled.p`
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.5;

  @media (min-width: 768px) {
    width: 70%;
    font-size: 1.5rem;
  }
`;

export const FirstText = styled(TextBaseStyled)`
  animation: ${slideLeft} 3s forwards;
`;

export const SecondText = styled(TextBaseStyled)`
  animation: ${slideRight} 3s forwards;
`;
