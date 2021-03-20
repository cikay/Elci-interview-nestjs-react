const httpServer = require('http').createServer();

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('send-postedProblem', ({ postedProblem }) => {
    socket.broadcast.to(opponentId).emit('receive-postedProblem', {
      postedProblem,
    });
  });
});

httpServer.listen(5000);
