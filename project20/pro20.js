var guests = ["ruby", "mahi", "mahrukh", "saim"];
//generating an array index error
console.log(guests[5]);
//correcting an error
console.log((guests[3].replace(/\b\w/g, function (person) { return person.toUpperCase(); })));
