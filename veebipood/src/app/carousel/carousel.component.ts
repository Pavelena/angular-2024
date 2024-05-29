import { Component } from '@angular/core';
import { image } from '../models/image';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  pildid: image[] = [];

  constructor( private imageService: ImageService){}

  ngOnInit(): void {
    this.imageService.imagesRequest().subscribe(vastus => this.pildid = vastus || []);
  }

}
