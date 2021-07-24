const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

// middleware
app.use(express.static("public"));

app.get('/', (req, res) => {
    return res.sendFile(__dirname + "/public/index.html");
});

let connectedPeers = [];

io.on('connection', socket => {
    connectedPeers.push(socket.id);
    console.log(connectedPeers);

    socket.on('disconnect', () => {
        console.log('User disconnected');
        // clear leave user
        connectedPeers = connectedPeers.filter(peerSocketId => peerSocketId !== socket.id);
        console.log(connectedPeers);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})