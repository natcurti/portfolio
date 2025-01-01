"use client";
import styled from "styled-components";
import { blink } from "../Animations/animations";

export const ContainerStyled = styled.div`
  padding: 1.5rem;
  width: 100%;

  @media (min-width: 576px) {
    width: 50%;
  }
`;

export const TitleStyled = styled.h1`
  margin-bottom: 1rem;
  font-family: var(--font-poppins);
  font-weight: 700;
  font-size: 1.75rem;
  background: linear-gradient(to right, #2954a3, #c961de);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;

  @media (min-width: 400px) {
    font-size: 1.95rem;
  }

  @media (min-width: 576px) {
    font-size: 2.25rem;
  }

  @media (min-width: 992px) {
    font-size: 2.75rem;
  }
`;

export const SubtitleStyled = styled.h2`
  margin-bottom: 0.5rem;
  font-family: var(--font-poppins);
  font-weight: 500;
  font-size: 1.5rem;
  width: min-content;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);

  @media (min-width: 400px) {
    width: auto;
  }

  @media (min-width: 652px) and (max-width: 772px) {
    width: min-content;
  }

  @media (min-width: 992px) {
    font-size: 2rem;
  }
`;

export const TextStyled = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;

  @media (min-width: 400px) {
    font-size: 1.45rem;
  }

  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const CursorStyled = styled.span`
  background: linear-gradient(to right, #2954a3, #c961de);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${blink} 1s infinite;
  vertical-align: baseline;
`;
