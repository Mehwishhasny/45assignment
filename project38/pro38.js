function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Artist 1", "Album 1");
var album2 = make_album("Artist 2", "Album 2");
var album3 = make_album("Artist 3", "Album 3");
//album with tracks
var album4 = make_album("Artist 4", "Album with tracks", 10);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
