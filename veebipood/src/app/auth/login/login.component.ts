import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   constructor(
    private authService: AuthService
   ){}

   login() {
    this.authService.loggedin.next(true);
    sessionStorage.setItem("token","123")
   }
}
