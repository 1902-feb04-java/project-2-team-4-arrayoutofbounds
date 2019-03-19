import { Component, OnInit } from '@angular/core';

export interface weapons
{
  name:string;
  model:string;
  cost:number;
}
const Weapon_data: weapons []=[
  {name:'Blaster Rifle',model:'AFK 88', cost:850},
  {name:'Artillery',model: '155mm Wurlitzer',cost: 850},
  {name:'Blaster Pistol',model: '76 Hoth Special',cost: 430},
  {name:'Blaster Rifle',model: 'FTW-Ghost',cost: 850}

]
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent {


  displayedColumns: string[]=['name', 'model', 'cost'];
  dataSource = Weapon_data;

}

