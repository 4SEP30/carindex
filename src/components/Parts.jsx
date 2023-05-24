import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import part1 from "../assets/img/part1.png";
import part2 from "../assets/img/part2.png";
import part3 from "../assets/img/part3.png";
import part4 from "../assets/img/part4.png";
import part5 from "../assets/img/part5.png";
import part6 from "../assets/img/part6.png";
import { MdStar } from "react-icons/md";

export default function Parts() {
  return (
    <Box my={"10%"}>
      <Box>
        <Box textAlign={"center"}>
          <Text size={"xs"} color={"red.500"}>
            All Cars
          </Text>
          <Heading
            fontSize={{ base: "1.7rem", sm: "2rem", md: "2rem", lg: "4rem" }}
          >
            We have all types cars
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
                  <Image borderRadius="md" src={part1} />

                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    Modern, Chic Penthouse with Mountain, City & Sea Views
                  </Text>
                  <Text mt={2}>$119/night</Text>
                  <Flex mt={2} align="center">
                    <Box as={MdStar} color="orange.400" />
                    <Text ml={1} fontSize="sm">
                      <b>4.84</b> (190)
                    </Text>
                  </Flex>
                </Box>
              </Center>
            </Box>
            <Box my={5}>
              <Center>
                <Box p="5" maxW="320px" borderWidth="1px">
                  <Image borderRadius="md" src={part2} />

                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    Modern, Chic Penthouse with Mountain, City & Sea Views
                  </Text>
                  <Text mt={2}>$119/night</Text>
                  <Flex mt={2} align="center">
                    <Box as={MdStar} color="orange.400" />
                    <Text ml={1} fontSize="sm">
                      <b>4.84</b> (190)
                    </Text>
                  </Flex>
                </Box>
              </Center>
            </Box>
            <Box my={5}>
              <Center>
                <Box p="5" maxW="320px" borderWidth="1px">
                  <Image borderRadius="md" src={part3} />

                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    Modern, Chic Penthouse with Mountain, City & Sea Views
                  </Text>
                  <Text mt={2}>$119/night</Text>
                  <Flex mt={2} align="center">
                    <Box as={MdStar} color="orange.400" />
                    <Text ml={1} fontSize="sm">
                      <b>4.84</b> (190)
                    </Text>
                  </Flex>
                </Box>
              </Center>
            </Box>
          </Box>
          <Box
            display={{ base: "block", md: "block", lg: "flex" }}
            justifyContent={"space-evenly"}
            my={10}
          >
            <Box my={5}>
              <Center>
                <Box p="5" maxW="320px" borderWidth="1px">
                  <Image borderRadius="md" src={part4} />

                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    Modern, Chic Penthouse with Mountain, City & Sea Views
                  </Text>
                  <Text mt={2}>$119/night</Text>
                  <Flex mt={2} align="center">
                    <Box as={MdStar} color="orange.400" />
                    <Text ml={1} fontSize="sm">
                      <b>4.84</b> (190)
                    </Text>
                  </Flex>
                </Box>
              </Center>
            </Box>
            <Box my={5}>
              <Center>
                <Box p="5" maxW="320px" borderWidth="1px">
                  <Image borderRadius="md" src={part5} />

                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    Nissan GT-R R35, Twin-Turbo Maksimum 632 Nm
                  </Text>
                  <Text mt={2}>$119/night</Text>
                  <Flex mt={2} align="center">
                    <Box as={MdStar} color="orange.400" />
                    <Text ml={1} fontSize="sm">
                      <b>4.84</b> (190)
                    </Text>
                  </Flex>
                </Box>
              </Center>
            </Box>
            <Box my={5}>
              <Center>
                <Box p="5" maxW="320px" borderWidth="1px">
                  <Image borderRadius="md" src={part6} />

                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    Modern, Chic Penthouse with Mountain, City & Sea Views
                  </Text>
                  <Text mt={2}>$119/night</Text>
                  <Flex mt={2} align="center">
                    <Box as={MdStar} color="orange.400" />
                    <Text ml={1} fontSize="sm">
                      <b>4.84</b> (190)
                    </Text>
                  </Flex>
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
