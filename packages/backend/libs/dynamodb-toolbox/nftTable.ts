import { Table } from 'dynamodb-toolbox';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { PARTITION_KEY, SORT_KEY } from '../../resources/dynamoDB';

const client = new DynamoDBClient({});

const documentClient = DynamoDBDocumentClient.from(client);

export const nftTable = new Table({
  name: process.env.NFT_TABLE_NAME,
  partitionKey: {
    name: PARTITION_KEY,
    type: 'string',
  },
  sortKey: {
    name: SORT_KEY,
    type: 'string',
  },
  documentClient,
});
