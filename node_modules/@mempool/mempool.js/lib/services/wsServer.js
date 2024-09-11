"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = __importDefault(require("ws"));
var serverWS = function (options, defaultWs, websocketEndpoint) {
    var ws = new ws_1.default(websocketEndpoint || defaultWs);
    ws.on('open', function open() {
        handleMessage(ws, options);
    });
    return ws;
};
var handleMessage = function (ws, options) {
    ws.send(JSON.stringify({ action: 'init' }));
    setInterval(function timeout() {
        ws.send(JSON.stringify({
            action: 'want',
            data: options,
        }));
    }, 500);
};
exports.default = serverWS;
