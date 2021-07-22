import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";

const OrganizationType = new GraphQLObjectType({
  name: "Organization",
  description: "Organization data",
  fields: () => ({
    id: globalIdField("Organization"),
    _id: {
      type: GraphQLID,
      resolve: (organization) => organization._id,
    },
    name: {
      type: GraphQLString,
      resolve: (organization) => organization.name,
    },
    email: {
      type: GraphQLString,
      resolve: (organization) => organization.email,
    },
    description: {
      type: GraphQLString,
      resolve: (organization) => organization.description,
    },
  }),
});

export default OrganizationType;

export const OrganizationConnection = connectionDefinitions({
  name: "Organization",
  nodeType: OrganizationType,
});
