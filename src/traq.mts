import { WebSocket } from 'ws';
import { type Event, EventSchema } from './events.mts';

export const createWSConnection = (token: string, address: string) =>
  new WebSocket(address, {
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
