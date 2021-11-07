import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import Journ from "../../components/Profile/Journ";
const Journal = ({ user }) => {
  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <Layout user={user}>
        <Journ user={user} />
      </Layout>
    </>
  );
};

export default Journal;
