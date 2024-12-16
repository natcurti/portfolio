"use client";
import styled from "styled-components";

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    gap: 2rem;
  }

  @media (min-width: 992px) {
    padding: 2rem;
  }
`;
