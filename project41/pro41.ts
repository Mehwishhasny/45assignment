//declaring a function
function make_great(magicians:string[]) : string[] {
    //new array to store the names
   let greatMagicians : string[] = [];

   //loop through the original array to add the Great to each one of them
   for (let magician of magicians){
      greatMagicians.push(`${magician} the Great!`);
   }

   return greatMagicians;
   
}

function showMagician(magicians : string[]): void {
    //log names in array one by one
    for(let magician of magicians){
        console.log(magician);
    }
}

//example from exercise 40
let originalMagicians : string[] = ["John", "David", "Rocky", "Georgia"];


//copy of the original array
let greatMagician : string[] = make_great([...originalMagicians]);

//original names
console.log("Original magicians:");
showMagician(originalMagicians);

//names with the great
console.log("\nMagicians with the Great:");
showMagician(greatMagician);