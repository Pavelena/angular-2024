import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-performer-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './performer-card.component.html',
  styleUrl: './performer-card.component.scss'
})
export class PerformerCardComponent {
  @Input() video_embed = "";
  @Input() thumb = "";
  @Input() video_title = "";
  @Input() country_name = "";
  @Input() country_flag = "";
  @Input() jrk = 0;
  @Input() year = 0;
  @Input() performer = "";
  @Input() song = "";

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
