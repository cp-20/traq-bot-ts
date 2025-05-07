import type { WebSocket } from 'ws';
import type { Event } from './events.mts';
import { type DataHandlers, createWSConnection, handleData } from './traq.mts';
export * from './api.ts';

type ClientOption = {
  token?: string;
  debug?: boolean;
  address?: string;
};

export class Client {
  private ws: WebSocket | null = null;
  private debug;
  private token;
  private address;
  private handlers: DataHandlers;

  constructor({ token, debug, address }: ClientOption) {
    this.handlers = {
      ERROR: (data) => {
        console.error(`Error from traQ server: ${data.body}`);
      },
    };
    this.debug = debug ?? false;
    this.address = address ?? 'wss://q.trap.jp/api/v3/bots/ws';

    const token_ = token ?? process.env.TRAQ_ACCESS_TOKEN;
    if (!token_) throw new Error('token is required');
    this.token = token_;
  }

  on<T extends Event['type']>(type: T, handler: Required<DataHandlers>[T]) {
    if (this.handlers[type]) {
      throw new Error(`Handler for ${type} is already registered`);
    }
    this.handlers[type] = handler;
  }

  async listen(openHandler?: () => void) {
    this.ws = createWSConnection(this.token, this.address);

    this.ws.addEventListener('open', () => openHandler?.());

    this.ws.addEventListener('message', (e) => {
      try {
        const stringData = e.data.toString();
        const data = JSON.parse(stringData);

        const event = handleData(data, this.handlers);
        if (this.debug) console.log(`received event: ${event.type}`);
      } catch (e) {
        console.error(e);
      }
    });

    const interval = setInterval(() => {
      this.ws?.ping({}, undefined, async (err) => {
        if (!err) return;
        if (this.debug) console.log('ping failed, reconnecting...');
        this.ws?.close();
        clearInterval(interval);
      });
    }, 1000);

    await new Promise((resolve) => {
      this.ws?.addEventListener('close', async () => {
        this.ws = null;
        await this.listen(openHandler);
        resolve(null);
      });
    });
  }
}
