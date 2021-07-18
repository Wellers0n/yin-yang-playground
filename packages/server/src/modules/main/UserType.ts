import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import OrganizationType from "./OrganizationType";
import Organization from "../../models/Organization";

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
    organization: {
      type: GraphQLList(OrganizationType),
      resolve: async (user, args) => {
        return Organization.find({ _id: { $in: user.organizationIds } });
      },
    },
  }),
});

export default UserType;

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType,
});
