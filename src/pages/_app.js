import "@/styles/globals.css";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { AppContext } from "@/context/app-context";
import { useState } from "preact/hooks";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Genetic Pottery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="h-100 ph4 w-100 flex flex-column items-center justify-center">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
