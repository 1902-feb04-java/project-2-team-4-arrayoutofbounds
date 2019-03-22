import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventories } from '../inventories';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { OfficerService } from '../officer.service';
import { Officer } from '../Officer';
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

  username:string = localStorage.getItem('username');
  password:string = localStorage.getItem('password');

  // setUser(): void{
  //   this.inventoryService.getOfficer(this.username,this.password)
  //   .subscribe(officers => {
  //     this.officers = officers._embedded.officers;
  //   })
  // }
  
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
