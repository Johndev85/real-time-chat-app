import express from "express"
import http from "http"
import { Server as SocketServer } from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server)

io.on("connection", (socket) => {
  console.log(socket.id)

  socket.on("message", (body) => {
    socket.broadcast.emit("message", {
      body,
      from: socket.id.slice(0, 6),
    })
    console.log(body)
  })
})

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>")
})

server.listen(3000, () => {
  console.log("server running at http://localhost:3000")
})
