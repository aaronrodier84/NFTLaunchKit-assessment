import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "lib/layout";
import { fetchCollections } from "hooks/fetchCollections";
import {
  Box,
  Heading,
  Container,
  Grid,
  GridItem,
  Link,
  Text,
  Stack,
} from "@chakra-ui/react";
import CollectionSkeleton from "lib/components/skeletons/CollectionSkeleton";
import CollectionItem from "lib/components/CollectionItem";
import { CarouselJsonLd } from "next-seo";

const Collections: NextPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchCollections().then((response) => {
      console.log("response", response.result);
      setCollections(response.result);
    });
  }, []);

  let skeletonGrid = [];

  for (let i = 0; i < 9; i++) {
    skeletonGrid.push(
      <GridItem w="100%">
        <CollectionSkeleton />
      </GridItem>
    );
  }

  return (
    <Layout>
      <Container maxW="1000px">
        <Heading mt="5" mb="5">
          CryptoPunks
        </Heading>
        {collections.length === 0 && (
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {skeletonGrid}
          </Grid>
        )}
        {collections.length > 0 && (
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {collections.map((collection, i) => (
              <GridItem w="100%" key={i}>
                <CollectionItem collection={collection} />
              </GridItem>
            ))}
          </Grid>
        )}
      </Container>
    </Layout>
  );
};

export default Collections;
