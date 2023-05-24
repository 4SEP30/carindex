import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box borderTop={"1px"} borderTopColor={"red.700"} py={"2%"}>
      <Box>
        <Box
          display={{ base: "block", md: "block", lg: "flex" }}
          justifyContent={"space-around"}
        >
          <Box>
            <Heading fontSize={"1.4rem"} size={"md"}>
              CarIndex
            </Heading>
          </Box>
          <Box>
            <Text fontSize={"1.1rem"}>Page</Text>
          </Box>
          <Box>
            <Text fontSize={"1.1rem"}>Legal</Text>
          </Box>
          <Box>
            <Text fontSize={"1.1rem"}>Contact</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
