//default value for the shirt
function make_shirt(size: string = "Large", message : string = "I love Typescript"){
    console.log("Creating a" ,size, "sized shirt, with a message:" ,message, ".");
}

//calling the default value func
make_shirt();

//calling the func with medium size and default message
make_shirt("Medium");

//custom value function
make_shirt("Small", "Hello Beautiful!");