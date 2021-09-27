import Layout from "../../components/Layout/Layout";
import User from "../../components/Profile/User";
import { parseCookies } from "nookies";
import axios from "axios";
import { baseUrl } from "../../utils/config";

const Profile = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <>
      <Layout>
        <User />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx);
  console.log(token);
  let currentUser;
  try {
    const res = await axios.get(`${baseUrl}/api/auth`, {
      headers: { "auth-token": token },
    });
    currentUser = res.data.user;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      currentUser,
    },
  };
}

export default Profile;
