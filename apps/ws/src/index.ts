import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();

wss.on("connection", function connection(ws) {
  const userId = Math.random().toString();

  gameManager.addUser({ socket: ws, id: userId });
  ws.on("disconnect", () => {
    gameManager.removeUser(ws, userId);
  });
});
