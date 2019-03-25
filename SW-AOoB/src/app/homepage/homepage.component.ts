import { Component, OnInit, Input } from '@angular/core';
import { Officer } from '../models/Officer';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  officer: Officer
  constructor() { }
  ngOnInit() {
    this.officer = JSON.parse(localStorage.getItem('officer'))
    console.log(this.officer)
  }
}
