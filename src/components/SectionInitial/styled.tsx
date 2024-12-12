"use client";
import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  0%{ 
    opacity: 1;
  } 
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1
  }
`;

export const ContainerStyled = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 7rem);

  @media (min-width: 992px) {
    flex-direction: row;
    padding-left: 2rem;
  }
`;

export const ContainerImgTopStyled = styled.div`
  width: 9.813rem;
  height: 12.5rem;
  position: relative;

  img {
    object-fit: contain;
  }

  @media (min-width: 768px) {
    width: 14.688rem;
    height: 18.75rem;
  }
`;

export const ContainerImgBottomStyled = styled.div`
  width: 100%;
  height: 19.5rem;
  position: relative;
  align-self: flex-end;

  img {
    object-fit: contain;
    object-position: right;
  }

  @media (min-width: 768px) {
    height: 30rem;
  }
`;

export const TitleStyled = styled.h1`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-roboto);
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.5;
  width: 90%;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const CursorStyled = styled.span`
  animation: ${blinkAnimation} 1s infinite;
  vertical-align: text-bottom;
`;
