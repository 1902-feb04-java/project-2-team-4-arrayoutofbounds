import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { Inventories } from '../models/Inventories';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';
import { Officer } from '../models/Officer';

@Component({
  selector: 'app-high-inventory',
  templateUrl: './high-inventory.component.html',
  styleUrls: ['./high-inventory.component.css']
})
export class HighInventoryComponent implements OnInit {
  inventoryOne: Inventories;
  inventoryTwo: Inventories;
  inventoryThree: Inventories;
  inventoryFour: Inventories;
  
  itemsOne:Item[] //= [];
  itemsTwo:Item[] 
  itemsThree:Item[] 
  itemsFour:Item[]

  itemMapOne = new Map<number, number>();
  itemMapTwo = new Map<number, number>();
  itemMapThree = new Map<number, number>();
  itemMapFour = new Map<number, number>();

  locationOne:Location;
  locationTwo:Location;
  locationThree:Location;
  locationFour:Location;
  
  constructor(
    private inventoryService:InventoryService,
    private itemService:ItemService
  ) { }
  
  ngOnInit() {
    this.getLocationOne();
    this.getInventoryOne();
    this.getLocationTwo();
    this.getInventoryTwo();
    this.getLocationThree();
    this.getInventoryThree();
    this.getLocationFour();
    this.getInventoryFour();
  }
  getInventoryOne(): void{
    this.inventoryService.getInventory(1)
    .subscribe(inventory => {
      this.inventoryOne = inventory;
      this.itemsOne = this.parseDataOne(this.inventoryOne.items)
      console.log(this.itemsOne);
    })
  }
  getInventoryTwo(): void{
    this.inventoryService.getInventory(2)
    .subscribe(inventory => {
      this.inventoryTwo = inventory;
      this.itemsTwo = this.parseDataTwo(this.inventoryTwo.items)
      console.log(this.itemsTwo);
    })
  }
  getInventoryThree(): void{
    this.inventoryService.getInventory(3)
    .subscribe(inventory => {
      this.inventoryThree = inventory;
      this.itemsThree = this.parseDataThree(this.inventoryThree.items)
      console.log(this.itemsThree);
    })
  }
  getInventoryFour(): void{
    this.inventoryService.getInventory(4)
    .subscribe(inventory => {
      this.inventoryFour = inventory;
      this.itemsFour = this.parseDataFour(this.inventoryFour.items)
      console.log(this.itemsFour);
    })
  }
  getLocationOne():void{
    this.inventoryService.getLocation(1)
    .subscribe(location => {
      this.locationOne = location;
    })
  }
  getLocationTwo():void{
    this.inventoryService.getLocation(2)
    .subscribe(location => {
      this.locationTwo = location;
    })
  }
  getLocationThree():void{
    this.inventoryService.getLocation(3)
    .subscribe(location => {
      this.locationThree = location;
    })
  }
  getLocationFour():void{
    this.inventoryService.getLocation(4)
    .subscribe(location => {
      this.locationFour = location;
    })
  }
  parseDataOne(ITEM_DETAILS): Item[]{
    let items = [];
    let data = JSON.parse(ITEM_DETAILS);
   for(let i =0; i< data.length; i++)
   {
    this.itemMapOne.set(data[i].itemId, data[i].qty)
    this.itemService.getItem( data[i].itemId).subscribe(i => {
      items.push(new Item(i));
    })    
   }
    return items;
  }
  parseDataTwo(ITEM_DETAILS): Item[]{
    let items = [];
    let data = JSON.parse(ITEM_DETAILS);
   for(let i =0; i< data.length; i++)
   {
    this.itemMapTwo.set(data[i].itemId, data[i].qty)
    this.itemService.getItem( data[i].itemId).subscribe(i => {
      items.push(new Item(i));
    })    
   }
    return items;
  }
  parseDataThree(ITEM_DETAILS): Item[]{
    let items = [];
    let data = JSON.parse(ITEM_DETAILS);
   for(let i =0; i< data.length; i++)
   {
    this.itemMapThree.set(data[i].itemId, data[i].qty)
    this.itemService.getItem( data[i].itemId).subscribe(i => {
      items.push(new Item(i));
    })    
   }
    return items;
  }
  parseDataFour(ITEM_DETAILS): Item[]{
    let items = [];
    let data = JSON.parse(ITEM_DETAILS);
   for(let i =0; i< data.length; i++)
   {
    this.itemMapFour.set(data[i].itemId, data[i].qty)
    this.itemService.getItem( data[i].itemId).subscribe(i => {
      items.push(new Item(i));
    })    
   }
    return items;
  } 
}
