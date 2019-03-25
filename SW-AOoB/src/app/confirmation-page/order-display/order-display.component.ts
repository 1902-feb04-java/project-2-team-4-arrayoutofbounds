import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css']
})
export class OrderDisplayComponent implements OnInit {

  @Input() currentOrder:Order;
  @Input() itemMap:Map<number, number>
  constructor() { }

  ngOnInit() {
  }

}
