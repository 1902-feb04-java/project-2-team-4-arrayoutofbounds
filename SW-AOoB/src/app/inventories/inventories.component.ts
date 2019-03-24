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
  inventory: Inventories[] = [];
  myItem: Item;
  itemId: number;
  
  items:Item[] = [];

  constructor(
    private inventoryService:InventoryService,
    private itemService:ItemService
  ) { }
  
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('officer'))
    //console.log(this.currentUser.locationId);
    //console.log(this.inventory);
    // this.inventoryService.update.subscribe((obj => {
    //   this.addItems(obj);
    // }))
    // let obj = {
    //   id:1,
    //   locationId:1,
    //   items: {key: 1, a: 1}
    // }
    // this.addInventory(obj);

    //this.getInventory();

    // Retrieve Everything from inventories EBS
    this.inventoryService.getInventories().subscribe((invent) => {
        this.inventory = invent._embedded.inventories;
        this.parseData();
        console.log(this.inventory);

        this.itemId = this.getItemId(this.inventory);
        
        //Retrieve Item information by Item ID
        console.log("Id...")
        console.log(this.itemId);
        this.itemService.getItem(this.itemId).subscribe((item)=>{
        this.myItem = item;
        console.log(this.myItem);
     })

       
    })
     
    

  }

  getInventory(): void{
    this.inventoryService.getInventory(this.currentUser.locationId)
    .subscribe(inventory => {
      inventory = inventory;
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
  parseData(): void{
    let data;
    this.inventory.forEach(element => {
      data = JSON.parse(element.items as unknown as string)
      element.items = data;
    });   
}
  getItemId(inventory:Inventories[]):number{
    let id;
    this.inventory.forEach(element =>{
      id = element.items[0].itemId;
      
    })
    return id;
  }
 
}
