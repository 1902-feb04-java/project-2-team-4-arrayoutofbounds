import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Officer } from '../officer';
import {OfficerService} from '../officer.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public router: Router,private officerService:OfficerService) { }
  user: Officer[];
  
  @Input() 
  credentials = { username:'user', password:'pass'};

  getUser(): void {
    this.officerService.getUser(this.credentials.username,this.credentials.password)
    .subscribe(user => {
      localStorage.setItem('currentUser',user.firstName);
      this.user = user._embedded.officers;
      this.router.navigate(['home']);
    })
  }

  logout(){
    localStorage.removeItem('curerntUser');
    this.router.navigate(['logout']);
  }
  ngOnInit() {
    this.getUser();
  }
}
