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
    const $song = `<p>${song.trackName}</p>`;
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