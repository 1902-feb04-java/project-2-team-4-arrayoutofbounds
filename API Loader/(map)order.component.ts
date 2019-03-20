import { Component, OnInit } from '@angular/core';
import { Order } from '../SW-AOoB/src/app/Order';
import { Item } from '../SW-AOoB/src/app/item';
import { ItemService } from '../SW-AOoB/src/app/item.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  constructor(private itemService:ItemService) 
  { }
  ngOnInit() 
  {
    this.currentOrder  = new Order();
    this.currentOrder.cost = 42;
    this.currentOrder.id = 1;
    this.currentOrder.isAuthorized = true;
    this.currentOrder.user = 1;
    // this.currentOrder.itemsOrdered =;
    // this.currentOrder.itemsOrdered = new Map();
    // this.itemService.getItem(35).subscribe(item => {
    //   this.addItem(item);
    //   console.log(item);
    // });
    // this.getItemsList();
  }
  currentOrder: Order;

//   addItem(item:Item):void{
//     if(!this.currentOrder.itemsOrdered.has(item.id))
//     {
//       this.currentOrder.itemsOrdered.set(item.id,1);
//     }else {
//       let v = this.currentOrder.itemsOrdered.get(item.id)
//       this.currentOrder.itemsOrdered.set(item.id,v+1);
//     }
//   }
//   getItemsList(): Item[]{
//     let keys = this.currentOrder.itemsOrdered.keys();
//     let next= keys.next();
//     let items = [];
//     while(!next.done)
//     {
//       this.itemService.getItem(next.value)
//       .subscribe(item => {items.push(item)})
//     }
//     // this.itemService.getItem(id)
//     console.log(items)
//     return items;
//   }
//   getCost():number{
//     let cost = 0;
//     let keys = this.currentOrder.itemsOrdered.keys();
//     let next= keys.next()
//     while(!next.done)
//     {
//       this.itemService.getItem(next.value)
//       .subscribe(I => cost += I.cost
//        * this.currentOrder.itemsOrdered.get(next.value));
//        next= keys.next()
      
//     }
//     return cost
//   }
}
