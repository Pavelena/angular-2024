import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kinkekaart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kinkekaart.component.html',
  styleUrl: './kinkekaart.component.css'
})
export class KinkekaartComponent {
  kogus = 1;
  summa = 20;

  muudaSumma(uusSumma: number){
    this.summa = uusSumma;
  }

  vahenda() {
    this.kogus -= 1;
  }
  suurenda() {
    this.kogus += 1;
  }
  nulli(){
    this.kogus = 1;
  }
}
