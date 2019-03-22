import { Item } from './item';

export class Order{
    id:number;
    orderId:number;
    user:number;
    itemsOrdered:Item[];
    itemsMap:Map<number, number>
    isAuthorized:boolean;
    // date:Date;
    cost:number // calc by method
    constructor(orderNum:number, user:number, itemsMap)//id:number,
    {
        // this.id = id;
        this.orderId = orderNum;
        this.user = user;
        this.itemsMap = itemsMap;
    }
}