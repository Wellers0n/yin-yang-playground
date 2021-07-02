import * as React from "react";
import { Container, Box, Name, Description, Email } from "./styles";

type user = {
  name: string;
  description: string;
  email: string;
};

type Props = {
  users: Array<user>;
};

const UserBoxComponent = (props: Props) => {
  const { users } = props;
  return (
    <Container>
      {users?.map((userValue) => {
        return (
          <Box>
            <div className="left"></div>
            <div className="right">
              <Name>{userValue.name}</Name>
              <Description>{userValue.description}</Description>
              <Email>{userValue.email}</Email>
            </div>
          </Box>
        );
      })}
    </Container>
  );
};

export default UserBoxComponent;
