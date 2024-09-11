"use strict";
var index_1 = require("./services/api/index");
var addresses_1 = require("./app/bitcoin/addresses");
var blocks_1 = require("./app/bitcoin/blocks");
var difficulty_1 = require("./app/bitcoin/difficulty");
var fees_1 = require("./app/bitcoin/fees");
var mempool_1 = require("./app/bitcoin/mempool");
var transactions_1 = require("./app/bitcoin/transactions");
var websocket_1 = require("./app/bitcoin/websocket");
var addresses_2 = require("./app/bisq/addresses");
var blocks_2 = require("./app/bisq/blocks");
var statistics_1 = require("./app/bisq/statistics");
var transactions_2 = require("./app/bisq/transactions");
var markets_1 = require("./app/bisq/markets");
var assets_1 = require("./app/liquid/assets");
var addresses_3 = require("./app/liquid/addresses");
var blocks_3 = require("./app/liquid/blocks");
var fees_2 = require("./app/liquid/fees");
var mempool_2 = require("./app/liquid/mempool");
var transactions_3 = require("./app/liquid/transactions");
var websocket_2 = require("./app/liquid/websocket");
var hostnameEndpointDefault = 'mempool.space';
var networkEndpointDefault = 'main';
var mempool = function (_a) {
    var _b = _a === void 0 ? {
        hostname: hostnameEndpointDefault,
        network: networkEndpointDefault,
    } : _a, hostname = _b.hostname, network = _b.network;
    if (!hostname)
        hostname = hostnameEndpointDefault;
    if (!network)
        network = networkEndpointDefault;
    var apiBitcoin = index_1.makeBitcoinAPI({ hostname: hostname, network: network }).api;
    var apiBisq = index_1.makeBisqAPI(hostname).api;
    var apiBisqMarkets = index_1.makeBisqMarketsAPI().api;
    var apiLiquid = index_1.makeLiquidAPI(hostname).api;
    return {
        bitcoin: {
            addresses: addresses_1.useAddresses(apiBitcoin),
            blocks: blocks_1.useBlocks(apiBitcoin),
            difficulty: difficulty_1.useDifficulty(apiBitcoin),
            fees: fees_1.useFees(apiBitcoin),
            mempool: mempool_1.useMempool(apiBitcoin),
            transactions: transactions_1.useTransactions(apiBitcoin),
            websocket: websocket_1.useWebsocket(hostname, network),
        },
        bisq: {
            statistics: statistics_1.useStatistics(apiBisq),
            addresses: addresses_2.useAddresses(apiBisq),
            blocks: blocks_2.useBlocks(apiBisq),
            transactions: transactions_2.useTransactions(apiBisq),
            markets: markets_1.useMarkets(apiBisqMarkets),
        },
        liquid: {
            addresses: addresses_3.useAddresses(apiLiquid),
            assets: assets_1.useAssets(apiLiquid),
            blocks: blocks_3.useBlocks(apiLiquid),
            fees: fees_2.useFees(apiLiquid),
            mempool: mempool_2.useMempool(apiLiquid),
            transactions: transactions_3.useTransactions(apiLiquid),
            websocket: websocket_2.useWebsocket(hostname),
        },
    };
};
mempool.default = mempool;
module.exports = mempool;
