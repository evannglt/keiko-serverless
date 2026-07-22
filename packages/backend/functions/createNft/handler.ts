import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { randomUUID } from 'node:crypto';

const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const client = new DynamoDBClient({ region: 'eu-west-1' });

export const main = async (): Promise<{
  imageIndex: string;
  positionX: string;
  positionY: string;
}> => {
  const id = randomUUID();

  const positionX = randomIntFromInterval(5, 90).toString();
  const positionY = randomIntFromInterval(10, 90).toString();
  const imageIndex = Math.floor(Math.random() * 5).toString();
  const Item = {
    PK: { S: 'NFT' },
    SK: { S: id },
    id: { S: id },
    positionX: { S: positionX },
    positionY: { S: positionY },
    imageIndex: { S: imageIndex },
  };

  const params = {
    TableName: process.env.NFT_TABLE_NAME,
    KeyConditionExpression: 'pk = :pk',
    Item,
  };

  await client.send(new PutItemCommand(params));

  return {
    imageIndex,
    positionX,
    positionY,
  };
};
