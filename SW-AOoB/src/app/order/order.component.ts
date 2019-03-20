import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../Order';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { OrderService } from '../order.service';

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
    // this.currentOrder  = new Order();
    // this.currentOrder.cost = 42;
    // this.currentOrder.id = 1;
    // this.currentOrder.isAuthorized = true;
    // this.currentOrder.user = 1;
    // // this.currentOrder.itemsOrdered =;
    // this.currentOrder.itemsOrdered = [];
    // this.itemService.getItem(35).subscribe(item => {
    //   this.addItem(item);
    //   console.log(item);
    // });
  }
  @Input()
  currentOrder: Order;
  // this.orderService
  // addItem(item:Item):void{
  //   this.currentOrder.itemsOrdered.push(item);
  // }
  getOrder():void{
    
  }
 
  getCost():number{
    let cost = 0;
    this.currentOrder.itemsOrdered.forEach((e) => {
      cost += e.cost;
    })
    return cost
  }
}
