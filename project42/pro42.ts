//using rest parameter syntax `...` for passing multiple arguments
function makeSandwich(...ingredients : string[]): void{
    console.log("Making sandwich using the following ingredients:");

    //iteration perform
    for(let ingredient of ingredients){
        console.log(ingredient);
    }
}

//calling function
makeSandwich("Cheese", "Beef patty", "Lettuce");
makeSandwich("Chicken patty", "Mayonnaise", "Sauce", "Cheese");
makeSandwich("Grilled chicken", "Tomatoes");