import { Component, OnInit } from '@angular/core';
import { LogoutService} from '../services/logout.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {

  constructor(
    private logoutService:LogoutService
  ) { }

  ngOnInit() {
  }
  logout():void {
    this.logoutService.logout();
  }
}
