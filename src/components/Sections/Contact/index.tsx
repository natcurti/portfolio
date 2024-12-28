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
import ContactIcon from "@/components/ContactIcon";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";
import { ContainerFormAndIcons, ContainerIcons } from "./styled";

const contactTypes = [
  {
    icon: <FaLinkedin size={50} color={"#FFF"} />,
    title: "LinkedIn",
    text: "Natalia Curti",
    href: "https://www.linkedin.com/in/natalia-curti-a8b7b425a/",
  },
  {
    icon: <IoLogoGithub size={50} color={"#FFF"} />,
    title: "Github",
    text: "Natalia Curti",
    href: "https://github.com/natcurti",
  },
  {
    icon: <FaWhatsapp size={50} color={"#FFF"} />,
    title: "Telefone",
    text: "(16)99609-7256",
    href: "tel:5516996097256",
  },
  {
    icon: <HiOutlineMail size={50} color={"#FFF"} />,
    title: "Email",
    text: "naticurti01@gmail.com",
    href: "mailto:naticurti01@gmail.com",
  },
];

const Contact = () => {
  const ref = useGenericRef<HTMLElement>();
  const { showAnimation } = useShowAnimation<HTMLElement>({ ref });
  const { registerRef } = useRefContext();

  useEffect(() => {
    registerRef(ref as React.RefObject<HTMLElement>);
  }, [registerRef, ref]);

  return (
    <SectionStyled $sectionType="contact" ref={ref} id="contact">
      <InnerContainer>
        <TitleSection $showAnimation={showAnimation}>
          Contato
          <UnderlineDetail></UnderlineDetail>
        </TitleSection>
        <ContainerFormAndIcons>
          <Form />
          <ContainerIcons>
            {contactTypes.map((type) => (
              <ContactIcon key={type.title} {...type} />
            ))}
          </ContainerIcons>
        </ContainerFormAndIcons>
      </InnerContainer>
    </SectionStyled>
  );
};

export default Contact;
