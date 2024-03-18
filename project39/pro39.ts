function show_magicians(magicians: string[]):void {
    for (let magician of magician_names){
        console.log(magician);
    }
}

let magician_names : string[] = ["John", "David", "Rocky", "Georgia"];

show_magicians(magician_names);