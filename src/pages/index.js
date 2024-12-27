import Cart from "@/components/Cart";
import List from "@/components/List";
import MainLayout from "@/layouts/main";
import Head from "next/head";
import fetchDesserts from "../_data";
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
  return (
    <>
      <Head>
        <title>Deserts</title>
        <meta name="description" content="Desert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <MainLayout>
        <List data={desserts} setOrders={setOrders} />
        <Cart data={desserts} orders={orders} />
      </MainLayout>
    </>
  );
}
