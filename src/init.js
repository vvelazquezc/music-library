import { search, getCountries } from './service/entryAPI.js';
import { searchListeners, songsListener } from './listeners/listeners.js'
import { getFavoritesFromLocalStorage } from './service/favorites.js'

$(document).ready(function(){
    getCountries();
    getFavoritesFromLocalStorage();
    searchListeners();
    songsListener();
})