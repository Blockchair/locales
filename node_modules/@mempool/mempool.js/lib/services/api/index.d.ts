import { AxiosInstance } from 'axios';
import { MempoolConfig } from './../../interfaces/index';
export declare const makeBitcoinAPI: ({ hostname, network, }: MempoolConfig) => {
    api: AxiosInstance;
};
export declare const makeBisqAPI: (hostname?: string | undefined) => {
    api: AxiosInstance;
};
export declare const makeBisqMarketsAPI: () => {
    api: AxiosInstance;
};
export declare const makeLiquidAPI: (hostname?: string | undefined) => {
    api: AxiosInstance;
};
declare const _default: {
    makeBitcoinAPI: ({ hostname, network, }: MempoolConfig) => {
        api: AxiosInstance;
    };
    makeBisqAPI: (hostname?: string | undefined) => {
        api: AxiosInstance;
    };
    makeBisqMarketsAPI: () => {
        api: AxiosInstance;
    };
    makeLiquidAPI: (hostname?: string | undefined) => {
        api: AxiosInstance;
    };
};
export default _default;
