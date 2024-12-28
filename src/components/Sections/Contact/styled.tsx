"use client";
import styled from "styled-components";

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: max-content;
`;

export const ContainerFormAndIcons = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  @media (min-width: 1100px) {
    flex-direction: row;
    gap: 7rem;
  }
`;
