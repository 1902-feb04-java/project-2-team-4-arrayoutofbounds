import { Item } from './item';

export class Order{
    id:number;
    orderId:number;
    userId:number;
    itemsOrdered:Item[];
    itemsMap:Map<number, number>
    authorizationRequired:boolean;
    date:Date;
    cost:number // calc by method
    constructor(user:number)
    {
        this.userId = user;
        this.itemsMap = new Map<number, number>();
        this.itemsOrdered = [];
    }
}