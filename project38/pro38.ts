interface Album{
    artist : string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number){
    const album : Album = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;

}

let album1 = make_album("Artist 1", "Album 1");
let album2 = make_album("Artist 2", "Album 2");
let album3 = make_album("Artist 3", "Album 3");
//album with tracks
let album4 =  make_album("Artist 4", "Album with tracks", 10);

console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);