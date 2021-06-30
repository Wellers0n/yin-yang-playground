import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import {
  Container,
  Aside,
  Wrapper,
  Img,
  LogoTitle,
  LogoDescription,
  Title,
  Box,
  Button,
} from "./styles";
import Logo from "../../assets/images/location.png";
import { graphql, commitMutation } from "react-relay";
import Environment from "../../relay/Environment";
import { RegisterQueryResponse } from "./__generated__/RegisterQuery.graphql";

// components
import Input from "../../components/Input";

const Register = (props: RouteComponentProps) => {
  const { history } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const mutation = graphql`
    mutation RegisterQuery($input: userRegisterInput!) {
      UserRegisterMutation(input: $input) {
        token
        message
      }
    }
  `;

  const submit = () => {
    commitMutation(Environment, {
      mutation,
      variables: { input: { email, password, name, description } },
      onCompleted: (response: RegisterQueryResponse, errors: any) => {
        if (errors) return console.log(errors);

        const token = response.UserRegisterMutation?.token;
        if (token) {
          localStorage.setItem("token", token);
          return history.push("/home");
        }
      },
      onError: (err) => console.error(err),
    });
  };

  return (
    <Container>
      <Aside>
        <Img src={Logo} alt="Logo" />
        <LogoTitle>Awesome title</LogoTitle>
        <LogoDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </LogoDescription>
      </Aside>
      <Wrapper>
        <Box>
          <Title>Register</Title>
          <Input
            title={"Email"}
            value={email}
            onChange={(value: string) => setEmail(value)}
            type={"text"}
            placeholder={"joe@email.com"}
          />
          <Input
            value={password}
            onChange={(value: string) => setPassword(value)}
            title={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
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
          <Button onClick={submit}>Register</Button>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Register;
