import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { OrganizationConnection } from "./OrganizationType";
import Organization from "../../models/Organization";
import { connectionArgs, connectionFromArray } from "graphql-relay";

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
    organizations: {
      type: OrganizationConnection.connectionType,
      args: {
        ...connectionArgs,
      },
      resolve: async (user, args) => {
        const data = await Organization.find({
          _id: { $in: user.organizationIds },
        });
        return connectionFromArray(data, args);
      },
    },
  }),
});

export default UserType;

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType,
});
