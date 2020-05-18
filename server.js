const app = require('./app')
const http = require('http');
const server = http.createServer(app)
const PORT = process.env.PORT || 3001
var io = require('socket.io')(http);
const socket = require('./socket/init')
const redis = require('./redis/init')

//Setup the http server
server.listen(PORT,()=>{
  console.log(`Server has started at ${PORT}`)
})

//setup the websocket server
io.listen(3002)

//Initialise websocket connection
socket.init(io)

//Initialise the redis channel
redis.init(io)


