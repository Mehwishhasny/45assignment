let current_users : string[] = ["Saim", "Sarim", "Ali", "Zaid", "Ahmed", "Aariz"];

let new_users : string[] = ["Sarah", "Zara", "Saim", "Ayesha", "Zaid"];

for(let i=0; i < new_users.length; i++){

    if(current_users.includes (new_users[i])){
        console.log("Dear user",new_users[i],", please enter your new username.");

   }


    else{
       console.log("This username" ,new_users[i], "is available.");
   }
}

  