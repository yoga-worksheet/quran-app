import React from "react";
import { PAGES } from "../../constants/pages";
import { Link } from "react-router-dom";
import { Container, Flex, Heading } from "@chakra-ui/react";
// import style_navbar from "./style.module.scss";

const Navbar = () => {
  return (
    <Container maxW="full" py="5" centerContent>
      <Flex w="90%" justify="space-between" align="center">
        <Heading as="h1" size="md">
          <Link to="/">Quran App</Link>
        </Heading>
        <Flex gap="1rem">
          {PAGES.map((page) => (
            <Link to={page.link} className="navlink" key={page.id}>
              {page.title}
            </Link>
          ))}
        </Flex>
        <Flex gap="1rem">
          <Link to="#">Search</Link>
          <Link to="#">Sign in</Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
