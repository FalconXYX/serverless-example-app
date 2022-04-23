import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { Database } from '../lib/database';
import { logAdminEvent } from '../data-services/services/audit-log-data-service';
import { ds } from '../data-services';
import { standardReturn } from '../lib/helper';

new Database();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler = async (_event: APIGatewayProxyEvent, _context: Context): Promise<APIGatewayProxyResult> => {
  // console.log(await ds.organization.create({ name: 'Blocks' }));
  console.log(await ds.organization.get({ name: 'Blocks' }));
  await logAdminEvent('deposit_notification', { transactionId: 'F3JLHKQR389RJLKJLWRJ' });
  return standardReturn();
};

export default {};
