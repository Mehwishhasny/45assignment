function make_great(magicians) {
    for (var _i = 0, magician_names_1 = magician_names; _i < magician_names_1.length; _i++) {
        var magician = magician_names_1[_i];
        console.log("The Great magician,", magician, ".");
    }
}
var magician_names = ["John", "David", "Rocky", "Georgia"];
make_great(magician_names);
