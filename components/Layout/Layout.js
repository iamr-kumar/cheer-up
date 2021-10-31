import { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDrawerClose = () => {
    setSidebarOpen(false);
  };

  const handleDrawerOpen = () => {
    setSidebarOpen(true);
  };

  return (
    <Container>
      <Navbar open={sidebarOpen} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar
        open={sidebarOpen}
        handleDrawerClose={handleDrawerClose}
        user={user}
      />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 5rem 2rem;
`;
