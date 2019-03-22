import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../Order';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  currentOrder:Order;
  ngOnInit() {
    this.fillOrder();
  }

  fillOrder(): void{
    // this.orderService.currentOrder.subscribe(co => {
    //   // this.currentOrder = ;
    //   console.log(co)
    // })
  }
}
