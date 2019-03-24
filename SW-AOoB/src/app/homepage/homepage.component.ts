import { Component, OnInit, Input } from '@angular/core';
import { LogoutService} from '../services/logout.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private logoutService:LogoutService) { }
  ngOnInit() {
  }
  logout():void {
    this.logoutService.logout();
  }
}
