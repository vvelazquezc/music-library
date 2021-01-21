import { getById } from '../service/entryAPI.js'

export const videoModal = {
    name: 'videoModal',
    template: (video) => 
        `
        <div class="modal-item">
            <button class="far fa-times-circle button__close">
            </button>
            <div class="modal-artist">
            <video width="400" poster="${video.artworkUrl100}" controls>
                <source src="${video.previewUrl}" type="video/mp4">
                Your browser does not support HTML video.
            </video>
            <div class="modal-info">
                <h3 class="modal-song model-title1">${video.trackName}</h3>
                <span class="model-price">${video.collectionPrice}$</span>
            </div>
            <h4 class="video-artist" data-index="${video.artistId}">${video.artistName}</h4>
            <p class="text modal-text modal-genre">${video.primaryGenreName}</p>
            <p class="text modal-text modal-date">${new Date(video.releaseDate).getFullYear()}</p>
            <p class="modal-link"><a href="${video.trackViewUrl}" class="modal-link">Link in Itunes</a></p>
            </div>
        </div>
    `,
    render: function ($container, video) {
        const html = this.template(video)
        const $modal = $(html)

        const $closeModal = $modal.find('.button__close')
        const $closeBackground = $modal.find('.modal-item-background')
        const $videotModal = $modal.find('.video-artist')

        $closeModal.on('click', () => {
            $modal.remove()
        })
        $closeBackground.on('click', () => {
            $modal.remove()
        })
        $videotModal.on('click', (e) => {
            const idArtist = $(e.target).data('index')
            getById(idArtist)
            $modal.remove()
        })

        $container.append($modal)
    }
}