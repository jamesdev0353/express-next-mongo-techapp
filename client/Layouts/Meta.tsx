import React from "react";
import Head from "next/head";



function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,
            initial-scale=1"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta httpEquiv="content-type" content="text/html" charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "KRebDev Newz",
  keywords: "web development, programming, coding, front end engineering",
  description: "Be informed",
};

export default Meta;
