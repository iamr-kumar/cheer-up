import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import Journ from "../../components/Profile/Journ";
import { parseCookies } from "nookies";
import axios from "axios";
import { baseUrl } from "../../utils/config";

const Journal = ({ user, journals }) => {
  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <Layout user={user}>
        <Journ user={user} list={journals} />
      </Layout>
    </>
  );
};

export default Journal;

export async function getServerSideProps(context) {
  const { token } = parseCookies(context);

  try {
    const res = await axios.get(`${baseUrl}/api/user/journal/all`, {
      headers: {
        "auth-token": token,
      },
    });
    console.log(res.data);
    return {
      props: {
        journals: res.data.journals,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: err.response.data,
      },
    };
  }
}
