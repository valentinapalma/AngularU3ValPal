import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
/*
Sida som renderas om router till en sida inte finns
*/
export class PageNotFoundComponent implements OnInit {
  page = 'PAGE NOT FOUND';

  constructor() { }

  ngOnInit() {
  }

}
