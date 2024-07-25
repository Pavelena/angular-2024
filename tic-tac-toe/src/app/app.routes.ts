import { Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

export const routes: Routes = [
    { path: "", component: BoardComponent},
    { path: "scoreboard", component: ScoreboardComponent}
];
