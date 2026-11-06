import { expect, mock, test } from 'bun:test';

const ping = mock(
  (_data: unknown, _mask: unknown, callback?: (error?: Error) => void) => {
    callback?.(new Error('stop reconnect timer'));
  },
);

class FakeWebSocket extends EventTarget {
  constructor(_address: string, _options: unknown) {
    super();
  }

  ping = ping;

  close() {}
}

mock.module('ws', () => ({ WebSocket: FakeWebSocket }));

const { Client } = await import('./index.mts');

test('sends WebSocket pings without an object payload', async () => {
  ping.mockClear();

  const client = new Client({ token: 'test-token' });
  void client.listen();

  await Bun.sleep(1100);

  expect(ping).toHaveBeenCalledTimes(1);
  expect(ping.mock.calls[0]?.[0]).toBeUndefined();
});
