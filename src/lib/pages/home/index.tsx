import NextLink from "next/link";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      w="full"
      className="gradient"
    >
      <NextSeo />
      <Box textAlign="center" maxWidth="50%">
        <Heading>The best solution for no-code web3 apps.</Heading>
        <Text my="5">
          With NFTLaunchKit you can create a smart contract in our dashboard
          with a few clicks, provided by Thirdweb. You can create a NFT Minting
          Website with our templates and manage everything from the dashboard.
          Without any code and for free.
        </Text>
        <NextLink href="/collections" passHref>
          <Link
            color={"white"}
            bg={"green.700"}
            rounded={"full"}
            py={3}
            px={6}
            fontSize="20"
            _hover={{
              bg: "green.500",
            }}
          >
            Browse Collections
          </Link>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Home;
