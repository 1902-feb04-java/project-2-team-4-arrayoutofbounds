import { Item } from './item';
import { ItemService } from '../services/item.service';

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
        this.orderId = null;
    }

    // public toWeb(): {}{
    //     return {
    //         userId: this.userId, 
    //         // cost: this.getCost(), 
    //         itemsOrdered: JSON.stringify(this.itemsOrdered), 
    //         // authorizationRequired: this.getRestrictedStatus(),
    //     }
    // }
}