"use client";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1200px) {
    padding: 2rem 4rem;
  }
`;

export const ContainerLogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h2 {
    font-weight: 600;
    font-size: 1.25rem;

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
  width: 75px;
  height: 43px;
  position: relative;

  img {
    object-fit: contain;
  }

  @media (min-width: 992px) {
    width: 120px;
    height: 68.8px;
  }
`;

export const ContainerButtonStyled = styled.div`
  display: grid;
  place-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;
