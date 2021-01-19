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
    const time=(song.trackTimeMillis-(song.trackTimeMillis%60000))/60000+':'+(song.trackTimeMillis-(song.trackTimeMillis%1000))/1000%60;
    const $song = `<article class="song">
    <button style="background-image: url('${song.artworkUrl100}');" class="fas fa-play song--button"></button>
    <div>
         <button>${song.trackName}</button>
        <button>${song.artistName}</button>
    </div>
    <p>${time}</p>
</article>`;
    $('#songsList').append($song);
}

function printArtist(artist){
    const $artist = `<p>${artist.artistName}</p>`;
    $('#artistsLists').append($artist);
}

function printAlbum(album){
    const $album = `<p>${album.collectionName}</p>`;
    $('#albumList').append($album);
}

function printVideo(video){
    const $video = `<p>${video.trackName}</p>`;
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
    const $title=`<h3>${title}</h3><hr>`;
    $(nodeQuery).append($title);
}

export {printObjects};