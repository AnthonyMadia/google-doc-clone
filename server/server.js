// io object allows us to interact with our connections
const io = require('socket.io')(3001, {
    cors: {
        origin: "http://localhost:3000",
        // socket.io uses Get and Post only
        methods: ["GET", "POST"]
    }
})

// every time client connects it will run this connection and give us a socket to communicate back to our client
io.on("connection", socket => {
    socket.on('send-changes', delta => {
        // On current socket, broadcast this to everyone else
        // except for me
        // delta are the changes that others will see
        socket.broadcast.emit('receieve-changes', delta)
    })
})