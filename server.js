import express from 'express'
import path from 'path'
import multer from 'multer'
import dotenv from 'dotenv'
import { db } from './config/db.js'
import http from 'http'
import { Server } from 'socket.io'

import commentsRouter from './routes/comment.js'

const port    = process.env.PORT || 8080
const statics = `${path.resolve()}/build`

dotenv.config()
db()

const app        = express()
const httpServer = http.createServer(app)
const sockeIO    = new Server(httpServer)

sockeIO.on('connection', socket => {
  console.log(socket.id)
})

const maxSize = 15 * 1024 * 1024
const storage = multer.diskStorage({
  destination: statics,
  filename: (req, file, callback) => callback(file.originalname)
})

const upload = multer({storage, limits: { fileSize: maxSize }})

app.use(express.json())
app.use(express.static(statics))

app.get('*', (req, res) => {
  res.sendFile(`${statics}/index.html`)
})

app.use(commentsRouter)

try {
  await app.listen(port)
  console.log(`Server listening on port: ${port}`)
} catch (e) {
  console.log(e.message)
}