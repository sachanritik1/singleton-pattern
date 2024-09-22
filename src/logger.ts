import { gameManager } from "./store";

export function startLogger() {
  setInterval(() => {
    console.log(gameManager.getGames());
    console.log("---------------------------------------");
  }, 5000);
}
