import * as http from 'node:http';

export function createServer(): http.Server {
  return http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'agent-lab' }));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });
}

if (typeof require !== 'undefined' && require.main === module) {
  const server = createServer();
  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
