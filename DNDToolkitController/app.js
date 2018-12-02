let express = require('express')();
var server = require('http').Server(express);
let io = require('socket.io')(server);

let cors = require('cors');

express.use(cors());

io.on('connection', function(socket) {

    let room = socket.handshake['query']['room'];
    
    if (room == undefined) { room = 'default'; }

    socket.join(room);

    console.log('Socket ' + socket.id + ' connected to default namespace in room ' + room);

    socket.on('rollInitiative', () => {
        io.to(room).emit('rollInitiative');
    });

    socket.on('encounterStarting', data => {
        console.log('encounter starting: ' + JSON.stringify(data));
        data.participants.forEach(element => {
            io.emit('callingPlayers', {
                room: data.room,
                id: element.id
            });
        });
    });

    socket.on('joinRoom', (room, playerId) => {
        console.log('leaving room ' + this.room);
        socket.leave(this.room);
        this.room = room;
        console.log('joining room ' + this.room);
        socket.join(this.room);
        io.to(room).emit('playerConnected', playerId)
    })

    socket.on('disconnect', () => {
        socket.leave(room);
        console.log('Socket ' + socket.id + ' disconnected from default namespace');
    });
});

// setInterval(() => {
//     namespaces.forEach(namespace => {
//         let connectedSockets = Object.keys(namespace.connected);
//         console.log(namespace.name + ' has ' + connectedSockets.length + ' connected sockets...')
//         if (connectedSockets.length == 0) {
//             console.log(namespace.name + ' has no connected sockets... performing clean up...');
//             namespace.removeAllListeners();
//             delete io.nsps[namespace];
//         }
//     })
// }, 5000);
    


server.listen(5000, function(){
    console.log('listening on *:5000');
});