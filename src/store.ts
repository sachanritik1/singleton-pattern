interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

// export const games: Game[] = [];

class GameManager {
  private games: Game[] = [];

  constructor() {
    this.games = [];
  }

  public addGame(game: Game) {
    this.games.push(game);
  }

  public getGames() {
    return this.games;
  }
}

export const gameManager = new GameManager();
