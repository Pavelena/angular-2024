import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Kategooria } from '../models/kategooria';
import { Toode } from '../models/toode';
import { KategooriaService } from '../services/kategooria.service';
import { ToodeService } from '../services/toode.service';


@Component({
  selector: 'app-halda-tooteid',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, TranslateModule], //HTML asjad
  templateUrl: './halda-tooteid.component.html',
  styleUrl: './halda-tooteid.component.css'
})
export class HaldaTooteidComponent  implements OnInit {
 tooted: Toode[] = [];
 kategooriad: Kategooria[] = [];
 showName = false;

 //Typescript asjad
 constructor(
  private toastr: ToastrService,
  private toodeService: ToodeService,
  private kategooriaService: KategooriaService
  ) {}

  ngOnInit(): void {
    this.toodeService.saaTooted().subscribe(vastus => this.tooted = vastus);
    this.kategooriaService.saaKategooriad().subscribe(vastus => this.kategooriad = vastus);
  }

 kustuta(index: number){
  this.tooted.splice(index, 1);
  this.toastr.error('Edukalt kustutatud', '',{
    timeOut: 3000,
    closeButton: true,
    positionClass: "toast-bottom-right"
  });
  this.toodeService.uuendaTooted(this.tooted).subscribe();
 }
 lisa(vorm: NgForm){
  this.tooted.push(vorm.value);
  vorm.reset();
  this.toastr.success('Edukalt lisatud', '',{
    timeOut: 3000,
    closeButton: true,
    positionClass: "toast-bottom-right"
  });
  this.toodeService.uuendaTooted(this.tooted).subscribe();
 }
 changeShowName(){
  this.showName = !this.showName;
 }
 isNimiInvalid(tooteVorm: NgForm):boolean {
  if (tooteVorm.controls['nimi']=== undefined) {
    return true;
  }
  return tooteVorm.controls['nimi'].touched && tooteVorm.value.nimi.includes('c')===false;
 }
}
