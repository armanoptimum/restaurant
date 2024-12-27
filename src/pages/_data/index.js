import { gql } from "@apollo/client";
import client from "@/lib/appoloClient";

export const fetchDesserts = async () => {
  const { data } = await client.query({
    query: gql`
      {
        desserts {
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
};
