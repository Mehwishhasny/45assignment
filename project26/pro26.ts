let person_age : number = 31;
if (person_age < 2){
    console.log("This n person is a baby.");
}
else if(person_age >=2 && person_age < 4){
    console.log("This person is a toddler.");
}
else if(person_age >= 4 && person_age < 13){
    console.log("This is a kid.");
}
else if(person_age >=13 && person_age< 20){
    console.log("This person is a teenager.");
}
else if(person_age >= 20 && person_age <65){
    console.log("This person is an adult.");
}
else{
    console.log("This person is an elder.");
}