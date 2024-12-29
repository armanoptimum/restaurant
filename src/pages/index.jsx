import Cart from "@/components/Cart";
import List from "@/components/List";
import MainLayout from "@/layouts/main";
import Head from "next/head";
import { fetchDesserts, addOrder } from "@/_data";
import { useState } from "react";

export async function getServerSideProps() {
  const data = await fetchDesserts();
  return {
    props: {
      desserts: data.desserts,
    },
  };
}

export default function Home({ desserts }) {
  const [orders, setOrders] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]); // will be  ->[{ id, count }]

  return (
    <>
      <Head>
        <title>Desserts</title>
        <meta name="description" content="Desert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <MainLayout>
        <List
          data={desserts}
          setOrders={setOrders}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <Cart
          data={desserts}
          orders={orders}
          setOrders={setOrders}
          setSelectedItems={setSelectedItems}
          addOrder={addOrder}
        />
      </MainLayout>
    </>
  );
}
