"use client";
import { useEffect, useState } from "react";
import {
  ContainerStyled,
  TitleStyled,
  SubtitleStyled,
  TextStyled,
  CursorStyled,
} from "./styled";

const Title = () => {
  const [sentence, setSentence] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const text = "Olá! Eu sou a Natalia";

  useEffect(() => {
    const delay = 150;
    const intervalId = setInterval(() => {
      if (sentence.length < text.length) {
        setSentence((prev) => prev + text[sentence.length]);
      } else {
        clearInterval(intervalId);
        setShowCursor(false);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [sentence]);

  return (
    <ContainerStyled>
      <TitleStyled>
        {sentence}
        {showCursor && <CursorStyled>|</CursorStyled>}
      </TitleStyled>
      <SubtitleStyled>Desenvolvedora Front-End</SubtitleStyled>
      <TextStyled>
        Estou em constante evolução. A cada projeto, descubro novas
        possibilidades e me desafio a criar soluções inovadoras e eficazes.
      </TextStyled>
    </ContainerStyled>
  );
};

export default Title;
