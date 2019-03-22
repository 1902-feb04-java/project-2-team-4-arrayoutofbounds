import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Officer } from '../officer';
import { LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private loginService:LoginService,
    public router: Router,
    public http: HttpClient
  ) {}
  user: Officer[];
  
  @Input() 
  credentials = { username:'user', password:'pass'};

  getUser(): void {
    this.loginService.getUser(this.credentials.username,this.credentials.password)
    .subscribe(user => {
      this.user = user._embedded.officers;
      
      localStorage.setItem('currentUser',user.firstName);
      localStorage.setItem('rank',user.rank);
      localStorage.setItem('usename',user.username);
      localStorage.setItem('password',user.password);
    })
  }
  ngOnInit() {
    this.getUser();
  }
}
