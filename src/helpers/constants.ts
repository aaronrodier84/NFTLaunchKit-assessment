// CRYPTOPUNCK ADDRESS
export const CRYPTOPUNKS_ADDRESS =
  "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb";

//MORALIS ENDPOINT
export const NFT_COLLECTIONS_CLIENT =`https://deep-index.moralis.io/api/v2/nft/${CRYPTOPUNKS_ADDRESS}`;

//MORALIS ENDPOINT OPTION
export const MORALIS_API_OPTION: any = {
  method: 'GET',
  headers: { 
    accept: 'application/json', 
    'X-API-Key': process.env.MORALIS_API_KEY 
  }
};
