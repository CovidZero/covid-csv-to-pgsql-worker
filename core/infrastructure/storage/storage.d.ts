export default interface Storage {
    connect(): Promise<any>;
    disconnect(): Promise<void>;
    query(sql: string, data: Array<any>): Promise<any>;
}