import { GraphQLObjectType, GraphQLString } from "graphql";
// types
import UserType, { UserConnection } from "../modules/main/UserType";
import { connectionArgs, connectionFromArray } from "graphql-relay";

// models
import userModel from "../models/User";

export default new GraphQLObjectType({
  name: "QueryType",
  description: "Get users[], user and me",
  fields: () => ({
    me: {
      type: UserType,
      resolve: (parentValue, args, ctx) => {
        return ctx.user ? ctx.loaders.userLoader.load(ctx.user._id) : null;
      },
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (parentValue, args, ctx) => {
        return ctx.loaders.userLoader.load(args.id);
      },
    },
    users: {
      type: UserConnection.connectionType,
      args: {
        ...connectionArgs,
      },
      resolve: async (parentValue, args, ctx) => {
        const users = await userModel.find({ email: { $ne: ctx.user.email } });
        const ids = users.map((user: any) => user._id);
        const batchUsers = await ctx.loaders.userLoader.loadMany(ids);
        return connectionFromArray(batchUsers, args);
      },
    },
  }),
});
