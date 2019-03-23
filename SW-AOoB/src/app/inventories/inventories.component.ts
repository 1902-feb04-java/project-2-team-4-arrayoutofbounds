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

  constructor(
    private inventoryService:InventoryService,
    private officerService:OfficerService,
    private itemService:ItemService
  ) { }

  officers: Officer[];
  inventories: Inventories[];
  id:number = 1;
  setUser(): void{
    this.inventoryService.getOfficer(this.id)
    .subscribe(officers => {
      this.officers = officers;
    })
  }
  
  // getItems():Item[]{
  //   let items:Item[] = [];
  //   this.inventories.items.forEach((v,k,m)=>{
  //     if(v>0)
  //     {
  //       this.itemService.getItem(k).subscribe((item) => {
  //         items.push(item);
  //       })
  //     }
  //   })
  //   console.log(items)
  //   return items;
  // }
  // inventories._embedded.
  ngOnInit() {
    //this.setUser();
  }

}
