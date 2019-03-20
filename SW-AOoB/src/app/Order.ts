import { Item } from './item';

export class Order{
    id:number;
    user:number;
    itemsOrdered:Item[];
    isAuthorized:boolean;
    date:Date;
    cost:number
}