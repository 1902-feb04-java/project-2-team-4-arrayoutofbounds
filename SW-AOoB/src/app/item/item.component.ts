import { Component, OnInit, Output } from '@angular/core';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';
import { OrderService } from '../services/order.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  constructor(private itemService:ItemService, private orderService:OrderService) { }
  ngOnInit() 
  {
    // this.addItem();
    this.getItems();
  }

  items:Item[];

  getItems(): void{
    this.itemService.getItems()
    .subscribe(result =>{
      this.items = result._embedded.items;
      console.log(this.items);
    })
  }

 //send item to orderService subject 'update'
  addItem(itemId:number, qty:number): void{
    console.log(`called with ${itemId} and ${qty}`)
    this.orderService.update.next({'itemId':itemId, 'qty':qty})
  }
}
