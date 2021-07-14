import User from "../../../models/User";
import bcrypt from 'bcryptjs';
import { GraphQLString, GraphQLNonNull, GraphQLBoolean } from "graphql";
import { mutationWithClientMutationId, offsetToCursor } from "graphql-relay";
import { generateToken } from "../../../auth";
import { UserConnection } from '../UserType';

export default mutationWithClientMutationId({
  name: "userRegister",
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

    if (user) {
      return {
        message: "User exist",
        error: false,
      };
    }

    const userCreated = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 8),
      description,
    });

    return {
      user: userCreated,
      token: generateToken(userCreated),
      message: "User created successfully",
      error: false,
    };
  },
  outputFields: {
    userEdge: {
      type: UserConnection.edgeType,
      resolve: ({ user }) => ({
        cursor: offsetToCursor(user.id),
        node: user,
      }),
    },
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message,
    },
    error: {
      type: GraphQLBoolean,
      resolve: ({ error }) => error,
    },
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    }
});
