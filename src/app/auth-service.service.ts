import { Injectable } from '@angular/core';
import { AdminFull } from './admin-full.model';
import { AdminLogin } from './admin-login.model';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
/*
Olika egenskaper och metoder som kan hämtas och användas i olika komponenter
*/
export class AuthService {
  loggedUser:string;

  public admins:AdminFull[] = [{
    firstName:'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    password: '1234567890'
  }, {
    firstName: 'Kylie',
    lastName: 'Johnson',
    email: 'kylie.johnson@email.com',
    password: '0987654321'
  }];

  constructor(private router: Router) { }

  // Kollar/hämtar vilken användare som är inloggad
  checkIfLoggedIn() {
    return localStorage.getItem('user');
  }

  // Sparar användaren som loggar in och kollar så att användaren loggar in med redan existerande 
  public login(user:AdminLogin) {
    for (let i = 0; i < this.admins.length; i++) {
      if (user.email === this.admins[i].email && user.password === this.admins[i].password) {
        localStorage.setItem('user', user.email);
        this.router.navigateByUrl('/dashboard');
        break;
      }
    }
  }

  // Tar bort den sparade användaren
  public logout() {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
