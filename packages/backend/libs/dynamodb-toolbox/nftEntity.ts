import { Entity, item, string, number } from 'dynamodb-toolbox';
import { nftTable } from './nftTable';

export const NFTEntity = new Entity({
  name: 'NFT',
  table: nftTable,
  schema: item({
    PK: string().key().default('NFT'),
    id: string().key(),
    positionX: number(),
    positionY: number(),
    imageIndex: number(),
  }),
  computeKey: ({ PK, id }) => ({
    PK,
    SK: id,
  }),
});
