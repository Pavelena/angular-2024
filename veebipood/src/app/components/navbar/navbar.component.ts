import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../auth/auth.service';
import { PricePipe } from '../../pipes/price.pipe';
import { TotalSumService } from '../../services/total-sum.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    CommonModule,
    TranslateModule,
    PricePipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  keel = localStorage.getItem("keel") || "est";
  darkMode = localStorage.getItem("isDarkMode") === "true";
  totalSum = 0;
  loggedIn = false;

  constructor(
    private translate: TranslateService,
    private totalSumService: TotalSumService,
    private authService: AuthService,
    private router: Router
    ) {
    // translate.setDefaultLang('en');
    // translate.use('en');
  }

  ngOnInit(): void {
    this.checkfDarkTheme();

    //rxjs
    //this.totalSum = this.totalSumService.totalSum;
    this.totalSumService.totalSum.subscribe(sum => {
      this.totalSum = sum;
    });

    this.authService.loggedin.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    })
    //this.totalSumService.totalSum.next("105") kui oleks Subject(), aga meil pole vaja, kuna BehaviorSubject juba k'ivitab 1 korra
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

  logout() {
    this.authService.loggedin.next(false);
    sessionStorage.removeItem("token");
    this.router.navigateByUrl("/");
  }
}
