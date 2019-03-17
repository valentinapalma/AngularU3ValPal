import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  value:string = '';

  @Input() userL:string[];
  @Output() addUser = new EventEmitter<string>();
  @Output() removeUser = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  // om input är ifyllt så emittar den värdet och återställer input
  onClickAdd():void {
    if (this.value !== '') {
      this.addUser.emit(this.value);
      this.value = '';
    }
  }

  // emittar ta bort funktionen
  onClickRemove():void {
    this.removeUser.emit();
  }

}
