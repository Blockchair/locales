import { MempoolConfig, MempoolReturn } from './interfaces/index';
declare const mempool: {
    ({ hostname, network }?: MempoolConfig): MempoolReturn;
    default: any;
};
export = mempool;
