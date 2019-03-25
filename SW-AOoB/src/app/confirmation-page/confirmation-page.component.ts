import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/Order';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';
import { Inventories } from '../models/Inventories';
import { InventoryService } from '../services/inventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  constructor(
    private orderService:OrderService, 
    private itemService:ItemService,
    private inventoryService: InventoryService,
    private router:Router
    ) { }
  inventory:Inventories;
  itemsOrderedIds:string;
  currentOrder:Order;
  itemMap = new Map<number, number>();
  link:string;
  locations:any[];
  ngOnInit() {
    this.currentOrder = <Order>JSON.parse(localStorage.getItem('currentOrder'));
    this.itemsOrderedIds = this.currentOrder.itemsOrdered as unknown as string;
    this.currentOrder.itemsOrdered = this.parseItems(this.currentOrder.itemsOrdered)
    this.inventoryService.getLocations()
      .subscribe(locs => {
        console.log(locs)
        this.locations = locs._embedded.locations;
      })
  }

  selectLocation(id:number): void
  {
    this.inventoryService.getInventory(id).subscribe(inv => {
      this.inventory = inv;
      this.link = inv._links.self['href'];
      console.log(this.link)
      document.getElementById('submitButt').style.display = 'block'
      // this.updateInventoryItems();
    })
  }
  parseItems(ITEM_DETAILS): Item[]{
    let items = [];
    let data = JSON.parse(ITEM_DETAILS);
   for(let i =0; i< data.length; i++)
   {
    this.itemMap.set(data[i].itemId, parseInt(data[i].qty))
    this.itemService.getItem( data[i].itemId).subscribe(item => {
      console.log(item)
      items.push(new Item(item));
    })    
   }
    return items;
}
  updateInventoryItems():any[]{
    console.log(this.currentOrder.itemsOrdered)
    let orderItems = this.parseData(this.itemsOrderedIds)
    let invItems = this.parseData(this.inventory.items as unknown as string)
    let items = []
    // invItems.forEach(inv =>{
      orderItems.forEach(ord => {
        let found = invItems.find(function(el){
          return el.itemId ===ord.itemId
        })
        if(found)
        {
          console.log('add qty')
          found.qty +=parseInt(ord.qty)
        }else{
          console.log('add item')
          invItems.push({itemId: ord.itemId, qty: parseInt(ord.qty)})
        }
        
      })
    items.forEach(i => invItems.push(i))
    return invItems;
  }
  parseData(itemRefs:string): any[]{
    
    return JSON.parse(itemRefs);
  }

  submitOrder():void
  {
    let indexArr = [];
    for(let i = 0; i< this.currentOrder.itemsOrdered.length; i++)
    {
      let item = this.currentOrder.itemsOrdered[i];
      if(item != null)
      {
        indexArr.push({qty: this.itemMap.get(item.itemId), itemId: item.itemId})
      }
    }
    let serializedOrder = {
      userId: this.currentOrder.userId, 
      cost:this.currentOrder.cost, 
      itemsOrdered:JSON.stringify(indexArr),
      authorizationRequired: this.currentOrder.authorizationRequired,
      orderId: this.currentOrder.orderId
  };
    this.orderService.addOrder(serializedOrder).subscribe(() => {
      console.log('Order Submitted')
      console.log(this.currentOrder)
      // this.newOrder();
    })
    let slinventory = {inventoryid: this.inventory.inventoryid, items: JSON.stringify(this.updateInventoryItems()), locationId: this.inventory.locationId}
    this.inventoryService.updateInventory(slinventory, this.link).subscribe(() =>{
      console.log(slinventory)
    })
    this.router.navigate(['/home']);
  }
 
}
