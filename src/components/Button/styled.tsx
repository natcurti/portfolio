"use client";
import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 1rem;
  width: 50%;
  border: none;
  background: linear-gradient(to right, #2954a3, #c961de);
  font-family: var(--font-poppins);
  color: var(--white);
  font-size: 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  position: relative;

  @media (min-width: 768px) {
    width: 40%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 2rem;
    background: linear-gradient(to right, #2954a3, #c961de);
    z-index: -1;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover::after {
    filter: blur(0.8rem);
  }
`;
