function make_great(magicians: string[]):void {
    for (let magician of magician_names){
        console.log("The Great magician," ,magician,".");
    }
}

let magician_names : string[] = ["John", "David", "Rocky", "Georgia"];

make_great(magician_names);