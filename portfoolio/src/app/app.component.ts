import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfoolio';
  darkMode = localStorage.getItem("portfolioDarkMode") === "true";
  ngOnInit(): void {
    this.checkfDarkTheme();
  }

  changeMode(){
    this.darkMode = !this.darkMode;
    localStorage.setItem("portfolioDarkMode", this.darkMode.toString());
    this.checkfDarkTheme();
  }
  checkfDarkTheme(){
    if(this.darkMode){
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme")
    }
  }
}
