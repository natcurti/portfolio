"use client";
import styled from "styled-components";

export const FooterStyled = styled.footer`
  height: 10rem;
  width: 100%;
  background-color: var(--dark-navy);
  display: grid;
  place-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  margin-top: 5rem;

  p {
    width: 50%;
    font-size: 1.25rem;

    @media (min-width: 768px) {
      width: 100%;
    }
  }

  @media (min-width: 2000px) {
    background-color: transparent;
  }
`;
