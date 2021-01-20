import { playSongMain, pauseSongMain, changePlayButton } from "./music.js";
import { addToFavorites, removeFromFavorites } from "../service/favorites.js";
import {
  openSongModal,
  openArtistModal,
  openAlbumModal,
  openVideoModal,
} from "./openModals.js";
import { getFavorites } from "../service/favorites.js";
import { addRemoveFromFavorites } from "./listeners.js";
import { getById } from "../service/entryAPI.js";

let favorites = getFavorites();

function favoriteListener() {
  $("#favorites").on("click", function (event) {
    let target = event.target;
    favorites = getFavorites();
    if ($(target).hasClass("fa-play")) {
      changePlayButton(false, target);
      playSongMain(target);
    } else if ($(target).hasClass("fa-pause")) {
      changePlayButton(true, target);
      pauseSongMain();
    } else if ($(target).hasClass("fav-button")) {
      addRemoveFromFavorites(target, favorites);
      if ($(target).data("type") == "musicArtist") {
        $(target).parent().fadeOut();
      } else {
        $(target).parent().parent().fadeOut();
      }
    } else if ($(target).hasClass("title-song")) {
      const value = $(target).val();
      openSongModal(value, favorites);
    } else if ($(target).hasClass("title-song")) {
      const value = $(target).val();
      getById(value);
    } else if ($(event.target).parent().hasClass("album")) {
      const value = $(event.target).parent().val();
      openAlbumModal(value, favorites);
    } else if ($(event.target).hasClass("album")) {
      const value = $(event.target).val();
      openAlbumModal(value, favorites);
    } else if ($(event.target).parent().hasClass("artist")) {
      const value = $(event.target).parent().val();
      openArtistModal(value, favorites);
    } else if ($(event.target).hasClass("artist")) {
      const value = $(event.target).val();
      openArtistModal(value, favorites);
    } else if ($(event.target).parent().hasClass("video")) {
      const value = $(event.target).parent().val();
      openVideoModal(value, favorites);
    } else if ($(event.target).hasClass("video")) {
      const value = $(event.target).val();
      openVideoModal(value, favorites);
    }
  });
}

function removeFavoriteListener() {
  $("#favorites").off("click", function (event) {
    let target = event.target;
    favorites = getFavorites();
    if ($(target).hasClass("fa-play")) {
      changePlayButton(false, target);
      playSongMain(target);
    } else if ($(target).hasClass("fa-pause")) {
      changePlayButton(true, target);
      pauseSongMain();
    } else if ($(target).hasClass("fav-button")) {
      addRemoveFromFavorites(target, favorites);
      if ($(target).data("type") == "musicArtist") {
        $(target).parent().fadeOut();
      } else {
        $(target).parent().parent().fadeOut();
      }
    } else if ($(target).hasClass("title-song")) {
      const value = $(target).val();
      openSongModal(value, favorites);
    } else if ($(target).hasClass("title-song")) {
      const value = $(target).val();
      getById(value);
    } else if ($(event.target).parent().hasClass("album")) {
      const value = $(event.target).parent().val();
      openAlbumModal(value, favorites);
    } else if ($(event.target).hasClass("album")) {
      const value = $(event.target).val();
      openAlbumModal(value, favorites);
    } else if ($(event.target).parent().hasClass("artist")) {
      const value = $(event.target).parent().val();
      openArtistModal(value, favorites);
    } else if ($(event.target).hasClass("artist")) {
      const value = $(event.target).val();
      openArtistModal(value, favorites);
    } else if ($(event.target).parent().hasClass("video")) {
      const value = $(event.target).parent().val();
      openVideoModal(value, favorites);
    } else if ($(event.target).hasClass("video")) {
      const value = $(event.target).val();
      openVideoModal(value, favorites);
    }
  });
}

export { favoriteListener, removeFavoriteListener };
