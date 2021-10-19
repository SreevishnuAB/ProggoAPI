import { graphqlHTTP } from "express-graphql";

import { dummySchema } from "./schema/dummy";
import { dummyResolver } from "./resolver/dummy";

export const graphqlConfig = graphqlHTTP({
  schema: dummySchema,
  rootValue: dummyResolver,
  graphiql: process.env.ENABLE_IGQL === "true"? true: false
});