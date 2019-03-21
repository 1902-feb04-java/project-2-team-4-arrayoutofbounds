import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { DataSource } from '@angular/cdk/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';


const ORDER_DATA: Order[] = [
//   {id: 1, officerId: 1000, location: 'Tatooine' },
//   {id: 2, firstName: 'Yoda', lastName: 'Boss', officerId: 1001, location: 'Dagobah' },
//   {id: 3, firstName: 'Luke', lastName: 'Skywalker', officerId: 1002, location: 'Bespin' },
//   {id: 4, firstName: 'Han', lastName: 'Solo', officerId: 1003, location: 'Yavin' },
//   {id: 5, firstName: 'Boosie', lastName: 'Badazz', officerId: 1004, location: 'Hoth' },
]; 

// const initialSelection = [];
// const allowMultiSelect = true;
// this.selection = new SelectionModel<Order>(allowMultiSelect, initialSelection);

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  displayedColumns: string[] = ['select','id', 'firstName', 'lastName', 'officerId', 'location'];
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  constructor() { }

  ngOnInit() {
  }

}

