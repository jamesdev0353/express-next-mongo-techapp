import App from "next/app";
import React from "react";
import "./styles/globals.css";
import Layout from "../client/Layouts/Layout";
function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
