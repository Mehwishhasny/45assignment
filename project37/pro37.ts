function city_country(city: string, country : string){
    return `${city}, ${country}`;
    
}

let result1 : string = city_country("Karachi", "Pakistan");
let result2 : string = city_country("Dubai", "UAE");
let result3 : string = city_country("London", "UK");

console.log(result1);
console.log(result2);
console.log(result3);