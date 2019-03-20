import { Component, OnInit, Output } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { OrderService } from '../order.service';
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

  //@Output() addRequest:EventEmitter<any>= new EventEmitter();
  addItem(): void{

  }
  // addItemToOrder(item:Item): void{
  //   this.orderService.addItem(item).subscribe((o) => {o.id})
  // }
  // addItem():void{
  //   let item = {id:1, category:"Vehicle", classification:"Off-Road", model:"Hover bike", cost: 420};
  //   this.itemService.addItem(item).subscribe(json => console.log(json));
  // }
}
