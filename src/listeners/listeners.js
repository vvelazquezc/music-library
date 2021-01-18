import { search } from "../service/entryAPI.js";

let entity = 'all';
let limit = 5;
let term='';
let explicit = 'yes';
let country = null;

export function searchListeners(){
    $('#searchType').on('change', function(event){
        entity = $(this).val();
        searchIfInput();
    });

    $('#search').on('input', function(){
        term = $(this).val();
        searchIfInput();
    });

    $('#explicit').on('click', function(){
        if(explicit==='yes'){
            explicit='no';
        }else{
            explicit='yes';
        }
        console.log(explicit);
        searchIfInput();
    });

    $('#limit').on('change', function(){
        limit = $(this).val();
        searchIfInput();
    });
}

function searchIfInput(){
    if(term!=''){
        showHideLists(entity);
        if(entity==='all'){
            search('musicTrack', term, '5', explicit, country);
            search('musicArtist', term, '5', explicit, country);
            search('album', term, '5', explicit, country);
            search('musicVideo', term, '5', explicit, country);
        }else{
            search(entity, term, limit, explicit, country);
        }
        
    }
}
function showHideLists(type){
    switch(type){
        case 'musicTrack':
            hideAllLists();
            showList('#songsList')
            break;
        case 'musicArtist':
            hideAllLists();
            showList('#artistsLists')
            break;
        case 'album':
            hideAllLists();
            showList('#albumList')
            break;
        case 'musicVideo':
            hideAllLists();
            showList('#videoList')
            break;
        case 'all':
            showAllLists()
            break;
        default:
            break;
    }
}

function hideAllLists(){
    hideList('#songsList');
    hideList('#artistsLists');
    hideList('#albumList');
    hideList('#videoList');
}

function hideList(querySelector){
    $(querySelector).hide();
}

function showList(querySelector){
    $(querySelector).show();
}

function showAllLists(){
    showList('#songsList');
    showList('#artistsLists');
    showList('#albumList');
    showList('#videoList');
}
