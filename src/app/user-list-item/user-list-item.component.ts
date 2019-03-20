import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
/*
Är till för att skapa en lista med användare
*/
export class UserListItemComponent implements OnInit {
  @Input() user:string;
  @Input() isActive:boolean;

  constructor() { }

  ngOnInit() {
  }

}
