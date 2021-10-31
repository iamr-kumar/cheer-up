import Layout from "../../components/Layout/Layout";
import Head from "next/dist/next-server/lib/head";
import PatientList from "../../components/Therapist/PatientList";

const TherapistProfile = ({ user }) => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Layout user={user}>
        <PatientList />
      </Layout>
    </>
  );
};

export default TherapistProfile;
