import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  userId:string;
  
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.userId = params.user;
    });
  }

  ngOnInit() {
  }

}
