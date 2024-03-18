var person1 = "Mehwish zeeshan";
console.log(person1.toUpperCase());
console.log(person1.toLowerCase());
console.log(person1.replace(/\b\w/g, function (pers) { return (pers.toUpperCase()); }));
