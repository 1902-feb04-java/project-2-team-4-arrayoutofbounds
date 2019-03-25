import { Component, OnInit, Input } from '@angular/core';
import { Officer } from '../models/Officer';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user:Officer;
  constructor() { }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user)
  }
}
