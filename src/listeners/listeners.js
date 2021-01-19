import { search } from "../service/entryAPI.js";

let entity = "all";
let limit = 6;
let term = "";
let explicit = "yes";
let country = "ES";
let count = 0;
let myAudio;

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

function songsListener() {
  $("#songsList").on("click", function (event) {
    if ($(event.target).hasClass("fa-play")) {
        $(event.target).removeClass("fa-play");
        $(event.target).addClass("fa-pause");
        if(myAudio!=new Audio(event.target.value)){
            myAudio = new Audio(event.target.value);
        }
        
        myAudio.play();
    }else{
        $(event.target).addClass("fa-play");
        $(event.target).removeClass("fa-pause");
        myAudio.pause();
    }
  });
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

export {searchListeners, songsListener};