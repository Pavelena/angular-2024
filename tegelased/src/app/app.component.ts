import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tegelased';

  constructor(private translate: TranslateService) {}

  lang = localStorage.getItem("lang") || "et";

  changeLang(uusKeel: string){
    this.lang = uusKeel;
    localStorage.setItem("lang",this.lang);
    this.translate.use(this.lang);
    //this.document.documentElement.lang = this.lang;
  }
}