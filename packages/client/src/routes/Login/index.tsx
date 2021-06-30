import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import {
  Container,
  Aside,
  WrapperLogin,
  Img,
  LogoTitle,
  LogoDescription,
  Title,
  Box,
  Register,
  Button,
} from "./styles";
import Logo from "../../assets/images/location.png";
import { graphql, commitMutation } from "react-relay";
import Environment from "../../relay/Environment";
import { LoginQueryResponse } from "./__generated__/LoginQuery.graphql";
// components
import Input from "../../components/Input";

const Login = (props: RouteComponentProps) => {
  const { history } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = graphql`
    mutation LoginQuery($input: UserLoginInput!) {
      UserLoginMutation(input: $input) {
        token
        message
      }
    }
  `;

  const submit = () => {
    commitMutation(Environment, {
      mutation,
      variables: { input: { email, password } },
      onCompleted: (response: LoginQueryResponse, errors: any) => {
        if (errors) return console.log(errors);

        const token = response.UserLoginMutation?.token;
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
      <WrapperLogin>
        <Box>
          <Title>Log in</Title>
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
          <Register onClick={() => history.push("/register")}>
            Register
          </Register>
          <Button onClick={submit}>Login</Button>
        </Box>
      </WrapperLogin>
    </Container>
  );
};

export default Login;
