import { GraphQLSchema } from "graphql";
import QueryType from "../src/type/QueryType";
// import MutationType from "./type/MutationType";

const schema = new GraphQLSchema({
  query: QueryType,
  // mutation: MutationType,
});

export default schema;
