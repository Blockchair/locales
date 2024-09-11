"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebsocket = void 0;
var wsClient_1 = __importDefault(require("../services/wsClient"));
var wsServer_1 = __importDefault(require("../services/wsServer"));
var defaultWs = 'wss://mempool.space/api/v1/ws';
var useWebsocket = function (websocketEndpoint) {
    return {
        initClient: function (_a) {
            var options = _a.options;
            return wsClient_1.default(options, defaultWs, websocketEndpoint);
        },
        initServer: function (_a) {
            var options = _a.options;
            return wsServer_1.default(options, defaultWs, websocketEndpoint);
        },
    };
};
exports.useWebsocket = useWebsocket;
