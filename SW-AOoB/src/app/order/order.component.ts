import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/Order';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';
import { OrderService } from '../services/order.service';
import { JsonPipe } from '@angular/common';
import { Officer } from '../models/Officer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  user:Officer;
  currentOrder:Order 
  // currentItem:Item;

  constructor(
    private itemService:ItemService,
     private orderService:OrderService,
    //  private route: ActivatedRoute,
    // private location:Location
     ) 
  { }
  ngOnInit() 
  {
    this.user = JSON.parse(localStorage.getItem('officer'))
    this.newOrder();

    // this.addItem({'itemId':1, 'qty':1});
    this.orderService.update.subscribe((obj =>{
      this.addItem(obj);
      // console.log(obj)
    }))
  } 
  addItem(item:any):void{
    this.currentOrder.itemsMap.set(item.itemId, item.qty) //add item to map
    this.currentOrder.itemsOrdered = this.getItems(); //return array from map
  }

  // fetchItem(id:number):void{
  //   this.itemService.getItem(id).subscribe(it => {
  //     this.currentItem = it;
  //   })
  // }
  getItems():Item[]{
    let items:Item[] = [];
    this.currentOrder.itemsMap.forEach((v,k,m)=>{
      if(v>0)
      {
        this.itemService.getItem(k).subscribe((item) => {
          let itemOnly = new Item(item)
          items.push(itemOnly);
          // console.log(itemOnly)

        })
      }
    })
    return items;
  }
 
  getCost():number{
    let cost = 0;
    if(this.currentOrder.itemsOrdered)
    {
      this.currentOrder.itemsOrdered.forEach((e) => 
      {
        cost += e.cost * this.currentOrder.itemsMap.get(e.itemId);
      })
    }
    return cost
  }
  newOrder(): void{
    this.currentOrder = new Order(this.user.officerId);
  }
  
  getRestrictedStatus(): boolean{
    let restricted = false;
    this.currentOrder.itemsOrdered.forEach(e => {
      if(e.restricted) restricted =true;
    })
    return restricted;
  }
 
  submitOrder(): void
  {
    let indexArr = [];
    for(let i = 0; i< this.currentOrder.itemsOrdered.length; i++)
    {
      let item = this.currentOrder.itemsOrdered[i];
      if(item != null)
      {
        indexArr.push({qty: this.currentOrder.itemsMap.get(item.itemId), itemId: item.itemId})
      }
    }

  //   console.log(indexArr)
    let slimOrder = {
      userId: this.user.officerId, 
      cost: this.getCost(), 
      itemsOrdered: JSON.stringify(indexArr), 
      authorizationRequired: this.getRestrictedStatus(),
      orderId:Math.round( Math.random() * 1000000)
    }
    localStorage.setItem('currentOrder', JSON.stringify(slimOrder))
    this.newOrder();
      
  //   // this.orderService.currentOrder.next(this.currentOrder);
    
  //   this.orderService.addOrder(slimOrder).subscribe(() => {
  //     console.log('Order Submitted')
  //     console.log(slimOrder)
  //     this.newOrder();
  //   })
  }
}
