import { Component } from '@angular/core';
import { PlayerWinsType } from '../models/playerWins';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent {

  winners!: PlayerWinsType[];

  ngOnInit(): void {
    this.winners = this.playersService.storageRequest();
    this.winners.sort((a,b)=> b.wins - a.wins);
  }

  constructor(
    private playersService: PlayersService
  ) {}
}
