export class Inventories{
    id:number;
    inventoryid:number;
    locationId:number;
    items:Map<number,number>

    constructor(obj){
<<<<<<< HEAD
        this.id = obj.id;
=======
        this.id =  obj.inventoryid;
>>>>>>> 0d005618429ac570128aa020c24ced6de193e3ed
        this.locationId = obj.locationId;
        this.items = new Map<number, number>();
    }
}