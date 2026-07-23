import { RemovalPolicy } from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

import { PARTITION_KEY, SORT_KEY } from '../dynamoDB';

export function createNFTTable(scope: Construct) {
  return new Table(scope, 'NFTTable', {
    partitionKey: {
      name: PARTITION_KEY,
      type: AttributeType.STRING,
    },
    sortKey: {
      name: SORT_KEY,
      type: AttributeType.STRING,
    },
    billingMode: BillingMode.PAY_PER_REQUEST,
    removalPolicy: RemovalPolicy.DESTROY,
  });
}
