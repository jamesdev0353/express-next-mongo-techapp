import { AppProps } from "next/app";
import React from "react";
import Layout from "../client/Layouts/Layout";
import "./styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AuthWrapperContext from "../client/components/Contexts";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <AuthWrapperContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthWrapperContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default MyApp;