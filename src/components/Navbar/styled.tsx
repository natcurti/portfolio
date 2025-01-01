import styled from "styled-components";
import { underlineAnimation } from "../Animations/animations";

export const NavStyled = styled.nav<{ $isOpen: boolean }>`
  overflow: hidden;
  width: 100%;
  transition: height 0.5s ease-in-out;
  height: ${(props) => (props.$isOpen ? "18.5rem" : "0")};

  @media (min-width: 768px) {
    all: unset;
  }
`;

export const ListStyled = styled.ul<{ $isOpen: boolean }>`
  padding: 1.5rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 992px) {
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    gap: 3rem;
  }
`;

export const ListItemStyled = styled.li`
  a {
    color: var(--white);
    text-decoration: none;
    font-size: 1.5rem;
    position: relative;
  }

  a::after {
    position: absolute;
    left: 0;
    bottom: -3px;
    content: "";
    width: 0px;
    height: 2px;
    background-color: aliceblue;
  }

  a:hover::after {
    animation: ${underlineAnimation} 0.7s linear forwards;
  }

  @media (min-width: 768px) {
    a {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 992px) {
    a {
      font-size: 1.5rem;
    }
  }
`;

export const ContainerButtonStyled = styled.div`
  margin: 1rem 1rem 0 0;

  @media (min-width: 768px) {
    display: none;
  }
`;
