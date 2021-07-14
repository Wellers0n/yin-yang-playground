import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} from "graphql";
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
        return ctx.user ? userModel.findOne({ _id: ctx.user._id }) : null;
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
        return ctx.user ? userModel.findOne({ _id: args.id }) : null;
      },
    },
    users: {
      type: UserConnection.connectionType,
      args: {
        ...connectionArgs,
      },
      resolve: async (parentValue, args, ctx) => {
        const data = await userModel.find();
        return connectionFromArray(data, args);
      },
    },
  }),
});
