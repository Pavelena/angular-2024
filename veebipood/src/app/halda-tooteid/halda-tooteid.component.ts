import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ToodeService } from '../services/toode.service';


@Component({
  selector: 'app-halda-tooteid',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink], //HTML asjad
  templateUrl: './halda-tooteid.component.html',
  styleUrl: './halda-tooteid.component.css'
})
export class HaldaTooteidComponent {
 tooted = this.toodeService.tooted;
 showName = false;

 //Typescript asjad
 constructor(
  private toastr: ToastrService,
  private toodeService: ToodeService
  ) {}


 kustuta(index: number){
  this.tooted.splice(index, 1);
  this.toastr.error('Edukalt kustutatud', '',{
    timeOut: 3000,
    closeButton: true,
    positionClass: "toast-bottom-right"
  });
 }
 lisa(vorm: NgForm){
  this.tooted.push(vorm.value);
  vorm.reset();
  this.toastr.success('Edukalt lisatud', '',{
    timeOut: 3000,
    closeButton: true,
    positionClass: "toast-bottom-right"
  });
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
