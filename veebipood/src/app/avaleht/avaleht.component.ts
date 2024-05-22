import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Toode } from '../models/toode';
import { OstukorvService } from '../services/ostukorv.service';
import { ToodeService } from '../services/toode.service';

@Component({
  selector: 'app-avaleht',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './avaleht.component.html',
  styleUrl: './avaleht.component.css'
})
export class AvalehtComponent {
  tooted = this.toodeService.tooted;

  constructor(
    private toastr: ToastrService,
    private toodeService: ToodeService,
    private ostukorvService: OstukorvService
    ) {}

    lisaOstukorvi(toode: Toode) {
      // this.ostukorvService.ostukorv.push(toode);
      this.ostukorvService.lisaOstukorvi(toode);
      this.toastr.success('Ostukorvi lisatud', toode.nimi,{
        timeOut: 3000,
        closeButton: true,
        positionClass: "toast-bottom-right"
      });
    }
}
