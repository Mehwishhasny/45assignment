var guests = ["ruby", "mahi", "mahrukh"];
var guestCantMake = "mahrukh";
console.log("\nUnfortunately", (guestCantMake.replace(/\b\w/g, function (pupil) { return (pupil.toUpperCase()); })), "can't make to come for the dinner.");
guests[2] = "Aiza";
console.log("This is to inform you all that we've got the bigger table for dinner. Hence, there are some more guests which will join us.");
//adding guest in the start of the list
guests.unshift("Saim");
//adding guest in the last of the list
guests.push("zeeshan");
//adding guest in the middle of the list
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "mehwish");
for (var i = 0; i < guests.length; i++) {
    console.log("Hey", (guests[i].replace(/\b\w/g, function (pupil) { return (pupil.toUpperCase()); })), ",", "I would love to have you for dinner at my place. Please be here at 8:00pm sharp. \nLooking forward for your presence.\n");
}
