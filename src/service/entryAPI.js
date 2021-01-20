import { API_BASE_URL } from './config.js'
import { printObjects, printCountries } from '../renders/render.js'
import { openArtistModal } from '../listeners/openModals.js';

let currentObjects = {
    musicTrack:[],
    musicArtist:[],
    album:[],
    musicVideo: []
}

function getById(param) {
    return $.ajax(`${API_BASE_URL}/lookup?id=${param}`,{
        dataType: 'jsonp',
        mode:'cors',
        crossDomain: true,
        success: function (data,status,xhr) {
            console.log(data.results);
            const objetOrigin = {
                musicArtist: data.results
            }
            openArtistModal(0, objetOrigin)
        },
        error: function (jqXhr, textStatus, errorMessage) {
        }
    })
}

function search(entity, param, limit, explicit, country) {
    let url = `${API_BASE_URL}/search?entity=${entity}&term=${param}&country=${country}&explicit=${explicit}&limit=${limit}`;
    console.log(url)
    return $.ajax(url,{
        dataType: 'jsonp',
        mode:'cors',
        crossDomain: true,
        success: function (data,status,xhr) {
            printObjects(entity, data.results);
            currentObjects[entity] = data.results;
        },
        error: function (jqXhr, textStatus, errorMessage) {
            console.warn(errorMessage)
            console.log(url)
        }
    });
}

function getCountries(){
    $.ajax(' https://www.liferay.com/api/jsonws/country/get-countries/',{
        mode:'cors',
        crossDomain: true,
        success: function (data,status,xhr) {
            printCountries(data);
        },
        error: function (jqXhr, textStatus, errorMessage) {
            console.log(textStatus);
        }
    })
}

export { getById, search, getCountries, currentObjects }