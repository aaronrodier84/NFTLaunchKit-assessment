import Head from 'next/head';
import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>NFTLaunchKit - Assessment</title>
      </Head>
      <Box margin="0 0" width="full" height="full" transition="0.5s ease-out">
        <Box marginY={5}>
          <Header />
          <Box as="main" height="full">
            {children}
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
