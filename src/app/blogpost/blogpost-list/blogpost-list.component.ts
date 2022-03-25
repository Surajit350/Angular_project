import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  title='For Vegetarian';
  title1='For Non Vegetarian';
  title2='For Dessert';
  title3='For 30% offer';
  title4='For 20% offer';
  title5='For Starter';
  constructor() { }

  ngOnInit(): void {
  }

}
