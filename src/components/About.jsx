import { Box, Button, Divider, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import car from "../assets/img/about.png";

export default function About() {
  return (
    <Box>
      <Box display={{ base: "block", md: "block", lg: "flex" }} mx={"auto"}>
        <Box boxSize={"50%"} mx={"auto"}>
          <Img src={car} alt="about-car" />
        </Box>
        <Box mx={10}>
          <Text color={"red.500"}>About Us</Text>
          <Heading fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}>
            Cheap Prices <Divider w={"40%"} /> With Quality Cars
          </Heading>
          <Text
            w={{ base: "100%", md: "100%", lg: "600px" }}
            fontSize={{ base: "0.9rem", md: "1rem", lg: "1rem" }}
            my={5}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, facilis eum consequatur accusantium qui, sint aperiam
          </Text>
          <Button>Learn More</Button>
        </Box>
      </Box>
    </Box>
  );
}
