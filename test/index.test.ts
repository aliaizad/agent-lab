import test from 'node:test';
import * as assert from 'node:assert/strict';
import * as http from 'node:http';
import { createServer } from '../src/index.js';

test('GET / returns correct status and message', async () => {
  const server = createServer();
  
  await new Promise<void>((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve();
    });
  });

  const address = server.address();
  if (!address || typeof address === 'string') {
    throw new Error('Server address is not valid');
  }

  const { port } = address;

  try {
    const responseData = await new Promise<{ status?: number, body: string }>((resolve, reject) => {
      const req = http.get(`http://127.0.0.1:${port}/`, (res: http.IncomingMessage) => {
        let data = '';
        res.on('data', (chunk: Buffer) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({ status: res.statusCode, body: data });
        });
      });
      req.on('error', reject);
    });

    assert.equal(responseData.status, 200);
    assert.deepEqual(JSON.parse(responseData.body), { message: 'agent-lab' });
  } finally {
    server.close();
  }
});
