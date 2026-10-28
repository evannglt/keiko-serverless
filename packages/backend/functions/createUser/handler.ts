import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { randomUUID } from 'node:crypto';

const client = new DynamoDBClient({ region: 'eu-west-1' });

export const main = async (): Promise<{
  id: string;
  score: number;
}> => {
  const id = randomUUID();
  const score = 0;

  const Item = {
    PK: { S: 'USER' },
    SK: { S: id },
    id: { S: id },
    score: { N: String(score) },
  };

  const params = {
    TableName: process.env.NFT_TABLE_NAME,
    Item,
  };

  await client.send(new PutItemCommand(params));

  return {
    id,
    score,
  };
};
