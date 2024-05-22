
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veebipood';
  keel = localStorage.getItem("keel") || "est";
  darkMode = localStorage.getItem("isDarkMode") === "true";

  ngOnInit(): void {
    this.checkfDarkTheme();
  }

  muudaKeel(uusKeel: string){
    this.keel = uusKeel;
    localStorage.setItem("keel",this.keel);
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
