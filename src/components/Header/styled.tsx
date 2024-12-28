"use client";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 1.5rem;
  background-color: var(--darkest-navy);
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1200px) {
    padding: 2rem 4rem;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
