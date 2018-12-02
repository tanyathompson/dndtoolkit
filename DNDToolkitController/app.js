let express = require('express')();
var server = require('http').Server(express);
let io = require('socket.io')(server);

let cors = require('cors');

express.use(cors());

let connectedSockets = []

io.on('connection', function(socket) {
    connectedSockets.push(socket);
    let connectionId = Math.floor(Math.random() * 99999);
    console.log('Connect Initiated, connectionId: ' + connectionId);

    socket.on('hi', function(id) {
        let oldConnectionId = connectionId;
        connectionId = id;
        console.log("connectionId updated from " + oldConnectionId + " to " + connectionId);

        socket.join(connectionId);
        console.log('Joined room: ' + connectionId);

        socket.on('test', function(message) {
            console.log('Received message ' + message + ' in room ' + connectionId);
        })
    })

    socket.on('disconnect', function() {
        console.log('Disconnect Initiated, connectionId: ' + connectionId);
    });
});

server.listen(5000, function(){
    console.log('listening on *:5000');
});

setInterval(function() {
    console.log('Connected sockets: ' + connectedSockets);
}, 3000);

while(true) {
    console.log('game loop');
}
