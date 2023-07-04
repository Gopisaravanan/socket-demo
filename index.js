const express = require('express')
const path = require('path')


const app = express();

const port = 5001

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"src/index.html"))
})

// http connection

const http = require('http').Server(app)

// attached http server to socket  
const io = require('socket.io')(http)

// create a new connection
io.on('connection',socket =>{
console.log("user connected")

socket.on("disconnect",()=> {
    console.log("user disconnected")
})

socket.on("message",msg => {
    console.log(`client message ${msg}`)
})

socket.emit('server','hello from server')
socket.emit('server1','hi from server')
socket.emit('server3','meooowwww')
socket.emit('server','hey from server')


})




http.listen(port, () => {
    console.log(`server running on ${port}`)
})