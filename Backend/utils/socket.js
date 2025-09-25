const { Server } = require('socket.io');

let io;

exports.init = (server) => {
  io = new Server(server, {
    cors: { origin: '*' }
  });

  io.on('connection', (socket) => {
    console.log('New user connected 😎');

    socket.on('sendMessage', (msg) => {
      io.to(msg.recipientId).emit('receiveMessage', msg);
    });

    socket.on('joinRoom', (room) => socket.join(room));

    socket.on('disconnect', () => console.log('User disconnected 👋'));
  });

  return io;
};

exports.getIo = () => io;
