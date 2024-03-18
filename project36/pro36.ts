function describe_city(city: string, country:string = "Pakistan"){
    console.log(city, "is in" ,country, ".");
}

//default value
describe_city("Karachi");

//another city with default value
describe_city("Lahore");

//custom value
describe_city("Dubai", "UAE");