console.log("Here is the data of the countries based on their capital cities, population and languages spoke:");
var countries = [
    {
        name: "Pakistan",
        capital: "Islamabad",
        population: 245209815,
        language: "Urdu",
    },
    {
        name: "United Arab Emirates",
        capital: "Abu Dhabi",
        population: 9566186,
        language: "Arabic",
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1425671352,
        language: "Mandarin",
    },
    {
        name: "India",
        capital: "New Delhi",
        population: 1428627663,
        language: "Hindi",
    },
    {
        name: "United States of America",
        capital: "Washington D.C.",
        population: 341193658,
        language: "American English",
    }
];
for (var i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
