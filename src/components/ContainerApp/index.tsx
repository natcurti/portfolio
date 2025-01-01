import { Container } from "./styled";

const ContainerApp = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default ContainerApp;
