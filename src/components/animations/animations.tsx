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
