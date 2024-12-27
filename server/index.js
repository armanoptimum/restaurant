import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema/index.js";

async function boot() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(
      `🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`,
    );
  });
}

boot();
