import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import {
  nftTableDynamoDBUpdatePolicies,
  nftTableDynamoDBWritePolicies,
} from 'resources/policies';

export const createNft = {
  handler: getHandlerPath(__dirname),
  iamRoleStatements: [
    nftTableDynamoDBWritePolicies,
    nftTableDynamoDBUpdatePolicies,
  ],
  events: [
    {
      httpApi: {
        method: 'post',
        path: '/nfts/{userId}',
      },
    },
  ],
};
