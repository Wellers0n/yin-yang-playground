import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
} from "graphql";
// types
import UserType from "../modules/main/UserType";

// models
import userModel from "../models/User";

export default new GraphQLObjectType({
  name: "QueryType",
  description: "Get planets[] and planet",
  fields: () => ({
    user: {
      type: UserType,
      resolve: (parentValue, args, ctx) => {
        return ctx.user ? userModel.findOne({ _id: ctx.user._id }) : null;
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
        // const idUser = ctx.user.id;
        const limit = args.limit;
        const skip = Math.max(0, args.skip);
        return userModel.find({}).limit(limit).skip(skip);
      },
    },
  }),
});
