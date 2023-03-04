import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Container maxW="full" p="0">
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default Layout;
