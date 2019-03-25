export class Inventories{
    id:number;
    inventoryid:number;
    locationId:number;
    items:Map<number,number>

    constructor(obj){
        this.id = obj.id;
        this.id =  obj.inventoryid;
        this.locationId = obj.locationId;
        this.items = new Map<number, number>();
    }
}