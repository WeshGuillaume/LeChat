
import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import socketIo from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

io.on('connection', socket => {
  console.log('Client connected on socket server')

  socket.emit('room:incomming-message', 'Heeeyyy!!')
})

server.listen(3001, () => console.log(`Socket server listening on port 3001`))
