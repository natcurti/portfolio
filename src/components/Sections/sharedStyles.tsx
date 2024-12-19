"use client";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

export const SectionStyled = styled.section`
  padding: 4rem;
  background-color: var(--dakest-navy);
  z-index: 1;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const TitleSection = styled.h3`
  font-family: var(--font-poppins);
  font-weight: 600;
  font-size: 2rem;
  position: relative;
  z-index: 1;
  opacity: 0;
  animation: ${fadeIn} 3s forwards;
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
