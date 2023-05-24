import {
  Box,
  Button,
  Center,
  Heading,
  Image,

  LinkBox,
  Text,
} from "@chakra-ui/react";
import React from "react";
import blog1 from "../assets/img/car3.jpg";
import blog2 from "../assets/img/car4.jpg";
import blog3 from "../assets/img/car6.jpg";

export default function Blog() {
  return (
    <Box my={"10%"}>
      <Box>
        <Box textAlign={"center"}>
          <Text size={"xs"} color={"red.500"}>
            Blog News
          </Text>
          <Heading
            fontSize={{ base: "1.7rem", sm: "2rem", md: "2rem", lg: "4rem" }}
          >
            Our Blog Content
          </Heading>
          <Text
            w={"90%"}
            mx={"auto"}
            textAlign={"center"}
            my={"20px"}
            fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, facilis eum consequatur accusantium qui
          </Text>
        </Box>

        <Box my={"50px"} m={4}>
          <Box
            display={{ base: "block", md: "block", lg: "flex" }}
            justifyContent={"space-evenly"}
          >
            <Box my={5}>
              <Center>
                <Box p="5" maxW="320px" borderWidth="1px">
                  <Image borderRadius="md" src={blog1} />
                  <Text mt={2} color={"red.500"}>
                    Feb 14 2021
                  </Text>

                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    How To Get Perfect Car At Low Price
                  </Text>

                  <Box mt={2} align="start">
                    <LinkBox>
                      <Button>Read More</Button>
                    </LinkBox>
                  </Box>
                </Box>
              </Center>
            </Box>
            <Box my={5}>
              <Center>
                <Box p="5" maxW="320px" borderWidth="1px">
                  <Image borderRadius="md" src={blog2} />
                  <Text mt={2} color={"red.500"}>
                    Feb 14 2021
                  </Text>

                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    How To Get Perfect Car At Low Price
                  </Text>

                  <Box mt={2} align="start">
                    <LinkBox>
                      <Button>Read More</Button>
                    </LinkBox>
                  </Box>
                </Box>
              </Center>
            </Box>
            <Box my={5}>
              <Center>
                <Box p="5" maxW="320px" borderWidth="1px">
                  <Image borderRadius="md" src={blog3} />
                  <Text mt={2} color={"red.500"}>
                    Feb 14 2021
                  </Text>

                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    How To Get Perfect Car At Low Price
                  </Text>
                  <Box mt={2} align="start">
                    <LinkBox>
                      <Button>Read More</Button>
                    </LinkBox>
                  </Box>
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
