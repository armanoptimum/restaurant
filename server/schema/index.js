import { gql } from "apollo-server-express";
import { readDessertsData, storeOrder } from "../utils/index.js";

const typeDefs = gql`
  type Image {
    thumbnail: String
    mobile: String
    tablet: String
    desktop: String
  }

  type Dessert {
    id: Int
    image: Image
    name: String
    category: String
    price: Float
  }

  type DessertOrderOutput {
    id: Int!
    count: Int!
    price: Float!
  }

  input DessertOrderInput {
    id: Int!
    count: Int!
    price: Float!
  }

  input OrderInput {
    desserts: [DessertOrderInput!]!
  }

  type OrderOutput {
    id: Int!
    desserts: [DessertOrderOutput!]!
  }

  type Query {
    desserts: [Dessert]
  }

  type Mutation {
    addOrder(input: OrderInput!): OrderOutput
  }
`;

const resolvers = {
  Query: {
    desserts: () => readDessertsData(),
  },

  Mutation: {
    addOrder: (_, { input }) => {
      const order = storeOrder(input);
      return order;
    },
  },
};

export { typeDefs, resolvers };
