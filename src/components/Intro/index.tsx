"use client";
import { useEffect, useRef, useState } from "react";
import {
  ContainerStyled,
  TitleStyled,
  SubtitleStyled,
  TextStyled,
  CursorStyled,
} from "./styled";
import CustomButton from "../CustomButton";

const Intro = () => {
  const [sentence, setSentence] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const text = "Olá! Eu sou a Natalia";
  const prevSentence = useRef<string | null>(null);

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
      <CustomButton as="a" href="https://www.google.com">
        Download CV
      </CustomButton>
    </ContainerStyled>
  );
};

export default Intro;
