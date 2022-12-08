import Head from "next/head";
import "../styles/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component>{pageProps}</Component>
    </>
  );
};

export default MyApp;
