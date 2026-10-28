import { UpdateItemCommand, $add } from 'dynamodb-toolbox';
import { UserEntity } from 'libs/dynamodb-toolbox/userEntity';

export const updateUserScore = async (
  id: string,
  scoreDelta: number,
): Promise<{ id: string; score: number } | undefined> => {
  const { Attributes } = await UserEntity.build(UpdateItemCommand)
    .item({
      PK: 'USER',
      id,
      score: $add(scoreDelta),
    })
    .options({
      returnValues: 'ALL_NEW',
    })
    .send();

  const user = Attributes
    ? { id: Attributes.id, score: Attributes.score }
    : undefined;
  return user;
};
