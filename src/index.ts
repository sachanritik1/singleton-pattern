import { startLogger } from "./logger";
import { gameManager } from "./store";

startLogger();

setInterval(() => {
  gameManager.addGame({
    id: Math.random().toString(),
    whitePlayerName: "Alice",
    blackPlayerName: "Bob",
    moves: ["e4", "e5"],
  });
}, 5000);
