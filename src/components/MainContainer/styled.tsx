"use client";
import styled from "styled-components";

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 992px) {
    padding: 2rem;
  }
`;
