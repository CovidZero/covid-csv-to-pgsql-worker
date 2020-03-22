import 'reflect-metadata';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { container } from 'tsyringe';
import HttpStatus from 'http-status-codes';
import 'source-map-support/register';
import initContainer from '../../core/config/ioc';
import { DOMAIN } from '../../core/config/types';
import CasesService from '../../core/domain/service/cases-service.d';

export const workerCities: APIGatewayProxyHandler = async (_event, context) => {

    context.callbackWaitsForEmptyEventLoop = false;
    
    try {
        initContainer();
        
        const service: CasesService = container.resolve(DOMAIN.CasesService);

        await service.parseCitiesCases();

        return buildLambdaReturn(HttpStatus.OK);
    } catch (err) {
        console.error(err);
        return buildLambdaReturn(HttpStatus.INTERNAL_SERVER_ERROR);
    }

};

export const workerStates: APIGatewayProxyHandler = async (_event, context) => {

    context.callbackWaitsForEmptyEventLoop = false;
    
    try {
        initContainer();
        
        const service: CasesService = container.resolve(DOMAIN.CasesService);

        await service.parseStatesCases();

        return buildLambdaReturn(HttpStatus.OK);
    } catch (err) {
        console.error(err);
        return buildLambdaReturn(HttpStatus.INTERNAL_SERVER_ERROR);
    }

};

export const workerTotal: APIGatewayProxyHandler = async (_event, context) => {

    context.callbackWaitsForEmptyEventLoop = false;
    
    try {
        initContainer();
        
        const service: CasesService = container.resolve(DOMAIN.CasesService);

        await service.parseTotalCases();

        return buildLambdaReturn(HttpStatus.OK);
    } catch (err) {
        console.error(err);
        return buildLambdaReturn(HttpStatus.INTERNAL_SERVER_ERROR);
    }

};

const buildLambdaReturn = (statusCode: number, content?: Object) => {
    return {
        statusCode: statusCode,
        headers: {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
            'message': HttpStatus.getStatusText(statusCode),
            ...content,
        }),
    };
}