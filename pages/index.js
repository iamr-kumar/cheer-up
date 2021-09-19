import Head from "next/head";
import Homepage from "./../components/Layout/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>HowYouDoin'?</title>
      </Head>
      <Homepage />
    </>
  );
}
