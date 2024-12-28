import client from "@/lib/appoloClient";
import { gql } from "@apollo/client";

const fetchDesserts = async () => {
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
};

export default fetchDesserts;
