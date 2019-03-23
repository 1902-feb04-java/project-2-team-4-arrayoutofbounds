import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../Item'
import { map } from 'rxjs/operators'

let ORDER_DETAILS= [];
let ITEM_DETAILS: Item[] = [];

@Component({
  selector: 'app-order-history-detail',
  templateUrl: './order-history-detail.component.html',
  styleUrls: ['./order-history-detail.component.css']
})
export class OrderHistoryDetailComponent implements OnInit  {
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
    this.getOrderById();
  }

  getOrderById(){
    const orderId = +this.route.snapshot.paramMap.get('id');
      console.log(orderId);
      this.orderService.getOrderById(orderId)
        .subscribe((order) => {
          ITEM_DETAILS = order.itemsOrdered
          this.parseData()
         

          ORDER_DETAILS[0] =order.orderId// <Order> (<unknown> order.orderId);
          ORDER_DETAILS[1] = order.cost //<Order> (<unknown> order.cost);
          ORDER_DETAILS[2] = order.authorizationRequired;//<Order> (<unknown> order.isAuthorized);
          ORDER_DETAILS[3] = order.itemsOrdered//<Order> (<unknown> order.itemsOrdered);
        })
        console.log("order details:");
        console.log(ORDER_DETAILS);
        console.log("\nItems details");
        console.log(ITEM_DETAILS);
    
  }

  //Back Button
  goBack(): void{
    this.location.back();
  }

  parseData(){
    //<Item []> 
    // let items;
    //   items = JSON.parse(ITEM_DETAILS as unknown as string);
      // items.array.forEach(element => {
      //   ITEM_DETAILS.push(new Item(element))
      // });
      //ITEM_DETAILS = items;
  }

}
