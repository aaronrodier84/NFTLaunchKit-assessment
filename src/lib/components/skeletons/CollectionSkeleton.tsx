import {
  Flex,
  Box,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';

const CollectionSkeleton = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.400')}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative">
      <Skeleton height='20rem' width='100%' />
      <Box p="3">
        <Skeleton height='1.5rem' width={'60%'} />
        <Flex justifyContent="start" alignItems="center" mt={4} fontSize="sm" color={useColorModeValue('gray.400', 'white')}>
          <Skeleton height='0.8rem' width={'80%'} />
        </Flex>
      </Box>
    </Box>
  );
};

export default CollectionSkeleton;
