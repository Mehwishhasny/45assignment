var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinal_numbers.length; i++) {
    var ordinalEnding = void 0;
    if (ordinal_numbers[i] === 1) {
        ordinalEnding = "st";
    }
    else if (ordinal_numbers[i] === 2) {
        ordinalEnding = "nd";
    }
    else if (ordinal_numbers[i] === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(ordinal_numbers[i]).concat(ordinalEnding));
}
