import WebSocket from 'ws';
declare const serverWS: (options: string[], endpoint: string) => WebSocket;
export default serverWS;
