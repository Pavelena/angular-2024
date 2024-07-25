import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PlayersType } from '../models/players';
import { PlayerWinsType } from '../models/playerWins';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ 
    CommonModule, 
    FormsModule
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  players!: PlayersType;
  player1!: string;
  player2!: string;
  turn = "";
  gameStart = false;
  gameOver = false;
  board:any[] = [];
  boardSize = 9;
  winner = "";
  winning_board = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  addPlayers(form: NgForm) {
    this.players = form.value;
    this.gameStart = true;

    this.player1 = this.players.player1;
    this.player2 = this.players.player2;
    
    const lastWinner = this.playersService.getLastWinner(this.player1, this.player2);
    if (lastWinner!= "Not_Played") {
      this.turn = lastWinner;
    } else {
      this.turn = this.player1;
    }
  }
  
  ngOnInit(): void {
    this.newGame();
    
  }
  newGame() {
    this.board = Array(this.boardSize).fill(null);
    this.turn = this.winner;
    this.winner = "";
    this.gameOver = false;
  };
  saveResults(winner:string) {
    this.playersService.addToStorage(this.player1, this.player2, winner);
  }

  makeMove(index:number) {
      if (!this.gameOver) {
        this.board[index] = this.turn;
        this.turn = (this.turn === this.player1) ? this.player2 : this.player1;
      

        for( let i = 0; i < this.winning_board.length; i++ ) {
          let check = this.winning_board[i];
          let p1 = check[0];
          let p2 = check[1];
          let p3 = check[2];
          if(
            this.board[p1]!="" && 
            this.board[p1] === this.board[p2] && 
            this.board[p2] === this.board[p3] &&
            this.board[p1] === this.board[p3]
            ) {
              this.winner = this.board[p1];
              break;
          }
        }
      }
      if(this.winner) {
        this.gameOver = true;
        this.saveResults(this.winner);
      }
  }

  constructor(
    private playersService: PlayersService
  ) {}
}
