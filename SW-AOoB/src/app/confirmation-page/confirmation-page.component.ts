import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/Order';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';
import { Inventories } from '../models/Inventories';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  constructor(
    private orderService:OrderService, 
    private itemService:ItemService,
    private inventoryService: InventoryService
    ) { }
  inventory:Inventories;
  currentOrder:Order;
  link:string;
  ngOnInit() {
    this.currentOrder = <Order>JSON.parse(localStorage.getItem('currentOrder'));
  }

  selectLocation(id:number): void
  {
    this.inventoryService.getInventory(id).subscribe(inv => {
      this.inventory = inv;
      this.link = inv._links.self['href'];
      console.log(this.link['href'])
      this.updateInventoryItems();
    })
  }
  updateInventoryItems():any[]{
    let orderItems = this.parseData(this.currentOrder.itemsOrdered as unknown as string)
    let invItems = this.parseData(this.inventory.items as unknown as string)

    invItems.forEach(inv =>{
      orderItems.forEach(ord => {
        console.log(`item: ${ord.itemId}, qty: ${ord.qty}`)
        if(ord.itemId == inv.itemId)
        {
          inv.qty += parseInt(ord.qty);
        }else {
          invItems.push({itemId: ord.itemId, qty: parseInt(ord.qty)})
        }
      })
    })
    return invItems;
  }
  parseData(itemRefs:string): any[]{
    
    return JSON.parse(itemRefs);
  }

  submitOrder():void
  {
    this.orderService.addOrder(this.currentOrder).subscribe(() => {
      console.log('Order Submitted')
      console.log(this.currentOrder)
      // this.newOrder();
    })
    let slinventory = {inventoryid: this.inventory.inventoryid, items: JSON.stringify(this.updateInventoryItems()), locationId: this.inventory.locationId}
    this.inventoryService.updateInventory(slinventory, this.link).subscribe(() =>{
      console.log(slinventory)
    })
  }
  
}
