var guests = ["ruby", "mahi", "mahrukh"];
for (var i = 0; i < guests.length; i++) {
    console.log("Hey", (guests[i].replace(/\b\w/g, function (pupil) { return (pupil.toUpperCase()); })), ",", "I would love to have you for dinner at my place. Please be here at 8:00pm sharp. \nLooking forward for your presence.\n");
}
