import React, { useState } from "react";
import { RouteComponentProps, useHistory } from "react-router";
import { Container, Wrapper, Title, Box, Button } from "./styles";
import { graphql, commitMutation, useLazyLoadQuery } from "react-relay";
import Environment from "../../relay/Environment";
import { EditQuery } from "./__generated__/EditQuery.graphql";
import { EditMutationResponse } from "./__generated__/EditMutation.graphql";

// components
import Input from "../../components/Input";

const Edit = (props: RouteComponentProps) => {
  const { id } = props.location.state;

  const data = useLazyLoadQuery<EditQuery>(
    graphql`
      query EditQuery($id: String) {
        user(id: $id) {
          id
          name
          description
          email
        }
      }
    `,
    { id },
    { fetchPolicy: "network-only" }
  );

  const history = useHistory();

  const { user } = data;

  const [email, setEmail] = useState(user?.email || "");
  const [name, setName] = useState(user?.name || "");
  const [description, setDescription] = useState(user?.description || "");

  const mutation = graphql`
    mutation EditMutation($input: UserUpdateInput!) {
      UserUpdateMutation(input: $input) {
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
      .getRootField("UserUpdateMutation")
      .getLinkedRecords("users");

    root.setLinkedRecords(newUsers, "users");
  }

  const submit = () => {
    commitMutation(Environment, {
      mutation,
      variables: { input: { id, email, description, name } },
      updater,
      onCompleted: (response: EditMutationResponse, errors: any) => {
        if (errors) return console.log(errors);
        history.push("/home");
      },
      onError: (err) => console.error(err),
    });
  };

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
