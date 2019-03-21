import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventories } from '../inventories';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {

  constructor(private inventoryService:InventoryService) { }
  inventories: Inventories[];

  getInventories(): void{
    this.inventoryService.getInventories()
    .subscribe(inventories => 
    this.inventories = inventories);
  }
  // inventories._embedded.
  ngOnInit() {
    this.getInventories();
  }

}
