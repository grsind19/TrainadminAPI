const io = require('socket.io-client');

const socket = io('http://localhost:3002', { query: "station=chennai" } );
socket.on('connect', function () {
  console.log('connected')
  socket.emit('join', 'listen');
});
socket.on('message', function (data) {
  console.log('Incoming message:',data);
});
socket.on('onload', function (data) {
  console.log('Incoming message:',data);
});
socket.on('disconnect', function () {
  console.log('disconnected')
});
setTimeout(()=>{
  socket.emit('change', {oldstation: "chennai", newstation: "test"})
},10000)

