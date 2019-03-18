const baseUrl = 'https://swapi.co/api/';
const vehicleURL = 'vehicles/';
const starshipURL = 'starships';
const planetURL = 'planets';

function call(id){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=> 
    {
        if (xhr.readyState == 4) 
        {
        	var data = JSON.parse(xhr.response);
        	console.log(data);
        	
//         	for(let item of data)
//         	{
//         	}
        }
    };
    xhr.open('GET',baseUrl+vehicleURL+`${id}/`, true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

const baseRDS = 'http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/';
const locationsRDS = 'locations'
const itemsRDS = 'items'
const officerRDS = 'officers'

let loc = {id: 1, membershipGroup: 1, name:"Nebula"};
let off = {firstName:"BoB", rank:"Sarge"}
push(locationsRDS,loc);

function push(url, obj){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=> 
    {
        if (xhr.readyState == 4) 
        {
        	var data = JSON.parse(xhr.response);
        	console.log(data);
        	
//         	for(let item of data)
//         	{
//         	}
        }
    };
    xhr.open('POST',baseRDS+url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(obj));
}