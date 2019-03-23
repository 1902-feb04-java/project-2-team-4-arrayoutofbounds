import { Order } from './models/Order';
import { Component} from '@angular/core';


const ORDER_DATA: Order[] = [
    
]; 


export class OrderTable{
    displayedColumns: string[] = ['select', 'id', 'firstName', 'lastName', 'officerId', 'location']
}