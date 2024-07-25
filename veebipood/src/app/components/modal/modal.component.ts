import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @ViewChild('content') content:any;
  @Output() kustuta: EventEmitter<any> = new EventEmitter();

  open() {
		this.modalService.open(this.content);
	}

  constructor(
    private modalService: NgbModal
  ){}
}
