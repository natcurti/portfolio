"use client";
import styled from "styled-components";

export const SectionStyled = styled.section`
  padding: 2rem 0;
  background-color: var(--darkest-navy);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

export const ContainerProjects = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
