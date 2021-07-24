const socket = io('/');

socket.on('connect', () => {
    console.log('Success connect to wss server!!!');
    console.log(socket.id, 'socket.id -> client');
});