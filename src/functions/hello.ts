import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { standardReturn } from '../lib/helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/require-await
export const handler = async (event: APIGatewayProxyEvent, _context: Context): Promise<APIGatewayProxyResult> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const requestBody = JSON.parse(event.body ?? '{}');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { amount } = requestBody;
  return standardReturn(`${process.env['TEST_ENVIRONMENT'] ?? ''} ${amount as number}`);
};
export default {};
