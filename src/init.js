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

$('#search').on('focus', function(){
    $(this).parent().css('border', '#52cffe 1px solid');
});
$('#search').on('focusout', function(){
    $(this).parent().css('border', 'var(--background-active) 1px solid');
});