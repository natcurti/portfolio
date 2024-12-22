"use client";
import styled, { css, keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

export const SectionStyled = styled.section<{ $sectionType: string }>`
  padding: 2rem ${(props) => (props.$sectionType === "projects" ? "0" : "2rem")};
  background-color: var(--darkest-navy);
  overflow: hidden;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 4rem
      ${(props) => (props.$sectionType === "projects" ? "0" : "4rem")};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const TitleSection = styled.h3<{ $showAnimation: boolean }>`
  font-family: var(--font-poppins);
  font-weight: 600;
  font-size: 2rem;
  position: relative;
  z-index: 2;
  opacity: 0;
  animation: ${(props) =>
    props.$showAnimation &&
    css`
      ${fadeIn} 3s forwards;
    `};
`;

export const UnderlineDetail = styled.div`
  position: absolute;
  z-index: -1;
  right: -0.75rem;
  bottom: 0.25rem;
  background-color: var(--light-navy);
  width: 80%;
  height: 1rem;
`;
