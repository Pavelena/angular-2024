import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harjutused';

  n2itaKollast = false;
  n2itaRohelist = false;
  n2itaSinist = false;
  n2itaPunast = false;

  day = 6;
  month = "mai";

  onClick(){
    this.n2itaKollast = !this.n2itaKollast;
    console.log(this.n2itaKollast);
  }
  onMouseenter(){
    this.n2itaRohelist = true;
    console.log(this.n2itaRohelist);
  }
  onMouseleave(){
    this.n2itaRohelist = false;
    console.log(this.n2itaRohelist);
  }
  onBlur(){
    this.n2itaPunast = true;
    console.log(this.n2itaPunast);
    setInterval(()=>{
      this.n2itaPunast = false;
      console.log(this.n2itaPunast);
    },2000)
  }
  onKeypress(){
    window.alert("Vajutasid klaviatuuril!");
  }
  liidaArv(){
    this.day = this.day + 2;
    this.month = this.month + 2;
  }
}
