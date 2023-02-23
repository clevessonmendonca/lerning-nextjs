import "@/styles/globals.css";

import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout className={roboto.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
