import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Spiders Go',
      name: 'ali',
      input: event,
    }, null, 2),
  };
}

