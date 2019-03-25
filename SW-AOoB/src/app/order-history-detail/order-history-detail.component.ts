import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/Order';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../models/Item';
import { map, subscribeOn } from 'rxjs/operators';
import { textBinding } from '@angular/core/src/render3';
import { ItemService } from '../services/item.service';

let ORDER_DETAILS = [];

let displayCost = document.getElementById('cost-id');
let displayAuthorization = document.getElementById('auth-id');


@Component({
  selector: 'app-order-history-detail',
  templateUrl: './order-history-detail.component.html',
  styleUrls: ['./order-history-detail.component.css']
})
export class OrderHistoryDetailComponent implements OnInit  {
 ITEM_DETAILS: Item[] = null;
 @Input() order:Order; 
 itemMap = new Map<number, number>();

  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private orderService:OrderService,
    private itemService: ItemService
    ) { }
    
  currentOrder:Order = new Order(1);
  
  ngOnInit() {
    let orderId = + this.route.snapshot.paramMap.get('id');
    console.log(orderId);
    this.orderService.getOrderById(orderId)
      .subscribe((order) => {
          this.currentOrder = order;
          this.currentOrder.itemsOrdered = this.parseData(this.currentOrder.itemsOrdered);
          console.log("Current Order:")
          console.log(this.currentOrder);

      })

    }
 
  //Back Button
  goBack(): void{
    this.location.back();
  }

  parseData(ITEM_DETAILS): Item[]{
    let items = [];
    let data = JSON.parse(ITEM_DETAILS as unknown as string);
   for(let i =0; i< data.length; i++)
   {
    this.itemMap.set(data[i].itemId, data[i].qty)
    this.itemService.getItem( data[i].itemId).subscribe(item => {
    items.push(new Item(item));
    })    
   }
    return items;
}

}
