import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //Skapar exempel på användare
  userList:string[] = ['Aja', 'Aquaria', 'Jinkx', 'Peppermint', 'Vivacious'];
  user:string;

  constructor(private authService: AuthService) {
    this.ifLoggedIn();
   }

  ngOnInit() {
  }

  //Kollar om användaren är inloggad för att visa dashboard innehållet
  ifLoggedIn():void {
    this.user = this.authService.checkIfLoggedIn();
  }

  //Lägger till ny användare till listan
  onAddUser(user:string):void {
    this.userList.push(user);
  }

  //Tar bort den senaste användaren från listan
  onRemoveUser():void {
    this.userList.pop()
  }

}
