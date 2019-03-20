import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
/*
Visar listan på alla användarna samt innehåller en toggle knapp som ändrar textfärg på listan
*/
export class UsersListComponent implements OnInit {
  @Input() users:string[];
  
  constructor() { }

  ngOnInit() {
  }

  isActive: boolean = false;

  // Toggle funktion som ändrar mellan true och false
  toggle():void {
     this.isActive = !this.isActive;
  }

}
