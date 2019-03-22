export class Item{
    id:number;
    itemId:number;
    category:string;
    classification:string;
    model:string;
    cost:number;
    isRestricted:boolean;

    constructor(obj)
    {
        this.itemId = obj.itemId;
        this.category = obj.category;
        this.classification = obj.classification;
        this.model = obj.model;
        this.cost = obj.cost;
        this.isRestricted = obj.isRestricted;
    }
}