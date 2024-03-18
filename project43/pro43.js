function carCreate(manufacturerName, modelName) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturerName,
        model: modelName,
    };
    args.forEach(function (arg) {
        var _a = Object.entries(arg)[0], key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
var myCar = carCreate("Civic", "GLI", { Color: "Metallic Grey" }, { Year: 2020 }, { Features: ["Sunroof", "Automatic"] });
console.log(myCar);
