"use client";
import styled from "styled-components";

export const SectionStyled = styled.section<{ $isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => (props.$isMenuOpen ? "24rem" : "6rem")};
  padding-bottom: 2rem;
  transition: padding-top 0.5s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding-top: ${(props) => (props.$isMenuOpen ? "25rem" : "7rem")};
    padding-inline: 1rem;
  }

  @media (min-width: 768px) {
    padding-top: 9rem;
    padding-bottom: 4rem;
    gap: 2rem;
  }

  @media (min-width: 992px) {
    padding-top: 12rem;
  }
`;
