import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Funktion som navigerar till login sidan
  onLoginNavi():void {
    this.router.navigate(['/login']);
  }

  // Funktion som navigerar till dashboard
  onDashNavi():void {
    this.router.navigate(['/dashboard']);
  }

}
