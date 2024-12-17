"use client";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

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

export const SectionStyled = styled.section`
  padding: 4rem;
  background-color: var(--dark-navy);
  z-index: 1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px -6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px -3px 7px -3px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const TitleSection = styled.h3`
  font-family: var(--font-poppins);
  font-weight: 600;
  font-size: 2rem;
  position: relative;
  z-index: 1;
  opacity: 0;
  animation: ${fadeIn} 3s forwards;
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

export const UnderlineDetail = styled.div`
  position: absolute;
  z-index: -1;
  right: -0.75rem;
  bottom: 0.25rem;
  background-color: var(--light-navy);
  width: 80%;
  height: 1rem;
`;
