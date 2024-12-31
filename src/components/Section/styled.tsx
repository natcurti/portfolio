"use client";
import styled from "styled-components";

export const SectionStyled = styled.section<{ $type?: string }>`
  padding: 2rem ${(props) => (props.$type === "projects" ? "0" : "2rem")};
  background-color: var(--darkest-navy);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 4rem ${(props) => (props.$type === "projects" ? "0" : "4rem")};
  }
`;
