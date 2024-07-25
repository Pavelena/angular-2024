import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
  @Input() video_embed = "";
  @Input() video_thumb = "";
  @Input() video_title = "";

  embedLink!: any;

  constructor (
    public sanitizer:DomSanitizer,
    private modalService: NgbModal,
    config: NgbModalConfig,
  ) {
    config.backdrop = 'static';
    config.size = "xl";
    config.centered = true;
    config.modalDialogClass = "yt-modal";
  }

  playVideo(content:any, link:any){
    this.embedLink = this.sanitizer.bypassSecurityTrustResourceUrl(link);
    this.modalService.open(content);
  }
}
