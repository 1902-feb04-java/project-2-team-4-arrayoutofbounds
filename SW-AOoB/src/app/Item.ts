export class Item{
    itemId:number;
    category:string;
    classification:string;
    model:string;
    cost:number;

    constructor(obj)
    {
        this.id = obj.id;
        this.category = obj.category;
        this.classification = obj.classification;
        this.model = obj.model;
        this.cost = obj.cost;
    }
}