import { API_BASE_URL } from './config.js'
import { printObjects } from '../renders/render.js'

function getById(param) {
    return $.ajax(`${API_BASE_URL}/lookup?id=${param}`,{
        dataType: 'jsonp',
        mode:'cors',
        crossDomain: true,
        success: function (data,status,xhr) {
            console.log(data);
        },
        error: function (jqXhr, textStatus, errorMessage) {
        }
    })
}

function search(entity, param, limit, explicit, country) {
    let url = `${API_BASE_URL}/search?entity=${entity}&term=${param}&explicit=${explicit}&limit=${limit}`;
    if (country != null) {
        url+=`&country=${country}`;
    }
    return $.ajax(url,{
        dataType: 'jsonp',
        mode:'cors',
        crossDomain: true,
        success: function (data,status,xhr) {
            printObjects(entity, data.results);
        },
        error: function (jqXhr, textStatus, errorMessage) {
            console.warn(errorMessage)
        }
    });
}

export { getById, search }