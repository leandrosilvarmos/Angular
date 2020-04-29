import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games = new Array<Game>();
  private autoGenerateId = 0;

  constructor() { }

  insert(game: Game) {
    game.id = this.autoGenerateId;
    this.games.push(game);
    this.autoGenerateId++;
  }

  list(): Array<Game> {
    return this.games;
  }


  remove(id: number) {
    for (let i = 0; i < this.games.length; i++) {
      let m = this.games[i];

      if (m.id === id) {
        this.games.splice(i, 1);
        break;
      }
    }
  }

  update(game: Game) {
    for (let i = 0; i < this.games.length; i++) {
      let g = this.games[i];
      if(g.id === game.id){
        this.games[i] = game;
        break;
      }
    }

  }
}
