export default interface CasesService {
    parseCitiesCases(): Promise<void>;
    parseStatesCases(): Promise<void>;
    parseTotalCases(): Promise<void>;
}