import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
/*
Den här klassen innehåller alla components och har funktioner som bestämmer vad som ska visas/hända
*/
export class DashboardComponent implements OnInit {
  userList:string[] = [];
  user:string;

  constructor(private authService: AuthService, private userService: UsersService) {
    this.ifLoggedIn();
    this.getUsers();
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

  //Hämtar användare från UserService och listar dem 
  getUsers() {
    this.userService.getUsers().subscribe(
      (response) => {
        const userArray = [];
        for (let i = 0; i < response.length; i++) {
          userArray.push({name:response[i].name, id:response[i].id})
        }
        this.userList = userArray;
      },
      (error) => console.log('error', error),
      () => console.log('completed')
    );
  }

}
