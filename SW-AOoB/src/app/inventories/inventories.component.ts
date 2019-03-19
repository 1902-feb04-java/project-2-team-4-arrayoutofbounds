import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventories } from '../Inventories';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {

  constructor(private inventoryService:InventoryService) { }
  inventories: Inventories[];

  getInventories(): void{
    this.inventoryService.getInventories(1)
    .subscribe(inventories => {this.inventories})
  }
  ngOnInit() {
  }

}
