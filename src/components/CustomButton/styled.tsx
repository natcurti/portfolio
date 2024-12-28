"use client";
import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 50%;
  background: linear-gradient(to right, #2954a3, #c961de);
  border-radius: 2rem;
  position: relative;
  display: grid;
  place-items: center;

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

export const ButtonStyled = styled.button`
  cursor: pointer;
  display: grid;
  place-items: center;
  font-family: var(--font-poppins);
  color: var(--white);
  font-size: 1.5rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: none;
`;

export const LinkStyled = styled.a`
  cursor: pointer;
  display: grid;
  place-items: center;
  font-family: var(--font-poppins);
  color: var(--white);
  font-size: 1.5rem;
  text-decoration: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
