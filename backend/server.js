const app = require("./src/app");
const http = require("http");
const socketService = require("./src/services/socket");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

//this function will start socket service
socketService(io);

server.listen("5000", () => {
  console.log("Server started on http://localhost:5001");
});
