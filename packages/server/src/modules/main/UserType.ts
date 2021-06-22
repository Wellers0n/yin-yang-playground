import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from "graphql";
import { globalIdField } from "graphql-relay";

export default new GraphQLObjectType({
  name: "Users",
  fields: () => ({
    id: globalIdField("Users"),
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  }),
});
