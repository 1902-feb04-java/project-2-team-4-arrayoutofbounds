// pull variables
const baseUrl = 'https://swapi.co/api';
const vehicleURL = 'vehicles';
const starshipURL = 'starships';
const planetURL = 'planets';
//push variables
const baseRDS = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/';
const locationsRDS = 'locations'
const itemsRDS = 'items'
const officerRDS = 'officers'

function pull(url, func){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=> 
    {
        if (xhr.readyState == 4) 
        {
        	var data = JSON.parse(xhr.response);
        	console.log(data);

        	for(let item of data.results)
        	{
                let newItem = func(item);
                console.log(newItem)
                push(itemsRDS, newItem)
        	}
        }
    };
    xhr.open('GET',`${baseUrl}/${url}/`, true);//`https://swapi.co/api/vehicles/4/`
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function push(url, obj){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=> 
    {
        if (xhr.readyState == 4) 
        {
        	var data = JSON.parse(xhr.response);
        	console.log(data);
        }
    };
    xhr.open('POST',baseRDS+url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(obj));
}
        	
    // private long id;
    // private String category;
    // private String classification;
    // private String model;
    // private int cost;
function protoVehicle(obj){
    let cost = obj.cost_in_credits =="unknown"? 10500: obj.cost_in_credits;
    return {category:"Vehicle", classification: obj.vehicle_class, model: obj.model, cost: cost}
}
function protoShip(obj){
    let cost = obj.cost_in_credits =="unknown"? 420000: obj.cost_in_credits;
    return {category:"Starships", classification: obj.starship_class, model: obj.model, cost: cost}
}

pull(vehicleURL, protoVehicle)
pull(starshipURL, protoShip)

// let loc = {id: 1, membershipGroup: 1, name:"Nebula"};
// let off = {firstName:"BoB", rank:"Sarge"}
// push(itemsRDS,loc);


