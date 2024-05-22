import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-seaded',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seaded.component.html',
  styleUrl: './seaded.component.css'
})
export class SeadedComponent {
  inputiluger = "";

  vormiSisestamine(seadedForm: NgForm){
    console.log(seadedForm.value);
  }
}
