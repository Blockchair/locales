"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var browserWS = function (options, defaultWs, websocketEndpoint) {
    var ws = new WebSocket(websocketEndpoint || defaultWs);
    ws.addEventListener('open', function open() {
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
exports.default = browserWS;
