let express = require('express')();
let server = require('http').Server(express);
let io = require('socket.io')(server);
let cors = require('cors');

express.use(cors());

io.on('connection', socket => {
    let room = socket.handshake['query']['room'];
    if (room == undefined) { room = 'default' };

    socket.join(room);
    console.log('Socket ' + socket.id + ' connected in room ' + room);

    socket.on('joinRoom', (newRoom, id) => {
        console.log('Socket ' + socket.id + ' leaving room ' + room);
        socket.leave(room);
        room = newRoom;
        console.log('Socket ' + socket.id + ' joining room ' + room);
        socket.join(room);
        io.to(room).emit('playerJoinedRoom', id);
    });

    socket.on('disconnect', () => {
        socket.leave(room);
        console.log('Socket: ' + socket.id + ' disconnected');
    });
});

server.listen(5000, () => {
    console.log('Controller initialized and listening on *:5000');
});