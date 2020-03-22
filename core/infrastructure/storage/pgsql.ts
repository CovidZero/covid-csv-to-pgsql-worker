import { singleton, inject } from 'tsyringe';
import pg from 'pg';
import Storage from './storage.d';
import { CONFIG } from '../../config/types';

@singleton()
export default class PgSql implements Storage {

    private isConnected: boolean;
    private pgClient: pg.Client;

    constructor(
        @inject(CONFIG.pgSqlConfig)
        private config: any,
    ) {
        this.isConnected = false;
        this.pgClient = new pg.Client(this.config);
    }

    async connect(): Promise<void> {
        if (!this.isConnected) {
            await this.pgClient.connect();
            this.isConnected = true;
        }
    }

    async query(sql: string, data: Array<any>): Promise<any> {
        await this.connect();
        return this.pgClient.query(sql, data);
    }

    disconnect(): Promise<void> {
        return this.pgClient.end();
    }

}