const app = require('./app')
const http = require('http');
const server = http.createServer(app)
const HTTP_PORT = process.env.HTTP_PORT || 3000
const SOCKET_PORT = process.env.SOCKET_PORT || 3000
var io = require('socket.io')(http);
const socket = require('./socket/init')
const redis = require('./redis/init')

//Setup the http server
server.listen(HTTP_PORT,()=>{
  console.log(`Web server has started at ${HTTP_PORT}`)
})

//setup the websocket server
io.listen(SOCKET_PORT)
console.log(`Socket server has started at ${SOCKET_PORT}`)

//Initialise websocket connection
socket.init(io)

//Initialise the redis channel
redis.init(io)


