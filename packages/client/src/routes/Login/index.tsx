import * as React from "react";
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
  Button
} from "./styles";
import Logo from "../../assets/images/location.png";

// components
import Input from '../../components/Input'

const Login = () => {
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
        <Title>Log in</Title>
        <Box>
          <Input title={'Email'} type={'text'} placeholder={'joe@email.com'} />
          <Input title={'Password'} type={'password'} placeholder={'Enter your password'} />
          <Register>Register</Register>
          <Button>Login</Button>
        </Box>
      </WrapperLogin>
    </Container>
  );
};

export default Login;
