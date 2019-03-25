import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { Inventories } from '../models/Inventories';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';
import { OfficerService } from '../services/officer.service';
import { Officer } from '../models/Officer';
import { OfficersComponent } from '../officers/officers.component';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';



@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})

export class InventoriesComponent implements OnInit {
  currentUser:Officer;
  
  itemMap = new Map<number, number>();
  inventory: Inventories[] = [];
  myItem: Item;
  itemId: number;
  
  items:Item[] = [];

  location:Location;
  
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
        this.parseDataIn();
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
     

    console.log(this.currentUser);
    console.log(this.currentUser.locationId);
    this.getLocation();
    this.getInventory();
  }
  getInventory(): void{
    this.inventoryService.getInventory(this.currentUser.locationId)
    .subscribe(inventory => {
      this.inventory = inventory;
      this.items = this.parseData(this.inventory)

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
  // Isaac's parseData for inventory array...
  parseDataIn(): void{
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
