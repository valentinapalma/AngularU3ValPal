import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsersService } from '../users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
/*
Komponent som visar en enskild användare från JSONPlaceholder om man trycker på den
*/
export class SingleUserComponent implements OnInit {
  user:object;
  userId:number;
  
  constructor(private route: ActivatedRoute, private userService:UsersService) { 
    this.route.params.subscribe(params => {
      this.userId = params.user;
    });
  }

  ngOnInit() {
    this.getUser();
  }

  //Hämtar den individuella användaren man klickar på från UsersService
  getUser() {
    this.userService.getUser(this.userId).subscribe(
      (response) => {
        this.user = response;
      },
      (error) => console.log('error', error),
      () => console.log('completed')
    );
  }

}
