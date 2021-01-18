import { API_BASE_URL } from './config.js'

function getById(param) {
    return $.ajax(`${API_BASE_URL}/lookup?id=${param}`,{
        dataType: 'json',
        success: function (data,status,xhr) {
            console.log(data);
        },
        error: function (jqXhr, textStatus, errorMessage) {
        }
    })
}

function search(entity, param, limit, explicit = 'Yes', country = null) {
    let url = `${API_BASE_URL}/search?entity=${entity}&term=${param}&explicit=${explicit}&limit=${limit}`;
    if (country != null) {
        url+=`&country=${country}`;
    }
    return $.ajax(url,{
        dataType: 'json',
        success: function (data,status,xhr) {
            console.log(data);
        },
        error: function (jqXhr, textStatus, errorMessage) {
            console.warn(errorMessage)
        }
    });
}

function artistPicture(artistUrl) {
    return $.ajax(artistUrl,{
        dataType: 'json',
        success: function (data,status,xhr) {
            const html = data;
            const ogImage = html.match(/<meta property=\"og:image\" content=\"(.*png)\"/)[1];
            console.log(ogImage.replace(/[\d]+x[\d]+/, '{w}x{h}'));
        },
        error: function (jqXhr, textStatus, errorMessage) {
            console.warn(errorMessage)
        }
    });
}

export { getById, search, artistPicture }