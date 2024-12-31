import React, { ForwardedRef, forwardRef } from "react";
import { SectionStyled } from "./styled";

const Section = (
  { id, children }: ISection,
  ref: ForwardedRef<HTMLElement>
) => {
  return (
    <SectionStyled
      ref={ref}
      id={id}
      $type={id === "projects" ? "projects" : ""}
    >
      {children}
    </SectionStyled>
  );
};

export default forwardRef(Section);
