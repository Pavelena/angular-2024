import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-arvutamine',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './arvutamine.component.html',
  styleUrl: './arvutamine.component.css'
})
export class ArvutamineComponent {
  sum = 0;

  inputsSum(arvutamiseVorm: NgForm){
    console.log(arvutamiseVorm.value);
    this.sum = arvutamiseVorm.value.var1 + arvutamiseVorm.value.var2;
  }
}
