import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} from "graphql";
// types
import UserType from "../modules/main/UserType";

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
      type: new GraphQLList(UserType),
      args: {
        skip: {
          type: GraphQLInt,
        },
        limit: {
          type: GraphQLInt,
        },
      },
      resolve: (parentValue, args, ctx) => {
        const limit = args.limit;
        const skip = Math.max(0, args.skip);
        return ctx.user
          ? userModel
              .find({ email: { $ne: ctx.user.email } })
              .limit(limit)
              .skip(skip)
          : null;
      },
    },
  }),
});
