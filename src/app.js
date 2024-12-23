import express from "express";
import { Server } from "socket.io";
import usersController from "./controller/users.controller.js";

const app = express();

const PORT = 4000;
const server = app.listen(PORT, () => {
  console.log("Server is running port", PORT);
});

const io = new Server(server);

const usersControl = new usersController(io);
usersControl.onConnection();
