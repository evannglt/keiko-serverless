import { DeleteItemCommand } from 'dynamodb-toolbox';
import { NFTEntity } from '../../libs/dynamodb-toolbox/nftEntity';

export const main = async (event: {
  pathParameters: { id: string };
}): Promise<void> => {
  await NFTEntity.build(DeleteItemCommand)
    .key({
      PK: 'NFT',
      id: event.pathParameters.id,
    })
    .send();
};
