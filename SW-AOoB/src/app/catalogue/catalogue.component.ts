import { Component, OnInit } from '@angular/core';
import {Item} from '../models/Item';
import {ItemService} from '../services/item.service';
import { OrderService } from '../services/order.service';
import { LogoutService} from '../services/logout.service';
import { BackService } from '../services/back.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit{
  constructor(private itemService:ItemService, private orderService:OrderService,private logoutService:LogoutService,private backService:BackService){}
  weapon_Data:Item[];
  vehicle_Data:Item[];
  supplies_Data:Item[];
  starships_Data:Item[];

  displayedColumns: string[]=['type', 'model', 'cost', 'quantity'];
  weaponSource = this.weapon_Data;
  vehicleSource = this.vehicle_Data;
  suppliesSource = this.supplies_Data;
  starshipsSource = this.starships_Data;

  getWeapons():void{
    this.itemService.getItemCategory('Weapons').subscribe(
     ( weaponData) =>{ this.weapon_Data = weaponData._embedded.items;
      console.log(this.weapon_Data); this.weaponSource=this.weapon_Data;})
  }
  getVehicles():void{
    this.itemService.getItemCategory('Vehicle').subscribe(
     ( vehicleData) =>{ this.vehicle_Data = vehicleData._embedded.items;
      console.log(this.vehicle_Data); this.vehicleSource=this.vehicle_Data;})
  }
  getShips():void{
    this.itemService.getItemCategory('Starships').subscribe(
     ( shipData) =>{ this.starships_Data = shipData._embedded.items;
      console.log(this.starships_Data); this.starshipsSource=this.starships_Data;})
  }
  getSupplies():void{
    this.itemService.getItemCategory('Supplies').subscribe(
     ( supplyData) =>{ this.supplies_Data = supplyData._embedded.items;
      console.log(this.supplies_Data); this.suppliesSource=this.supplies_Data;})
  }

  ngOnInit(){
    this.getWeapons();
    this.getVehicles();
    this.getSupplies();
    this.getShips();
  }

  addItem(itemId:number, qty:number): void{
    console.log(`called with ${itemId} and ${qty}`)
    this.orderService.update.next({'itemId':itemId, 'qty':qty})
  }
  logout():void {
    this.logoutService.logout();
  }
  back():void{
    this.backService.homepageBack();
  }
}



