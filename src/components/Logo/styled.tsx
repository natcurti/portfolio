"use client";
import styled from "styled-components";

export const ContainerLogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }

    @media (min-width: 992px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1200px) {
      font-size: 1.75rem;
    }
  }

  @media (min-width: 1200px) {
    gap: 2rem;
  }
`;

export const ContainerImgStyled = styled.div`
  width: 4.68rem;
  height: 2.68rem;
  position: relative;

  img {
    object-fit: contain;
  }

  @media (min-width: 992px) {
    width: 7.5rem;
    height: 4.3rem;
  }
`;
