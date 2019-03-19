import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INVENTORIES } from './mock-inventories';
import { Inventories } from './Inventories';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }
  inventories = INVENTORIES;
  private invUrl = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/inventories';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getInventories(id:number): Observable<Inventories>{
    const url = `${this.invUrl}/${id}`;
    return this.http.get<Inventories>(url);
  }
  getInventory(location_id:number): Observable<any>{
    const url = `${this.invUrl}/search/findbyLocation?location_id=${location_id}`;
    return this.http.get<any>(url);
  }
}
