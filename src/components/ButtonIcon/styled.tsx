import styled from "styled-components";

export const ButtonStyled = styled.button<{ $isMenuBtn?: boolean }>`
  background-color: transparent;
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;

  @media (min-width: 768px) {
    display: ${(props) => (props.$isMenuBtn ? "none" : "grid")};
  }
`;
