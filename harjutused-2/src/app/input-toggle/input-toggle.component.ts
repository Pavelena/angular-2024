import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-input-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-toggle.component.html',
  styleUrl: './input-toggle.component.css'
})
export class InputToggleComponent {
  visible = true;

  showOrHide(){
    this.visible = !this.visible;
  }
}
