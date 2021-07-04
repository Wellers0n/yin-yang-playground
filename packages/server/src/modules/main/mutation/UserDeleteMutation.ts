import User from "../../../models/User";
import { GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import UserType from "../UserType";

export default mutationWithClientMutationId({
  name: "UserDelete",
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ id }, ctx) => {
    await User.deleteOne({ _id: id });
    const users = await User.find({ email: { $ne: ctx.user.email } });

    return {
      message: "User deleted with successfully",
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
