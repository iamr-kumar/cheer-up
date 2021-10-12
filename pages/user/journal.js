import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import Journ from "../../components/Profile/Journ";
const Journal = () => {
  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <Layout>
        <Journ />
      </Layout>
    </>
  );
};

export default Journal;
