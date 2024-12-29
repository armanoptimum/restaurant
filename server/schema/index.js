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

  type Order {
    id: Int
    dessertId: Int
    count: Int
    price: Float
  }

  input OrderInput {
    dessertId: Int!
    count: Int!
    price: Float!
  }

  type Query {
    desserts: [Dessert]
  }

  type Mutation {
    addOrder(input: OrderInput!): Order
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
