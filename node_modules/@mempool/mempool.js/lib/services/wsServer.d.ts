import WebSocket from 'ws';
declare const serverWS: (options: string[], defaultWs: string, websocketEndpoint?: string | undefined) => WebSocket;
export default serverWS;
