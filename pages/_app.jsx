'use client'

import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout className={inter.className}>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
