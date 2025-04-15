import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title = "Motch"}: { title?: string }) => (
  <Flex
    justifyContent="center"
    alignItems="top"
    height="12vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
);