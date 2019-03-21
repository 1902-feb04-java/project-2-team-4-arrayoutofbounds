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
    this.currentOrder = new Order(1, 2, new Map<number, number>());
    this.addItem({'itemId':1, 'qty':1});
    this.orderService.update.subscribe((obj =>{
      this.addItem(obj);
      console.log(obj)
      // if(!this.currentOrder.items.has(obj.itemId))
      // {
        // this.currentOrder.items.set(obj.itemId, obj.qty)
      // }
    }))
  }
  @Input()
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
    this.currentOrder.itemsOrdered.forEach((e) => {
      cost += e.cost;
    })
    return cost
  }
}
