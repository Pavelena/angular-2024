import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ 
    CommonModule,
    RouterLink
   ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() year = 0;
  @Input() jrk = 0;
  @Input() thumb = "";
  @Input() city = "";
  @Input() country_name = "";
  @Input() country_flag = "";
  
}
