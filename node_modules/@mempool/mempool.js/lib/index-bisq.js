"use strict";
var index_1 = require("./services/api/index");
var addresses_1 = require("./app/bisq/addresses");
var blocks_1 = require("./app/bisq/blocks");
var statistics_1 = require("./app/bisq/statistics");
var transactions_1 = require("./app/bisq/transactions");
var markets_1 = require("./app/bisq/markets");
var hostnameEndpointDefault = 'bisq.market';
var networkEndpointDefault = 'bisq';
var mempool = function (_a) {
    var _b = _a === void 0 ? {
        hostname: hostnameEndpointDefault,
        network: networkEndpointDefault,
    } : _a, hostname = _b.hostname, network = _b.network;
    if (!hostname)
        hostname = hostnameEndpointDefault;
    if (!network)
        network = networkEndpointDefault;
    var apiBisq = index_1.makeBisqAPI(hostname).api;
    var apiBisqMarkets = index_1.makeBisqMarketsAPI().api;
    return {
        statistics: statistics_1.useStatistics(apiBisq),
        addresses: addresses_1.useAddresses(apiBisq),
        blocks: blocks_1.useBlocks(apiBisq),
        transactions: transactions_1.useTransactions(apiBisq),
        markets: markets_1.useMarkets(apiBisqMarkets),
    };
};
mempool.default = mempool;
module.exports = mempool;
