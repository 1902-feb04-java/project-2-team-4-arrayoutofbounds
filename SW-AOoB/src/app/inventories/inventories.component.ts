import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { Inventories } from '../models/Inventories';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';
import { OfficerService } from '../services/officer.service';
import { Officer } from '../models/Officer';
import { OfficersComponent } from '../officers/officers.component';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})

export class InventoriesComponent implements OnInit {
  currentUser:Officer;
  inventory: Inventories;
  items:Item[] = [];
  constructor(
    private inventoryService:InventoryService,
    private itemService:ItemService
  ) { }
  
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('officer'))
    console.log(this.inventory);
    // this.inventoryService.update.subscribe((obj => {
    //   this.addItems(obj);
    // }))
    // let obj = {
    //   id:1,
    //   locationId:1,
    //   items: {key: 1, a: 1}
    // }
    // this.addInventory(obj);
    this.getInventory();
    console.log(this.inventory);
  }

  getInventory(): void{
    this.inventoryService.getInventory(this.currentUser.locationId)
    .subscribe(inventory => {
      this.inventory = inventory;
      console.log(inventory);
    })
  }
  addInventory(inv:any): void {
    this.inventoryService.addInventory(inv).subscribe(() =>{
      console.log(inv)
    })
  }
  // getItems():Item[]{
  //   let items:Item[] = [];
  //   this.inventory.items.forEach((v,k,m)=>{
  //     if(v>0)
  //     {
  //       this.itemService.getItem(k).subscribe((item) => {
  //         let itemOnly = new Item(item)
  //         items.push(itemOnly);
  //         console.log(items)
  //       })
  //     }
  //   })
  //   return items;
  // }

  // addItems(items:any): void{
  //   this.inventory.items.set(items.itemId,items.qty)
  // }
 
}
