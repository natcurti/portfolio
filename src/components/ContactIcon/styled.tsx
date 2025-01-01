"use client";
import styled from "styled-components";
import { fadeInAndTranslate } from "@/components/Animations/animations";

export const ContainerLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--white);
  animation: ${fadeInAndTranslate} 1.5s ease-in forwards;

  @media (min-width: 480px) {
    gap: 2rem;
  }
`;

export const ContainerIcon = styled.div`
  display: grid;
  place-items: center;
  background: linear-gradient(to right, #2954a3, #c961de);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #2954a3, #c961de);
    z-index: -1;
    border-radius: 50%;
  }

  &:hover::after {
    filter: blur(0.8rem);
  }
`;

export const Title = styled.h4`
  font-family: var(--font-poppins);
  font-weight: 600;
  font-size: 1.25rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const TextStyled = styled.p`
  color: var(--white);
  font-size: 1rem;

  @media (min-width: 480px) {
    font-size: 1.25rem;
  }
`;
