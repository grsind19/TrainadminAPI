
const Train = require('../components/train/service')
const logger = require('../utilities/logger')

exports.init = (io) => {
  io.on('connection', function (socket) {
    logger.info('user connected')
    const currentStation = socket.request._query['station']
    sendOnloadData({socket, currentStation});
    
    socket.on('join', function (station) {
      logger.info(`joining station pool ${station}`);
      socket.join(station);
    })
    socket.on('leave', function (station) {
      logger.info(`leaving station pool ${station}`);
      socket.leave(station);
    })
    socket.on('change', function (data) {
      logger.info('change station', data);
      socket.leave(data.oldstation);
      socket.join(data.newstation);
      sendOnloadData({socket, currentStation: data.newstation})
    })
    socket.on('disconnect', () => {
      logger.info('user disconnected');
    }); 
  });
}


async function sendOnloadData({socket,currentStation}=data){
  let trains = await Train.getTrains({currentStation})
  trains = trains.map(train=>train.toJSON())
  socket.emit('onload', trains)
}