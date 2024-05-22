import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { characterType } from '../models/characterType';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-muuda-tegelane',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './muuda-tegelane.component.html',
  styleUrl: './muuda-tegelane.component.css'
})
export class MuudaTegelaneComponent implements OnInit {
  tegelane!: characterType;
  index!: number;
  changeCharacterForm!: FormGroup;

  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute, // url-st info k2ttesaamiseks
    private router: Router //ymbersuunamiseks
  ){}

  ngOnInit(): void {
    const tegelaseUrl = this.route.snapshot.params["first"];
    if (tegelaseUrl === null){
      return;
    }
    const character = this.characterService.characterArray.find(c => c.first === tegelaseUrl);
    if (character !== undefined){
      this.tegelane = character;
      this.index = this.characterService.characterArray.indexOf(character);
      this.changeCharacterForm = new FormGroup({
        "first": new FormControl(character.first),
        "last": new FormControl(character.last),
        "home": new FormControl(character.home),
        "image": new FormControl(character.image)
      });
    }
  }
  changeCharacter(){
    this.characterService.characterArray[this.index] = this.changeCharacterForm.value;
    this.router.navigateByUrl('/halda-tegelasi');
  }
}
