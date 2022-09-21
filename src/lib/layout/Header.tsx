import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import NextLink from "next/link";

import ThemeToggle from "./ThemeToggle";
import WalletConnect from "lib/components/WalletConnect";

const Links = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];

const Header = () => {
  return (
    <Flex
      as="header"
      px="200"
      pb="2"
      width="full"
      align="center"
      borderBottom="solid 1px grey"
    >
      <Link href="/">
        <Heading as="h2" size="lg" cursor="pointer">
          NFTLaunchKit
        </Heading>
      </Link>
      <Flex as={"nav"} gap={4} ml="16" display={{ base: "none", md: "flex" }}>
        <NextLink href="/" passHref>
          Home
        </NextLink>
        <NextLink href="/collections" passHref>
          Collections
        </NextLink>
      </Flex>
      <Flex marginLeft="auto" gap={2}>
        <ThemeToggle />
        <WalletConnect />
      </Flex>
    </Flex>
  );
};

export default Header;
