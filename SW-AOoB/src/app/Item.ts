export class Item{
    id:number;
    category:string;
    classification:string;
    model:string;
    cost:number;
    isRestricted:boolean;

    constructor(obj)
    {
        this.id = obj.id;
        this.category = obj.category;
        this.classification = obj.classification;
        this.model = obj.model;
        this.cost = obj.cost;
        this.isRestricted = obj.isRestricted;
    }
}