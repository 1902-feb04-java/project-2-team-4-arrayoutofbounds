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
    getItemIdArray(): any[]{
        let indexArr = [];
        for(let i = 0; i< this.itemsOrdered.length; i++)
        {
            let item = this.itemsOrdered[i];
            if(item != null)
            {
                indexArr.push({qty: this.itemsMap.get(item.itemId), itemId: item.itemId})
            }
        }
        return indexArr;
    }
    public getOrderForUpload(): {}{
        return {
            userId: this.userId, 
            cost:this.cost, 
            itemsOrdered:JSON.stringify(this.getItemIdArray()),
            authorizationRequired: this.authorizationRequired,
            orderId: this.orderId
        }
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