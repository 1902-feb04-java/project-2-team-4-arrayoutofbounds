import { Item } from './item';

export class Order{
    id:number;
    orderId:number;
    userId:number;
    itemsOrdered:Item[];
    itemsMap:Map<number, number>
    authorizationRequired:boolean;
    // date:Date;
    cost:number // calc by method
    constructor(orderNum:number, user:number, itemsMap)//id:number,
    {
        // this.id = id;
        this.orderId = orderNum;
        this.userId = user;
        this.itemsMap = itemsMap;
    }
}