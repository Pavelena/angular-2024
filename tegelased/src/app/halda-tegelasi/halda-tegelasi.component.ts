import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { characterType } from '../models/characterType';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-halda-tegelasi',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './halda-tegelasi.component.html',
  styleUrl: './halda-tegelasi.component.css'
})
export class HaldaTegelasiComponent implements OnInit {
  message = "";
  tegelased: characterType[] = [];

  ngOnInit(): void {
    this.charactersService.dbRequest().subscribe(vastus => this.tegelased = vastus);
  }

  delete(index: number){
    this.tegelased.splice(index, 1);
    this.message = "Tegelane on kustutatud!";
    this.charactersService.dbRefresh(this.tegelased).subscribe();
  }

  add(characterAddform: NgForm){
    this.tegelased.push(characterAddform.value);
    characterAddform.reset();
    this.message = "Tegelane on lisatud!";
    this.charactersService.dbRefresh(this.tegelased).subscribe();
  }

 constructor(
  private charactersService: CharactersService
 ){}
}
