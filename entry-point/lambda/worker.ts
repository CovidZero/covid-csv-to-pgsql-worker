import { APIGatewayProxyHandler } from 'aws-lambda';
import HttpStatus from 'http-status-codes';
import 'source-map-support/register';

export const workerCasesBrazilStates: APIGatewayProxyHandler = async (_event, context) => {

    context.callbackWaitsForEmptyEventLoop = false;

    try {
        return {
            statusCode: HttpStatus.OK,
            headers: {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                'message': HttpStatus.getStatusText(HttpStatus.OK),
            }),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            headers: {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                'message': HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
            }),
        };
    }

};