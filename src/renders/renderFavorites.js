import { getFavorites } from '../service/favorites.js'
let favorites=getFavorites();

function printFavorites(){
    favorites=getFavorites();
    printFavoriteSongs();
    printFavoriteArtists();
    printFavoriteAlbums();
    printFavoriteVideos();
}

function printFavoriteSongs(){
    $('#favoritesSongs').text('');
    $.each( favorites.musicTrack, function( key, song ) {
        printSongFavorites(song);
      });
}

function printFavoriteArtists(){
    $('#favoritesArtists').text('');
    $.each( favorites.musicArtist, function( key, artist ) {
        printArtistFavorites(artist);
      });
}
function printFavoriteAlbums(){
    $('#favoritesAlbums').text('');
    $.each( favorites.album, function( key, album ) {
        printAlbumFavorites(album);
      });
}
function printFavoriteVideos(){
    console.log(favorites.musicVideo)
    $('#favoritesVideos').text('');
    $.each( favorites.musicVideo, function( key, video ) {
        printVideoFavorites(video);
      });
}



function printSongFavorites(song){
    let starType='far';
    if(favorites.musicTrack[song.trackId]!=null){
        starType='fas';
    }
    const $song = ` <article class="song" style="background: url('${song.artworkUrl100}')no-repeat; background-size: cover;" >
    <div class="background grid-song">
        <div class="item-cover">
            <button id="${song.trackId}" value="${song.previewUrl}" class="fas fa-play"></button>
        </div>
        <div class="item-info">
            <button class="title-song" value="${song.trackId}">${song.trackName}</button>
            <button class="text" value="${song.artistId}">${song.artistName}</button>
        </div>
        <button data-type="musicTrack" class="${starType} fa-star fav-button "></button>
    </div>
    </article>`;
    $('#favoritesSongs').append($song);
}

function printArtistFavorites(artist){
    let starType='far';
    if(favorites.musicArtist[artist.artistId]!=null){
        starType='fas';
    }
    const $artist = ` <button class="artist title-artist">
         <h3>${artist.artistName}</h3>
        <p class="text">${artist.primaryGenreName}</p>
        <a data-type="musicArtist" class=" ${starType} fa-star fav-button "></a>
    </button>`;
    $('#favoritesArtists').append($artist);
}

function printAlbumFavorites(album){
    
    let starType='far';
    if(favorites.album[album.collectionId]!=null){
        starType='fas';
    }
    const $album = ` <button class="album" style="background: url('${album.artworkUrl100}')no-repeat; background-size: cover;">
    <div class="background">
        <h3>${album.collectionName}</h3>
        <p class="text">${album.artistName}</p>
        <a data-type="album" class="${starType} fa-star fav-button "></a>
   <div>
    </button>`;

    
    $('#favoritesAlbums').append($album);
}

function printVideoFavorites(video){
    let favorites=getFavorites();
    let starType='far';
    if(favorites.musicVideo[video.trackId]!=null){
        starType='fas';
    }
    const $video = `<button class="video" style="background: url('${video.artworkUrl100}')no-repeat; background-size: cover;">
    <div class="background">
        <h3>${video.trackName}</h3>
        <p class="text">${video.artistName}</p>
        <a data-type="musicVideo" class="${starType} fa-star fav-button "></a>
   <div>
</button>`;
    $('#favoritesVideos').append($video);
}


export { printFavorites };