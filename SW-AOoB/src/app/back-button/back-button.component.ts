import { Component, OnInit } from '@angular/core';
import { BackService } from '../services/back.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  constructor(
    private backService:BackService
  ) { }

  ngOnInit() {
  }
  back():void{
    this.backService.homepageBack();
  }
}
