import { inject, injectable } from "tsyringe";
import { CONFIG, INFRA } from "../../config/types";
import Storage from "../../infrastructure/storage/storage.d";
import axios from 'axios';
import csvTojson from 'csvtojson';
import ICasesService from './cases-service.d';
import {
    CITIES_SQL,
    STATES_SQL,
    TOTAL_SQL,
} from '../queries';

@injectable()
export default class CasesService implements ICasesService {

    constructor(
        @inject(INFRA.Databaste)
        private storage: Storage,
        @inject(INFRA.HttpClient)
        private httpClient: typeof axios,
        @inject(CONFIG.CasesConfig)
        private config: any,
    ) { }

    private async getInfoFromRaw(fileName: string): Promise<any[][]> {
        const { data } = await this.httpClient(`${this.config.rawUrl}${fileName}`);
        const casesArr: any[][] = await csvTojson({
            noheader: false,
            output: 'csv'
        }).fromString(data);

        return casesArr;
    }

    async parseCitiesCases(): Promise<void> {
        const citiesCases = await this.getInfoFromRaw(this.config.csvs.cities);
        for (const covidCase of citiesCases) await this.storage.query(CITIES_SQL, covidCase);
    }

    async parseStatesCases(): Promise<void> {
        const statesCases = await this.getInfoFromRaw(this.config.csvs.states);

        for (const covidCase of statesCases) {
            covidCase.splice(3, 1);
            await this.storage.query(STATES_SQL, covidCase);
        }
    }

    async parseTotalCases(): Promise<void> {
        const totalCases = await this.getInfoFromRaw(this.config.csvs.total);
        for (const covidCase of totalCases) await this.storage.query(TOTAL_SQL, covidCase);
    }

}