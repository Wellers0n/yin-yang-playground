import * as React from "react";
import { Container, Box, Name, Description, Email } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { graphql, useFragment, commitMutation } from "react-relay";
import Environment from "../../relay/Environment";
import { UserList_query$key } from "./__generated__/UserList_query.graphql";
import { UserListQueryResponse } from "./__generated__/UserListQuery.graphql";

type Props = {
  query: UserList_query$key;
};

const UserList = (props: Props) => {
  const data = useFragment<UserList_query$key>(
    graphql`
      fragment UserList_query on QueryType {
        users {
          _id
          name
          email
          description
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
      onCompleted: (response: UserListQueryResponse, errors: any) => {
        if (errors) return console.log(errors);
      },
      onError: (err) => console.error(err),
    });
  };

  return (
    <Container>
      {users?.map((value, index) => {
        return (
          <Box key={index}>
            <div className="left">
              <FontAwesomeIcon
                onClick={() =>
                  history.push(`/edit/${value?._id}`, { id: value?._id })
                }
                icon={faEdit}
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => deleteSubmit(value?._id)}
              />
            </div>
            <div className="right">
              <Name>{value?.name}</Name>
              <Description>{value?.description}</Description>
              <Email>{value?.email}</Email>
            </div>
          </Box>
        );
      })}
    </Container>
  );
};

export default UserList;
