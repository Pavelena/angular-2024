import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lisa-toode',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lisa-toode.component.html',
  styleUrl: './lisa-toode.component.css'
})
export class LisaToodeComponent {
  tooted = [
    {nimi: "Coca", hind: 3, aktiivne: true, pilt: "https://www.cokesolutions.com/content/cokesolutions/site/us/en/products/brands/coca-cola/coca-cola.main-image.290-417.png"}, 
    {nimi: "Fanta", hind: 2, aktiivne: false, pilt: "https://www.bigbasket.com/media/uploads/p/xxl/251041_9-fanta-soft-drink-orange-flavoured.jpg"},
    {nimi: "Sprite", hind: 2.5, aktiivne: true, pilt: "https://www.coca-cola.com/content/dam/onexp/gb/en/product/sprite-low-cal-02.png"}
   ]

   pilt = "";
   nimi = "";
   hind = 0;
   aktiivne = false;
   message="";

   lisa(){
    if(this.nimi.charAt(0).toLowerCase()=== this.nimi.charAt(0)){
      this.message = "Toodet ei saa lisada v2ikse algust2hega!"
      return;
    }
    this.tooted.push(
      {nimi: this.nimi, hind: this.hind, aktiivne: this.aktiivne, pilt: this.pilt}
    );
    this.pilt = "";
    this.nimi = "";
    this.hind = 0;
    this.aktiivne = false;
    this.message = "";
   }
}
