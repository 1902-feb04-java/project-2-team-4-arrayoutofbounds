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
  items:Item[] //= [];
  itemMap = new Map<number, number>();
  location:Location;
  constructor(
    private inventoryService:InventoryService,
    private itemService:ItemService
  ) { }
  
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('officer'))
    // console.log(this.currentUser);
    // console.log(this.currentUser.locationid);
    // console.log(this.inventory);
    // this.inventoryService.update.subscribe((obj => {
    //   this.addItems(obj);
    // }))
    // let obj = {
    //   id:1,
    //   locationId:1,
    //   items: {key: 1, a: 1}
    // }
    // this.addInventory(obj);
    this.getLocation();
    this.getInventory();
  }

  getInventory(): void{
    this.inventoryService.getInventory(this.currentUser.locationid)
    .subscribe(inventory => {
      this.inventory = inventory;
      // console.log(this.inventory.items);
      // this.items[0]=this.inventory.items.get(1)
      // console.log(this.inventory);
      //this.getItems(1)

      this.items = this.parseData(this.inventory.items)

    })
  }
  // getItems(id:number):void{
  //   console.log(this.inventory.items.get(id));
  // }
  addInventory(inv:any): void {
    this.inventoryService.addInventory(inv).subscribe(() =>{
      // console.log(inv)
    })
  }

  getLocation():void{
    this.inventoryService.getLocation(this.currentUser.locationid)
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
