import { container } from 'tsyringe';
import { INFRA, CONFIG, DOMAIN } from './types';

import PgSql from '../infrastructure/storage/pgsql';
import Storage from '../infrastructure/storage/storage.d';

import axios from 'axios';

import CasesService from '../domain/service/cases-service';

const initConfiguration = () => {
    container.register(CONFIG.pgSqlConfig, {
        useValue: {
            user: process.env.PG_USER,
            database: process.env.PG_DATABASE,
            password: process.env.PG_PASSWORD,
            port: process.env.PG_PORT,
            host: process.env.PG_ENDPOINT,
        }
    });
    container.register(CONFIG.CasesConfig, { 
        useValue: {
            rawUrl: process.env.RAW_URL,
            csvs: {
                cities: process.env.CITIES_CSV,
                states: process.env.STATES_CSV,
                total: process.env.TOTAL_CSV,
            }
        }
    });
};

const initInfrastructure = () => {
    container.register<typeof axios>(INFRA.HttpClient, { useValue: axios });
    container.register<Storage>(INFRA.Databaste, { useClass: PgSql });
};

const initDomain = () => {
    container.register(DOMAIN.CasesService, { useClass: CasesService });
};

const initContainer = () => {
    initConfiguration();
    initInfrastructure();
    initDomain();

    return container;
};

export default initContainer;