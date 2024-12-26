import Button from "@/components/Button";
import { BUTTON_STYLES } from "@/components/Button/constants";
import Desert from "@/components/Desert";
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
        <Desert />
      </MainLayout>
    </>
  );
}
