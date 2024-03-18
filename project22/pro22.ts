let fruit : string= "mango";
let color : string = "Yellow";
let weight : number = 500;
let list : string[] = ["Orange", "Banana", "Cherry", "Lychee"];
let items : string = "Cherry";

//test 1: equality with string
console.log("Is fruit == mango? I predict True.")
console.log(fruit == "mango");

//test 1: inequality with string
console.log("\nIs fruit !=mango? I predict False")
console.log(fruit != "mango");

//test 2:lower 
console.log("\nIs color == 'Yellow'? I predict True.");
console.log(color == "Yellow");

//test 2: Inequality (case sensitive)
console.log("\nIs color != 'Yellow'? I predict False.");
console.log(color != "Yellow");

//test 3: numbers with equality
console.log("\nIs weight == 500? I predict True.");
console.log(weight == 500);

//test 3:Inequality 
console.log("\nIs weight != 500? I predict False.");
console.log(weight != 500);

//test 3: greater than
console.log("\nIs weight > 200? I predict True.");
console.log(weight > 200);

//test 3: less than
console.log("\nIs weight < 300? I predict False.");
console.log(weight < 300);

//test 3: greathan than or equal to
console.log("\nIs weight >= 500? I predict True.");
console.log(weight >= 500);

//test 3: less than or equal to
console.log("\nIs weight <= 100? I predict False.");
console.log(weight <= 100);

//test 4: and operator
console.log("\nIs color Red and not Orange? I predict False.");
console.log(color.toLowerCase()  === "red" && color !== "orange");

//test 4: or operator
console.log("\nIs color Yellow or not Orange? I predict True.");
console.log(color === "Yellow" || color.toLowerCase() !== "orange");

//test 5: Item in an array
console.log("\nIs item in an array? I predict True.")
console.log(list.includes(items));

//test 5: Item not in an array
console.log("\nIs item not in an array? I predict False.")
console.log(!list.includes(items));