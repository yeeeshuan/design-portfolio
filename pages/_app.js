// pages/_app.js
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My App</title>
         {/* Google Analytics */}
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NZ9DNR5Z2J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KSFGGJQCND', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
