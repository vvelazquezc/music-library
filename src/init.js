import { search, artistPicture } from './service/entryAPI.js';


$(document).ready(function(){
    search('musicArtist', 'hola', 20);
    artistPicture('https://music.apple.com/us/artist/280101431');
    
})