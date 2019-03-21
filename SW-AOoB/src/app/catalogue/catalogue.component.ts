import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {
  constructor(private itemService:ItemService){}
  weapon_Data:Item[];
  vehicle_Data:Item[];
  supplies_Data:Item[];

  displayedColumns: string[]=['name', 'model', 'cost'];
  weaponSource = this.weapon_Data;
  vehicleSource = this.vehicle_Data;
  suppliesSource = this.supplies_Data;

  ngOnInit(){

  }

}

