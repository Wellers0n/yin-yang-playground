import User from "../../../models/User";
import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import bcrypt from "bcryptjs";
import { generateToken } from "../../../auth";

export default mutationWithClientMutationId({
  name: "UserLogin",
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email, password }) => {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return {
        message: "Invalid credentials",
      };
    }

    const correctPassword = bcrypt.compareSync(password, user.password);

    if (!correctPassword) {
      return {
        message: "Invalid credentials",
      };
    }

    return {
      message: 'Login with successfully',
      token: generateToken(user),
    };
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message,
    },
  },
});
