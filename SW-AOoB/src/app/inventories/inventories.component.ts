import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { Inventories } from '../models/Inventories';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';
import { Officer } from '../models/Officer';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})

export class InventoriesComponent implements OnInit {
  currentUser:Officer;  
  itemMap = new Map<number, number>();
  inventory: Inventories;  
  items:Item[] = [];

  location:Location;
  
  constructor(
    private inventoryService:InventoryService,
    private itemService:ItemService
  ) { }
  
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('officer'))
    console.log(this.currentUser);
    console.log(this.currentUser.locationId);
    this.getLocation();
    this.getInventory();
  }
  getInventory(): void{
    this.inventoryService.getInventory(this.currentUser.locationId)
    .subscribe(inventory => {
      this.inventory = inventory;
      this.items = this.parseData(this.inventory.items)

    })
  }
  getLocation():void{
    this.inventoryService.getLocation(this.currentUser.locationId)
    .subscribe(location => {
      this.location = location;
      // console.log(location);
    })
  }

  parseData(ITEM_DETAILS): Item[]{
    let items = [];
    // console.log(ITEM_DETAILS)
    let data = JSON.parse(ITEM_DETAILS);
    // console.log(data)


   for(let i =0; i< data.length; i++)
   {
    this.itemMap.set(data[i].itemId, data[i].qty)
    this.itemService.getItem( data[i].itemId).subscribe(i => {
      // console.log(i)
      items.push(new Item(i));
    })    
   }
  //  console.log(items)
    return items;
  } 
}
