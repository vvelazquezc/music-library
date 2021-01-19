import { search, getCountries } from './service/entryAPI.js';
import { searchListeners, songsListener } from './listeners/listeners.js'


$(document).ready(function(){
    getCountries();
    searchListeners();
    songsListener();
    
})