"use client";
import useGenericRef from "@/hooks/useGenericRef";
import {
  InnerContainer,
  SectionStyled,
  TitleSection,
  UnderlineDetail,
} from "../sharedStyles";
import useShowAnimation from "@/hooks/useShowAnimation";
import { useRefContext } from "@/context/SectionRefsContext";
import { useEffect } from "react";
import Form from "@/components/Form";

const Contact = () => {
  const ref = useGenericRef<HTMLElement>();
  const { showAnimation } = useShowAnimation<HTMLElement>({ ref });
  const { registerRef } = useRefContext();

  useEffect(() => {
    registerRef(ref as React.RefObject<HTMLElement>);
  }, [registerRef, ref]);

  return (
    <SectionStyled $sectionType="contact" ref={ref}>
      <InnerContainer>
        <TitleSection $showAnimation={showAnimation}>
          Contato
          <UnderlineDetail></UnderlineDetail>
        </TitleSection>
        <Form />
      </InnerContainer>
    </SectionStyled>
  );
};

export default Contact;
