function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Making sandwich using the following ingredients:");
    //iteration perform
    for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
        var ingredient = ingredients_1[_a];
        console.log(ingredient);
    }
}
//calling function
makeSandwich("Cheese", "Beef patty", "Lettuce");
makeSandwich("Chicken patty", "Mayonnaise", "Sauce", "Cheese");
makeSandwich("Grilled chicken", "Tomatoes");
