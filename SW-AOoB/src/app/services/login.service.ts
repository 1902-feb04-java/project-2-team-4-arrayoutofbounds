import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Officer } from '../models/Officer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private officerURL = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/officers';

  getUser(username:string,password: string): Observable<Officer>{
    console.log(username +' and '+password + ' received')
    const url = `${this.officerURL}/search/findByUsernameAndPassword?password=${password}&username=${username}`;
    return this.http.get<Officer>(url);
  }
}
