import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      Ping: String
    }
  `,
  resolvers: {
    Query: {
      Ping: () => {
        return '/Pong';
      },
    },
  },
});

server.listen(3030).then(({ url }) => {
  console.log(`🔥 Server listening on url ${url}`);
});
