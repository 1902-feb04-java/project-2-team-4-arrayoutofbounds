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
  private officersUrl = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/officers';
  private locationUrl = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/locations';
  private inventoryUrl = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/inventories';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getOfficer(UserId:number): Observable<any>{
    const url = `${this.officersUrl}/search/findbyOfficerId?OfficerId=${UserId}`;
    return this.http.get<any>(url);
  }
  getLocation(locationId:number): Observable<any>{
    const url =`${this.locationUrl}/search/findbyLocationId?LocationId=${locationId}`;
    return this.http.get<any>(url);
  }
  getInventory(inventoryId:number): Observable<any>{
    const url =`${this.inventoryUrl}/search/findbyLocationId?LocationId=${inventoryId}`;
    return this.http.get<any>(url);
  }
}
