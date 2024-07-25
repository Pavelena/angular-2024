import { DatePipe, JsonPipe, PercentPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Toode } from '../../models/toode';
import { PricePipe } from '../../pipes/price.pipe';
import { ShortenerPipe } from '../../pipes/shortener.pipe';

@Component({
  selector: 'app-toode',
  standalone: true,
  imports: [
    RouterLink,
    ShortenerPipe,
    PricePipe,
    DatePipe,
    PercentPipe,
    JsonPipe
  ],
  templateUrl: './toode.component.html',
  styleUrl: './toode.component.css'
})
export class ToodeComponent {
  @Input("toode") toode!:Toode;
  @Output() addToCart: EventEmitter<Toode> = new EventEmitter();
  //outputile tuleb emittida

  // ostukorvi(toode: Toode) {
  //   this.addToCart.emit(toode);
  // }
}
