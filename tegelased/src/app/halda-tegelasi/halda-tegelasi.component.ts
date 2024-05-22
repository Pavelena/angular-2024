import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-halda-tegelasi',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './halda-tegelasi.component.html',
  styleUrl: './halda-tegelasi.component.css'
})
export class HaldaTegelasiComponent {
  message = "";
  tegelased = this.charactersService.characterArray;

  kustuta(index: number){
    this.tegelased.splice(index, 1);
    this.message = "Tegelane on kustutatud!";
  }

  add(characterAddform: NgForm){
    this.tegelased.push(characterAddform.value);
    characterAddform.reset();
    this.message = "Tegelane on lisatud!";
    
  }

 constructor(
  private charactersService: CharactersService
 ){}
}
