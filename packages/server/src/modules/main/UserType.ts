import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} from "graphql";
import { connectionDefinitions, globalIdField} from "graphql-relay";

const UserType = new GraphQLObjectType({
  name: "User",
  description: "User data",
  fields: () => ({
    id: globalIdField("User"),
    _id: {
      type: GraphQLID,
      resolve: (user) => user._id,
    },
    name: {
      type: GraphQLString,
      resolve: (user) => user.name,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
    },
    password: {
      type: GraphQLString,
      resolve: (user) => user.password,
    },
    description: {
      type: GraphQLString,
      resolve: (user) => user.description,
    },
  }),
});

export default UserType;

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: GraphQLNonNull(UserType),
});
