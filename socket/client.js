const io = require('socket.io-client');

const socket = io('http://localhost:3002');
socket.on('connect', function () {
  console.log('connected')
  socket.emit('join', 'listen');
});
socket.on('message', function (data) {
  console.log('Incoming message:', JSON.parse(data));
});
socket.on('disconnect', function () {
  console.log('disconnected')
});

