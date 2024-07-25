import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OstukorvService } from './ostukorv.service';

@Injectable({
  providedIn: 'root'
})
export class TotalSumService {
  //totalSum = 100;

  totalSum = new BehaviorSubject(this.kokku()); // l2heb k2ima 1 korra ja siis kui ta k2ivitatakse
  //       = new Subject() --> l2heb k2ima siis kui ta k2ivitatakse

  constructor(
    private ostukorvService: OstukorvService
  ) { }

  kokku() {
    let sum = 0;
    this.ostukorvService.saaOstukorv().forEach(t => sum += t.kogus * t.toode.hind);
    return sum;
  }
}
