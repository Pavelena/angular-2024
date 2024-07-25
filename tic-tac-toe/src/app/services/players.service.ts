import { Injectable } from '@angular/core';
import { LastWinner } from '../models/lastWinner';
import { PlayerWinsType } from '../models/playerWins';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  score: PlayerWinsType[] = [];

  storageRequest(): PlayerWinsType[] {
    return JSON.parse(localStorage.getItem("historyPlayers") || "[]");
  }

  getLastWinner(p1: string, p2:string): string {
    const games: LastWinner[] = JSON.parse(localStorage.getItem("lastWinner") || "[]");
    const index = games.findIndex(g => 
      g.player1 === p1 && g.player2 === p2 ||
      g.player1 === p2 && g.player2 === p1
      );
    if (index >= 0) {
      return games[index].lastWinner;
    } else {
      return "Not_Played";
    }
  }

  addToStorage(p1: string, p2:string, winner: string){
    this.addLastWinner(p1, p2, winner);
    this.addWinner(winner);
  }

  private addLastWinner(p1: string, p2:string, winner: string) {
    const games: LastWinner[] = JSON.parse(localStorage.getItem("lastWinner") || "[]");
    const index = games.findIndex(g => 
      g.player1 === p1 && g.player2 === p2 ||
      g.player1 === p2 && g.player2 === p1
      );
    if (index >= 0) {
      games[index].lastWinner = winner;
    } else {
      games.push({player1: p1, player2: p2, lastWinner: winner});
    }
    localStorage.setItem("lastWinner", JSON.stringify(games));
  }

  private addWinner(winner: string) {
    const winners: PlayerWinsType[] = JSON.parse(localStorage.getItem("historyPlayers") || "[]");
    const index = winners.findIndex(t => t.name === winner);
    if (index >= 0) {
      winners[index].wins++;
    } else {
      winners.push({wins: 1, name: winner});
    }
    localStorage.setItem("historyPlayers", JSON.stringify(winners));
  }

  constructor() { }
}
