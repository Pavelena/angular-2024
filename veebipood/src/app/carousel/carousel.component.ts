import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { image } from '../models/image';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  providers: [NgbCarouselConfig]
})
export class CarouselComponent {

  pildid: image[] = [];

  constructor( 
    private imageService: ImageService,
    config: NgbCarouselConfig
    ){
     config.interval = 10000;
     config.animation = false;
    }

  ngOnInit(): void {
    this.imageService.imagesRequest().subscribe(vastus => this.pildid = vastus || []);
  }

}
