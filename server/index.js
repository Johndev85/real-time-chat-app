import express from "express"
import http from "http"
import { Server as SocketServer } from "socket.io"
import { resolve } from "path"
import cors from "cors"
import morgan from "morgan"

import { PORT } from "./config.js"

//initializations
const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {})

// Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))

app.use(express.static(resolve("frontend/dist")))

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
server.listen(PORT)

console.log("server running at", PORT)
