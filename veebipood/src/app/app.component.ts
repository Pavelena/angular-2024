
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MapComponent } from './map/map.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    CommonModule, 
    MapComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veebipood';
  keel = localStorage.getItem("keel") || "est";
  darkMode = localStorage.getItem("isDarkMode") === "true";

  constructor(private translate: TranslateService) {
    // translate.setDefaultLang('en');
    // translate.use('en');
  }

  ngOnInit(): void {
    this.checkfDarkTheme();
  }

  muudaKeel(uusKeel: string){
    this.keel = uusKeel;
    localStorage.setItem("keel",this.keel);
    this.translate.use(uusKeel);
  }
  muudaMode(){
    this.darkMode = !this.darkMode;
    localStorage.setItem("isDarkMode", this.darkMode.toString());
    this.checkfDarkTheme();
  }
  checkfDarkTheme(){
    // if(this.darkMode){
    //   document.body.classList.add("dark-theme");
    // } else {
    //   document.body.classList.remove("dark-theme")
    // }
  }
}
