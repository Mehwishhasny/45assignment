var usernames = ["Admin", "Sarah", "Sana", "Zara", "Ali", "Ahmed"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "Admin") {
        console.log("Hello", usernames[i], "would you like to see a status report?");
    }
    else {
        console.log("Hello", usernames[i], ", Thanks for logging in!");
    }
}
