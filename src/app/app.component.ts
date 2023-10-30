import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title: string;
  firstName: string;
  lastName: string;

  constructor() {
    this.title = 'angular 14/15 Step by Step';
    this.firstName = 'Glaz';
    this.lastName = 'Dodo';
  }

  ngOnInit(): void {
      
  }
}
