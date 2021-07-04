import * as React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Container, Title } from "./styles";

const UserList = React.lazy(() => import("../../components/UserList"));

import { HomeQuery } from "./__generated__/HomeQuery.graphql";

const Home = (props: any) => {
  const data = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        ...UserList_query
        me {
          id
          name
        }
      }
    `,
    { },
    { fetchPolicy: "network-only" }
  );

  const { me } = data;

  return (
    <Container>
      <Title>
        Seja bem vindo <p>{me?.name}</p>
      </Title>
      <div>
        <UserList query={data} />
      </div>
    </Container>
  );
};

export default Home;
