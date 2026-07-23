import { nftTableArn } from '..';

export const nftTableDynamoDBReadPolicies = {
  Effect: 'Allow',
  Resource: [nftTableArn],
  Action: ['dynamodb:GetItem', 'dynamodb:Query'],
};

export const nftTableDynamoDBWritePolicies = {
  Effect: 'Allow',
  Resource: [nftTableArn],
  Action: ['dynamodb:PutItem'],
};

export const nftTableDynamoDBDeletePolicies = {
  Effect: 'Allow',
  Resource: [nftTableArn],
  Action: ['dynamodb:DeleteItem'],
};

export const nftTableDynamoDBUpdatePolicies = {
  Effect: 'Allow',
  Resource: [nftTableArn],
  Action: ['dynamodb:UpdateItem'],
};
