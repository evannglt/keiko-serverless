import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { nftTableDynamoDBReadPolicies } from 'resources/policies';
import { nftTableName } from 'resources/index';

export const getNft = {
  environment: { NFT_TABLE_NAME: nftTableName },
  iamRoleStatements: [nftTableDynamoDBReadPolicies],
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'get',
        path: '/nfts',
      },
    },
  ],
};
