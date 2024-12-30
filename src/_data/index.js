import client from "@/lib/appoloClient";
import { gql } from "@apollo/client";

export const fetchDesserts = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        {
          desserts {
            id
            name
            category
            price
            image {
              thumbnail
              mobile
              tablet
              desktop
            }
          }
        }
      `,
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const addOrder = async (input) => {
  const ADD_ORDER_MUTATION = gql`
    mutation AddOrder($input: OrderInput!) {
      addOrder(input: $input) {
        id
        desserts {
          id
          count
          price
        }
      }
    }
  `;
  try {
    const { data } = await client.mutate({
      mutation: ADD_ORDER_MUTATION,
      variables: { input },
    });
    console.log("Order added successfully:", data.addOrder);
    return data.addOrder;
  } catch (error) {
    console.error("Error adding order:", error);
  }
};
