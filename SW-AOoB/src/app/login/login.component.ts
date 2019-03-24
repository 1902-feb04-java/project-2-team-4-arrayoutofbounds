import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Officer } from '../models/Officer';
import { LoginService} from '../services/login.service';

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
  
  ngOnInit() {
    console.log(localStorage.getItem('officer'))
  }
  user: Officer;

  getUser(username:string,password:string): void {
    this.loginService.getUser(username,password)
    .subscribe(user => {
      if(user)
      {
        console.log(user)
        this.user = user;
        localStorage.setItem('officer', JSON.stringify(user))
        this.router.navigate(['/home']);
      }else{
        // console.log(document.getElementById('message') != null)
        document.getElementById('message').style.display = 'block';
      } 
    })
  }

}
