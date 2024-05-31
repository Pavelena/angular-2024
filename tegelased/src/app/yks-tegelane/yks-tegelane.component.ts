import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { characterType } from '../models/characterType';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-yks-tegelane',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './yks-tegelane.component.html',
  styleUrl: './yks-tegelane.component.css'
})
export class YksTegelaneComponent implements OnInit {
  tegelane!: characterType;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ){}

  ngOnInit(): void {
    const tegelaseUrl = this.route.snapshot.params["first"];
    if (tegelaseUrl === null){
      return;
    }

    this.charactersService.dbRequest().subscribe(vastus => {
      const character = vastus.find(t => t.first === tegelaseUrl);
      if (character !== undefined){
        this.tegelane = character;
      }
      this.isLoading = false;
    });
  }
}
