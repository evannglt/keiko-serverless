import { Entity, item, string, number } from 'dynamodb-toolbox';
import { nftTable } from './nftTable';

export const UserEntity = new Entity({
  name: 'USER',
  table: nftTable,
  schema: item({
    PK: string().key().default('USER'),
    id: string().key(),
    score: number().default(0),
  }),
  computeKey: ({ PK, id }) => ({
    PK,
    SK: id,
  }),
});
