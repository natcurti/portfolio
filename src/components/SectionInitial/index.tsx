"use client";
import Image from "next/image";
import {
  ContainerImgBottomStyled,
  ContainerImgTopStyled,
  ContainerStyled,
  CursorStyled,
  TitleStyled,
} from "./styled";
import { useEffect, useState } from "react";

const SectionInitial = () => {
  const [firstSentence, setFirstSentence] = useState("");
  const [secondSentence, setSecondSentence] = useState("");
  const [thirdSentence, setThirdSentence] = useState("");
  const [showCursorOne, setShowCursorOne] = useState(true);
  const [showCursorTwo, setShowCursorTwo] = useState(false);
  const [showCursorThree, setShowCursorThree] = useState(false);
  const firstText = "Olá! Eu sou a";
  const secondText = "Natalia Curti";
  const thirdText = "Desenvolvedora Front-End";

  useEffect(() => {
    const delay = 150;
    const interval = setInterval(() => {
      if (firstSentence.length < firstText.length) {
        setFirstSentence((prev) => prev + firstText[firstSentence.length]);
      } else if (
        firstSentence.length === firstText.length &&
        secondSentence.length < secondText.length
      ) {
        setSecondSentence((prev) => prev + secondText[secondSentence.length]);
        setShowCursorOne(false);
        setShowCursorTwo(true);
      } else if (
        firstSentence.length === firstText.length &&
        secondSentence.length === secondText.length &&
        thirdSentence.length < thirdText.length
      ) {
        setThirdSentence((prev) => prev + thirdText[thirdSentence.length]);
        setShowCursorTwo(false);
        setShowCursorThree(true);
      } else {
        clearInterval(interval);
        setShowCursorThree(false);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [firstSentence, secondSentence, thirdSentence]);

  return (
    <ContainerStyled>
      <ContainerImgTopStyled>
        <Image
          src="/assets/illustration-top.png"
          fill
          priority
          sizes="33vw"
          alt="Planeta brilhante com anéis em volta"
        />
      </ContainerImgTopStyled>

      <TitleStyled>
        <span>
          {firstSentence}
          {showCursorOne && <CursorStyled>|</CursorStyled>}
        </span>
        <span>
          {secondSentence}
          {showCursorTwo && <CursorStyled>|</CursorStyled>}
        </span>
        <span>
          {thirdSentence}
          {showCursorThree && <CursorStyled>|</CursorStyled>}
        </span>
      </TitleStyled>
      <ContainerImgBottomStyled>
        <Image
          src="/assets/illustration-bottom.png"
          fill
          priority
          sizes="(max-width: 480px) 100vw, (max-width: 576px) 50vw, 33vw"
          alt="Conjunto de planetas brilhantes com anéis em volta"
        />
      </ContainerImgBottomStyled>
    </ContainerStyled>
  );
};

export default SectionInitial;
