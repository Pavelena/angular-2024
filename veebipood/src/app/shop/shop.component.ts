import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { shop } from '../models/shop';
import { ShopsService } from '../services/shops.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  poed: shop[] = [];

  constructor( private shopsService: ShopsService){}

  ngOnInit(): void {
    this.shopsService.shopsRequest().subscribe(vastus => this.poed = vastus || []);
  }
  lisa(vorm:NgForm){
    this.poed.push(vorm.value);
    this.shopsService.shopsRefresh(this.poed).subscribe();
    vorm.reset();
  }
  kustuta(index:number){
    this.poed.splice(index,1);
    this.shopsService.shopsRefresh(this.poed).subscribe();
  }
}
