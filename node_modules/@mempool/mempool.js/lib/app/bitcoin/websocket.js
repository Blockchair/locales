"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebsocket = void 0;
var client_1 = __importDefault(require("../../services/ws/client"));
var server_1 = __importDefault(require("../../services/ws/server"));
var useWebsocket = function (hostname, network) {
    var wsEndpoint = "wss://" + hostname + (network === 'main' ? '' : "/" + network) + "/api/v1/ws";
    return {
        initClient: function (_a) {
            var options = _a.options;
            return client_1.default(options, wsEndpoint);
        },
        initServer: function (_a) {
            var options = _a.options;
            return server_1.default(options, wsEndpoint);
        },
    };
};
exports.useWebsocket = useWebsocket;
