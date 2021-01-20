import { search } from "../service/entryAPI.js";
import { playSongMain, pauseSongMain, changePlayButton } from "./music.js";
import { addToFavorites, removeFromFavorites } from '../service/favorites.js'

let entity = "all";
let limit = 6;
let term = "";
let explicit = "yes";
let country = "ES";


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
}

function songsListener() {
  $("#songsList").on("click", function (event) {
    if ($(event.target).hasClass("fa-play")) {
        changePlayButton(false, event.target);
        playSongMain(event.target);
    }else if ($(event.target).hasClass("fa-pause")){
        changePlayButton(true, event.target);
        pauseSongMain();
    }else if($(event.target).hasClass("fav-button")){
      addRemoveFromFavorites(event.target)

    }else if($(event.target).hasClass("title-song")){
      console.log("hola");
    }
  });
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
  if($(target).hasClass('far')){
    changeFavButton(true, target);
    addToFavorites($(target).data('type'), {}, '12345');
  }else{
    changeFavButton(false, target);
    removeFromFavorites($(target).data('type'), '12345');
  }
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

export {searchListeners, songsListener };