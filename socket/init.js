
exports.init = (io) => {
  io.on('connection', function (socket) {
    console.log('user` connected')
    socket.on('join', function (station) {
      console.log('joining station pool', station);
      socket.join(station);
    })
    socket.on('leave', function (station) {
      console.log('leaving room', station);
      socket.leave(station);
    })
    socket.on('disconnect', () => {
      console.log('user disconnected');
    }); 
  });
}
