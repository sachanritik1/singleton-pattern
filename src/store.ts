interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

// export const games: Game[] = [];

class GameManager {
  private games: Game[] = [];

  /* singleton pattern code start */

  private constructor() {
    this.games = [];
  }

  private static instance: GameManager;

  public static getInstance() {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  /* singleton pattern code end */

  public addGame(game: Game) {
    this.games.push(game);
  }

  public getGames() {
    return this.games;
  }
}

// export const gameManager = new GameManager();
export const gameManager = GameManager.getInstance();
