import { Injectable } from '@angular/core';
import { AdminFull } from './admin-full.model';

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

  constructor() { }

  // Kollar/hämtar vilken användare som är inloggad
  checkIfLoggedIn() {
    return localStorage.getItem('user');
  }

  // Sparar användaren som loggar in
  public login(user) {
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

  // Tar bort den sparade användaren
  public logout() {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
