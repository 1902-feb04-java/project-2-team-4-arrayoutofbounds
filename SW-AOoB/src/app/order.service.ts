import { Injectable } from '@angular/core';
import { Order } from './Order';
import { Item } from './item';
import { Observable, of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService 
{
  constructor() {}

  currentOrder:Order;
  orders:Order[];
  update = new Subscription();
  
  addItem(item:Item): Observable<Order>{
    this.currentOrder.itemsOrdered.push(item)
    return of(this.currentOrder)
  }
}
