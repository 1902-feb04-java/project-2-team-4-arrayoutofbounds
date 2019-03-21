import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Item} from './Item'
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  private itemsURL = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/items';
  private localItemsURL = 'http://localhost:5000/items';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getItems(): Observable<any>{
    return this.http.get<any>(this.itemsURL)
  }

  getItem(id:number): Observable<Item>{
    const url = `${this.itemsURL}/search/findByItemId?itemId=${id}`;
    return this.http.get<Item>(url);
  }
  addItem(item:Item): Observable<Item>{
    return this.http.post<any>(this.itemsURL, item, this.httpOptions);
  }
}
