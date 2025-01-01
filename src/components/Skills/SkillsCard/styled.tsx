"use client";
import { fadeIn } from "@/components/Animations";
import styled from "styled-components";

export const ContainerOuter = styled.div`
  animation: ${fadeIn} 4s forwards;
`;

export const ContainerCard = styled.div`
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes spin {
    from {
      --angle: 0deg;
    }
    to {
      --angle: 360deg;
    }
  }

  padding: 0.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--darkest-navy);
  border-radius: 0.5rem;
  position: relative;
  width: 17rem;
  height: 9.5rem;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    background-image: conic-gradient(
      from var(--angle),
      #ffa8d9,
      #232a8d,
      #2f2c79,
      #ffa8d9
    );
    padding: 0.3rem;
    border-radius: 0.5rem;
    z-index: -1;
    animation: 3s spin linear infinite;
  }

  &::before {
    filter: blur(0.8rem);
    opacity: 0.5;
  }
`;

export const TitleStyled = styled.p`
  font-family: var(--font-poppins);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1rem;
`;
