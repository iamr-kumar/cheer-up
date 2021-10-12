import Head from "next/head";
import Homepage from "./../components/Layout/Homepage";
import { parseCookies, destroyCookie } from "nookies";

export default function Home() {
  return (
    <>
      <Head>
        <title>CheerUp</title>
      </Head>
      <Homepage />
    </>
  );
}
