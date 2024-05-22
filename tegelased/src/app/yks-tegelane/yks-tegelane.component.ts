import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { characterType } from '../models/characterType';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-yks-tegelane',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './yks-tegelane.component.html',
  styleUrl: './yks-tegelane.component.css'
})
export class YksTegelaneComponent implements OnInit {
  tegelane!: characterType;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ){}

  ngOnInit(): void {
    const tegelaseUrl = this.route.snapshot.params["first"];
    if (tegelaseUrl === null){
      return;
    }
    const character = this.charactersService.characterArray.find(t => t.first === tegelaseUrl);
    if (character !== undefined){
      this.tegelane = character;
    }
  }
}
