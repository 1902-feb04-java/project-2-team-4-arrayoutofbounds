import { Order } from './order';
import { Component} from '@angular/core';


const ORDER_DATA: Order[] = [
    
]; 


export class OrderTable{
    displayedColumns: string[] = ['select', 'id', 'firstName', 'lastName', 'officerId', 'location']
}