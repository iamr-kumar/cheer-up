import Link from "next/link";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import Head from "next/dist/next-server/lib/head";
const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 not found!</title>
      </Head>
      <ErrContainer className="not-found">
        <BigText>404</BigText>
        <h1>Oops! This page cannot be found</h1>
        <h3>
          ..maybe the page you're looking for is not found or never existed.{" "}
        </h3>
        <Link href="/">
          <BackButton color="primary" variant="contained">
            Go back to homepage
          </BackButton>
        </Link>
      </ErrContainer>
    </>
  );
};

export default NotFound;

const ErrContainer = styled.div`
  text-align: center;
  margin-top: 14rem;
  line-height: 50px;
`;

const BigText = styled.h1`
  font-size: 7rem;
  color: rgb(182, 183, 193);
  line-height: 150px;
`;

const BackButton = styled(Button)`
  &&& {
    background: rgb(0, 125, 254);
  }
`;
