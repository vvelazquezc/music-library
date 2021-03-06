import { getFavorites } from '../service/favorites.js'

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
    let favorites=getFavorites();
    let starType='far';
    if(favorites.musicTrack[song.trackId]!=null){
        starType='fas';
    }
    const $song = ` <article class="song" style="background: url('${song.artworkUrl100}')no-repeat; background-size: cover; background-position: center;" >
    <div class="background grid-song">
        <div class="item-cover">
            <button id="${song.trackId}" value="${song.previewUrl}" class="fas fa-play clickable"></button>
        </div>
        <div class="item-info">
            <button value="${index}" class="title-song clickable">${song.trackName}</button>
            <button class="title-artist" data-index="${index}">${song.artistName}</button>
        </div>
        <button data-index="${index}" data-type="musicTrack" class="${starType} fa-star fav-button clickable"></button>
        
    </div>
    
</article>`;
    $('#songsList').append($song);
}

function printArtist(artist, index){
    let favorites=getFavorites();
    let starType='far';
    if(favorites.musicArtist[artist.artistId]!=null){
        starType='fas';
    }
    const $artist = ` <button class="artist title-artist clickable" value="${index}">
         <h3>${artist.artistName}</h3>
        <p class="text">${artist.primaryGenreName}</p>
        <a data-type="musicArtist" data-index="${index}" class=" ${starType} fa-star fav-button clickable"></a>
    </button>`;
    $('#artistsLists').append($artist);
}

function printAlbum(album, index){
    let favorites=getFavorites();
    let starType='far';
    if(favorites.album[album.collectionId]!=null){
        starType='fas';
    }
    const $album = ` <button value="${index}" class="album clickable" style="background: url('${album.artworkUrl100}')no-repeat; background-size: cover; background-position: center;">
    <div class="background">
        <h3>${album.collectionName}</h3>
        <p class="text">${album.artistName}</p>
        <a data-type="album" data-index="${index}" class="${starType} fa-star fav-button clickable"></a>
   <div>
</button>`;
    $('#albumList').append($album);
}

function printVideo(video, index){
    let favorites=getFavorites();
    let starType='far';
    if(favorites.musicVideo[video.trackId]!=null){
        starType='fas';
    }
    const $video = `<button value="${index}" class="video clickable" style="background: url('${video.artworkUrl100}')no-repeat; background-size: cover; background-position: center;">
    <div class="background">
        <h3 class="title-video">${video.trackName}</h3>
        <p class="text">${video.artistName}</p>
        <a data-type="musicVideo" data-index="${index}" class="${starType} fa-star fav-button clickable"></a>
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
    const $contry=`<option value="${code}" class='clickable'>${name}</option>`;
    $('#countries').append($contry);
}

function printCountries(data){
    $(data).each(index=>{
        printCountry(data[index].nameCurrentValue, data[index].a2);
    });
    $('#countries').val('ES');
}

export {printObjects, printCountries};