import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VideoType } from '../model/video';
import { SanitizerPipe } from '../pipes/sanitizer.pipe';
import { RequestsService } from '../services/requests.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterLink } from '@angular/router';
import { VideoCardComponent } from '../components/video-card/video-card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ 
    SanitizerPipe,
    CommonModule,
    SlickCarouselModule,
    VideoCardComponent,
    RouterLink
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  title!: any;
  videos: VideoType[] = [];
  isLoaded = false;

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4, "infinite": false};
  singleSlideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "infinite": true, "speed": 900, "dots": true, "autoplay": true,};

  constructor(
    private requestsService: RequestsService
  ){}

  ngOnInit(): void {
    this.requestsService.requestHomepage().subscribe(response => {
      this.title = response;
      this.videos = response.videos;
      this.isLoaded = true;
    });
  }
}
