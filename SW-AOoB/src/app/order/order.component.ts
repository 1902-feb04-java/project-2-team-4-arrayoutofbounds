import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../Order';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { OrderService } from '../order.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  constructor(private itemService:ItemService, private orderService:OrderService) 
  { }
  ngOnInit() 
  {
    this.orderNumber = 0;
    this.newOrder();

    // this.addItem({'itemId':1, 'qty':1});
    this.orderService.update.subscribe((obj =>{
      this.addItem(obj);
      console.log(obj)
    }))
  }
  orderNumber:number;
  currentOrder:Order 
 
  addItem(item:any):void{
    this.currentOrder.items.set(item.itemId, item.qty)
    this.currentOrder.itemsOrdered = this.getItems();
  }
  getItems():Item[]{
    let items:Item[] = [];
    this.currentOrder.items.forEach((v,k,m)=>{
      if(v>0)
      {
        this.itemService.getItem(k).subscribe((item) => {
          items.push(item);
        })
      }
    })
    console.log(items)
    return items;
  }
 
  getCost():number{
    let cost = 0;
    if(this.currentOrder.itemsOrdered)
    {
      this.currentOrder.itemsOrdered.forEach((e) => {
        cost += e.cost;
      })
    }
    return cost
  }
  newOrder(): void{
    this.currentOrder = new Order(this.orderNumber++, 1, new Map<number, number>());
  }
  submitOrder(): void{
    let slimOrder = {orderId: this.currentOrder.orderId, userId: 1, cost: this.getCost(), itemsOrdered: JSON.stringify(this.getItems())}
    this.orderService.addOrder(slimOrder).subscribe(() => {
      console.log('Order Submitted')
      this.newOrder();
    })
  }
}
