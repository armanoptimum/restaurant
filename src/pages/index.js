
import Cart from "@/components/Cart";
import List from "@/components/List";
import MainLayout from "@/layouts/main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Deserts</title>
        <meta name="description" content="Desert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MainLayout>
        <List />
        <Cart />
      </MainLayout>
    </>
  );
}
