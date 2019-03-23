import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/Order';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../models/Item';
import { map, subscribeOn } from 'rxjs/operators';
import { textBinding } from '@angular/core/src/render3';

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

  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private orderService:OrderService
    ) { }

  ngOnInit() {
    // this.orderService.getOrders().subscribe((orders) =>{
    //   ORDER_DETAILS = orders._embedded.orders;
    //   this.parseData();
    //   console.log(ORDER_DETAILS);
    //  })
    const orderId = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(orderId).subscribe((items) =>{
        this.ITEM_DETAILS = items.itemsOrdered;
        this.parseData;
        console.log(this.ITEM_DETAILS)
    })

  }

  // getOrderById(){
  //   const orderId = +this.route.snapshot.paramMap.get('id');
  //     console.log(orderId);
  //     this.orderService.getOrderById(orderId)
  //       .subscribe((order) => {
  //         ITEM_DETAILS = JSON.parse(order.itemsOrdered.toString());
  //         this.parseData();
    
  //        // let displayOrderId = order.orderId// <Order> (<unknown> order.orderId);
  //         ORDER_DETAILS[1] = order.cost //<Order> (<unknown> order.cost);
  //         ORDER_DETAILS[2] = order.authorizationRequired;//<Order> (<unknown> order.isAuthorized);
  //         ORDER_DETAILS[3] = order.itemsOrdered//<Order> (<unknown> order.itemsOrdered);
  //       })
  //       console.log("order details");
  //       console.log(ORDER_DETAILS);
  //       console.log("\nItems details");
    
  // }

  //Back Button
  goBack(): void{
    this.location.back();
  }

  parseData(){
    let items;
    this.ITEM_DETAILS.forEach(od =>{
      //when using parse Error -> 'Unexpected token w in JSON in position 0
      items = JSON.stringify(this.ITEM_DETAILS as unknown as string)
      this.ITEM_DETAILS = items;
    })
  }

}
