import {
  Box,
  Center,
  Image,
  Flex,
  Badge,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { MdStar } from "react-icons/md";
import car1 from "../assets/img/car1.jpg";
import car2 from "../assets/img/car2.jpg";
import car3 from "../assets/img/car3.jpg";
import car4 from "../assets/img/car4.jpg";
import car5 from "../assets/img/car5.jpg";
import car6 from "../assets/img/car6.jpg";

export default function Cards() {
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
                  <Image borderRadius="md" src={car1} />
                  <Flex align="baseline" mt={2}>
                    <Badge colorScheme="pink">Plus</Badge>
                    <Text
                      ml={2}
                      textTransform="uppercase"
                      fontSize="sm"
                      fontWeight="bold"
                      color="pink.800"
                    >
                      Verified &bull; Cape Town
                    </Text>
                  </Flex>
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
                  <Image borderRadius="md" src={car2} />
                  <Flex align="baseline" mt={2}>
                    <Badge colorScheme="pink">Plus</Badge>
                    <Text
                      ml={2}
                      textTransform="uppercase"
                      fontSize="sm"
                      fontWeight="bold"
                      color="pink.800"
                    >
                      Verified &bull; Cape Town
                    </Text>
                  </Flex>
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
                  <Image borderRadius="md" src={car3} />
                  <Flex align="baseline" mt={2}>
                    <Badge colorScheme="pink">Plus</Badge>
                    <Text
                      ml={2}
                      textTransform="uppercase"
                      fontSize="sm"
                      fontWeight="bold"
                      color="pink.800"
                    >
                      Verified &bull; Cape Town
                    </Text>
                  </Flex>
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
                  <Image borderRadius="md" src={car4} />
                  <Flex align="baseline" mt={2}>
                    <Badge colorScheme="pink">Plus</Badge>
                    <Text
                      ml={2}
                      textTransform="uppercase"
                      fontSize="sm"
                      fontWeight="bold"
                      color="pink.800"
                    >
                      Verified &bull; Cape Town
                    </Text>
                  </Flex>
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
                  <Image borderRadius="md" src={car5} />
                  <Flex align="baseline" mt={2}>
                    <Badge colorScheme="pink">Plus</Badge>
                    <Text
                      ml={2}
                      textTransform="uppercase"
                      fontSize="sm"
                      fontWeight="bold"
                      color="pink.800"
                    >
                      Verified &bull; Cape Town
                    </Text>
                  </Flex>
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
                  <Image borderRadius="md" src={car6} />
                  <Flex align="baseline" mt={2}>
                    <Badge colorScheme="pink">Plus</Badge>
                    <Text
                      ml={2}
                      textTransform="uppercase"
                      fontSize="sm"
                      fontWeight="bold"
                      color="pink.800"
                    >
                      Verified &bull; Cape Town
                    </Text>
                  </Flex>
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
