import Layout from "../../components/Layout/Layout";
import User from "../../components/Profile/User";
import Head from "next/dist/next-server/lib/head";

const Profile = ({ user }) => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Layout user={user}>
        <User />
      </Layout>
    </>
  );
};

export default Profile;
