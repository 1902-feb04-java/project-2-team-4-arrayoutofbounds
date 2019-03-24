import { Injectable } from '@angular/core';
import { Observable, of, pipe, Subscription, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/Order';
import { catchError, map, tap} from 'rxjs/operators';
import { error } from 'protractor';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { MessageService } from './message.service';
import { Item } from '../models/Item';


@Injectable({
    providedIn: 'root'
  })

  export class OrderService{

    // public currentOrder = new Subject();
    public update = new Subject();
      
    constructor(
        private http: HttpClient,
        private messageService: MessageService){}

    private log(message:string){
        this.messageService.add(`OrderService: ${message}`);
    }

    private orderURL = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/orders';
    private localOrdersURL = 'http://localhost:5000/orders';
    httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    //Get All Orders 
    getOrders(): Observable<any>{
        return this.http.get<any>(this.orderURL)
        .pipe(
            tap(_ => this.log(`Fetched orders`)),
            catchError(this.handleError<Order[]>(`getOrders`,[])),
        )
    }

    //Get Order By ID
    getOrderById(id:number): Observable<Order>{
        const url = `${this.orderURL}/search/findByOrderId?orderId=${id}`;
        return this.http.get<Order>(url)
        .pipe(
            tap(_ => this.log(`Fetched Order #${id}`)),
            catchError(this.handleError<Order>(`getOrderById #${id}`))
        )
    }

    //POST: add a new hero to the server 
    addOrder(order:any): Observable<Order>{
        return this.http.post<Order>(this.orderURL, order, this.httpOptions)
        .pipe(
            tap((neworder: Order) => this.log(`Added Order #${order.id}`)),
            catchError(this.handleError<Order>(`addOrder`))
        );

    }

    //PUT: update the hero on the server 
    updateOrder (order:Order): Observable<any>{
        return this.http.put(this.orderURL, order, this.httpOptions)
        .pipe(
            tap(_ => this.log(`Updated Order #${order.id}`)),
            catchError(this.handleError<any>('updateHero'))
        );
    }

    //DELETE: removes hero from the server
    deleteOrder(order: Order | number): Observable<any>{
        const id = typeof order === 'number' ? order : order.id;
        const url = `${this.orderURL}/${id}`;

        return this.http.delete<Order>(url, this.httpOptions)
        .pipe(
            tap(_ => this.log(`Deleted Order #${id}`)),
            catchError(this.handleError<Order>(`deleteOrder`))
        );
    }

    //Cannot Find Order 404 method
    getOrderNo404<Data>(id:number): Observable<Order>{
        const url = `${this.orderURL}?/id=${id}`;
        return this.http.get<Order[]>(url)
        .pipe(
            map(orders => orders[0]), // return a {0|1} element array
            tap(h => {
                const outcome = h? `Fetched`: `Did not find`;
                this.log(`${outcome} Order #${id} `);
            }),
            catchError(this.handleError<Order>(`getOrder #${id}`))
        );
    }

    /*
  * Handle Http operation that failed.
  * Allow app to continue.
  * @param operation - name of the operation that failed.
  * @param result - optional value to return as the observable result.
  */

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

