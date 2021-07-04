import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { Container, Wrapper, Title, Box, Button } from "./styles";
import { graphql, commitMutation } from "react-relay";
import Environment from "../../relay/Environment";

// components
import Input from "../../components/Input";

const Edit = (props: RouteComponentProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // const mutation = graphql``;

  const submit = () => {};

  return (
    <Container>
      <Wrapper>
        <Box>
          <Title>Edit</Title>
          <Input
            title={"Email"}
            value={email}
            onChange={(value: string) => setEmail(value)}
            type={"text"}
            placeholder={"joe@email.com"}
          />
          <Input
            value={name}
            onChange={(value: string) => setName(value)}
            title={"Name"}
            type={"text"}
            placeholder={"Enter your name"}
          />
          <Input
            value={description}
            onChange={(value: string) => setDescription(value)}
            title={"Description"}
            type={"text"}
            placeholder={"Enter your description"}
          />
          <Button onClick={submit}>Edit</Button>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Edit;
