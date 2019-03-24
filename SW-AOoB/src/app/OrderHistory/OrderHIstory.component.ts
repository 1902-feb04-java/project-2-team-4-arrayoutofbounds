import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { DataSource } from '@angular/cdk/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { Item } from '../models/Item'
import { OrderService } from '../services/order.service';


let ORDER_DATA: Order[] = [
//   {id: 1,  user: 1000, itemsOrdered: [{ id: 1, category: "Weapon", classification:"", model:"x", cost:50 }],
//     isAuthorized: true, date:null, cost:100 },
//   {id: 2,  user: 1001, itemsOrdered: [{ id: 2, category: "Weapon", classification:"", model:"y", cost:200 }],
//     isAuthorized: false, date:null, cost:100 },
//   {id: 3,  user: 1002, itemsOrdered: [{ id: 3, category: "Weapon", classification:"", model:"z", cost:75 }],
//     isAuthorized: true, date:null, cost:100 },
//   {id: 4,  user: 1003, itemsOrdered: [{ id: 4, category: "Weapon", classification:"", model:"a", cost:125 }],
//     isAuthorized: false, date:null, cost:100 },
//   {id: 5,  user: 1004, itemsOrdered: [{ id: 5, category: "Weapon", classification:"", model:"b", cost:25 }],
//     isAuthorized: true, date:null, cost:100 },
]; 

// const initialSelection = [];
// const allowMultiSelect = true;
// this.selection = new SelectionModel<Order>(allowMultiSelect, initialSelection);

@Component({
  selector: 'app-OrderHistory',
  templateUrl: './OrderHistory.component.html',
  styleUrls: ['./OrderHistory.component.css']
})
export class OrderHistoryComponent {

  displayedColumns: string[] = ['select','orderId', 'userId', 'itemsOrdered', 'authorizationRequired', 'date', 'cost'];
  dataSource = new MatTableDataSource<Order>(ORDER_DATA);
  selection = new SelectionModel<Order>(true, []);

  /* Checks if the number of selected elements match the number of rows */
  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /* Selects all rows if they are NOT all selected; otherwise clear selection */
  masterToggle(){
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /* The label for the checkbox on the passed row */
  checkboxLabel(row?: Order): string {
    if(!row){
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.userId + 1}`;
  }

  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe((orders) =>{
      ORDER_DATA = orders._embedded.orders;
      this.parseData();
      console.log(ORDER_DATA)
      this.dataSource = new MatTableDataSource<Order>(ORDER_DATA);
    })
  }
  parseData():void{
    let items;
    ORDER_DATA.forEach(od =>{
      //when using parse Error -> 'Unexpected token w in JSON in position 0
      items = JSON.parse(od.itemsOrdered as unknown as string)
      od.itemsOrdered = items;
    })

  }
}

