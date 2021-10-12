import Layout from "../../components/Layout/Layout";
import User from "../../components/Profile/User";
import Head from "next/dist/next-server/lib/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Layout>
        <User />
      </Layout>
    </>
  );
};

export default Profile;
