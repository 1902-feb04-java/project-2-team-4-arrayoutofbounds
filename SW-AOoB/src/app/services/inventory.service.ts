import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Inventories } from '../models/Inventories';
import { catchError,tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventories = Inventories;

  constructor(
    private http: HttpClient,
    private messageService:MessageService
  ) { }
  private log(message:string){
    this.messageService.add(`OrderService: ${message}`);
  }
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
    const url =`${this.locationUrl}/search/findbyLocationId?LocationId=${locationId}`;
    return this.http.get<any>(url);
  }

  getInventory(inventoryId:number): Observable<any>{
    const url =`${this.inventoryUrl}/search/findbyLocationId?InventoryId=${inventoryId}`;
    return this.http.get<any>(url);
  }

  addItemsToInventory(items:any): Observable<any>{
    return this.http.post<any>(this.inventoryUrl,items,this.httpOptions)
    .pipe(
      tap(_ => this.log(`Added to inventory #${this.inventories.id}`)),
      catchError(this.handleError<any>(`addItemsToInventory`))
    );
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
