import { buildSchema } from "graphql";

export const dummySchema = buildSchema(`
  type Query{
    hello: String
}`);