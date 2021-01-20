import { getById } from '../service/entryAPI.js'

export const songModal = {
    name: 'songModal',
    template: (song) => 
        `
        <div class="modal-item">
            <button class="far fa-times-circle button__close">
            </button>
            <div class="modal-song">
                <div class="modal-cover" style="background: url('${song.artworkUrl100}') no-repeat; background-size: cover; background-position: center;">
                    <button value='${song.previewUrl}' id="play" class="fas fa-play"></button>
                </div>
                <div class="modal-info">
                    <h3 class="modal-song modal-title1">${song.trackName}</h3>
                    <span class="modal-price">${song.trackPrice}$</span>
                </div>
                <h4 class="modal-artist" data-index="${song.artistId}">${song.artistName}</h4>
                <p class="text modal-album modal-text">${song.collectionName} - <span class="modal-date">${new Date(song.releaseDate).getFullYear()}</span></p>
                <p class="modal-link"><a href="${song.trackViewUrl}" class="modal-link">Link in Itunes</a></p>
            </div>
        </div>
        <div class="modal-item-background"></div>
    `,
    render: function ($container, song) {
        const html = this.template(song)
        const $modal = $(html)

        const $closeModal = $modal.find('.button__close')
        const $closeBackground = $modal.find('.modal-item-background')
        const $artistModal = $modal.find('.modal-artist')

        $closeModal.on('click', () => {
            $modal.remove()
        })
        $closeBackground.on('click', () => {
            $modal.remove()
        })

        $artistModal.on('click', (e) => {
            const idArtist = $(e.target).data('index')
            getById(idArtist)
            $modal.remove()
        })

        $container.append($modal)
    }
}