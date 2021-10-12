import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import UserDetails from "../../components/Profile/UserDetails";

const Therapist = () => {
  return (
    <>
      <Head>
        <title>Therapist</title>
      </Head>
      <Layout>
        <UserDetails />
      </Layout>
    </>
  );
};

export default Therapist;
