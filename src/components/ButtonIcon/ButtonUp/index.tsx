"use client";
import { useEffect, useState } from "react";
import { ButtonUpStyled } from "./styled";
import { HiArrowUp } from "react-icons/hi";

const ButtonUp = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setShowBtn(scrollHeight > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <>
      {showBtn && (
        <ButtonUpStyled onClick={scrollToTop}>
          <HiArrowUp size={25} color="#FFF" />
        </ButtonUpStyled>
      )}
    </>
  );
};

export default ButtonUp;
