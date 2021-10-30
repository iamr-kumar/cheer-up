import Layout from "../../components/Layout/Layout";
import Head from "next/dist/next-server/lib/head";
import PatientList from "./patient-list";
const TherapistProfile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <PatientList/>
    </>
  );
};

export default TherapistProfile;
