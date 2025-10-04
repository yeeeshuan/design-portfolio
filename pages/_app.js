// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
