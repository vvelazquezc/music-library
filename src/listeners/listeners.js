import { search, currentObjects } from "../service/entryAPI.js";
import { playSongMain, pauseSongMain, changePlayButton } from "./music.js";
import { addToFavorites, removeFromFavorites } from '../service/favorites.js'
import { songModal } from '../renders/modalSong.js'
import { artistModal } from '../renders/modalArtist.js'

let entity = "all";
let limit = 6;
let term = "";
let explicit = "yes";
let country = "ES";


const $container = $('.wrapper-main')

function searchListeners() {
  $("#searchType").on("change", function (event) {
    entity = $(this).val();
    pauseSongMain();
    searchIfInput();
  });

  $("#search").on("change", function () {
    term = $(this).val();
    pauseSongMain();
    searchIfInput();
  });

  $("#explicit").on("click", function () {
    if (explicit === "yes") {
      explicit = "no";
    } else {
      explicit = "yes";
    }
    pauseSongMain();
    searchIfInput();
  });

  $("#limit").on("change", function () {
    limit = $(this).val();
    searchIfInput();
  });
  $("#countries").on("change", function () {
    country = $(this).val();
    pauseSongMain();
    searchIfInput();
  });

  $("#favListButton").on("click", function () {
    showFavorites();
  });
  
}

function showFavorites(){
  $('#favorites').removeClass('hide');
  $('#closeFavoritesButon').on('click', hideFavorites);
}

function hideFavorites(){
  $('#favorites').addClass('hide');
  $('#closeFavoritesButon').off('click', hideFavorites);
}

function openSongModal(value) {
  const song = currentObjects.musicTrack[value]
  songModal.render($container, song)
}
function openArtistModal(value) {
  const song = currentObjects.musicTrack[value]
  artistModal.render($container, song)
}

function songsListener($container) {
  $("#songsList").on("click", function (event) {
    if ($(event.target).hasClass("fa-play")) {
        changePlayButton(false, event.target);
        playSongMain(event.target);
    }else if ($(event.target).hasClass("fa-pause")){
        changePlayButton(true, event.target);
    pauseSongMain();
    }else if($(event.target).hasClass("fav-button")){
      addRemoveFromFavorites(event.target)
    } else if ($(event.target).hasClass("title-song")) {
      const value = $(event.target).val()
      openSongModal(value)
    }
  });
}

function artistListener($container) {
  console.log('epa!');
  // $("#artistsLists").on("click", function (event) {
  //   if ($(event.target).hasClass("title-artist")) {
  //     const value = $(event.target).val()
  //     openSongModal(value)
  //   }
  // });
}

function changeFavButton(isFavorite, target){
  if(isFavorite){
    $(target).addClass('fas');
    $(target).removeClass('far');
  }else{
    $(target).addClass('far');
    $(target).removeClass('fas');
  }
}
function addRemoveFromFavorites(target){
  let type = $(target).data('type');
  let id=getId(target);

  if($(target).hasClass('far')){
    let position=$(target).val();
    changeFavButton(true, target);
    addToFavorites( type , currentObjects[type][position] , id);
  }else{
    changeFavButton(false, target);
    removeFromFavorites( type , id);
  }
}

function getId(target){
  let type = $(target).data('type');
  let position=$(target).val();
  let id;
  switch(type){
    case 'musicTrack':
      id=currentObjects[type][position].trackId;
      break;
    case 'musicArtist':
      id=currentObjects[type][position].artistId;
      break;
    case 'album':
      id=currentObjects[type][position].collectionId;
      break;
    case 'musicVideo':
      id=currentObjects[type][position].trackId;
      break;
    default:
      id=0;
      break
  }
  return id;
}


function searchIfInput() {
  if (term != "") {
    showHideLists(entity);
    if (entity === "all") {
      search("musicTrack", term, "6", explicit, country);
      search("musicArtist", term, "6", explicit, country);
      search("album", term, "6", explicit, country);
      search("musicVideo", term, "6", explicit, country);
    } else {
      search(entity, term, limit, explicit, country);
    }
  }
}

function showHideLists(type) {
  switch (type) {
    case "musicTrack":
      hideAllLists();
      showList("#songsList");
      break;
    case "musicArtist":
      hideAllLists();
      showList("#artistsLists");
      break;
    case "album":
      hideAllLists();
      showList("#albumList");
      break;
    case "musicVideo":
      hideAllLists();
      showList("#videoList");
      break;
    case "all":
      showAllLists();
      break;
    default:
      break;
  }
}

function hideAllLists() {
  hideList("#songsList");
  hideList("#artistsLists");
  hideList("#albumList");
  hideList("#videoList");
}

function hideList(querySelector) {
  $(querySelector).hide();
}

function showList(querySelector) {
  $(querySelector).show();
}

function showAllLists() {
  showList("#songsList");
  showList("#artistsLists");
  showList("#albumList");
  showList("#videoList");
}

export {searchListeners, songsListener, openSongModal, artistListener };
