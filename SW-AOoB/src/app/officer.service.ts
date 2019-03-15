import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Officer } from './officer';
import {OFFICERS} from './mock-officers';

@Injectable({
  providedIn: 'root'
})
export class OfficerService
{
  constructor(private http: HttpClient) { }
  officers = OFFICERS;
  private officerURL = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/officers';
  // private api = 'https://swapi.co/api/planets';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getOfficer(id:number): Observable<Officer>{
    const url = `${this.officerURL}/${id}`;
    return this.http.get<Officer>(url);
  }

  getOfficers(rank:string): Observable<any>{
    const url = `${this.officerURL}/search/findByRank?rank=${rank}`;
    return this.http.get<any>(url);
  }

  addOfficer(officer:Object): Observable<any>{
    return this.http.post<any>(this.officerURL, officer, this.httpOptions);
  }
  
  // getOfficers(): Observable<Officer[]>{
  //   return of(OFFICERS);
  // }
  
}
