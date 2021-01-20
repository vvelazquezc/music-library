export const artistModal = {
    name: 'artistModal',
    template: (artist) => 
    `
        <div class="modal-item-artist">
            <button class="far fa-times-circle button__close">
            </button>
            <div class="modal-artist">
                <div class="modal-artist-cover">
                    <button value='${artist.previewUrl}' id="play" class="fas fa-play"></button>
                </div>
                <div class="modal-artist-info">
                    <h3 class="modal-artist"${artist.trackName}</h3>
                    <span>${artist.trackPrice}$</span>
                </div>
                <p class="text modal-artist">${artist.artistName}</p>
                <p class="text modal-album">${artist.collectionName} <span>${new Date(artist.releaseDate)}</span></p>
                <a href="${artist.trackViewUrl}" class="modal-link">Link in Itunes</a>
            </div>
        </div>
        <div class="modal-item-background"></div>
    `,
    render: function ($container, artist) {
        const html = this.template(artist)
        const $modal = $(html)
        console.log('llego hasta aqui');

        const $closeModal = $modal.find('.button__close')
        const $closeBackground = $modal.find('.modal-item-background')
        const $artistModal = $modal.find('.modal-artist')
        const $albumModal = $modal.find('.modal-album')
        const $linkModal = $modal.find('.modal-link')

        $closeModal.on('click', () => {
            $modal.remove()
        })
        $closeBackground.on('click', () => {
            $modal.remove()
        })

        $container.append($modal)
    }
}