import { Routes } from '@angular/router';
import { ShipmentTabelComponent } from './shipment-tabel/shipment-tabel.component';

export const routes: Routes = [
    {path: '', redirectTo: '/shipmentTabel', pathMatch: 'full'},
    {path: 'shipmentTabel', component: ShipmentTabelComponent}
];
