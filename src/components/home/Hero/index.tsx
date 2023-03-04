import React from "react";
import {
  Grid,
  GridItem,
  Heading,
  Box,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";
import placeholderImage from "../../../assets/placeholder.jpg";
// import style_hero from "./index.module.scss";

const Hero = () => {
  return (
    <Container py="5" maxW="full" centerContent>
      <Grid templateColumns="1fr 1fr" w="80%" gap="5">
        <GridItem display="grid" alignContent="center" gap="5">
          <Heading as="h3" size="2xl" fontWeight="800">
            Read Qur'an Everyday. Add On Your Daily Routine.
          </Heading>
          <Text maxW="450px">
            Maximize your knowledge by reciting Qur'an, while learning Hadith
            and Tafsir as well.
          </Text>
          <Box>
            <Button colorScheme="teal" size="md" display="block">
              Start Reciting
            </Button>
          </Box>
        </GridItem>
        <GridItem>
          <img src={placeholderImage} alt="placeholder" />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Hero;
