import { gql } from 'graphql-tag';
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from '@apollo/server';


const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);

