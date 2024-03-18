let guestsList : string[] = ["saim", "ruby", "mahi", "mehwish", "aiza", "zeeshan"];
console.log("Hello everyone, I'm sorry for the inconvenience, but the bigger table cannot arrive on time. Therefore, I can only accommodate two guests.");

//Removing guests from the invitation list:    
while (guestsList.length > 2) {
    let removedGuests =  guestsList.pop();
    console.log("I'm sorry for the inconvenience " + removedGuests?.replace(/\b\w/g, (pupil) =>(pupil.toUpperCase())) + ", but you're not allowed due to the shortage of space.");
    } 
        
//Invitation to only two guests:  
for (let i=0; i < guestsList.length; i++) {
    console.log("Dear " + guestsList[i].replace(/\b\w/g, (pupil) => (pupil.toUpperCase())) +  ", You're still invited!");
}
//an empty list:
guestsList.pop();
guestsList.pop();

console.log(guestsList);

    