import * as React from "react";
import { Container, Title, Input } from "./styles";

type Props = {
  title: string;
  placeholder?: string;
  type: "text" | "password" | "description";
};

const InputComponent = (props: Props) => {
  const { title, placeholder = "", type = "text" } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <Input type={type} placeholder={placeholder} />
    </Container>
  );
};

export default InputComponent;
