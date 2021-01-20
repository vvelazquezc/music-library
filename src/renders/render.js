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

function printSong(song, index){
    //const time=(song.trackTimeMillis-(song.trackTimeMillis%60000))/60000+':'+(song.trackTimeMillis-(song.trackTimeMillis%1000))/1000%60;
    const $song = ` <article class="song" style="background: url('${song.artworkUrl100}')no-repeat; background-size: cover;" >
    <div class="background grid-song">
        <div class="item-cover">
            <button id="${song.trackId}" value="${song.previewUrl}" class="fas fa-play"></button>
        </div>
        <div class="item-info">
            <button class="title-song" value="${index}">${song.trackName}</button>
            <button><p class="text">${song.artistName}</p></button>
        </div>
        <button class="fas fa-star fav-button "></button>
    </div>
    
</article>`;
    $('#songsList').append($song);
}

function printArtist(artist, index){
    const $artist = ` <button class="artist" value="${index}">
         <h3>${artist.artistName}</h3>
        <p class="text">${artist.primaryGenreName}</p>
        <button class="fas fa-star fav-button "></button>
    </button>`;
    $('#artistsLists').append($artist);
}

function printAlbum(album, index){
    const $album = ` <button value="${index}" class="album" style="background: url('${album.artworkUrl100}')no-repeat; background-size: cover;">
    <div class="background">
        <h3>${album.collectionName}</h3>
        <p class="text">${album.artistName}</p>
        <a class="fas fa-star fav-button "></a>
   <div>
</button>`;
    $('#albumList').append($album);
}

function printVideo(video, index){
    const $video = `<button value="${index}" class="video" style="background: url('${video.artworkUrl100}')no-repeat; background-size: cover;">
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
        printFunction(data[index], index);
    });
}

function printTitle(title, nodeQuery){
    const $title=`<div class="wrapper-main-list-title"><h3>${title}</h3><hr></div>`;
    $(nodeQuery).append($title);
}

function printCountry(name, code){
    const $contry=`<option value="${code}">${name}</option>`;
    $('#countries').append($contry);
}

function printCountries(data){
    $(data).each(index=>{
        printCountry(data[index].nameCurrentValue, data[index].a2);
    });

    $('#countries').val('ES');
}

export {printObjects, printCountries};