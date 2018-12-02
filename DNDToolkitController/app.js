let express = require('express')();
var server = require('http').Server(express);
let io = require('socket.io')(server);

let cors = require('cors');

express.use(cors());

io.on('connection', function(socket) {
    let connectionId = Math.floor(Math.random() * 99999);
    console.log('Connect Initiated, connectionId: ' + connectionId);

    socket.on('newRoom', roomId => {
        socket.join(roomId);
        console.log("Joined room: " + roomId);
    })

    socket.on('newPlayer', playerId => {
        console.log('new player: ' + playerId)
        socket.broadcast.emit('playerConnected', playerId);
    });

    socket.on('disconnect', () => {
        console.log('Disconnect Initiated, connectionId: ' + connectionId);
    });
});

server.listen(5000, function(){
    console.log('listening on *:5000');
});