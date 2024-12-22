"use client";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const prevSentence = useRef<string | null>(null);

  const renderTitle = useMemo(() => {
    return (
      <TitleStyled>
        {sentence}
        {showCursor && <CursorStyled>|</CursorStyled>}
      </TitleStyled>
    );
  }, [sentence, showCursor]);

  useEffect(() => {
    const delay = 150;

    const animateText = () => {
      if (sentence.length < text.length && sentence !== prevSentence.current) {
        setSentence((prev) => prev + text[sentence.length]);
        prevSentence.current = sentence;
      } else {
        clearInterval(intervalId);
        setShowCursor(false);
      }
    };

    const intervalId = setInterval(animateText, delay);

    return () => clearInterval(intervalId);
  }, [sentence.length]);

  return (
    <ContainerStyled>
      {renderTitle}
      <SubtitleStyled>Desenvolvedora Front-End</SubtitleStyled>
      <TextStyled>
        Estou em constante evolução. A cada projeto, descubro novas
        possibilidades e me desafio a criar soluções inovadoras e eficazes.
      </TextStyled>
    </ContainerStyled>
  );
};

export default Title;
