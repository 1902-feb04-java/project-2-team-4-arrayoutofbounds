import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contentHeaders } from '../headers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public router: Router, public http: HttpClient) {}

  ngOnInit() {}

  // login(event, username, password) {
  //   event.preventDefault();
  //   let body = {username: username, password: password};
  //   this.http.post('http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/officers', body, { headers: contentHeaders})
  //   .subscribe(currentUser => {
  //     localStorage.setItem('currentUser',currentUser.username);
  //     this.router.navigate(['home']);
  //     }
  //   );
  // }
}
