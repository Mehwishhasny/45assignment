let ordinal_numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8 ,9];

for(let i=0; i < ordinal_numbers.length; i++){
    let ordinalEnding: string;

    if(ordinal_numbers[i] === 1){
        ordinalEnding = "st";
    }
    else if(ordinal_numbers[i] === 2){
        ordinalEnding = "nd";   
    }
    else if(ordinal_numbers[i] === 3){
        ordinalEnding = "rd";
    }
    else{
        ordinalEnding = "th";
    }
    console.log(`${ordinal_numbers[i]}${ordinalEnding}`);

}

