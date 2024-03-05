import type { OutgoingHttpHeaders } from 'http';
import WebSocket from 'ws';

export const createWebSocketWithHeader = (headers: OutgoingHttpHeaders) => {
  class WebSocketWithAuth extends WebSocket {
    constructor(url: string | URL, protocols: string | string[]) {
      super(url, protocols, { headers });
    }
  }
  return WebSocketWithAuth;
};
