import { Box, Button, Heading, Image, Divider, Text } from "@chakra-ui/react";
import React from "react";
import Heros from "../assets/img/hero.png";

export default function Hero() {
  return (
    <Box>
      <Box display={"flex"} flexDir={"column-reverse"} height={"100vh"}>
        <Box my={"auto"} mx={"auto"}>
          <Heading
            fontSize={{ base: "1.7rem", sm: "2rem", md: "2rem", lg: "4rem" }}
            textAlign={"center"}
          >
            We Have Everything <Divider w={"50%"} mx={"auto"} /> Your Car Need
          </Heading>
          <Text
            w={{ base: "90%", md: "90%", lg: "55%" }}
            mx={"auto"}
            textAlign={"center"}
            my={"20px"}
            fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, facilis eum consequatur accusantium qui, sint aperiam
            repellat at nihil dolores dolorum nemo illo laudantium praesentium,
            quasi veritatis magnam totam.
          </Text>
          <Button
            w={"50%"}
            h={"50px"}
            mx={"auto"}
            textAlign={"center"}
            display={"flex"}
          >
            Discover Now
          </Button>
        </Box>

        <Box
          my={"auto"}
          mx={"auto"}
          bgColor={"blackAlpha.400"}
          borderRadius={"30px"}
        >
          <Image
            boxSize={"100%"}
            w={{ base: "300px", md: "300px", lg: "400px" }}
            src={Heros}
            alt="Car"
          />
        </Box>
      </Box>
    </Box>
  );
}
