import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject} from 'rxjs';
import { Inventories } from '../models/Inventories';
import { catchError,tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventories = Inventories;
  public update = new Subject();
  constructor(
    private http: HttpClient,
    private messageService:MessageService
  ) { }
  // private log(message:string){
  //   this.messageService.add(`OrderService: ${message}`);
  // }
  private officersUrl = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/officers';
  private locationUrl = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/locations';
  private inventoryUrl = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/inventories';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // getOfficer(UserId:number): Observable<any>{
  //   const url = `${this.officersUrl}/search/findbyOfficerId?OfficerId=${UserId}`;
  //   return this.http.get<any>(url);
  // }

  getLocation(locationId:number): Observable<any>{
    const url =`${this.locationUrl}/search/findByLocationId?locationId=${locationId}`;
    return this.http.get<any>(url);
  }

  getInventory(inventoryid:number): Observable<any>{
    const url =`${this.inventoryUrl}search/findByInventoryId?inventoryId=${inventoryid}`;
    return this.http.get<any>(url);
  }

  addInventory(inventory:any): Observable<Inventories>{
    return this.http.post<Inventories>(this.inventoryUrl,inventory,this.httpOptions)
    // .pipe(
    //   tap(_ => this.log(`Added to inventory #${this.inventories.id}`)),
    //   catchError(this.handleError<any>(`addItemsToInventory`))
    // );
  }
  // private handleError<T> (operation = 'operation', result?: T){
  //   return (error: any): Observable<T> => {

  //     //send error to remote logging infrastructure
  //     console.error(error);

  //     //better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     //Let the app keep running by returning an empty result
  //     return of(result as T);
  //   };
  // }
}
