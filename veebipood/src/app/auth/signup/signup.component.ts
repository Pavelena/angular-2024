import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FirebaseError } from '../firebase-error';
import { FirebaseResponse } from '../firebase-response';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  message = "";
  constructor( private authService: AuthService){}

  signup(signupForm: NgForm) {
    if(signupForm.value.password!==signupForm.value.repeatpassword){
      this.message = "Paroolid ei yhti";
      return;
    }
    if(!signupForm.value.gridcheck){
      this.message = "Tingimustega pole n6ustutud";
      return;
    }
    this.authService.signup(signupForm.value.email, signupForm.value.password).subscribe({
      next: (result:FirebaseResponse) => {
        console.log(result);
        this.message = "Edukalt registreeritud";
        signupForm.reset();
      },
      error: (result: FirebaseError) => {
        this.message = result.error.error.message;
      }
    })
  }
}
