var current_users = ["Saim", "Sarim", "Ali", "Zaid", "Ahmed", "Aariz"];
var new_users = ["Sarah", "Zara", "Saim", "Ayesha", "Zaid"];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("Dear user", new_users[i], ", please enter your new username.");
    }
    else {
        console.log("This username", new_users[i], "is available.");
    }
}
