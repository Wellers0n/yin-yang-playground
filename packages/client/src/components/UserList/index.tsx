import * as React from "react";
import { Container, Box, Name, Description, Email } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { graphql, useFragment } from "react-relay";

import { UserList_query$key } from "./__generated__/UserList_query.graphql";

type Props = {
  query: UserList_query$key;
};

const UserList = (props: Props) => {
  const data = useFragment(
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

  return (
    <Container>
      {users?.map((value, index) => {
        return (
          <Box key={index}>
            <div className="left">
              <FontAwesomeIcon
                onClick={() => history.push(`/edit/${value?._id}`)}
                icon={faEdit}
              />
              <FontAwesomeIcon icon={faTrash} />
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
