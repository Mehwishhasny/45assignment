let cars = ["bmw", "ferrari", "lamborghini", "rolls royce", "porsche"];

for (let i=0; i < cars.length; i++){
    
    if (cars[i] === "bmw") {
        console.log("I would love to own" ,cars[i].toUpperCase(), "car.");   
      }
      else{
        console.log("I would love to own" ,cars[i].replace (/\b\w/g, (pers) => (pers.toUpperCase())),"car.");
      }
 }

