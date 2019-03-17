import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
App komponenten. Klassen används för att skriva ut titel och författare av arbetet.
*/
export class AppComponent {
  title = 'Angular - Uppgift 2';
  author = 'Valentina Palma';
}
