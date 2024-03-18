var guests = ["ruby", "mahi", "mahrukh"];
/*
for (let i =0; i < guests.length; i++) {
    console.log("Hey" ,(guests[i].replace (/\b\w/g, (pupil) => (pupil.toUpperCase()))), ",", "I would love to have you for dinner at my place. Please be here at 8:00pm sharp. \nLooking forward for your presence.\n")
}
*/
var guestCantMake = "mahrukh";
console.log("\nUnfortunately", (guestCantMake.replace(/\b\w/g, function (pupil) { return (pupil.toUpperCase()); })), "can't make to come for the dinner.");
/*let newGuest = "Aiza";
let index = guests.indexOf(guestCantMake);
if (index !== -1) {
    guests[index] = newGuest;
}*/
guests[2] = "Aiza";
for (var i = 0; i < guests.length; i++) {
    console.log("Hey", (guests[i].replace(/\b\w/g, function (pupil) { return (pupil.toUpperCase()); })), ",", "I would love to have you for dinner at my place. Please be here at 8:00pm sharp. \nLooking forward for your presence.\n");
}
