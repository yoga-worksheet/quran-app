import React from "react";
import { PAGES } from "../../constants/pages";
import { Link } from "react-router-dom";
import { Container, Heading } from "@chakra-ui/react";
import "./style.scss";

const Navbar = () => {
  return (
    <Container maxW={"full"} className="navbar">
      <Heading as="h1">The Qur'an</Heading>
      <div className="navbar-wrapper">
        {PAGES.map((page) => (
          <Link to={page.link} className="navlink">
            {page.title}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Navbar;
