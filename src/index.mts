import type { WebSocket } from 'ws';
import type { Event } from './events.mts';
import { type DataHandlers, createWSConnection, handleData } from './traq.mts';

export class Client {
  private ws: WebSocket | null = null;
  private debug;
  private handlers: DataHandlers;

  constructor(debug = false) {
    this.handlers = {
      ERROR: (data) => {
        console.error(`Error from traQ server: ${data.body}`);
      },
    };
    this.debug = debug;
  }

  on<T extends Event['type']>(type: T, handler: Required<DataHandlers>[T]) {
    if (this.handlers[type]) {
      throw new Error(`Handler for ${type} is already registered`);
    }
    this.handlers[type] = handler;
  }

  async listen(openHandler?: () => void) {
    this.ws = createWSConnection();

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
