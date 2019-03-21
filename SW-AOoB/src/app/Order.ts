import { Item } from './item';

export class Order{
    id:number;
    orderId:number;
    user:number;
    itemsOrdered:Item[];
    items:Map<number, number>
    isAuthorized:boolean;
    // date:Date;
    cost:number
    constructor(orderNum:number, user:number, itemsMap)//id:number,
    {
        // this.id = id;
        this.orderId = orderNum;
        this.user = user;
        this.items = itemsMap;
    }
}