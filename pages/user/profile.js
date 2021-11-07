import Layout from "../../components/Layout/Layout";
import User from "../../components/Profile/User";
import Head from "next/dist/next-server/lib/head";
import { parseCookies } from "nookies";
import axios from "axios";
import { baseUrl } from "../../utils/config";

const Profile = ({ user, pastActivities }) => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Layout user={user}>
        <User history={pastActivities} user={user} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
  try {
    const res = await axios.get(`${baseUrl}/api/user/activities`, {
      headers: {
        "auth-token": token,
      },
    });
    return {
      props: {
        pastActivities: res.data.activityHistory,
      },
    };
  } catch (err) {
    return {
      props: {
        err: JSON.stringify(err),
      },
    };
  }
}
export default Profile;
