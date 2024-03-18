var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//declaring a function
function make_great(magicians) {
    //new array to store the names
    var greatMagicians = [];
    //loop through the original array to add the Great to each one of them
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("".concat(magician, " the Great!"));
    }
    return greatMagicians;
}
function showMagician(magicians) {
    //log names in array one by one
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
//example from exercise 40
var originalMagicians = ["John", "David", "Rocky", "Georgia"];
//copy of the original array
var greatMagician = make_great(__spreadArray([], originalMagicians, true));
//original names
console.log("Original magicians:");
showMagician(originalMagicians);
//names with the great
console.log("\nMagicians with the Great:");
showMagician(greatMagician);
