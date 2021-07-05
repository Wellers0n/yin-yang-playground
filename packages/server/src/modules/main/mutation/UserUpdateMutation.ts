import User from "../../../models/User";
import { GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import UserType from "../UserType";

export default mutationWithClientMutationId({
  name: "UserUpdate",
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ id, name, email, description }, ctx) => {
    await User.updateOne({ _id: id }, { name, description, email });
    const users = await User.find({ email: { $ne: ctx.user.email } });

    return {
      message: "User update with successfully",
      users,
    };
  },
  outputFields: {
    users: {
      type: GraphQLList(UserType),
      resolve: ({ users }) => users,
    },
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message,
    },
  },
});
