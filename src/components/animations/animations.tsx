"use client";
import { keyframes } from "styled-components";

export const fadeInAndTranslate = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }

`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

export const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
`;

export const animateBorderHeight = keyframes`
  from {
    height: 3px;
  }

  to {
    height: 100%;
  }

`;

export const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0
  }
`;

export const underlineAnimation = keyframes`
    0%{
        width: 0;
    }
    50%{
        width: 50%;
    }
    100%{
        width: 100%;
    }
`;
