import { gql } from "apollo-server-express";
import fs from "fs";

const dessertsData = JSON.parse(fs.readFileSync("./db/data.json", "utf-8"));

const typeDefs = gql`
  type Image {
    thumbnail: String
    mobile: String
    tablet: String
    desktop: String
  }

  type Dessert {
    image: Image
    name: String
    category: String
    price: Float
  }

  type Query {
    desserts: [Dessert]
    dessertByName(name: String!): Dessert
  }
`;

const resolvers = {
  Query: {
    desserts: () => dessertsData,
    dessertByName: (_, { name }) =>
      dessertsData.find((dessert) => dessert.name === name),
  },
};

export { typeDefs, resolvers };
