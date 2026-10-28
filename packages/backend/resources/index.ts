import { App, Stack } from 'aws-cdk-lib';

import { createNFTTable } from './tables';

const app = new App();
const stack = new Stack(app);

const nftTable = createNFTTable(stack);

export const nftTableArn = stack.resolve(nftTable.tableArn);
export const nftTableName = stack.resolve(nftTable.tableName);

/**
 * Do not keep 'Rules' nor 'Parameters' to avoid the following errors (without resorting to cdk bridge plugin):
 *   Error: Invalid configuration encountered
 *     at 'resources': unrecognized property 'Rules'
 *   Error:
 *   Unable to fetch parameters [/cdk-bootstrap/hnb659fds/version] from parameter store for this account.
 */
export const resources = {
  Resources: app.synth().getStackByName(stack.stackName).template.Resources,
};
