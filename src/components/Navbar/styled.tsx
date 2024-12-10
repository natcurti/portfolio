import styled, { keyframes } from "styled-components";

const underlineAnimation = keyframes`
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

export const NavStyled = styled.nav<{ $isOpen: boolean }>`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: ${(props) => (props.$isOpen ? "100%" : "0")};
  background-color: rgba(0, 0, 32, 0.5);
  backdrop-filter: blur(10px);
  transition: width 0.5s ease-in-out;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 768px) {
    all: unset;
  }
`;

export const ListStyled = styled.ul<{ $isOpen: boolean }>`
  padding: 2rem;
  list-style: none;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

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
