import { search, getCountries } from './service/entryAPI.js';
import { searchListeners, songsListener, artistListener, albumListener, videoListener } from './listeners/listeners.js'
import { getFavoritesFromLocalStorage } from './service/favorites.js'

$(document).ready(function(){
    getCountries();
    getFavoritesFromLocalStorage();
    searchListeners();
    songsListener();
    artistListener();
    albumListener();
    videoListener();
})