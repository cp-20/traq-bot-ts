import { WebSocket } from 'ws';
import { type Event, EventSchema } from './events.mts';

export const createWSConnection = (token: string) =>
  new WebSocket('wss://q.trap.jp/api/v3/bots/ws', {
    headers: { Authorization: `Bearer ${token}` },
  });

export type DataHandlers = Partial<{
  [event in Event as event['type']]: (data: event) => void;
}>;

export const handleData = (data: unknown, handlers: DataHandlers) => {
  const event = EventSchema.parse(data);

  const handler = handlers[event.type] as (data: Event) => void;

  handler?.(event);

  return event;
};
