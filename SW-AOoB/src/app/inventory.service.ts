import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
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

  // getInventories(locationId:string): Observable<any>{
  //   const url = `${this.invUrl}/search/findByLocation_id?category=${locationId}`;
  //   return this.http.get<any>(url);
  // }
  // getInventory(location_id:number): Observable<any>{
  //   const url = `${this.invUrl}/search/findbyLocation?location_id=${location_id}`;
  //   return this.http.get<any>(url);
  // }

  getInventories(): Observable<Inventories[]>{
    return of(INVENTORIES);
  }
}
