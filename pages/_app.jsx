'use client'

import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}
