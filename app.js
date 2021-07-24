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

io.on('connection', socket => {
    console.log('User connected to socket.IO server: ' + socket.id);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})