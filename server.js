const app = require('./app')
const http = require('http');
const server = http.createServer(app)
const PORT = process.env.PORT || 3001
var io = require('socket.io')(http);
const socket = require('./socket/init')
const redis = require('./redis/init')

server.listen(PORT,()=>{
  console.log(`Server has started at ${PORT}`)
})


io.listen(3002)
socket.init(io)
redis.init(io)


