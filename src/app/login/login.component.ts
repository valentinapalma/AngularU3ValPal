import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  value:string;
  user:string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.status();
  }

  // Login funktion/knapp som hämtar localStorage info från service & sparar användaren
  login():void {
    if (this.value !== '') {
      this.authService.login(this.value);
      alert('Welcome ' + (this.value));
      this.value = '';
    }
  }

  // Logout funktion/knapp som hämtar localStorage info från service och tar bort användaren som loggat in
  logout():void {
    this.authService.logout();
    alert("You're now logged out");
    this.status();
  }

  //Kollar om användaren är inloggad
  status():void {
    this.user = this.authService.checkIfLoggedIn();
  }

}
