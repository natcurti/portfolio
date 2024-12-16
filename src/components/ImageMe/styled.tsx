"use client";
import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 15.625rem;
  height: 15.625rem;
  position: relative;

  img {
    object-fit: contain;
  }

  @media (min-width: 400px) {
    width: 18rem;
    height: 18rem;
  }

  @media (min-width: 992px) {
    width: 25rem;
    height: 25rem;
  }
`;
