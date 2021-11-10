import React from "react";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import RequestCard from "../../components/Therapist/RequestCard";
import { parseCookies } from "nookies";
import axios from "axios";
import { baseUrl } from "../../utils/config";

const Requests = ({ user, pending }) => {
  return (
    <>
      <Layout user={user}>
        <Container>
          <Typography variant="h4">Pending Client Requests</Typography>
          {pending.length > 0 ? (
            pending.map((request, index) => (
              <RequestCard key={request._id} request={request} index={index} />
            ))
          ) : (
            <Typography variant="h5">No Pending Requests</Typography>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Requests;

export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
  try {
    const res = await axios.get(`${baseUrl}/api/therapist/request/pending`, {
      headers: { "auth-token": token },
    });

    return {
      props: {
        pending: res.data.pendingRequests,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: JSON.stringify(err),
      },
    };
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
