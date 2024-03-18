var guestsList = ["saim", "ruby", "mahi", "mehwish", "aiza", "zeeshan"];
console.log("Hello everyone, I'm sorry for the inconvenience, but the bigger table cannot arrive on time. Therefore, I can only accommodate two guests.");
while (guestsList.length > 2) {
    var removedGuests = guestsList.pop();
    console.log("I'm sorry for the inconvenience " + (removedGuests === null || removedGuests === void 0 ? void 0 : removedGuests.replace(/\b\w/g, function (pupil) { return (pupil.toUpperCase()); })) + ", but you're not allowed due to the shortage of space.");
}
for (var i = 0; i < guestsList.length; i++) {
    console.log("Dear " + guestsList[i].replace(/\b\w/g, function (pupil) { return (pupil.toUpperCase()); }) + ", You're still invited!");
}
guestsList.pop();
guestsList.pop();
console.log(guestsList);
