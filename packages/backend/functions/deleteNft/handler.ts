import { DeleteItemCommand } from 'dynamodb-toolbox';
import { updateUserScore } from 'functions/updateUserScore/handler';

import { NFTEntity } from 'libs/dynamodb-toolbox/nftEntity';

export const main = async (event: {
  pathParameters: { id: string; userId: string };
}) => {
  // Delete the NFT
  const id = event.pathParameters.id;
  await NFTEntity.build(DeleteItemCommand)
    .key({
      PK: 'NFT',
      id,
    })
    .send();

  // Update the score
  const userId = event.pathParameters.userId;
  const user = await updateUserScore(userId, -1);
  const score = user ? user.score : 0;
  return {
    user: {
      score,
    },
  };
};
