export const videoModal = {
    name: 'videoModal',
    template: (video) => 
        `
        <div class="modal-item">
            <button class="far fa-times-circle button__close">
            </button>
            <div class="modal-artist">
            <div class="modal-cover" style="background: url('${video.artworkUrl100}') no-repeat; background-size: cover; background-position: center;">
                <button value='${video.previewUrl}' id="play" class="fas fa-play"></button>
            </div>
                <div class="modal-info">
                    <h3 class="modal-song model-title1">${video.trackName}</h3>
                    <span class="model-price">${video.collectionPrice}$</span>
                </div>
                <h4 class="modal-artist">${video.artistName}</h4>
                <p class="text modal-text modal-genre">${video.primaryGenreName}</p>
                <p class="text modal-text modal-date">${new Date(video.releaseDate).getFullYear()}</p>
                <p class="modal-link"><a href="${video.trackViewUrl}" class="modal-link">Link in Itunes</a></p>
            </div>
        </div>
    `,
    render: function ($container, video) {

        console.log(video);
        const html = this.template(video)
        const $modal = $(html)

        const $closeModal = $modal.find('.button__close')
        const $closeBackground = $modal.find('.modal-item-background')

        $closeModal.on('click', () => {
            $modal.remove()
        })
        $closeBackground.on('click', () => {
            $modal.remove()
        })

        $container.append($modal)
    }
}