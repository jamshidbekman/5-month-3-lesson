import usersService from "../service/users.service.js";

class usersController {
  constructor(io) {
    this.io = io;
    this.usersService = new usersService();
  }
  onConnection() {
    this.io.on("connection", (socket) => {
      const data = this.usersService.countUsers("connection");
      this.io.emit("counter", data);
      socket.on("disconnect", () => {
        const data = this.usersService.countUsers("disconnect");
        this.io.emit("counter", data);
      });
    });
  }
}

export default usersController;
