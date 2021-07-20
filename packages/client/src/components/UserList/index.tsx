import * as React from "react";
import { Container, Box, Name, Description, Email, List, Button } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { graphql, usePaginationFragment, commitMutation } from "react-relay";
import Environment from "../../relay/Environment";
import { UserListQuery } from "./__generated__/UserListQuery.graphql";
import { UserList_query } from "./__generated__/UserList_query.graphql";
import { UserListMutationResponse } from "./__generated__/UserListMutation.graphql";

type Props = {
  query: UserList_query;
};

const UserList = (props: Props) => {
  const {
    data,
    loadNext,
    loadPrevious,
    hasNext,
    hasPrevious,
    isLoadingNext,
    isLoadingPrevious,
    refetch, // For refetching connection
  } = usePaginationFragment<UserListQuery, any>(
    graphql`
      fragment UserList_query on QueryType
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
      )
      @refetchable(queryName: "UserListQuery") {
        users(first: $count, after: $cursor)
          @connection(key: "UserList_users", filters: []) {
          edges {
            node {
              _id
              id
              name
              description
              email
            }
          }
        }
      }
    `,
    props.query
  );

  let history = useHistory();

  const { users } = data;

  const mutation = graphql`
    mutation UserListMutation($input: UserDeleteInput!) {
      UserDeleteMutation(input: $input) {
        users {
          _id
          name
          description
          email
        }
        message
      }
    }
  `;

  function updater(store: any) {
    const root = store.getRoot();

    const newUsers = store
      .getRootField("UserDeleteMutation")
      .getLinkedRecords("users");

    root.setLinkedRecords(newUsers, "users");
  }

  const deleteSubmit = (id: string | null | undefined) => {
    commitMutation(Environment, {
      mutation,
      variables: { input: { id } },
      updater,
      onCompleted: (response: UserListMutationResponse, errors: any) => {
        if (errors) return console.log(errors);
      },
      onError: (err) => console.error(err),
    });
  };

  return (
    <Container>
      <List>
        {users?.edges?.map((value, index) => {
          return (
            <Box key={index}>
              <div className="left">
                <FontAwesomeIcon
                  onClick={() =>
                    history.push(`/edit/${value?.node?._id}`, {
                      id: value?.node?._id,
                    })
                  }
                  icon={faEdit}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteSubmit(value?.node?._id)}
                />
              </div>
              <div className="right">
                <Name>{value?.node?.name}</Name>
                <Description>{value?.node?.description}</Description>
                <Email>{value?.node?.email}</Email>
              </div>
            </Box>
          );
        })}
      </List>
      <Button onClick={() => loadNext(10)}>Load more users</Button>
    </Container>
  );
};

export default UserList;
