function printObjects(type, data){
    switch(type){
        case 'musicTrack':
            printAllFromType(data, 'Songs', '#songsList', printSong)
            break;
        case 'musicArtist':
            printAllFromType(data, 'Artists', '#artistsLists', printArtist)
            break;
        case 'album':
            printAllFromType(data, 'Albums', '#albumList', printAlbum)
            break;
        case 'musicVideo':
            printAllFromType(data, 'Music Videos', '#videoList', printVideo)
            break;
        default:
            break;
    }
}

function printSong(song){
    //const time=(song.trackTimeMillis-(song.trackTimeMillis%60000))/60000+':'+(song.trackTimeMillis-(song.trackTimeMillis%1000))/1000%60;
    const $song = ` <article class="song" style="background: url('${song.artworkUrl100}')no-repeat; background-size: cover;" >
    <div class="background grid-song">
        <div class="item-cover">
            <button value='${song.previewUrl}'  class="fas fa-play"></button>
        </div>
        <div class="item-info">
            <button><h3>${song.trackName}</h3></button>
            <button><p class="text">${song.artistName}</p></button>
        </div>
        <button class="fas fa-star fav-button "></button>
        
    </div>
    
</article>`;
    $('#songsList').append($song);
}

function printArtist(artist){
    const $artist = ` <button class="artist" >
         <h3>${artist.artistName}</h3>
        <p class="text">${artist.primaryGenreName}</p>
        <button class="fas fa-star fav-button "></button>
    </button>`;
    $('#artistsLists').append($artist);
}

function printAlbum(album){
    const $album = ` <button class="album" style="background: url('${album.artworkUrl100}')no-repeat; background-size: cover;">
    <div class="background">
        <h3>${album.collectionName}</h3>
        <p class="text">${album.artistName}</p>
        <a class="fas fa-star fav-button "></a>
   <div>
</button>`;
    $('#albumList').append($album);
}

function printVideo(video){
    const $video = `<button class="video" style="background: url('${video.artworkUrl100}')no-repeat; background-size: cover;">
    <div class="background">
        <h3>${video.trackName}</h3>
        <p class="text">${video.artistName}</p>
        <a class="fas fa-star fav-button "></a>
   <div>
</button>`;
    $('#videoList').append($video);
}

function printAllFromType(data, title, listQuerySelector, printFunction){
    $(listQuerySelector).text('');
    printTitle(title, listQuerySelector);
    $(data).each(index=>{
        printFunction(data[index]);
    });
}

function printTitle(title, nodeQuery){
    const $title=`<div class="wrapper-main-list-title"><h3>${title}</h3><hr></div>`;
    $(nodeQuery).append($title);
}

export {printObjects};