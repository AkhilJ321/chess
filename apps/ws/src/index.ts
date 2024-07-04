import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";
import { extractUserId } from "./auth";
import url from "url";
const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();

wss.on("connection", function connection(ws, req) {
  // @ts-ignore overload
  const token: string = url.parse(req.url, true).query.token;
  const userId = extractUserId(token);

  gameManager.addUser({ socket: ws, id: userId });
  ws.on("disconnect", () => {
    gameManager.removeUser(ws, userId);
  });
});
