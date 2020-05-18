const redis = require("redis");
const subscriber = redis.createClient();
const publisher = redis.createClient();
exports.init = function(io){
  subscriber.on("message", function(channel, message) {
    io.to('listen').emit('message',message);
  });
  subscriber.subscribe("listen");
}
exports.updateStation = (data) =>{
  publisher.publish('listen', JSON.stringify(data))
}
 

