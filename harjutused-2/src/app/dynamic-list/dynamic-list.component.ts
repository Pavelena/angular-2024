import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamic-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.css'
})
export class DynamicListComponent {
  variable = "MinuPikkS6na";

  addWord(addWordForm: NgForm){
    console.log(addWordForm.value.word);
    this.variable += addWordForm.value.word;
  }
}
