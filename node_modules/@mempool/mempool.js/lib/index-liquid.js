"use strict";
var index_1 = require("./services/api/index");
var assets_1 = require("./app/liquid/assets");
var addresses_1 = require("./app/liquid/addresses");
var blocks_1 = require("./app/liquid/blocks");
var fees_1 = require("./app/liquid/fees");
var mempool_1 = require("./app/liquid/mempool");
var transactions_1 = require("./app/liquid/transactions");
var websocket_1 = require("./app/liquid/websocket");
var hostnameEndpointDefault = 'liquid.network';
var networkEndpointDefault = 'liquid';
var mempool = function (_a) {
    var _b = _a === void 0 ? {
        hostname: hostnameEndpointDefault,
        network: networkEndpointDefault,
    } : _a, hostname = _b.hostname, network = _b.network;
    if (!hostname)
        hostname = hostnameEndpointDefault;
    if (!network)
        network = networkEndpointDefault;
    var apiLiquid = index_1.makeLiquidAPI(hostname).api;
    return {
        addresses: addresses_1.useAddresses(apiLiquid),
        assets: assets_1.useAssets(apiLiquid),
        blocks: blocks_1.useBlocks(apiLiquid),
        fees: fees_1.useFees(apiLiquid),
        mempool: mempool_1.useMempool(apiLiquid),
        transactions: transactions_1.useTransactions(apiLiquid),
        websocket: websocket_1.useWebsocket(hostname),
    };
};
mempool.default = mempool;
module.exports = mempool;
