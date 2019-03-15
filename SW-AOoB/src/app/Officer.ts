export class Officer
{
    id:number;
    fisrtName:string;
    lastName:string;
    rank:string;
    superiorOfficer:number; //references another Officer.id
    // location:Location; //references a location.id
}