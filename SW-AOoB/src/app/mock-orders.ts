import { Order } from './order';
import { Component} from '@angular/core';


// const ORDER_DATA: Order[] = [
//     {id: 1, firstName: 'Ken', lastName: 'Sparks', officerId: 1000, location: 'Tatooine' },
//     {id: 2, firstName: 'Yoda', lastName: 'Boss', officerId: 1001, location: 'Dagobah' },
//     {id: 3, firstName: 'Luke', lastName: 'Skywalker', officerId: 1002, location: 'Bespin' },
//     {id: 4, firstName: 'Han', lastName: 'Solo', officerId: 1003, location: 'Yavin' },
//     {id: 5, firstName: 'Boosie', lastName: 'Badazz', officerId: 1004, location: 'Hoth' },
// ]; 


export class OrderTable{
    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'officerId', 'location']
}