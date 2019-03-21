import { Item } from './item';

export class Order{
    id:number;
    user:number;
    itemsOrdered:Item[];
    items:Map<number, number>
    isAuthorized:boolean;
    date:Date;
    cost:number
    constructor(id:number, user:number, itemsMap){
        this.id = id;
        this.user = user;
        this.items = itemsMap;
    }
}