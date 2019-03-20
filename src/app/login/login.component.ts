import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { AdminLogin } from '../admin-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/*
Formulär som låter användare logga in/logga ut, 
om användaren finns (i service) så visas dashboard
*/
export class LoginComponent implements OnInit {
  value:string;
  user:string;
  model: AdminLogin = new AdminLogin('', '');

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.status();
  }

  // Login funktion/knapp som hämtar login funktionen från service
  onSubmit():void {
    this.authService.login(this.model);
  }

  // Logout funktion/knapp som hämtar localStorage info från service och tar bort användaren som loggat in
  logout():void {
    this.authService.logout();
    this.status();
  }

  //Kollar om användaren är inloggad
  status():void {
    this.user = this.authService.checkIfLoggedIn();
  }

}
