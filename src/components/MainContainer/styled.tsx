"use client";
import styled from "styled-components";

export const SectionStyled = styled.section<{ $isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => (props.$isMenuOpen ? "24rem" : "6rem")};
  transition: padding-top 0.5s ease-in-out;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding-top: ${(props) => (props.$isMenuOpen ? "25rem" : "7rem")};
    padding-inline: 1rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 768px) {
    padding-top: 9rem;
    padding-bottom: 2rem;
    gap: 2rem;
  }

  @media (min-width: 992px) {
    padding-top: 12rem;
  }
`;
