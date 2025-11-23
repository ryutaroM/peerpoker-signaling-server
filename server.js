const { PeerServer } = require("peer");

const p = process.env.PORT || 9000;

const peerServer = PeerServer({
    port: p,
    path: "/myapp",
})

peerServer.on('connection', (client) => {
  console.log(`✓ Client connected: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
  console.log(`✗ Client disconnected: ${client.getId()}`);
});

console.log(`🚀 PeerJS server is running on port ${p}`);
console.log(`🌐 WebSocket URL: ws://localhost:${p}/myapp`);