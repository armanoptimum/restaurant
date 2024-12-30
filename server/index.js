import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

async function boot() {
  const app = express();
  const appoloServer = new ApolloServer({ typeDefs, resolvers });
  await appoloServer.start();
  appoloServer.applyMiddleware({ app });

  const PORT = process.env.SERVER_PORT;
  app.listen(PORT, () => {
    console.log(
      `Appolo Server running at http://localhost:${PORT}${appoloServer.graphqlPath}`,
    );
  });
}
boot();
