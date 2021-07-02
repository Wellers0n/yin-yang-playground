import * as React from "react";
import { graphql, QueryRenderer } from "react-relay";
import { Container, Title } from "./styles";
import environment from "../../relay/Environment";
import { HomeQueryResponse } from "./__generated__/HomeQuery.graphql";
import UsersBox from "../../components/UsersBox";

const Component = (props: HomeQueryResponse) => {
  const { user, users } = props;

  const usersFiltered = users?.filter((userValue) =>  userValue?.email !== user?.email)
  console.log(props);
  return (
    <Container>
      <Title>
        Seja bem vindo <p>{user?.name}</p>
      </Title>
      <div>
        <UsersBox users={usersFiltered} />
      </div>
    </Container>
  );
};

const Home = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query HomeQuery {
          user {
            name
            email
          }
          users {
            name
            description
            email
          }
        }
      `}
      variables={{}}
      render={({ props, error }) => {
        if (!props) {
          return <div>Loading...</div>;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default Home;
