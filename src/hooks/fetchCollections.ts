import {
  NFT_COLLECTIONS_CLIENT,
  MORALIS_API_OPTION,
} from "../helpers/constants";

// Fetch CryptoPunks NFTs by Contract Address using Moralis API
export const fetchCollections = async () => {
  const result = await fetch(
    `${NFT_COLLECTIONS_CLIENT}?chain=eth&format=decimal&limit=18`,
    MORALIS_API_OPTION
  );
  return result.json();
};

// Fetch NFT Details by Token ID using Moralis API
export const fetchCollection = async (id: any) => {
  const result = await fetch(
    `${NFT_COLLECTIONS_CLIENT}/${id}`,
    MORALIS_API_OPTION
  );
  return result.json();
};
