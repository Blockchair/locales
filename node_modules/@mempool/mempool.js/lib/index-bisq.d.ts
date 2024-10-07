import { MempoolConfig, BisqMarketsReturn } from './interfaces/index';
declare const mempool: {
    ({ hostname, network }?: MempoolConfig): BisqMarketsReturn;
    default: any;
};
export = mempool;
