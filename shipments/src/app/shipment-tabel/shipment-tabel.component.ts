import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShipmentTabelService } from './shipment-tabel.service';
import { ShipmentsType } from './shipments';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipment-tabel',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    FormsModule, 
    LoaderComponent,
    CommonModule
  ],
  templateUrl: './shipment-tabel.component.html',
  styleUrl: './shipment-tabel.component.css'
})
export class ShipmentTabelComponent implements OnInit {
  shipments: ShipmentsType[] = [];
  shipmentDetails!: FormGroup; //Form
  index!: number;
  isLoading = true;

  ngOnInit(): void {
      this.shipmentTabelService.getShipments().subscribe(vastus => {
        this.shipments = vastus; 
        this.isLoading = false;
      });
  }

  deleteRow(index: number) {
    this.shipments.splice(index, 1);
  }
  viewDetails(index: number) {
    //console.log(this.shipments[index].orderNo);
    this.index = index;
    const shipmentDetail = this.shipments[this.index];

    this.shipmentDetails = new FormGroup({
      "orderNo": new FormControl(shipmentDetail.orderNo),
      "date": new FormControl(shipmentDetail.date),
      "customer": new FormControl(shipmentDetail.customer),
      "trackingNo": new FormControl(shipmentDetail.trackingNo),
      "consignee": new FormControl(shipmentDetail.consignee),
      "status": new FormControl(shipmentDetail.status)
    });
  }
  open(content: any) {
		this.modalService.open(content);
	}
  changeDetails(){
    this.shipments[this.index] = this.shipmentDetails.value;
  }

  constructor(
    private shipmentTabelService: ShipmentTabelService,
    config: NgbModalConfig,
		private modalService: NgbModal
  ){
    config.backdrop = 'static';
    config.size = "xl";
  }
}
