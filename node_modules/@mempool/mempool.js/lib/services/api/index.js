"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLiquidAPI = exports.makeBisqMarketsAPI = exports.makeBisqAPI = exports.makeBitcoinAPI = void 0;
var axios_1 = __importDefault(require("axios"));
var makeBitcoinAPI = function (_a) {
    var hostname = _a.hostname, network = _a.network;
    if (network && ['testnet', 'signet'].includes(network)) {
        network = "/" + network;
    }
    else {
        network = '';
    }
    if (hostname === null || hostname === void 0 ? void 0 : hostname.includes("localhost")) {
        var api_1 = axios_1.default.create({
            baseURL: "http://" + hostname + network + "/api/",
        });
        return {
            api: api_1,
        };
    }
    var api = axios_1.default.create({
        baseURL: "https://" + hostname + network + "/api/",
    });
    return {
        api: api,
    };
};
exports.makeBitcoinAPI = makeBitcoinAPI;
var makeBisqAPI = function (hostname) {
    if (hostname === null || hostname === void 0 ? void 0 : hostname.includes("localhost")) {
        var api_2 = axios_1.default.create({
            baseURL: "http://" + hostname + "/bisq/api/",
        });
        return {
            api: api_2,
        };
    }
    var api = axios_1.default.create({
        baseURL: "https://" + hostname + "/bisq/api/",
    });
    return {
        api: api,
    };
};
exports.makeBisqAPI = makeBisqAPI;
var makeBisqMarketsAPI = function () {
    var api = axios_1.default.create({
        baseURL: "https://bisq.markets/api/v1/markets/",
    });
    return {
        api: api,
    };
};
exports.makeBisqMarketsAPI = makeBisqMarketsAPI;
var makeLiquidAPI = function (hostname) {
    if (hostname === null || hostname === void 0 ? void 0 : hostname.includes("localhost")) {
        var api_3 = axios_1.default.create({
            baseURL: "http://" + hostname + "/liquid/api/",
        });
        return {
            api: api_3,
        };
    }
    var api = axios_1.default.create({
        baseURL: "https://" + hostname + "/liquid/api/",
    });
    return {
        api: api,
    };
};
exports.makeLiquidAPI = makeLiquidAPI;
exports.default = {
    makeBitcoinAPI: exports.makeBitcoinAPI,
    makeBisqAPI: exports.makeBisqAPI,
    makeBisqMarketsAPI: exports.makeBisqMarketsAPI,
    makeLiquidAPI: exports.makeLiquidAPI,
};
