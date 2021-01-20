import { search, currentObjects } from "../service/entryAPI.js";
import { songModal } from '../renders/modalSong.js'
import { artistModal } from '../renders/modalArtist.js'

let entity = "all";
let limit = 6;
let term = "";
let explicit = "yes";
let country = "ES";
let count = 0;
let actualSongId=null;
let myAudio=null;

const $container = $('.wrapper-main')

function searchListeners() {
  $("#searchType").on("change", function (event) {
    entity = $(this).val();
    searchIfInput();
  });

  $("#search").on("change", function () {
    term = $(this).val();
    searchIfInput();
  });

  $("#explicit").on("click", function () {
    if (explicit === "yes") {
      explicit = "no";
    } else {
      explicit = "yes";
    }
    console.log(explicit);
    searchIfInput();
  });

  $("#limit").on("change", function () {
    limit = $(this).val();
    searchIfInput();
  });
  $("#countries").on("change", function () {
    country = $(this).val();
    console.log(country);
    searchIfInput();
  });
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
        myAudio.pause();
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

function playSongMain(target){
    if(myAudio!=new Audio(target.value)){
        if(myAudio!=null){
            myAudio.pause();
        }
        myAudio = new Audio(target.value);
        $(myAudio).on('ended', function() {
            changePlayButton(true, target);
         });
    }
    actualSongId=target.id;
    myAudio.play();
}

function changePlayButton(isPlaying, target){
    if(isPlaying){
        $(target).addClass("fa-play");
        $(target).removeClass("fa-pause");
    }else{
        $(target).removeClass("fa-play");
        $(target).addClass("fa-pause");
        if(actualSongId!=null && actualSongId!=target.id){
            $(`#${actualSongId}`).addClass("fa-play");
            
        }
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

export {searchListeners, songsListener, openSongModal, artistListener };