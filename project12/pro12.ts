let guests : string[] = ["ruby", "mahi", "mahrukh"];

for (let i =0; i < guests.length; i++) {
    console.log("Hey" ,(guests[i].replace (/\b\w/g, (pupil) => (pupil.toUpperCase()))), ",", "I would love to have you for dinner at my place. Please be here at 8:00pm sharp. \nLooking forward for your presence.\n")
}