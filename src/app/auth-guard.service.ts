import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
/*
Används för att använda Guard Service på valda komponenter.
*/
export class AuthGuardService implements CanActivate {
  user:string;

  constructor(private authService: AuthService, public router: Router) { }

  // Om användaren inte är inloggad så hänvisas det till login sidan, används för att inaktivera dashboard
  canActivate():boolean{
    this.user = this.authService.checkIfLoggedIn();
    if (!this.user) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
