import Layout from "../../components/Layout/Layout";
import Head from "next/dist/next-server/lib/head";
import PatientList from "../../components/Therapist/PatientList";
import { parseCookies } from "nookies";
import axios from "axios";
import { baseUrl } from "../../utils/config";

const TherapistProfile = ({ user, therapist, clients }) => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Layout user={user}>
        <PatientList clients={clients} />
      </Layout>
    </>
  );
};

export default TherapistProfile;

export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
  try {
    const res = await axios.get(`${baseUrl}/api/therapist/clients`, {
      headers: {
        "auth-token": token,
      },
    });

    return {
      props: {
        clients: res.data.therapist.client,
        therapist: res.data.therapist,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: err,
      },
    };
  }
}
