import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from '../components/loader/loader.component';
import { VideoCardComponent } from '../components/video-card/video-card.component';
import { VideoType } from '../model/video';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [ 
    VideoCardComponent,
    NgbPaginationModule,
    CommonModule,
    LoaderComponent
  ],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {
  isLoaded = false;
  videos!: VideoType[];
  embedLink!: any;
  page = 1;
  pageSize = 24;
  maxSize = 5;

  constructor(
    private requestsService: RequestsService,
    public sanitizer:DomSanitizer
  ) {}

  ngOnInit(): void {
    this.requestsService.requestVideos().subscribe(response => {
      this.videos = response.videos;
      this.isLoaded = true;
    })
  }
}
