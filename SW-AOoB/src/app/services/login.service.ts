import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Officer } from '../models/Officer';
import { MessageService } from './message.service';
import { tap, catchError } from 'rxjs/operators';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  private officerURL = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/officers';

  getUser(username:string,password: string): Observable<Officer>{
    console.log(username +' and '+password + ' received')
    const url = `${this.officerURL}/search/findByUsernameAndPassword?password=${password}&username=${username}`;
    return this.http.get<Officer>(url).pipe(
      tap(_ => this.log(`Fetched orders`)),
      catchError(this.handleError<Officer>(`getUser`)),
  );
  }

  private log(message:string){
    this.messageService.add(`OrderService: ${message}`);
}
  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      //send error to remote logging infrastructure
      console.error(error);

      //better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      //Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
