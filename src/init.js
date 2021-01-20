import { search, getCountries } from './service/entryAPI.js';
import { searchListeners, songsListener, artistListener, albumListener, videoListener } from './listeners/listeners.js'


$(document).ready(function(){
    getCountries();
    searchListeners();
    songsListener();
    artistListener();
    albumListener();
    videoListener();
})