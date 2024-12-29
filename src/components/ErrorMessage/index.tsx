import { TextMessage } from "./styled";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <TextMessage>{children}</TextMessage>;
};

export default ErrorMessage;
