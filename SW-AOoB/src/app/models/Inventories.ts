export class Inventories{
    id:number;
    locationId:number;
    items:Map<number,number>

    constructor(obj){
        this.id = obj.id;
        this.locationId = obj.locationId;
        this.items = new Map<number, number>();
    }
}