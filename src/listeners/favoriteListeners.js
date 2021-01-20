import { playSongMain, pauseSongMain, changePlayButton } from "./music.js";
import { addToFavorites, removeFromFavorites } from '../service/favorites.js'
import { openSongModal, openArtistModal, openAlbumModal, openVideoModal } from './openModals.js';
import { getFavorites } from '../service/favorites.js'

let favorites= getFavorites();

function favoriteListener(){
    $('#favorites').on('click', function(event){
        let target=event.target;
        favorites= getFavorites();
        if ($(target).hasClass("fa-play")) {
            changePlayButton(false, target);
            playSongMain(target);
        }else if ($(target).hasClass("fa-pause")){
            changePlayButton(true, target);
        pauseSongMain();
        }else if($(target).hasClass("fav-button")){
          addRemoveFromFavorites(target)
        } else if ($(target).hasClass("title-song")) {
          const value = $(target).val();
          openSongModal(value, favorites);
          
        }

    })
}

export { favoriteListener };