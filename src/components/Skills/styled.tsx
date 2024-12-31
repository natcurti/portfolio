"use client";
import styled from "styled-components";

export const SectionStyled = styled.section`
  padding: 2rem;
  background-color: var(--darkest-navy);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

export const ContainerCards = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(12, 1fr);
  gap: 2rem;
  height: 136rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    height: 67rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: 44rem;
  }

  @media (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 32.5rem;
  }
`;