import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { Inventories } from '../models/Inventories';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';
import { OfficerService } from '../services/officer.service';
import { Officer } from '../models/Officer';
import { OfficersComponent } from '../officers/officers.component';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {
  currentUser:Officer;
  inventory: Inventories;

  constructor(
    private inventoryService:InventoryService,
    private itemService:ItemService
  ) { }
  
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('officer'))
    this.getInventory();
  }

  getInventory(): void{
    this.inventoryService.getInventory(this.currentUser.locationId)
    .subscribe(inventory => {
      this.inventory = inventory;
    })
  }

  getItems():Item[]{
    let items:Item[] = [];
    this.inventory.items.forEach((v,k,m)=>{
      if(v>0)
      {
        this.itemService.getItem(k).subscribe((item) => {
          let itemOnly = new Item(item)
          items.push(itemOnly);
          console.log(items)
        })
      }
    })
    return items;
  }
  // addItems(): void{
  //   let inv = {
  //     id: 1,
  //     items:
  //   }
  // }
}
