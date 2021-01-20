let favorites={
    musicTrack:{},
    musicArtis:{},
    album:{},
    musicVideo: {}
};

function getFavoritesFromLocalStorage(){
    let favoritesJson=localStorage.getItem('favorites');
    if(favoritesJson!=null){
        favorites=JSON.parse(favoritesJson);
    }
}

function saveFavoritesToLocalStorage(){
    let favoritesJson=JSON.stringify(favorites);
    localStorage.setItem('favorites', favoritesJson)
}

function addToFavorites(type, object, id){
    favorites[type][id]=object;
    saveFavoritesToLocalStorage();
    console.log(favorites);
}

function removeFromFavorites(type, id){
    delete favorites[type][id];
    saveFavoritesToLocalStorage();
    console.log(favorites);
}

function getFavorites(){
    return favorites;
}

export { getFavoritesFromLocalStorage, addToFavorites, removeFromFavorites, getFavorites };