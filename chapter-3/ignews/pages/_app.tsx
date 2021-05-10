import { AppProps } from "next/app";
import React from "react";
import { Header } from "../src/components/Header";
import { Provider as NextAuthProvider } from "next-auth/client";

import "../src/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
