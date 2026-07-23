import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import {
  nftTableDynamoDBDeletePolicies,
  nftTableDynamoDBUpdatePolicies,
} from 'resources/policies';

export const deleteNft = {
  iamRoleStatements: [
    nftTableDynamoDBDeletePolicies,
    nftTableDynamoDBUpdatePolicies,
  ],
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'delete',
        path: '/nfts/{userId}/{id}',
      },
    },
  ],
};
