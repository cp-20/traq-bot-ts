import { WebSocket } from 'ws';
import { type Event, EventSchema } from './events.mts';

const accessToken = process.env.TRAQ_ACCESS_TOKEN;

export const createWSConnection = () =>
  new WebSocket('wss://q.trap.jp/api/v3/bots/ws', {
    headers: { Authorization: `Bearer ${accessToken}` },
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
