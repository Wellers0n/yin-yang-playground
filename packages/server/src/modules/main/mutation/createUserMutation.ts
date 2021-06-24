import User from "../../../models/User";
import { GraphQLString, GraphQLNonNull, GraphQLBoolean } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

export default mutationWithClientMutationId({
  name: "createUserMutation",
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, email, password, description }) => {
    const user = await User.findOne({ email });

    if (!user) {
      await User.create({ name, email, password, description });
      return {
        error: false,
        message: "User created successfully",
      };
    }

    return {
      error: true,
      message: "User exist",
    };
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message,
    },
    error: {
      type: GraphQLBoolean,
      resolve: ({ error }) => error,
    },
  },
});
