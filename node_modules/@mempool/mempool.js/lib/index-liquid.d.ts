import { MempoolConfig, LiquidNetworkReturn } from './interfaces/index';
declare const mempool: {
    ({ hostname, network }?: MempoolConfig): LiquidNetworkReturn;
    default: any;
};
export = mempool;
