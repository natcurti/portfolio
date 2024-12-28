import { ContainerIcon, ContainerLink, TextStyled, Title } from "./styled";

const ContactIcon = ({ icon, title, text, href }: IContactIcon) => {
  return (
    <ContainerLink href={href} target="_blank">
      <ContainerIcon>{icon}</ContainerIcon>
      <div>
        <Title>{title}</Title>
        <TextStyled>{text}</TextStyled>
      </div>
    </ContainerLink>
  );
};

export default ContactIcon;
